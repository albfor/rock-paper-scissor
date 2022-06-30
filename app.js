
let playerScore;
let computerScore;

const options = document.querySelectorAll('.selection img');

// Randomly select rock, paper or scissor.
const computerPlay = () => {
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
 * win return W
 * draw return D
 * lose return L
 */
const playRound = (event) => {
  // Get selection from player and computer
  const playerSelection = event.target.alt;
  const computerSelection = computerPlay();

  //Calculate result of round
  const result = calculateResult(playerSelection, computerSelection);

  //update
  update(result, playerSelection, computerSelection);
};

const calculateResult = (playerSelection, computerSelection) => {
  let result;
  if (playerSelection === computerSelection) {
    result = "D";
  } else if (playerSelection === "rock") {
    result = computerSelection === "scissor" ? "W" : "L";
  } else if (playerSelection === "scissor") {
    result = computerSelection === "paper" ? "W" : "L";
  } else if (playerSelection === "paper") {
    result = computerSelection === "rock" ? "W" : "L";
  }  
  return result;
}

// Updates scores and shows the updated score
const update = (result, playerSelection, computerSelection) => {
  increaseScore(result);
  printRoundResult(result, playerSelection, computerSelection);
  if (playerScore > 4 || computerScore > 4)
    handleWin();
};

const handleWin = () => {
  //add victory message and reset button
  const result = document.querySelector('#final-score');
  const msg = createVictoryMessage(result);
  const resetButton = createRestartButton(result);
  result.appendChild(msg);
  result.appendChild(resetButton);

  //remove eventlisteners
  options.forEach(option => {
    option.removeEventListener('click', playRound);
  });
}

const createVictoryMessage = (result) => {
  const msg = document.createElement("h1");
  if (playerScore > 4) {
    msg.textContent = "Victory For Mankind.";
  } else if (computerScore > 4) {
    msg.textContent = "The Computers are Victorious.";
  }
  return msg;
}

const createRestartButton = (result) => {
  const resetButton = document.createElement("button");
  resetButton.textContent = "Play Again";
  resetButton.addEventListener('click', init);
  return resetButton;
}

function increaseScore(result) {
  if (result === "W") {
    playerScore++;
    document.querySelector("#player-score").textContent = playerScore;
  } else if (result === "L") {
    computerScore++;
    document.querySelector("#computer-score").textContent = computerScore;
  }
}

function init() {
  playerScore = 0;
  computerScore = 0;
  document.querySelector('#player-score').textContent = playerScore;
  document.querySelector('#computer-score').textContent = computerScore;
  document.querySelector('#final-score').innerHTML = '';
  document.querySelector('#played-computer').innerHTML = '';
  document.querySelector('#played-player').innerHTML = '';
  options.forEach(option => {
    option.addEventListener('click', playRound);
  });
}

/**
 * Prints the result of a single round
 */
const printRoundResult = (result, playerSelection, computerSelection) => {
  displaySelection('#played-computer', computerSelection);
  displaySelection('#played-player', playerSelection);
  displayRoundMessage(result, playerSelection, computerSelection);
};

const displayRoundMessage = (result, player, computer) => {
  const container = document.querySelector('#final-score');
  const msg = document.createElement("p");
  if (result === "W") {
    msg.textContent = `You won! ${player} beats ${computer}.`;
  } else if (result === "L") {
    msg.textContent = `You lost! ${computer} beats ${player}.`;
  } else {
    msg.textContent = "It's a draw.";
  }
  container.replaceChildren(msg);
}

const displaySelection = (participant, selection) => {
  let img = new Image();
  img.classList.add("option");
  const p = document.querySelector(participant);
  const s = document.querySelector(`#${selection}`);
  img.src = s.src;
  p.replaceChildren(img);
}

init();
