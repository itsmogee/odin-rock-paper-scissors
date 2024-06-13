console.log("Welcome to Rock-Paper-Scissors");

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  console.log(choice);
  switch (choice) {
    case 0:
      console.log("Computer : Rock");
      break;
    case 1:
      console.log("Computer : Paper");
      break;
    case 2:
      console.log("Computer : Scissors");
      break;
    default:
      break;
  }
}

function getHumanChoice() {
  let choice = prompt("Enter rock, paper or scissors : ");
  console.log("Human : " + choice);
}

getComputerChoice();
getHumanChoice();
