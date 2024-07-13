const headerEl = document.getElementById("header");
const headerImg = document.getElementById("scrollImage");
const headerLink = document.getElementsByClassName("header__link");
const headerNav = document.querySelector(".header__nav");
const headerNum = document.getElementById("header-number");
const headerH = headerNav.offsetHeight;

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;

  for (var i = 0; i < headerLink.length; i++) {
    if (scrollPos >= 450) {
      headerLink[i].classList.add("fixed-link");
    } else {
      headerLink[i].classList.remove("fixed-link");
    }
  }

  if (scrollPos >= 450) {
    headerEl.classList.add("fixed");
    headerImg.src = "./images/logo-black.svg";
    headerNum.classList.add("fixed-number");
  } else {
    headerEl.classList.remove("fixed");
    headerImg.src = "./images/YourTour.svg";
    headerNum.classList.remove("fixed-number");
  }
});

const checkboxStroke = document.querySelector(".checkbox");

checkboxStroke.addEventListener("click", function () {
  checkboxStroke.classList.add("stroke");
});

document.getElementById("resetButton").addEventListener("click", function () {
  checkboxStroke.classList.remove("stroke");
  document.getElementById("check-yes").checked = false;
  document.getElementById("check-not").checked = false;
});

function changeColor() {
  var select = document.getElementById("mySelect");
  select.style.color = "black";
}

function changeColorBefore() {
  var date = document.getElementById("myDateBefore");
  date.style.color = "black";
}

function changeColorAfter() {
  var date = document.getElementById("myDateAfter");
  date.style.color = "black";
}

document.addEventListener("DOMContentLoaded", function () {
  const detailsBtn = document.querySelectorAll(".service");

  detailsBtn.forEach((item) => {
    item.addEventListener("click", function () {
      detailsBtn.forEach((nav) => nav.classList.remove("btn-styled"));
      this.classList.add("btn-styled");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const detailsBtn = document.querySelectorAll(".story");

  detailsBtn.forEach((item) => {
    item.addEventListener("click", function () {
      detailsBtn.forEach((nav) => nav.classList.remove("btn-styled"));
      this.classList.add("btn-styled");
    });
  });
});
