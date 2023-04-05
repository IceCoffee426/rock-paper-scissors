window.onload = function () {
  Particles.init({
    selector: ".background",
    color: "pink",
    speed: 2,
  });
};

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
rock.addEventListener("click", play);

const paper = document.querySelector(".paper");
paper.addEventListener("click", play);

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", play);

const playerScoreBox = document.getElementById("player-score");
playerScoreBox.textContent = playerScore;

const computerScoreBox = document.getElementById("computer-score");
computerScoreBox.textContent = computerScore;

const resultBox = document.getElementById("result");

const replayBtn = document.getElementById("replay");
replayBtn.addEventListener("click", playAgain);

function computerChoose() {
  number = Math.floor(Math.random() * 3);
  if (number == 0) {
    choice = "rock";
  } else if (number == 1) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

function play() {
  let playerChoice = this.className;
  const outcome = document.querySelector(".outcome");
  outcome.innerText = `You chose ${playerChoice}.`;

  let computerChoice = computerChoose();
  outcome.innerText += ` Computer chose ${computerChoice}.`;

  if (playerChoice == "rock") {
    if (computerChoice == "rock") {
      outcome.innerText += ` It's a draw!`;
    } else if (computerChoice == "paper") {
      outcome.innerText += ` Computer gets a point!`;
      computerScore += 1;
    } else {
      outcome.innerText += ` You get a point!`;
      playerScore += 1;
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      outcome.innerText += ` You get a point!`;
      playerScore += 1;
    } else if (computerChoice == "paper") {
      outcome.innerText += ` It's a draw!`;
    } else {
      outcome.innerText += ` Computer gets a point!`;
      computerScore += 1;
    }
  } else {
    if (computerChoice == "rock") {
      outcome.innerText += ` Computer gets a point!`;
      computerScore += 1;
    } else if (computerChoice == "paper") {
      outcome.innerText += ` You get a point!`;
      playerScore += 1;
    } else {
      outcome.innerText += ` It's a draw!`;
    }
  }
  playerScoreBox.innerText = playerScore;
  computerScoreBox.innerText = computerScore;

  if (playerScore == 5) {
    resultBox.style.color = "lightgreen";
    resultBox.style.background = "black";
    resultBox.style.border = "5px solid lightskyblue";
    resultBox.textContent = "You win!";
    console.log(resultBox.textContent);
    rock.removeEventListener("click", play);
    paper.removeEventListener("click", play);
    scissors.removeEventListener("click", play);
    replayBtn.style.display = "inline-block";
  } else if (computerScore == 5) {
    resultBox.style.color = "lightcoral";
    resultBox.style.background = "black";
    resultBox.style.border = "5px solid lightskyblue";
    resultBox.textContent = "Computer wins!";
    console.log(resultBox.textContent);
    rock.removeEventListener("click", play);
    paper.removeEventListener("click", play);
    scissors.removeEventListener("click", play);
    replayBtn.style.display = "inline-block";
  }
}

function playAgain() {
  location.reload();
  console.log("Replay!");
}
