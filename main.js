///////////////////////////////////////// NAVBAR //////////////////////////////////////////

const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 30) {
    nav.classList.add("navbar-change");
  } else {
    nav.classList.remove("navbar-change");
  }
});

///////////////////////////////////////// NAVBAR BURGER //////////////////////////////////////////

const btnBurger = document.getElementById("btnBurger");
const itemsBurger = document.getElementById("itemsBurger");
console.log(itemsBurger)
const toggleMenu = () => {
  if(!itemsBurger.classList.contains("activeMenu")){
    itemsBurger.classList.add("activeMenu")
  }else{
    itemsBurger.classList.remove("activeMenu")
  }
}

btnBurger.addEventListener("click",toggleMenu)


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
///////////////////////////////////////// SLIDER DOUBLE //////////////////////////////////////////

const sliderContainer = document.querySelector(".sliderDoubleContainer");
const slideRight = document.querySelector(".rightSlideDouble");
const slideLeft = document.querySelector(".leftSlideDouble");
const upButton = document.querySelector(".upBtnSlideDouble");
const downButton = document.querySelector(".downBtnSlideDouble");
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

const aboutMedia = (width) => {
  if (window.scrollY >= width && window.scrollY <= width + window.innerHeight) {
    aboutLeft.classList.add("activeAbout");
    aboutRight.classList.add("activeAbout");
  } else {
    aboutLeft.classList.remove("activeAbout");
    aboutRight.classList.remove("activeAbout");
  }
}

const aboutToggle = () => {
  if(window.innerWidth == 360){
    console.log("f")
    aboutMedia(3000);
  }else{
    aboutMedia(2000)
  }
};

window.addEventListener("scroll", aboutToggle);

///////////////////////////////////////// MATERIAL //////////////////////////////////////////

const materialCards = document.getElementsByClassName("materialCards");
const materialSpan = document.getElementsByClassName("materialSpan");

const materialMedia = (width) => {
  if (window.scrollY >= width && window.scrollY) {
    for (let cards of materialCards) {
      cards.classList.add("toggleMaterial");
    }
    for (let card of materialSpan) {
      card.classList.add("animationMaterial");
    }
  } else {
    for (let item of materialCards) {
      item.classList.remove("toggleMaterial");
    }
    for (let card of materialSpan) {
      card.classList.remove("animationMaterial");
    }
  }
}

const materialToggle = () => {
  if(window.innerWidth == 360){
    console.log("hola")
    materialMedia(3600)
  }else{
    materialMedia(2800)
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
