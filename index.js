let getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * 3) + 1;
  switch (randomChoice) {
    case 1:
      getComputerChoice = "ROCK";
      break;
    case 2:
      getComputerChoice = "PAPER";
      break;
    case 3:
      getComputerChoice = "SCISSORS";
      break;

    default:
      getComputerChoice = "ROCK";
      break;
  }
  return getComputerChoice;
};
alert(getComputerChoice());
