const readline = require('node:readline');
function getComputerChoice () {
  let compChoice = (Math.random()<= 0.4 ? "ROCK": Math.random()<= 0.6? "PAPER": "SCISSORS")

  return compChoice;
}

function getHumanChoice() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  rl.question(`What's your choice?  ("PAPER", "ROCK", "SCISSORS")`, (choice) => {
    playRound(choice, getComputerChoice())
    rl.close();
  });
}

function playRound(humanChoice, compChoice){
    if(humanChoice.toLowerCase() === 'rock' && compChoice.toLowerCase() === 'scissors'){
      console.log(`Human: ${humanChoice} VS Computer ${compChoice} = HUMAN WIN`);
    } else if(humanChoice.toLowerCase() === 'paper' && compChoice.toLowerCase() === 'rock'){
      console.log(`Human: ${humanChoice} VS Computer ${compChoice} = HUMAN WIN`);    }
    else if(humanChoice.toLowerCase() === 'scissors' && compChoice.toLowerCase() === 'paper'){
      console.log(`Human: ${humanChoice} VS Computer ${compChoice} = HUMAN WIN`);
    } else if(compChoice.toLowerCase() === 'rock' && humanChoice.toLowerCase() === 'scissors'){
      console.log(`Human: ${humanChoice} VS Computer ${compChoice} = COMPUTER WIN`);
    } else if(compChoice.toLowerCase() === 'paper' && humanChoice.toLowerCase() === 'rock'){
      console.log(`Human: ${humanChoice} VS Computer ${compChoice} = COMPUTER WIN`);
    } else if(compChoice.toLowerCase() === 'scissors' && humanChoice.toLowerCase() === 'paper'){
      console.log(`Human: ${humanChoice} VS Computer ${compChoice} = COMPUTER WIN`);

    } else {
      console.log(`Human: ${humanChoice} VS Computer ${compChoice} = DRAW`);
    }
}


console.log(getHumanChoice());
