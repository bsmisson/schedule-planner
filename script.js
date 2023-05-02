//add date and time stamp to page
var datetime = new Date();
console.log(datetime);
document.getElementById("currentDay").textContent = datetime;

var currentHour = new Date().getHours();
console.log(currentHour);


//run through time blocks to color code
$(".time-block").each(function () {
  let hour = parseInt($(this).attr("id"));

  if (hour < currentHour) {
    $(this).addClass("past");
  } else if (hour === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

//wait for dom to be loaded
document.addEventListener("DOMContentLoaded", function () {
  const timeBlocks = document.querySelectorAll(".time-block");

  timeBlocks.forEach((timeBlock) => {
    const userInput = localStorage.getItem(timeBlock.id);
    if (userInput) {
      timeBlock.querySelector(".description").value = userInput;
    }
  });
});


//save to local storage and persist
const saveButtons = document.querySelectorAll(".saveBtn");

saveButtons.forEach((saveButton) => {
  saveButton.addEventListener("click", function () {
    const userInput = this.previousElementSibling.value;
    const timeBlockId = this.parentNode.id;
    localStorage.setItem(timeBlockId, userInput);
  });
});
