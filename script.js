$(function () {
  // Listener for click events on the save button

const saveButtons = document.querySelectorAll('.saveBtn');

saveButtons.forEach((button) => {
  button.addEventListener('click', function() {
    const timeBlock = this.closest('.time-block');
    const timeBlockId = timeBlock.id; 

    // use the time-block id as a key to save the user input in local storage
    const userInput = timeBlock.querySelector('.description').value;
    localStorage.setItem(timeBlockId, userInput);
  });
});

  // Apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 

  // Get current hour 
const currentHour = dayjs().hour();

const timeBlocks = document.querySelectorAll('.time-block');

// Loop through each time block
timeBlocks.forEach((timeBlock) => {
  console.log(currentHour)

  const timeBlockId = parseInt(timeBlock.id)
  

  // Compare the timeBlockId with the currentHour to determine past present or future i.e. color 
  if (timeBlockId < currentHour) {
    timeBlock.classList.add('past');
  } else if (timeBlockId == currentHour) {
    timeBlock.classList.add('present');
  } else {
    timeBlock.classList.add('future');
  }
});
  //
  // Code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
const textareaElements = document.querySelectorAll('.description');

// Loop through the textarea elements
textareaElements.forEach((textarea) => {
  const timeBlockId = textarea.closest('.time-block').id;
  const userInput = localStorage.getItem(timeBlockId);
  textarea.value = userInput;
});


 // Display the current date at the header of the page.


// Function to update the current date in the specified element
function CurrentDate() {
  // Get the current date
  const currentDate = new Date();

  // Formatting the date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  // Update the content to be the current date 
  const currentDateElement = document.getElementById('current-date');
  currentDateElement.textContent = formattedDate;
}
//Displays the current date
CurrentDate();

}
)
