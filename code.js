var now = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(now);
var time = moment().format("hA");
console.log('Time is working', time);

let hoursIds = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
console.log(hoursIds, 'hourIds');

daySchedulerArray = [];
var getLocalStorageData = JSON.parse(localStorage.getItem("planner-items"));

// if (getLocalStorageData !== null) {
//     plannerContent = getLocalStorageData;
// }


function matchHours() {
    console.log("match hours", matchHours);

    hoursIds.forEach((hour) => {
        console.log(hour);
        //console.log(hour);
        let hourEl = document.getElementById(hour);
        // console.log("idEL", hourEl);
        // buttonEl = id.parent().parent().find("button");
        if (hour < time) {
            hourEl.classList.add('past');
            console.log("past");
        } else if (hour === time) {
            hourEl.classList.add('present');
            console.log("present");
        } else {
            hourEl.classList.add('future');
            console.log("future");
        }

    });
    // let setLocalStorage = localStorage.setItem(JSON.stringify(id));

};

matchHours();


$("button").on("click", function () {
    console.log("buttons clicked");
    localStorage.setItem(JSON.stringify('schedule-event'));
    event.preventDefault();
    var container = $(this).parent().parent();
    var inputValue = container.find("input").val();
    var inputId = container.find("input").attr("id");
    var textObj = {
        "input-id": inputId,
        "input-value": inputValue
    };

    if (textObj["input-value"] !== "") {
        plannerContent.push(textObj);
        localStorage.setItem("planner-items", JSON.stringify(plannerContent));
    }
});




