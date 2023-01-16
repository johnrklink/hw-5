// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var time = dayjs().format('M/D/YYYY h:mm');
$('#currentTime').text(time)


$(function () {
    var saveBtn = document.getElementById("save-Btn");

    saveBtn.addEventListener("click", function() {
    var data = document.getElementById("save").value;
    localStorage.setItem("savedData", data);
    });
})
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
    // current hour in 24-hour time?// Get current hour
var currentHour = new Date().getHours();
var timeBlocks = document.getElementsByClassName("time-block");
console.log(timeBlockId)

for (var i = 0; i < timeBlocks.length; i++) {
  var timeBlock = timeBlocks[i];
  
  var timeBlockId = timeBlock.id;
  
  if (timeBlockId < currentHour) {
   
    timeBlock.classList.add("past");
  } else if (timeBlockId === currentHour) {
   
    timeBlock.classList.add("present");
  } else {
    
    timeBlock.classList.add("future");
  }
}

    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page. done
  