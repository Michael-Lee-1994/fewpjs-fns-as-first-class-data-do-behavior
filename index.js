/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let temp = string.split(":")
  let hours = temp[0];
  if (hours < 12) {
    return "Good Morning";
  } else if (hours > 17) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }

}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let temp = document.querySelector("#greeting");
  temp.innerText = string
}