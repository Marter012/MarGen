///////////////////////////////////////// FUNCTIONS ///////////////////////////////////////

const animationOnScroll = (variante) => {
  return window.scrollY >= variante.offsetTop - window.innerHeight * 0.5;
};

const animationOffScroll = (variante) => {
  return !(window.scrollY >= variante.offsetTop + window.innerHeight * 0.5);
};

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
const toggleMenu = () => {
  if (!itemsBurger.classList.contains("activeMenu")) {
    itemsBurger.classList.add("activeMenu");
  } else {
    itemsBurger.classList.remove("activeMenu");
  }
};

btnBurger.addEventListener("click", toggleMenu);

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

const holder = document.getElementById("holder");
const rowSliders = document.getElementById("rowSliders");
let indexButton = 1;

const renderInterioresIMG = (imgTop) => {
  const { id, img, desc, title } = imgTop;
  return `
  <div class="sliders">
    <div id="box1" class="slidersInfo">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
    <img
      src=${img}
      alt={${title}}
    />
  </div>
`;
};

const renderHolderIMG = (sliders) => {
  holder.innerHTML = sliders.map(renderInterioresIMG).join("");
};

const renderInterioresIMGBottom = (imgBottom) => {
  const { img, id, title } = imgBottom;
  return `
  <div class="columnSliders">
    <img
      class="slideThumbnail"
      src=${img}
      onclick="currentSlide(${id})"
      alt=${title}
    />
  </div>
  `;
};

const renderHolderIMGBottom = (sliders) => {
  rowSliders.innerHTML = sliders.map(renderInterioresIMGBottom).join("");
};

renderHolderIMGBottom(descInteriores);
renderHolderIMG(descInteriores);

const updateIndexImg = (value) => {
  indexButton = value;
  updateSlidersImg(indexButton);
};

function updateSlidersImg(index) {
  if (index == 1) {
    renderHolderIMGBottom(descInteriores);
    renderHolderIMG(descInteriores);
  } else if (index == 2) {
    renderHolderIMGBottom(descExteriores);
    renderHolderIMG(descExteriores);
  }
  showSlides(slideIndex);
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("sliders");
  var dots = document.getElementsByClassName("slideThumbnail");
  const box1 = document.getElementById("box1");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // slides[i].style.display = "inline";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("activeSliders", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  // slides[slideIndex-1].style.display = "inline";
  dots[slideIndex - 1].className += " activeSliders";
  let num = Math.floor(Math.random() * 2);
  if (num == 1) {
    box1.classList.toggle("box1");
  }
}
///////////////////////////////////////// ABOUT //////////////////////////////////////////

const about = document.getElementById("About");
const aboutLeft = document.getElementById("aboutLeft");
const aboutRight = document.getElementById("aboutRight");

const aboutToggle = () => {

  if (animationOnScroll(about) && animationOffScroll(about)) {
    aboutLeft.classList.add("activeAbout");
    aboutRight.classList.add("activeAbout");
  } else {
    aboutLeft.classList.remove("activeAbout");
    aboutRight.classList.remove("activeAbout");
  }
};

window.addEventListener("scroll", aboutToggle);

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
};

instagram.addEventListener("click", setBackgroundInstagram);
email.addEventListener("click", setBackgroundEmail);
phone.addEventListener("click", setBackgroundPhone);
