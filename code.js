const card = document.querySelectorAll('.memory-card');
const imageContainer = document.querySelector('.tv-screen');
const image = document.querySelector('.tv-screen-one');
var memoryCards = document.querySelectorAll('.memory-card');
const totalImages = 6;
let currentImageIndex = 1;




card.forEach(card => {
	card.addEventListener('click', event => {
		console.log('click!')
	})
})

imageContainer.addEventListener('click', () => {
  currentImageIndex++;
  if (currentImageIndex > totalImages) {
    currentImageIndex = 1;
  }
  const nextImageSrc = `tv-img/${currentImageIndex}.png`;
  image.src = nextImageSrc;
});

memoryCards.forEach(function(card) {
  card.addEventListener('click', function() {
    card.classList.toggle('flip');
  });
});