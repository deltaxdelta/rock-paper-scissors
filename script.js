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

let playerSelection = 'rock';

function playRound (playerSelection, computerPlay) {
 if (playerSelection == 'rock' && computerPlay == 'paper') {
     return "Computer throws paper. You lose!";
}

else if (playerSelection == 'paper' && computerPlay == 'scissors') {
    return "Computer throws scissors. You lose!";
}

else if (playerSelection == 'scissors' && computerPlay == 'rock') {
    return "Computer throws rock. You lose!";
}

else if (playerSelection === computerPlay) {
    return "It's a draw! Try again.";
}

else {
    return "Computer throws" + computerPlay + ". You win!";
}

}
//play 1 round of rps
  //compare computerPlay with playerSelect    
    //this is where to figure out game logic
        // rock < paper
        // paper < scissors
        // scissors < rock
    //output Win Lose or Draw
    //for later:
        //else will be "You can't throw that! Try rock, paper, or scissors."

//figure out playerSelect


  //player receives prompt to enter text 'rock,' 'paper,' 'scissors'
  //must be case insensitive
    //use toLowerCase, compare with computerPlay outputs
