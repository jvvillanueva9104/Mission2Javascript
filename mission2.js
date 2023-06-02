'use strict'

// scores & random number generator
let secretNumber = Math.floor(Math.random() * 50) + 1;
let score = 50;
let highscore = 0;

// display message
const displayMessage =  (message) => {
  document.querySelector('.message').textContent = message;
};
// changing of main header when user guessed the correct number
const changeMain = (header1) => {
    document.querySelector('.mainHeader').textContent = header1;
};

// event listener  for check button. 
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    changeMain('You guessed it right! Congrats!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '30rem';
    // updating of highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong / score minus 1
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! Try again!' : 'Too low! Try again!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// again button / resets the score but keeps the highscore
document.querySelector('.again').addEventListener('click', () => {
  
  score = 50;
  secretNumber = Math.floor(Math.random() * 50) + 1;

  changeMain('Guess The Number!');
  
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';

  const message = document.querySelector('.message');
  message.innerHTML = 'Start guessing<span class="dot dot1">.</span><span class="dot dot2">.</span><span class="dot dot3">.</span>';
  
});


// fakePage js 

// fetching the elements by ID
const fake = document.querySelector('.fakePage');
const start = document.querySelector('#startBtn');
const plays = document.querySelector('#playText');
const insertCoin = document.querySelector('#insertCoin')

// function for the codes that will run when browser loads
let initializePage = () => {
  // Code to initialize the page
  plays.classList.add('animateDrop');
  start.classList.add('animateDropDelay');
  insertCoin.classList.add('animateDropDelay');
  start.style.display = 'none';
  // delay for the background color of the button to be applied
  setTimeout( () => {
    insertCoin.style.backgroundColor = 'rgb(23, 225, 23)';
    
    setTimeout( () => {
      plays.style.textShadow = '4px 4px 4px black';
    }, 1000);
  }, 3200);
}

// event that will trigger the codes above
document.addEventListener('DOMContentLoaded', () => {
  initializePage();
})


// event for the insertCoin btn 
insertCoin.addEventListener('click', () => {
  insertCoin.classList.add('animateSlideLeft');
  insertCoin.style.backgroundColor = 'white';
  plays.classList.add('animateSlideLeftDelay');
  
  setTimeout( () => {
  plays.textContent = 'Push Start!'
  plays.classList.toggle('animateSlideLeftDelay');
  plays.classList.add('animateDrop');
  setTimeout( () => {
  plays.classList.add('animateBounce');
  }, 2900);
  insertCoin.style.display = 'none';
  start.style.display = 'block';
}, 2500);

setTimeout( () => {
  start.style.backgroundColor = 'rgb(23, 225, 23)';
  setTimeout( () => {
  },1000);
}, 5000)
})

// event for the start btn
start.addEventListener('click', () => {
  plays.classList.toggle('animateBounce');
  plays.classList.remove('animateSlideLeftDelay');
  plays.classList.add('animateStartUp');
  start.classList.add('animateStartUpDelay');

  fake.classList.add('animateFakePageUp');
  start.classList.add('animateStartUp');
  insertCoin.classList.add('animateStartUp');

});
