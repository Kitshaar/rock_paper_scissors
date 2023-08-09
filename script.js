/*TO create a rock paper scissors game against the computer.
  
  Get value from user.
  Create a function to generate random choices by the computers.
  Use the userChoice and computerChoice as parameters to run a rock paper scissor game 
  with a return value. 
  make a game function that keeps it in a loop until the user desires.
*/

// function to get user choice
function getUserValue() {
  return prompt("Choose Rock, Paper or Scissors: ", "Rock");
}

//function to generate a pseudorandom number generator (PRNG) from 0 to 2 (2 included).
function randomNumber() {
  return Math.round(Math.random() * 3);
}

//function to generate computer choices

function getComputerChoice(value) {
  if (value === 0) {
    return "Rock";
  } else if (value === 1) {
    return "Paper";
  } else {
    return "scissors";
  }
}
