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
function determineWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log(
      `You Win, your score is ${playerScore} and computer score is ${computerScore}`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `You Lose, your score is ${playerScore} and computer score is ${computerScore}`
    );
  } else {
    console.log(
      `Tie, your score is ${playerScore} and computer score is ${computerScore}`
    );
  }
}
function calculateScore(resultRound, playerScore, computerScore) {
  if (resultRound.toUpperCase().indexOf("WIN") >= 0) {
    playerScore += 1;
  } else if (resultRound.toUpperCase().indexOf("LOSE") >= 0) {
    computerScore += 1;
  }
  return (result = [playerScore, computerScore]);
}

function game() {
  let playerScore = 0,
    computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    console.log(`Round Number ${i}`);
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    console.log(playRound(playerSelection, computerSelection));
    [playerScore, computerScore] = calculateScore(
      playRound(playerSelection, computerSelection),
      playerScore,
      computerScore
    );
  }
  determineWinner(playerScore, computerScore);
}

game();
