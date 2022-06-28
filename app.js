// randomizes the computer selection
let computerPlay = () => {
  let hand;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      hand = "rock";
      break;
    case 1:
      hand = "paper";
      break;
    case 2:
      hand = "scissor";
      break;
  }
  return hand;
};

/**
 * It is a regular game of rock paper scissor
 * win return 1
 * draw return 0
 * lose return -1
 * throws invalid user inputs
 */
let playRound = (playerSelection) => {
  let computerSelection = computerPlay();
  playerSelection = playerSelection.toLowerCase();
  let result;
  if (playerSelection === computerSelection) {
    result = "D";
  } else if (playerSelection === "rock") {
    result = computerSelection === "scissor" ? "W" : "L";
  } else if (playerSelection === "scissor") {
    result = computerSelection === "paper" ? "W" : "L";
  } else if (playerSelection === "paper") {
    result = computerSelection === "rock" ? "W" : "L";
  } else {
    throw "Not valid input";
  }
  update(result, playerSelection, computerSelection);
  return result;
};

// Updates scores and shows the updated score
let update = (result, playerSelection, computerSelection) => {
  if (result === "W") {
    playerScore++;
    document.getElementById("player-score").innerHTML = playerScore;
  }
  if (result === "L") {
    computerScore++;
    document.getElementById("computer-score").innerHTML = computerScore;
  }

  printRoundResult(result, playerSelection, computerSelection);
};

/**
 * Prints the result of a single round
 */
let printRoundResult = (result, playerSelection, computerSelection) => {
  if (computerSelection === "rock") {
    document.getElementById("played-computer").innerHTML = rock;
  } else if (computerSelection === "paper") {
    document.getElementById("played-computer").innerHTML = paper;
  } else if (computerSelection === "scissor") {
    document.getElementById("played-computer").innerHTML = scissor;
  }
  if (playerSelection === "rock") {
    document.getElementById("played").innerHTML = rock;
  } else if (playerSelection === "paper") {
    document.getElementById("played").innerHTML = paper;
  } else if (playerSelection === "scissor") {
    document.getElementById("played").innerHTML = scissor;
  }

  if (result === "W") {
    document.getElementById("current").innerHTML =
      "You won! " + playerSelection + " beats " + computerSelection;
  } else if (result === "L") {
    document.getElementById("current").innerHTML =
      "You lost! " + computerSelection + " beats " + playerSelection;
  } else {
    document.getElementById("current").innerHTML = "It's a draw.";
  }
};

const rock = `<img src="https://i.imgur.com/Hk851R8.jpeg" alt="Rock" height="200" width="200">`;
const paper = `<img src="https://i.imgur.com/KzvuxyF.jpeg" alt="Rock" height="200" width="200">`;
const scissor = `<img src="https://i.imgur.com/oSPI0cl.jpeg" alt="Rock" height="200" width="200">`;

let playerScore = 0;
let computerScore = 0;
