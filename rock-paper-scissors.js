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

  alert("You will play Rock-Paper-Scissors against the computer. A total of 5 rounds will be played and the winner announced. \n Begin !");
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
      alert('Computer : ' + computerChoice + '\nYou : ' + humanChoice + '\nYou win! ' + humanChoice + ' beats ' + computerChoice);
      humanScore += 1;
    } else if (winner == 'computer') {
      computerScore += 1;
      alert('Computer : ' + computerChoice + '\nYou : ' + humanChoice + '\nSorry you lose! ' + computerChoice + ' beats ' + humanChoice);
    } else {
      alert('Computer : ' + computerChoice + '\nYou : ' + humanChoice + '\nIt was a draw ' + computerChoice + ' and ' + humanChoice + ' are equal');
    }

  }

  // locally define and initialize the scores
  let humanScore = 0;
  let computerScore = 0;

  // Loop for 5 games
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice())
  }

  // Computer the final score
  let cumulative_score = humanScore - computerScore;

  // Determine overall winner and print final scores
  if (cumulative_score < 0) {
    alert("The computer wins by " + computerScore + " to " + humanScore + ".");
  } else if (cumulative_score > 0) {
    alert("You win by " + humanScore + " to " + computerScore + ".");
  } else {
    alert("It was a draw " + humanScore + " - " + computerScore + ".");
  }
}

playGame();
