// The user is prompted to input a selection of Rock, Paper, or Scissor
// The computer will generate a selection from an array of options 
const PLAY_OPTIONS = ['rock', 'scissor', 'paper']

let computerSelection;
let playerSelection = 'scissor';

function computerPlay(){
    return PLAY_OPTIONS[Math.floor(Math.random() * PLAY_OPTIONS.length)];
}
// Wrie a function that determines users selection: 
    // Rock > Scissor
    // Scissor > Paper
    // Paper > Rock 

function playRound(playerSelection, computerSelection, PLAY_OPTIONS){
    if (
        playerSelection === PLAY_OPTIONS[0] && computerSelection === PLAY_OPTIONS[1] ||
        playerSelection === PLAY_OPTIONS[1] && computerSelection === PLAY_OPTIONS[2] ||
        playerSelection === PLAY_OPTIONS[2] && computerSelection === PLAY_OPTIONS[0]
        ){
        return 'Player';
        }
    else if (
        computerSelection === PLAY_OPTIONS[0] && playerSelection === PLAY_OPTIONS[1] ||
        computerSelection === PLAY_OPTIONS[1] && playerSelection === PLAY_OPTIONS[2] ||
        computerSelection === PLAY_OPTIONS[2] && playerSelection === PLAY_OPTIONS[0]
        ){
        return 'Computer';
        }
    else {
        return 'Tie';
    }
}   
// 5 rounds will occur and the player w/the most wins is winner

function playGame(){
    let winner = []
    let winnerRound;
    
    for(let i = 0; i < 5; i++){
        // Winner will be noted and stored for each round
    
        let computerSelection = computerPlay();
        console.log(computerSelection)
        let winnerRound = playRound(playerSelection, computerSelection, PLAY_OPTIONS);
        winner.push(winnerRound);
        console.log(winner);
    }
}

playGame();

// play five rounds
// for each round return winner 
// take winner and store into array 
// after 