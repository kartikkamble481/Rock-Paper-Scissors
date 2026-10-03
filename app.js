let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  //   console.log("game was draw.");
  msg.innerText = "game was draw , Again !";
  msg.style.backgroundColor = "";
};

const showWinner = (userWin, userchoice, compChoice) => {
  if (userWin) {
    // console.log("you win !");
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `You Win! Your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    // console.log("you loss !");
    msg.innerText = `You lost. ${compChoice} beats Your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userchoice) => {
  console.log("user choice =", userchoice);
  //Generatoe computer choice
  const compChoice = genCompChoice();
  //   console.log("comp choice = ", compChoice);

  if (userchoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      // scissors , paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      // rock , scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock , paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userchoice, compChoice);
  }
};

choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log("choice was clicked", userchoice);
    playGame(userchoice);
  });
});
