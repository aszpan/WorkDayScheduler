/* 
1.) Display current date using moment.js
2.) Add time blocks (HTML)
3.) Color code time blocks as past/present/future (if statement, add or remove class)
4.) When clicking in time block, can enter event 
5.) Once event is entered, should save to local storage
6.) Upon refresh, saved event persists
*/
// save reference to important DOM elements
var timeDisplayEl = $('#time-display');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format("MMMM Do, YYYY");
    timeDisplayEl.text(rightNow);
  }

  function hourTracker() {
    //get current hour number (military time)
    var currentHour = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)

        //adds css class "past" to style calender hours that are less than current hour
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        //adds present class to style the hour block currently happening
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        //adds the class future to all hours that have not occurred yet
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

$(".saveBtn").on("click", function () {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //set items in local storage.
    localStorage.setItem(time, text);
})
//load any saved data from LocalStorage - do this for each hour created.
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
hourTracker();
setInterval(displayTime, 10);