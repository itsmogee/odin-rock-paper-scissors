console.log("Welcome to Rock-Paper-Scissors");

const mydocument = document.querySelector("body");
let liveHumanScore = document.querySelector("#humScore");
let liveComputerScore = document.querySelector("#compScore");
const buttons = document.querySelector("#rps-buttons");
const announcment = document.querySelector("#winner");
const humanChoiceP = document.querySelector("#humanChoice");
const computerChoiceP = document.querySelector("#computerChoice");

let computerScore = 0;
let humanScore = 0;

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
    announcment.textContent = 'You win ' + humanChoice + ' beats ' + computerChoice + '!';
    humanChoiceP.textContent = 'Computer : ' + computerChoice;
    computerChoiceP.textContent = 'You : ' + humanChoice
    //alert('Computer : ' + computerChoice + '\nYou : ' + humanChoice + '\nYou win! ' + humanChoice + ' beats ' + computerChoice);
    humanScore += 1;
  } else if (winner == 'computer') {
    computerScore += 1;
    //alert('Computer : ' + computerChoice + '\nYou : ' + humanChoice + '\nSorry you lose! ' + computerChoice + ' beats ' + humanChoice);
    announcment.textContent = 'Sorry you lose, ' + computerChoice + ' beats ' + humanChoice + "!";
    humanChoiceP.textContent = 'Computer : ' + computerChoice;
    computerChoiceP.textContent = 'You : ' + humanChoice;
  } else {
    //alert('Computer : ' + computerChoice + '\nYou : ' + humanChoice + '\nIt was a draw ' + computerChoice + ' and ' + humanChoice + ' are equal');
    announcment.textContent = 'It was a draw ' + computerChoice + ' and ' + humanChoice + ' are equal.';
    humanChoiceP.textContent = 'Computer : ' + computerChoice;
    computerChoiceP.textContent = 'You : ' + humanChoice;
  };
};


buttons.addEventListener("click", (event) => {
  // Get button events ID name
  let target = event.target.id;

  // Call playRound for correct button choice
  switch (target) {
    case "rock":
      playRound("rock", getComputerChoice());
      break;
    case "paper":
      playRound("paper", getComputerChoice());
      break;
    case "scissors":
      playRound("scissors", getComputerChoice());
      break;
    default:
      break;
  }

  // Update Live scores
  liveComputerScore.textContent = "Computer : " + computerScore;
  liveHumanScore.textContent = "Human : " + humanScore;

  // Check for Winner, announce winner and reset scores
  if (computerScore == 5 || humanScore == 5) {
    if (computerScore > humanScore) {
      announcment.textContent = "Unlucky, the Computer has won !  " + computerScore + ' : ' + humanScore;
    } else if (humanScore > computerScore) {
      announcment.textContent = "Congratulations, you have won !  " + humanScore + ' : ' + computerScore;
    } else {
      announcment.textContent = "It was a draw " + computerScore + ' : ' + humanScore;
    }
    computerScore = 0;
    humanScore = 0;
  };
})
