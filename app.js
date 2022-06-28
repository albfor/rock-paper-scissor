// play 5 rounds of rock paper scissor
let game = () => {
  let totalScore = 0;
  for (let i = 0; i < 5; i++) {
    let player = prompt("Select hand");
    let computer = computerPlay();
    let current = playRound(player, computer);
    printRoundResult(current, player, computer);
    totalScore += current;
  }
  console.log("Score: " + totalScore);
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
    result = 0;
  } else if (playerSelection === "rock") {
    result = computer === "scissor" ? 1 : -1;
  } else if (playerSelection === "scissor") {
    result = computerSelection === "paper" ? 1 : -1;
  } else if (playerSelection === "paper") {
    result = computerSelection === "rock" ? 1 : -1;
  } else {
    throw "Not valid input";
  }
  return result;
};

/**
 * Prints the result of a single round
 */
let printRoundResult = (result, playerSelection, computerSelection) => {
  if (result === 1) {
    console.log("You won! " + playerSelection + " beats " + computerSelection);
  } else if (result === -1) {
    console.log("You lost! " + computerSelection + " beats " + playerSelection);
  } else {
    console.log("It's a draw.");
  }
};
