// // 3 Buttons Selector
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// // Image Selector
const imgDice = document.querySelector("img");

const P1 = {
  section: document.querySelector(".player--1"), //CSSte aktif arka plani degistirmede kullanilacak
  showCurrentScore: document.getElementById("current--1"),
  showTotalScore: document.getElementById("score--1"),
  currentScore: 0,
  totalScore: 0
};

const P2 = {
  section: document.querySelector(".player--2"), //CSSte aktif arka plani degistirmede kullanilacak
  showCurrentScore: document.getElementById("current--2"),
  showTotalScore: document.getElementById("score--2"),
  currentScore: 0,
  totalScore: 0
};

P1.showTotalScore.innerHTML = 0;
P2.showTotalScore.innerHTML = 0;

let currentPlayer = P1;

btnRoll.addEventListener("click", rollFunc);

function rollFunc() {
  //Zar resminin random sayiya göre cagirilmasi
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  imgDice.src = `dice-${randomNumber}.png`;
  imgDice.style.visibility = "visible";

  //random sayinin currenta eklenmesi
  if (randomNumber === 1) {
    currentPlayer.currentScore = 0;
    changePlayer();
  } else {
    currentPlayer.currentScore += randomNumber;
    currentPlayer.showCurrentScore.innerHTML = currentPlayer.currentScore;
  }
}

function changePlayer() {
  currentPlayer.currentScore = 0;
  currentPlayer.showCurrentScore.innerHTML = currentPlayer.currentScore;
  P1.section.classList.toggle("player--active")
  P2.section.classList.toggle("player--active")
  currentPlayer = currentPlayer == P1 ? P2 : P1;
}



//Hold Button

btnHold.addEventListener("click", holdFunc);

function holdFunc(){
  currentPlayer.totalScore += currentPlayer.currentScore
  currentPlayer.showTotalScore.innerHTML = currentPlayer.totalScore;
  changePlayer();
}


//Newgame Button

btnNew.addEventListener("click", newGameFunc);

function newGameFunc(){
  location.reload();
}