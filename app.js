let computerPlay = () => {
  let hand;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      hand = "Rock";
      break;
    case 1:
      hand = "Paper";
      break;
    case 2:
      hand = "Scissor";
      break;
  }
  return hand;
};

let battle = (playerSelection, computerSelection) => {
  let result;
  if (playerSelection === computerSelection) {
    result = "draw";
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Scissor") {
      result = "win";
    } else {
      result = "lose";
    }
  } else if (playerSelection === "Scissor") {
    if (computerSelection === "Paper") {
      result = "win";
    } else {
      result = "lose";
    }
  } else {
    if (computerSelection === "Rock") {
      result = "win";
    } else {
      result = "lose";
    }
  }

  switch (result) {
    case "win":
      return "You win! " + playerSelection + " beats " + computerSelection;
    case "lose":
      return "You lose! " + computerSelection + " beats " + playerSelection;
    default:
      return "It's a draw.";
  }
};
