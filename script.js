const cards = document.querySelectorAll('.memory-card');
const imageContainer = document.querySelector('.tv-screen');
const image = document.querySelector('.tv-screen-one');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let currentImageIndex = 1;
const totalImages = 3;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flipped');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

setTimeout(function() {
    var laadscherm = document.getElementById('laadscherm');
    laadscherm.style.display = 'none';
  }, 1000);

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));


imageContainer.addEventListener('click', () => {
  currentImageIndex++;
  if (currentImageIndex > totalImages) {
    currentImageIndex = 1;
  }
  const nextImageSrc = `tv-img/${currentImageIndex}.png`;
  image.src = nextImageSrc;
});

