const slider = document.querySelector('.slider');
let scrollSpeed = 1; // швидкість скролу
let isPaused = false;

function autoScroll() {
    if (!isPaused) {
        slider.scrollLeft += scrollSpeed;

      
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
            slider.scrollLeft = 0;
        }
    }

    requestAnimationFrame(autoScroll);
}


slider.addEventListener('mouseenter', () => {
    isPaused = true;
});

slider.addEventListener('mouseleave', () => {
    isPaused = false;
});

autoScroll();