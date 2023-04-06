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
    return "You Win";
  } else if (playerScore < computerScore) {
    return "You Lose";
  } else {
    return "Tie";
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
  let playerSelection_text = document.querySelector("#player-selection");
  let computerSelection_text = document.querySelector("#computer-selection");
  let playerScore_text = document.querySelector("#player-score");
  let computerScore_text = document.querySelector("#computer-score");
  let result_text = document.querySelector("#result-text");
  let buttons = document.querySelectorAll(".button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let playerSelection = button.id;
      let computerSelection = getComputerChoice();
      playerSelection_text.textContent = playerSelection;
      computerSelection_text.textContent = computerSelection;
      [playerScore, computerScore] = calculateScore(
        playRound(playerSelection, computerSelection),
        playerScore,
        computerScore
      );
      playerScore_text.textContent = playerScore;
      computerScore_text.textContent = computerScore;
      if (playerScore == 5 || computerScore == 5) {
        result_text.textContent = determineWinner(playerScore, computerScore);
        playerScore = 0;
        computerScore = 0;
      }
    });
  }); 
}

game();