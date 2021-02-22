// This is creating a variable for the current day and Month, updating automaticly every day and is shown at the top of the page 
var now = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(now);
// Creates a variable for the current time right now which is then used in fucntions below for the calendar hours
var time = moment().format("hA");
console.log('Time is working', time);

// Array of hours 
let hoursIds = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// Array used to store the values/events put in to the calendar, these are brought in from the local storage so that when the page is reset the values are still there 
var daySchedulerArray = [];
var SavedEventsData = JSON.parse(localStorage.getItem("schedule-event"));
// This makes sure that any event inputs/values that don't have any value are not sent to the array
if (SavedEventsData !== null) {
    daySchedulerArray = SavedEventsData;
}

// This function is matching current time with the hours from the scheduler in order to apply the past, present and future classes 
function matchHours() {
    hoursIds.forEach((hour) => {
        let hourEl = document.getElementById(hour);
        // setting the colors for the time blocks
        if (hour < time) {
            hourEl.classList.add('past');
            console.log("past");
        } else if (hour === time) {
            hourEl.classList.add('present');
            console.log("present");
        } else {
            console.log('hour is', hour);
            hourEl.classList.add('future', hour);
            console.log("future");
        }

        daySchedulerArray.forEach((item) => {
            // if the time matches the hour item in the object array then pair it with the event
            if (hour === ((item["itemHour"]))) {
                // this is setting the value of the input to be what was stored in local storage
                hourEl.value += item["event"];
            }
        });

    });

};
// Calls the function matchingHours to make sure the appropraite colors are set 
matchHours();

// Making the event go to local storage and be saved in an array on click of save button
$("button").on("click", function () {
    event.preventDefault();
    var row = $(this).parent();
    var scheduledEvent = row.find("input").val();
    var itemHour = row.find("input").attr("id");
    var Obj = {
        "itemHour": itemHour,
        "event": scheduledEvent
    };

    if (Obj["event"] !== "") {
        daySchedulerArray.push(Obj);
        localStorage.setItem("schedule-event", JSON.stringify(daySchedulerArray));
    }
});


