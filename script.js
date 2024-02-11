// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currentDay=$("#currentDay")
  var currentTime=dayjs().format("MMMM D, YYYY h:mm A")
   currentDay.text(currentTime)
   var currentHour=dayjs().hour()
   for(var i=9;i<18;i++){
   var parent=$("#hour-" +i) 
   var textarea=parent.children("textarea")
   if(currentHour===i){
    textarea.addClass("present")
   }
   if(currentHour>i){
    textarea.addClass("past")
   }
   if(currentHour<i){
    textarea.addClass("future")
   }
   }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
document.addEventListener('DOMContentLoaded', function () {
  // Function to display current date at the top
  function displayCurrentDate() {
    // Code to get and display the current date
  }

  // Function to generate time blocks
  function generateTimeBlocks() {
    // Code to dynamically generate time blocks from 9am to 5pm
  }

  // Function to color code time blocks based on past, present, or future
  function colorCodeTimeBlocks() {
    // Code to determine current time and apply appropriate styling
  }

  // Function to handle click on a time block
  function handleTimeBlockClick(event) {
    // Code to allow entering an event for the clicked time block
  }

  // Function to save event text to local storage
  function saveEventToLocalStorage(timeBlockId, eventText) {
    // Code to save event text to local storage
  }

  // Function to load events from local storage
  function loadEventsFromLocalStorage() {
    // Code to load events from local storage and display them in respective time blocks
  }

  // Display current date, generate time blocks, and load events on page load
  displayCurrentDate();
  generateTimeBlocks();
  loadEventsFromLocalStorage();

  // Attach click event listener to the time blocks
  // document.getElementById('timeBlocks').addEventListener('click', function (event) {
  //   if (event.target.classList.contains('timeBlock')) {
  //     handleTimeBlockClick(event);
  //   }
  // });
});