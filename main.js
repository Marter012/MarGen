///////////////////////////////////////// NAVBAR //////////////////////////////////////////

const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 30) {
    nav.classList.add("navbar-change");
  } else {
    nav.classList.remove("navbar-change");
  }
});

///////////////////////////////////////// SLIDER IMG //////////////////////////////////////////

const sectionSlider = document.getElementById("section-slider");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

const setBgToBody = () => {
  sectionSlider.style.backgroundImage =
    slides[activeSlide].style.backgroundImage;
};
const setActiveSlide = () => {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
};

const activeRigthBtn = () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgToBody();
  setActiveSlide();
};

const activeLeftBtn = () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
};

setBgToBody();
leftBtn.addEventListener("click", activeLeftBtn);
rightBtn.addEventListener("click", activeRigthBtn);

///////////////////////////////////////// SLIDER CATEGORY IMG //////////////////////////////////////////

const sliderContainer = document.querySelector(".slider-container-category");
const slideRight = document.querySelector(".right-slide-category");
const slideLeft = document.querySelector(".left-slide-category");
const upButton = document.querySelector(".up-button-category");
const downButton = document.querySelector(".down-button-category");
const slidesLength = slideRight.querySelectorAll("div").length;
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 110}vh`;

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

///////////////////////////////////////// ABOUT //////////////////////////////////////////

const about = document.getElementById("About");
const aboutLeft = document.getElementById("aboutLeft");
const aboutRight = document.getElementById("aboutRight");

const aboutToggle = () => {
  if (window.scrollY >= 2000 && window.scrollY <= 2000 + window.innerHeight) {
    aboutLeft.classList.add("activeAbout");
    aboutRight.classList.add("activeAbout");
  } else {
    aboutLeft.classList.remove("activeAbout");
    aboutRight.classList.remove("activeAbout");
  }
};

window.addEventListener("scroll", aboutToggle);

///////////////////////////////////////// MATERIAL //////////////////////////////////////////

const materialCards = document.getElementsByClassName("material-Cards");
const materialSpan = document.getElementsByClassName("material-Span");

const materialToggle = () => {
  if (window.scrollY >= 2700 && window.scrollY) {
    for (let cards of materialCards) {
      cards.classList.add("toggle-Material");
    }
    for (let card of materialSpan) {
      card.classList.add("animation-Material");
    }
  } else {
    for (let item of materialCards) {
      item.classList.remove("toggle-Material");
    }
    for (let card of materialSpan) {
      card.classList.remove("animation-Material");
    }
  }
};

window.addEventListener("scroll", materialToggle);

///////////////////////////////////////// FOOTER //////////////////////////////////////////

const panels = document.querySelectorAll(".panel");
const networks = document.querySelectorAll(".networks");
const instagram = document.getElementById("instagram");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const removeActiveClass = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});

const setBackgroundInstagram = () => {
  if (instagram.classList.contains("active")) {
    instagram.classList.add("instagram");
    email.classList.remove("email");
    phone.classList.remove("phone");
  }
};

const setBackgroundEmail = () => {
  if (email.classList.contains("active")) {
    instagram.classList.remove("instagram");
    email.classList.add("email");
    phone.classList.remove("phone");
  }
};

const setBackgroundPhone = () => {
  if (phone.classList.contains("active")) {
    instagram.classList.remove("instagram");
    email.classList.remove("email");
    phone.classList.add("phone");
  }
  console.log(phone.classList.contains("active"));
};

instagram.addEventListener("click", setBackgroundInstagram);
email.addEventListener("click", setBackgroundEmail);
phone.addEventListener("click", setBackgroundPhone);
