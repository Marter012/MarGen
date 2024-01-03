const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 30) {
        nav.classList.add('navbar-change');
    } else {
        nav.classList.remove('navbar-change');
    }
})

const sectionSlider = document.getElementById("section-slider");
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

function setBgToBody() {
    sectionSlider.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

setBgToBody();

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));

    slides[activeSlide].classList.add('active');
};

rightBtn.addEventListener('click', () => {
    activeSlide++;

    if(activeSlide > slides.length - 1) {
        activeSlide = 0;
    };

    setBgToBody();
    setActiveSlide();
});

leftBtn.addEventListener('click', () => {
    activeSlide--;

    if(activeSlide < 0) {
        activeSlide = slides.length -1;
    };

    setBgToBody();
    setActiveSlide();
});
