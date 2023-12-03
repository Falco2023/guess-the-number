'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent=' Correct number!'
// document.querySelector('.number'). textContent= 13
// document.querySelector('.score').textContent = 11

// console.log(document.querySelector('.guess').value)
// document.querySelector('.guess').value = 23;
 const highScoreElement = document.querySelector(".highscore");
 let highScore = document.querySelector(".highscore").textContent;
let secretNumber = Math.trunc(Math.random()*20)+1;
let numberGuess = document.querySelector('.number').textContent;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').textContent = 'X';
const displayMessage = function(message) {
document.querySelector('.message').textContent = message;
}
let score = 20;

document.querySelector('.check').addEventListener('click',function() {
    const guess = Number(document.querySelector('.guess').value);
    
    

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
    }
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent=' Correct number! 🎉🎉';
        displayMessage('Correct number! 🎉🎉')
        document.querySelector('body').style.backgroundColor= '#60b347';
        document.querySelector('.number').style.width = '170px';
        document.querySelector('.number').textContent = secretNumber;
        if(highScore < score ){
            document.querySelector('.highscore').textContent = score;
        }
        
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent= guess > secretNumber?'📈Number is too high': '📉Number is too low';
            displayMessage(guess > secretNumber?'📈Number is too high': '📉Number is too low');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            // document.querySelector('.message').textContent = 'You lost the Game'
            displayMessage('You lost the Game');
        }}
    // }
    // else if (guess<secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent='📉Number is too low'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = 'You lost the Game'
    //     }
        
    // }
    
}
)
document.querySelector('.btnagain').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value ='';
    document.querySelector('body').style.backgroundColor = 'rgb(43, 41, 41)';
    document.querySelector('.number').textContent = 'X'
    // document.querySelector('.message').textContent="Guess My Number!"
    displayMessage("Guess My Number!")
    document.querySelector('.number').style.width = '145px';
})
