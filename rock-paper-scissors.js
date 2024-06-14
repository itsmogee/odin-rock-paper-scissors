console.log("Welcome to Rock-Paper-Scissors");

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
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
  while (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
    choice = prompt("Wrong selection ! \nEnter rock, paper or scissors : ");
    choice = choice.toLowerCase();
  }
  return choice;
}

// A game consists of 5 rounds
function playGame() {

  // This function will play a single round
  playRound = function(humanChoice, computerChoice) {

    // initialize winner, take into account draw scenario 
    let winner = "draw";

    // Determine the winner using rock-paper-scissors logic
    if ((humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'rock' && computerChoice == 'scissors')) {
      winner = "human";
    } else if ((computerChoice == 'paper' && humanChoice == 'rock') || (computerChoice == 'scissors' && humanChoice == 'paper') || (computerChoice == 'rock' && humanChoice == 'scissors')) {
      winner = "computer";
    }

    // Update the scores and print the winner to console
    if (winner == 'human') {
      console.log('You win! ' + humanChoice + ' beats ' + computerChoice);
      humanScore += 1;
    } else if (winner == 'computer') {
      computerScore += 1;
      console.log('Sorry you lose! ' + computerChoice + ' beats ' + humanChoice);
    } else {
      console.log('It was a draw ' + computerChoice + ' and ' + humanChoice + ' are equal');
    }

  }

  // locally define and initialize the scores
  let humanScore = 0;
  let computerScore = 0;
    computerScore += 1;
    console.log('Sorry you lose! ' + computerChoice + ' beats ' + humanChoice);
  } else {
    console.log('It was a draw ' + computerChoice + ' and ' + humanChoice + ' are equal');
  }
}

playRound(getHumanChoice(), getComputerChoice())
