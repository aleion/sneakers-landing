const track = document.querySelector('.carousel');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.right_control');
const prevButton = document.querySelector('.left_control');
const indicatorNav = document.querySelector('.indicator-list')
const indicators = Array.from(indicatorNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slide next to the other

const setSlidePosition = (slide , index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);







//move slide to left
//move slide to right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    const currentImg = currentSlide.querySelector('.sneaker_jpg');
    const nextImg = nextSlide.querySelector('.sneaker_jpg');
    const currentText = currentSlide.querySelector('.sneaker_information');
    const nextText = nextSlide.querySelector('.sneaker_information');
    
    track.style.transform = 'translateX(-' + amountToMove + ')';
    nextImg.classList.remove('nextImg');
    nextImg.classList.add('currentImg');
    nextText.classList.remove('nextText');
    nextText.classList.add('currentText');
    
    
})

// click on indicator
