//will randomly return rock, paper, or scissors
function computerPlay () {
//need variable for what is thrown, need to pull a random number, 1 - 3
  let computerThrows = Math.floor(Math.random() * 3);
  
//need each number to translate to r p s
  // if throwNumber == 0, throw rock
if (computerThrows == 0) {
   // console.log('rock');
    return 'rock';
}
  // if throwNumber == 1, throw paper
else if (computerThrows == 1) {
   // console.log('paper');
    return 'paper';
}
  // else throwNumber == 2, throw scissors
else {
   // console.log('scissors');
    return 'scissors';
}

}





/* well this works! 
function playRound() {

  const computerSelection = computerPlay();
  console.log(computerSelection);

 if (computerSelection == 'rock' && playerSelection == 'paper') {
   return 'Computer throws rock. You win!';
 }

 else if (computerSelection == 'paper' && playerSelection == 'scissors') {
   return 'Computer throws paper. You win!';
 }

 else if (computerSelection == 'scissors' && playerSelection == 'rock') {
    return 'Computer throws scissors. You win!'
 }

 else if (computerSelection == 'paper' && playerSelection == 'rock') {
    return 'Computer throws paper. You lose!'
 }
 else {
   return 'No idea.';
 }
 
} */

/* this also works! 
function playRound() {
  
  const computerSelection = computerPlay();
  console.log(computerSelection);
  console.log(playerSelection);

  if (computerSelection == playerSelection) {
    return 'Draw! Throw again.';
  }
  
  else {
    if (computerSelection == 'paper') {
      return 'Computer throws paper. You lose.'
    }

    else if (computerSelection == 'scissors') {
      return 'Computer throws scissors. You win!'
    }
    
  }
  
}
*/
//messing around with callbacks
const playerSelection = 'rock'; 
function playRound (playerSelection, computerSelection) {
  let x = computerSelection();

  console.log(x);
  console.log(playerSelection);

}
