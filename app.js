const rock = `<img src="https://i.imgur.com/Hk851R8.jpeg" alt="Rock" height="200" width="200">`;
const paper = `<img src="https://i.imgur.com/KzvuxyF.jpeg" alt="Paper" height="200" width="200">`;
const scissor = `<img src="https://i.imgur.com/oSPI0cl.jpeg" alt="Scissor" height="200" width="200">`;

let playerScore;
let computerScore;

const options = document.querySelectorAll('.selection img');

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
let playRound = (event) => {
  let playerSelection = event.target.alt;
  let computerSelection = computerPlay();
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
  if (playerScore > 4) {
    document.getElementById('current').innerHTML =
      "<h1>Victory For Mankind.</h1><button class='reset' onclick='init()'>reset</button>";
    options.forEach(option => {
      option.removeEventListener('click', playRound);
    });
  } else if (computerScore > 4) {
    document.getElementById('current').innerHTML =
      "<h1>The Computers are Victorious.</h1><button class='reset' onclick='init()'>reset</button>";
    options.forEach(option => {
      option.removeEventListener('click', playRound);
    });
  } else {
    printRoundResult(result, playerSelection, computerSelection);
  }
};

function init() {
  playerScore = 0;
  computerScore = 0;
  document.querySelector('#player-score').textContent = playerScore;
  document.querySelector('#computer-score').textContent = computerScore;
  const current = document.querySelector('#current');
  document.querySelector('#played-computer').innerHTML = '';
  document.querySelector('#played').innerHTML = '';

  while (current.firstChild) {
    current.removeChild(current.firstChild);
  }
  options.forEach(option => {
    option.addEventListener('click', playRound);
  });
}

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


init();
