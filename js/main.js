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

const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
   
};

//move slide to left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
});


//move slide to right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide);
});

// click on indicator
indicatorNav.addEventListener('click', e => {
    const targetInd = e.target.closest('button');
    console.log(e.targetInd);
    
});