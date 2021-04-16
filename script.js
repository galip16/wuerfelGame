'use strict';
// 3 Buttons Selector
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Image Selector
const imgDice = document.querySelector('img');

const currentScoreP0 = document.getElementById('current--0');
const currentScoreP1 = document.getElementById('current--1');

const showTotalScoreP0 = document.getElementById('score--0');
const showTotalScoreP1 = document.getElementById('score--1');

const player0Section = document.querySelector('.player--0');
const player1Section = document.querySelector('.player--1');

// INIT FUNCTION
let currentScore, currentPlayer, score, playing;

function init() {
    currentScore = 0;
    currentPlayer = currentScoreP0;
    score = [0, 0];
    playing = true;
    showTotalScoreP0.innerText = score[0];
    showTotalScoreP1.innerText = score[1];
    imgDice.setAttribute('hidden', true);
    // imgDice.style.visibility = "hidden";
}
init();

// EVENT LISTENER
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', init);

// FUNCTIONS
function rollDice() {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    // const randomNumber = Math.ceil(Math.random()*6);
    console.log(randomNumber);
    imgDice.removeAttribute('hidden');
    // imgDice.style.visibility = "visible";
    imgDice.src = `dice-${randomNumber}.png`;

    if (randomNumber === 1) {
        switchPlayer()
    } else {
        currentScore += randomNumber;
        currentPlayer.innerText = currentScore;
    }
}

function switchPlayer() {
    currentScore = 0;
    currentPlayer.innerText = currentScore;
    currentPlayer = (currentPlayer == currentScoreP0) ? currentScoreP1 : currentScoreP0;
    player0Section.classList.toggle('player--active');
    player1Section.classList.toggle('player--active');
}

function holdScore() {
    if (playing) {
        if (currentPlayer == currentScoreP0) {
            score[0] += currentScore;
            showTotalScoreP0.innerText = score[0];
            if (score[0] >= 20) {
                player0Section.classList.add('player--winner');
                playing = false;
            }

        } else {
            score[1] += currentScore;
            showTotalScoreP1.innerText = score[1];
            if (score[0] >= 100) {
                player1Section.classList.add('player--winner');
                player1Section.classList.remove('player--active');
                playing = false;
            }
        }
        switchPlayer()
    }
}