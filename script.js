/*TO create a rock paper scissors game against the computer.
  
  Get value from user.
  Create a function to generate random choices by the computers.
  Use the userChoice and computerChoice as parameters to run a rock paper scissor game 
  with a return value. 
  make a game function that keeps it in a loop until the user desires.
*/

function getUserValue() {
  return prompt("Choose Rock, Paper or Scissors: ", "Rock");
}

console.log(getUserValue());
