const imageContainer = document.querySelector('.image-container');
const image = imageContainer.querySelector('img');
const closeButton = imageContainer.querySelector('.close-button');

image.addEventListener('click', () => {
  imageContainer.classList.add('enlarged');
});

closeButton.addEventListener('click', () => {
  imageContainer.classList.remove('enlarged');
});