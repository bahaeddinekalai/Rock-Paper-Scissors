function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;
  let computerChoice = "Rock";
  switch (randomChoice) {
    case 1:
      return (computerChoice = "ROCK");
    case 2:
      return (computerChoice = "PAPER");

    case 3:
      return (computerChoice = "SCISSORS");

    default:
      return computerChoice;
  }
}
function getPlayerChoice() {
  let playerChoice = prompt("choose between Rock ,Paper and Scissors", "");
  playerChoice = playerChoice.toUpperCase();
  if (
    playerChoice == "ROCK" ||
    playerChoice == "SCISSORS" ||
    playerChoice == "PAPER"
  ) {
    return playerChoice;
  } else {
    getPlayerChoice();
  }
}

function playRound(playerChoice, computerSelection) {
  if (computerSelection == "SCISSORS") {
    switch (playerChoice) {
      case "ROCK":
        return "You Win! Rock beats Scissors";

      case "PAPER":
        return "You Lose! Scissors beats Paper ";

      case "SCISSORS":
        return "Tie";

      default:
        return "Tie";
    }
  } else if (computerSelection == "PAPER") {
    switch (playerChoice) {
      case "ROCK":
        return "You Lose! Paper beats Rock";

      case "PAPER":
        return "Tie";

      case "SCISSORS":
        return "You Win! Scissors beats Paper ";

      default:
        return "Tie";
    }
  } else {
    switch (playerChoice) {
      case "ROCK":
        return "Tie";

      case "PAPER":
        return "You Win! Paper beats Rock";

      case "SCISSORS":
        return "You Lose! Rock beats Scissors";

      default:
        return "Tie";
    }
  }
}
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
console.log(playRound(playerSelection, computerSelection));
