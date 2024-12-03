// Slider Variables
const isaac_slider = document.querySelector('.isaac-slider');
const slider = document.querySelector('.slider-images');
const sliderImages = document.querySelectorAll('.slider-images img');
const trigger = document.querySelector('.trigger');
let size = sliderImages[0].clientWidth;

// Auto-play Variables
let autoPlayInterval;

// Initialize Counter
let counter = 0;

// Create Dots for Each Image
sliderImages.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.dataset.index = index;
  trigger.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Highlight the First Dot
dots[counter].classList.add('colored');

// Auto-play Function
function autoPlay() {
  autoPlayInterval = setInterval(() => {
    moveRight();
  }, 2000);
}

// Initialize Auto-play
autoPlay();

// Stop Auto-play on Hover
isaac_slider.addEventListener('mouseenter', () => {
  clearInterval(autoPlayInterval);
});

// Resume Auto-play on Mouse Leave
isaac_slider.addEventListener('mouseleave', () => {
  autoPlay();
});

// Add a CSS transition property to the slider for smooth transitions
slider.style.transition = 'transform 0.8s cubic-bezier(0.9, -0.04, 0.71, 1.05)';

// Move Right Function
function moveRight() {
  counter++;
  if (counter >= sliderImages.length) {
    counter = 0;
    // Move directly to the first image without going through others
    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${size}px)`;
    setTimeout(() => {
      slider.style.transition = 'transform 0.8s cubic-bezier(0.9, -0.04, 0.71, 1.05)';
    }, 0);
  }
  updateSlider();
}

// Move Left Function
function moveLeft() {
  counter--;
  if (counter < 0) {
    counter = sliderImages.length - 1;
    // Move directly to the last image without going through others
    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${size * counter}px)`;
    setTimeout(() => {
      slider.style.transition = 'transform 0.8s cubic-bezier(0.9, -0.04, 0.71, 1.05)';
    }, 0);
  }
  updateSlider();
}

// Update Slider Position
function updateSlider() {
  slider.style.transform = `translateX(-${counter * size}px)`;

  // Add Event Listeners to Arrow Icons
  const leftArrow = document.querySelector('.icon-leftGalaxyShip');
  const rightArrow = document.querySelector('.icon-rightGalaxyShip');

  leftArrow.addEventListener('click', moveLeft);
  rightArrow.addEventListener('click', moveRight);

  // Highlight the Current Dot
  dots.forEach((dot) => dot.classList.remove('colored'));
  dots[counter].classList.add('colored');
}

// Handle Dot Click
dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    counter = parseInt(dot.dataset.index);
    updateSlider();
  });
});