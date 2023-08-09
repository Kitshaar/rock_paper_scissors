/*TO create a rock paper scissors game against the computer.
  
  Get value from user.
  Create a function to generate random choices by the computers.
  Use the userChoice and computerChoice as parameters to run a rock paper scissor game 
  with a return value. 
  make a game function that keeps it in a loop until the user desires.
*/

// function to get user choice
function getUserValue() {
  let value = prompt("Choose Rock, Paper or Scissors: ", "Rock");
  value = value.toLocaleLowerCase();
  return value;
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
    return "Scissors";
  }
}

//function playround that plays a round between computer and user.

function playRound(playerSelection, computerSelection) {
  if (
    (computerSelection === "Rock" && playerSelection === "paper") ||
    (computerSelection === "Paper" && playerSelection === "scissors") ||
    (computerSelection === "Scissors" && playerSelection === "rock")
  ) {
    return true;
  } else if (
    (computerSelection === "Rock" && playerSelection === "rock") ||
    (computerSelection === "Paper" && playerSelection === "paper") ||
    (computerSelection === "Scissors" && playerSelection === "scissors")
  ) {
    return "It is a Draw.";
  } else if (
    (computerSelection === "Paper" && playerSelection === "rock") ||
    (computerSelection === "Scissors" && playerSelection === "paper") ||
    (computerSelection === "Rock" && playerSelection === "scissors")
  ) {
    return false;
  } else {
    return "Invalid input!";
  }
}

//Function that uses loop to run play round fuction up to 5 times
//It also keeps in check whether you won more times than the computer or not
//and gives final verdict.
function game() {
  let playerCounter = 0;
  let computerCounter = 0;
  for (index = 0; index < 5; ++index) {
    const playerSelection = getUserValue();
    const computerSelection = getComputerChoice(randomNumber());
    let checker = playRound(playerSelection, computerSelection);

    if (checker === true) {
      console.log(
        "You win! " + playerSelection + " beats " + computerSelection
      );
      ++playerCounter;
    } else if (checker === false) {
      console.log(
        "You lose! " + computerSelection + " beats " + playerSelection
      );
      ++computerCounter;
    } else {
      console.log(checker);
    }
  }
  playerCounter > computerCounter
    ? console.log("\n\n\nYou won the game!")
    : console.log("\n\n\nYou lost the game");
}

game();
