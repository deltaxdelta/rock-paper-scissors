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
// let playerSelection = window.prompt('Rock, paper, or scissors?', 'rock'); 

const computerSelection = computerPlay;

function playRound (playerSelection, computerSelection) {
  

  const x = computerSelection();

  let playerScore = 0;
  let computerScore = 0;
  
  // console.log(x);
  console.log('You throw ' + playerSelection + '.');
 
  if (x == playerSelection) {
    console.log('A tie! Try again.');
    return (playerscore + 0, computerScore + 0);
  }

  else if (x == 'rock' && playerSelection == 'paper') {
    console.log('Computer throws rock. You win!');
    return (playerScore + 1, computerScore + 0);
  }
 
  else if (x == 'paper' && playerSelection == 'scissors') {
    console.log('Computer throws rock. You win!');
    return (playerScore + 1, computerScore + 0);
  }
 
  else if (x == 'scissors' && playerSelection == 'rock') {
    console.log('Computer throws scissors. You win!'); 
    return (playerScore + 1, computerScore + 0);
  }
 
  else if (x == 'paper' && playerSelection == 'rock') {
    console.log('Computer throws paper. You lose!');
    return (playerScore + 0, computerScore + 1);
  }

  else if (x == 'rock' && playerSelection == 'scissors') {
    console.log('Computer throws rock. You lose!');
    return (playerScore + 0, computerScore + 1);
  }

  else if (x == 'scissors' && playerSelection == 'paper') {
    console.log('Computer throws scissors. You lose!');
    return (playerScore + 0, computerScore + 1);
  }
  else { 
    console.log('You throw' + playerSelection + '. That\'s not part of the game!');
    return (console.log('Why did you throw that? Computer gets 2 points.'), computerscore + 2);
  }
}

// one day I will know what a loop is

function game () {
let y = window.prompt('Rock, paper, or scissors?');

 playRound(y, computerSelection);

 let z = window.prompt('Rock, paper, or scissors?');

 playRound(z, computerSelection);

 let a = window.prompt('Rock, paper, or scissors?');

 playRound(a, computerSelection);

 let b = window.prompt('Rock, paper, or scissors?');

 playRound(b, computerSelection);

 let c = window.prompt('Rock, paper, or scissors?');

 playRound(c, computerSelection);

}

// how to do scoring and winner declaration?

/*
Create a variable, playerScore
Create a variable, computerScore

check results of each playRound -- should go in game function, right?
  how do I get the result? --where does that go?
   can I return 1 + playerScore/computerScore w/ each message?
 if there's a 'you win' result, +1 to playerscore
 if there's a 'you lose' result +1 to computerScore
 else +0 to both (tie)

compare playerScore to computerScore - display them too for funsies
 largest value is winner
Display finalScore, plus computer or player winning message
*/ 
