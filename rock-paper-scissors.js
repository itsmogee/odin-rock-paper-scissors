console.log("Welcome to Rock-Paper-Scissors");

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  console.log(choice);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      break;
  }
}

function getHumanChoice() {
  let choice = prompt("Enter rock, paper or scissors : ");
  choice = choice.toLowerCase();
  console.log(choice + 'here');
  while (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
    choice = prompt("Wrong selection ! \nEnter rock, paper or scissors : ");
    choice = choice.toLowerCase();
  }
  return choice;
}

let humanScore = 0;
let computerScore = 0;
