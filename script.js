// The user is prompted to input a selection of Rock, Paper, or Scissor
// The computer will generate a selection from an array of options 
const PLAY_OPTIONS = ["rock", "scissor", "paper"]

let computerSelection = computerPlay();

function computerPlay(){
    return PLAY_OPTIONS[Math.floor(Math.random() * PLAY_OPTIONS.length)];
}
// Wrie a function that determines users selection: 
    // Rock > Scissor
    // Scissor > Paper
    // Paper > Rock 

