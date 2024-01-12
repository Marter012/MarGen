const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 30) {
    nav.classList.add("navbar-change");
  } else {
    nav.classList.remove("navbar-change");
  }
});


/////////////////////////////////////////////////////////////////////////////////////////////////////

const sectionSlider = document.getElementById("section-slider");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

function setBgToBody() {
  sectionSlider.style.backgroundImage =
    slides[activeSlide].style.backgroundImage;
}

setBgToBody();

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}

rightBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sliderContainer = document.querySelector('.slider-container-Interiores')
const slideRight = document.querySelector('.right-slide-Interiores')
const slideLeft = document.querySelector('.left-slide-Interiores')
const upButton = document.querySelector('.up-button-Interiores')
const downButton = document.querySelector('.down-button-Interiores')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * (100)}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////


const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
        
    })
});

function removeActiveClass(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////


const about = document.getElementById("about");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 2396) {
    about.classList.add("activeAbout");
  } else {
    about.classList.remove("activeAbout");
  }
});

console.log(window.scrollY)