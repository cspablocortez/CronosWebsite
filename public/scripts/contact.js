// const inputs = document.querySelectorAll(".input");

// function focusFunc() {
//   let parent = this.parentNode;
//   parent.classList.add("focus");
// }

// function blurFunc() {
//   let parent = this.parentNode;
//   if (this.value == "") {
//     parent.classList.remove("focus");
//   }
// }

// inputs.forEach((input) => {
//   input.addEventListener("focus", focusFunc);
//   input.addEventListener("blur", blurFunc);
// });

const formatNumber = () => {
    const phoneInput = document.getElementById("phone-input");
    const number = phoneInput.value;
    const areaCode   = number.slice(0, 3);
    const middlePart = number.slice(3, 6);
    const lastPart   = number.slice(6, 10);
    const formattedNumber = number.length === 10 ? `(${areaCode})-${middlePart}-${lastPart}` : "";
    phoneInput.innerText = formattedNumber;
}


var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();