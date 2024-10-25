const headerEl = document.getElementById("header");
const headerImg = document.getElementById("scroll-image");
const headerLink = document.getElementsByClassName("header__item");
const headerNav = document.querySelector(".header__nav");
const headerNum = document.getElementById("header-number");
const headerH = headerNav.offsetHeight;

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;
  const headerHeight = headerEl.offsetHeight;

  if (scrollPos >= 450) {
    headerEl.classList.add("header__nav_position_fixed");
    headerImg.src = "./images/logo_black.svg";
    headerNum.classList.add("header__number_position_fixed");

    if (!document.querySelector(".header-placeholder")) {
      const placeholder = document.createElement("div");
      placeholder.style.height = `${headerHeight}px`;
      placeholder.classList.add("header-placeholder");
      headerEl.parentNode.insertBefore(placeholder, headerEl);
    }
  } else {
    headerEl.classList.remove("header__nav_position_fixed");
    headerImg.src = "./images/logo_white.svg";
    headerNum.classList.remove("header__number_position_fixed");

    const placeholder = document.querySelector(".header-placeholder");
    if (placeholder) {
      placeholder.parentNode.removeChild(placeholder);
    }
  }

  for (let i = 0; i < headerLink.length; i++) {
    if (scrollPos >= 450) {
      headerLink[i].classList.add("header__item_position_fixed");
    } else {
      headerLink[i].classList.remove("header__item_position_fixed");
    }
  }
});

const checkboxStroke = document.querySelector(".tours-form__pseudo-checkbox");

checkboxStroke.addEventListener("click", function () {
  checkboxStroke.classList.toggle("tours-form__stroke");
});

document.getElementById("reset-button").addEventListener("click", function () {
  document.getElementById("check-yes").checked = false;
  document.getElementById("check-not").checked = false;

  const selectElement = document.getElementById("my-select");
  selectElement.selectedIndex = 0;
  selectElement.style.color = "gray";

  selectElement.addEventListener("change", function () {
    selectElement.style.color = selectElement.value === "" ? "gray" : "black";
  });
});

function changeColor() {
  var select = document.getElementById("my-select");
  if (select.value !== "") {
    select.classList.add("selected");
  } else {
    select.classList.remove("selected");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const detailsBtn = document.querySelectorAll(".choose-tour__btn");

  detailsBtn.forEach((item) => {
    item.addEventListener("click", function () {
      detailsBtn.forEach((nav) =>
        nav.classList.remove("choose-tour__btn_state-active")
      );
      this.classList.add("choose-tour__btn_state-active");
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

const phoneInput = document.getElementById("phone");
const mask = new IMask(phoneInput, {
  mask: "+{7}(000)000-00-00",
});

const dateInput = document.getElementById("date-before");
const maskDate = new IMask(dateInput, {
  mask: "00.00.0000",
});

const dateAfterInput = document.getElementById("date-after");
const maskAfterDate = new IMask(dateAfterInput, {
  mask: "00.00.0000",
});

function setActive(button) {
  const buttons = document.getElementsByClassName("main__link");
  Array.from(buttons).forEach((btn) =>
    btn.classList.remove("main__link_state_active")
  );
  button.classList.add("main__link_state_active");
}

const inputDate = document.getElementById("date-before");
const inputDateAfter = document.getElementById("date-after");

function validateDate(inputElement) {
  const value = inputElement.value;

  const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;

  if (datePattern.test(value)) {
    const [day, month, year] = value.split(".").map(Number);

    const date = new Date(year, month - 1, day);

    if (
      date.getDate() === day &&
      date.getMonth() === month - 1 &&
      date.getFullYear() === year
    ) {
      const minDate = new Date(2024, 0, 1);
      const maxDate = new Date(2024, 11, 31);

      if (date < minDate || date > maxDate) {
        inputElement.value = "";
        alert("Дата должна быть в диапазоне с 01.01.2024 по 31.12.2024.");
      }
    } else {
      inputElement.value = "";
      alert("Введите корректную дату.");
    }
  }
}

inputDate.addEventListener("blur", function () {
  validateDate(inputDate);
});

inputDateAfter.addEventListener("blur", function () {
  validateDate(inputDateAfter);
});

document
  .getElementById("tour-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
