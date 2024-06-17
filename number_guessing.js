const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastresult');
const loworHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultparas');
const p = document.createElement('p');

let prevGuess = [];
let numguess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a valid number');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numguess === 11) {
            displayGuess(guess);
            displayMessage(`Game over, the random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guessed it right!');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('Number is too low');
    } else if (guess > randomNumber) {
        displayMessage('Number is too high');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numguess++;
    remaining.innerHTML = `${11 - numguess}`;
}

function displayMessage(message) {
    loworHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.disabled = true;
    submit.disabled = true;
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    p.addEventListener('click', function() {
        location.reload();
    });
}
