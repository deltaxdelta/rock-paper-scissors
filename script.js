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


//need this because tutorial wants it
const computerSelection = computerPlay;

//compares player throw to computer throw and outputs win/lose/tie messages
function playRound (playerSelection, computerSelection) {

  
  const x = computerSelection();
  showComputerThrow(x);
  
  //console.log(x);
  console.log('You throw ' + playerSelection + '.');
 
  if (x == playerSelection) {
    console.log('Computer throws ' + playerSelection + '. A tie!');
    //console.log(`Current score is ${playerScore} for you, ${computerScore} for computer.`);
    
  }

  else if (x == 'rock' && playerSelection == 'paper') {
    console.log('Computer throws rock. You win!');
    //addPlayerScore();
     playerScore++;
     
  }
 
  else if (x == 'paper' && playerSelection == 'scissors') {
    console.log('Computer throws paper. You win!');
    //addPlayerScore();
     playerScore++;
     
  }
 
  else if (x == 'scissors' && playerSelection == 'rock') {
    console.log('Computer throws scissors. You win!'); 
    //addPlayerScore();
    playerScore++;
    
  }
 
  else if (x == 'paper' && playerSelection == 'rock') {
    console.log('Computer throws paper. You lose!');
    //addcomputerScore();
    computerScore++;
    
  }

  else if (x == 'rock' && playerSelection == 'scissors') {
    console.log('Computer throws rock. You lose!');
    //addcomputerScore();
    computerScore++;
    
  }

  else if (x == 'scissors' && playerSelection == 'paper') {
    console.log('Computer throws scissors. You lose!');
    //addcomputerScore();
    computerScore++;
    
  }
  else { 
    console.log('That\'s not part of the game! Computer gets 2 points.');
    //badInput();
    computerScore += 2;
    
  }
  
  //this line works
  return console.log('playerScore is ' + playerScore + ' computerScore is ' + computerScore);
  
}


  //variables to track score
  let playerScore = 0;
  let computerScore = 0;

  //resets score variables at end of game

  function resetScore() {
    playerScore = 0;
    computerScore = 0;
  }

/* this is from not knowing a lot of JS, preserve for future wonderment
//functions to add to scores and show new totals

function addPlayerScore () {
  let newScore = playerScore++;
  console.log(`Current score is ${newScore} for you, ${computerScore} for computer.`);
}

function addcomputerScore () {
 let updScore = computerScore++;
  console.log(`Current score is ${playerScore} for you, ${updScore} for computer.`)
}

function badInput () {
  let oopsScore = computerScore + 2;
  console.log(`Current score is ${playerScore} for you, ${oopsScore} for computer.`)
}

*/

// one day I will know what a loop is

//this runs the round 5 times
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
  
//can I just throw if/else logic here and return winning message w/o messy array business?
if (playerScore > computerScore) {
  console.log('Final score: Human: ' + playerScore + ', Computer: ' + computerScore + '. Congratulations, human. You beat the computer.');
}

else if (playerScore < computerScore) {
  console.log('Final score: Human: ' + playerScore + ', Computer: ' + computerScore + '. The computer won. Better luck next time, human.');
}

else {
  console.log('Final score: Human: ' + playerScore + ', Computer: ' + computerScore + '. A tie? How did you manage that? Play again.');
}
//can I return something that will reset the game? 
// return [playerScore, computerScore];
  //return 'Final score is human: ' + playerScore + ', computer: ' + computerScore;
  return resetScore();
}

/* may not need these
//getting scores from returned array in game()
let getFinal = game();
let playerFinal = getFinal[0];
let computerFinal = getFinal[1];
*/

// how to do scoring and winner declaration?

/*
Create a variable, playerScore
Create a variable, computerScore

check results of each playRound -- should go in game function, right?
  how do I get the result? --where does that go?
   can I return 1 + playerScore/computerScore w/ each message? -- yes, use ++
 if there's a 'you win' result, +1 to playerscore
 if there's a 'you lose' result +1 to computerScore
 else +0 to both (tie) aka do nothing

compare playerScore to computerScore - display them too for funsies
 largest value is winner
Display finalScore, plus computer or player winning message
 need to get playerScore and computerScore out of game()
  JS can't return multiple values, but it can return an array
  Need to build array to hold final values of playerScore and computerScore
 Then need function to compare and output winner declaration message
*/ 


//Now for some UI stuff

// display scores

const humanScore = document.getElementById('humanScore');
const compyScore = document.getElementById('compyScore');

humanScore.innerText = playerScore;
compyScore.innerText = computerScore;

//each button inputs player throw into playRound

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('mouseup', rockButton);
paper.addEventListener('mouseup', paperButton);
scissors.addEventListener('mouseup', scissorsButton);

//display what the computer did for added human satisfaction
let computerRound = document.getElementById('computerRound');
//this gets called inside playRound
function showComputerThrow(rps) {
  let emoji = '';

  if (rps == 'rock') {
     emoji += String.fromCodePoint('0x1FAA8');
  }

  else if (rps == 'paper') {
    emoji += String.fromCodePoint('0x1F4DC');
  }

  else {
    emoji += String.fromCodePoint('0x2702');
  }
  computerRound.innerText = emoji;
}

//clear computer throw so it looks like something new loads on repeated throws

rock.addEventListener('mousedown', clearCompy);
paper.addEventListener('mousedown', clearCompy);
scissors.addEventListener('mousedown', clearCompy);

function clearCompy() {
  if (document.getElementById('finalScore').innerText !== '') {}
  else {
    computerRound.innerText = '';}
     
}


//button mouseups will check score and stop play when either hits 3 (screw the tutorial, I'm doing best of 5)

function rockButton() {

  if (playerScore >=3 || computerScore >=3) return;

  else {
  playRound('rock', computerSelection);
  humanScore.innerText = playerScore;
  compyScore.innerText = computerScore;
  
  }
}

function paperButton() {

  if (playerScore >=3 || computerScore >=3) return;

  else {
  playRound('paper', computerSelection);
  humanScore.innerText = playerScore;
  compyScore.innerText = computerScore;
 
  }
}

function scissorsButton() {
  if (playerScore >=3 || computerScore >=3) return;

  else {
  playRound('scissors', computerSelection);
  humanScore.innerText = playerScore;
  compyScore.innerText = computerScore;
  
  }
}




//determine winner and display message

rock.addEventListener('click', checkScore);
paper.addEventListener('click', checkScore);
scissors.addEventListener('click', checkScore);

function checkScore() {
  if(playerScore == 3) {
    //you a winnah
    document.getElementById('finalScore').innerText = 'WINNER: HUMAN';
  }

  else if (computerScore == 3){
    //you lose hahaha
    document.getElementById('finalScore').innerText = 'WINNER: COMPUTER';
   }
   else{ //do nuthin
  }
}


//reset scores button


const newGame = document.getElementById('newGame');

newGame.addEventListener('mouseup', startNewGame);

function startNewGame() {
  resetScore();
  humanScore.innerText = 0;
  compyScore.innerText = 0;
  document.getElementById('finalScore').innerText = '';
  computerRound.innerText = '';

}
