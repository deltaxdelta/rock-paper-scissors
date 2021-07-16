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



let playerSelection = 'paper';

function playRound() {

  const computerSelection = computerPlay();
  console.log(computerSelection);

 if (computerSelection == 'rock' && playerSelection == 'paper') {
   return 'Computer throws rock. You win!';
 }

 else {
   return 'No idea.';
 }
 
}

