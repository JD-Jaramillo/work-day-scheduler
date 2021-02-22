// This is creating a variable for the current day and Month, updating automaticly every day and is shown at the top of the page 
var now = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(now);
// Creates a variable for the current time right now which is then used in fucntions below for the calendar hours
var time = parseInt(moment().hour());
console.log('Time is working', time);


//  This for loop, loops through the hours in the ID and adds the correct color attribute according to the curren time 
for (var i = 9; i < 18; i++) {
    var inpuEl = $('#hour' + i);
    if (i < time) {
        inpuEl.addClass('past');
    } else if (i === time) {
        inpuEl.addClass('present');
    } else {
        inpuEl.addClass('future');
    }

    // gets the values stored in local storage down in the button click function 
    var savedEventsData = localStorage.getItem('hour' + i);
    // If the saved events that were in local storage have any value then add the value into the textarea 
    if (savedEventsData) {
        inpuEl.val(savedEventsData);
    }
};

// Function for save button to set the event in local storage 
$(".saveBtn").on("click", function () {
    var row = $(this).val();
    var scheduledEvent = $('#hour' + row).val().trim();
    if (scheduledEvent !== '') {
        localStorage.setItem('hour' + row, scheduledEvent);
    }
});


