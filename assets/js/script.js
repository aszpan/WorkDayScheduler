/* 
1.) Display current date using moment.js
2.) Add time blocks (HTML)
3.) Color code time blocks as past/present/future (if statement, add or remove class)
4.) When clicking in time block, can enter event (textarea)
5.) Once event is entered, should save to local storage
6.) Upon refresh, saved event persists
*/

// variables
var timeDisplayEl = $("#time-display");
var savedEvents = JSON.parse(localStorage.getItem("savedUserEvents")) || []

var userEvent = document.querySelector(".description");
console.log('Saved events are', savedEvents);

// handle displaying the time
function displayTime() {
  var rightNow = moment().format("MMMM Do, YYYY");
  timeDisplayEl.text(rightNow);
}

function timeBlockTracker() {
  //get current hour number (military time) for our if statement
  var currentHour = moment().hour();

  //.time-block references the class used on each hours div
  // loop over time blocks class for each instance
  $(".time-block").each(function () {
    //refers to the block hour using div id, split, and parseint
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt 
    var scheduleHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(scheduleHour, currentHour);

    //adds css class "past" to style calender hours that are less than current hour
    if (scheduleHour < currentHour) {
      $(this).addClass("past");
    }
    //adds present class to style the hour block currently happening
    else if (scheduleHour === currentHour) {
      $(this).addClass("present");
    }
    //adds the class future to all hours that have not occurred yet
    else {
      $(this).addClass("future");
    }
  });
}

$(".saveBtn").on("click", function () {
  var time = $(this).parent().attr("id");
  var text = $(this).siblings(".description").val();

  //set items in local storage as key/value pair
  localStorage.setItem(time, JSON.stringify(text));
});

//load any saved data from LocalStorage - do this for each hour created.
//Is there a better way to do this?
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
$("#hour18 .description").val(localStorage.getItem("hour18"));
$("#hour19 .description").val(localStorage.getItem("hour19")); 

timeBlockTracker();
displayTime();
