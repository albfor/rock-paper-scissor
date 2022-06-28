// play first to five in rock paper scissors vs the computer
let game = () => {
  let playerScore = 0;
  let computerScore = 0;
  while (playerScore < 5 && computerScore < 5) {
    let player = prompt("Select hand");
    let computer = computerPlay();
    let current = playRound(player, computer);
    if (current === "W") playerScore++;
    if (current === "L") computerScore++;
    printRoundResult(current, player, computer);
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
  }
};

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
let playRound = (playerSelection, computerSelection) => {
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
  return result;
};

/**
 * Prints the result of a single round
 */
let printRoundResult = (result, playerSelection, computerSelection) => {
  if (result === "W") {
    console.log("You won! " + playerSelection + " beats " + computerSelection);
  } else if (result === "L") {
    console.log("You lost! " + computerSelection + " beats " + playerSelection);
  } else {
    console.log("It's a draw.");
  }
};
