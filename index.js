
let humanScore = 0;
let computerScore = 0;
// const readline = require('node:readline');
const rockBtn = document.getElementById("rock-btn").onclick = () => playRound(getHumanChoice("rock"), getComputerChoice());
const paperBtn = document.getElementById("paper-btn").onclick = ()=> playRound(getHumanChoice("paper"), getComputerChoice());
const scissorsBtn = document.getElementById("scissors-btn").onclick = ()=> playRound(getHumanChoice("scissors"), getComputerChoice())
let elCompScore = document.getElementById("comp-score")
let elHumanScore = document.getElementById("human-score")
function getComputerChoice () {
  let compChoice = (Math.random()<= 0.4 ? "rock": Math.random()<= 0.6? "paper": "scissors")
  let compel = document.getElementById("compchoice")
  compel.innerHTML = (compChoice === "rock"? "🪨": compChoice=== "paper"? "📄": "✂️ ")
  compel.style.fontSize ="2rem"
  return compChoice;
}

function getHumanChoice(choice) {
  let humanchoice = document.getElementById("humanchoice");
  humanchoice.innerHTML = (choice === "rock"? "🪨": choice=== "paper"? "📄": "✂️ ")
  humanchoice.style.fontSize = "2rem";
  return choice
}

function checkScore() {
  if (humanScore === 5 || computerScore === 5) {
    setTimeout(() => {
      alert((humanScore === 5 ? "You Win": "Computer Win"));
      humanScore = 0;
      computerScore = 0;
      updateScoreUI();
    }, 0);
  }

  // if (computerScore === 5) {
  //   setTimeout(() => {
  //     alert("Komputer Menang!");
  //     humanScore = 0;
  //     computerScore = 0;
  //     updateScoreUI();
  //   }, 0);
  // }
}


function updateScoreUI() {
  elHumanScore.innerHTML = humanScore;
  elCompScore.innerHTML = computerScore;
}


function playRound(humanChoice, compChoice){
    if(humanChoice === 'rock' && compChoice === 'scissors'){
      humanScore+=1
      console.log(humanScore);
      console.log(`Human: ${humanChoice} VS Computer ${compChoice} = HUMAN WIN`);
    } else if(humanChoice === 'paper' && compChoice === 'rock'){
      humanScore+=1
      console.log(humanScore);
      console.log(`Human: ${humanChoice} VS Computer ${compChoice} = HUMAN WIN`);  
    }else if(humanChoice === 'scissors' && compChoice === 'paper'){
      humanScore+=1
      console.log(humanScore);
      console.log(`Human: ${humanChoice} VS Computer ${compChoice} = HUMAN WIN`);
    } else if(compChoice === 'rock' && humanChoice === 'scissors'){
      computerScore+=1
      console.log(computerScore);
      console.log(`Human: ${humanChoice} VS Computer ${compChoice} = COMPUTER WIN`);
    } else if(compChoice === 'paper' && humanChoice === 'rock'){
      computerScore+=1
      console.log(computerScore);
      console.log(`Human: ${humanChoice} VS Computer ${compChoice} = COMPUTER WIN`);
    } else if(compChoice === 'scissors' && humanChoice === 'paper'){
      computerScore+=1
      console.log(computerScore);
      console.log(`Human: ${humanChoice} VS Computer ${compChoice} = COMPUTER WIN`);
    } else {
      console.log(`Human: ${humanChoice} VS Computer ${compChoice} = DRAW`);
    }
    checkScore()
    updateScoreUI()
}


console.log(getHumanChoice());
