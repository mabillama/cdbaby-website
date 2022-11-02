let data = document.getElementById("primary");
console.log(data);
data.innerText = "clog";

let hamburguerButton = document.getElementById("tablet-hamburguer");
console.log(hamburguerButton);
hamburguerButton.addEventListener("click", showSideBar);

const hamburguerSpanContent = document.querySelector(".hamburguer").innerHTML;
const hamClasses = document.querySelectorAll(".hamburguer");
const navElement = document.querySelector("nav");
const mainOverlay = document.getElementById("main-overflow");

console.log(navElement);

let isSideNavOpen = false;

function showSideBar(e) {
  sideNavClasses = document.getElementById("sideNav");

  if (JSON.stringify(sideNavClasses.classList).includes("sideNavClosed")) {
    hamClasses[0].removeChild;
    hamClasses[1].append(hamburguerButton);
    navElement.classList.add("nav-push");

    mainOverlay.classList.toggle("overflowed");

    let opacity = 0;
    let interval = setInterval(() => {
      let opacity = +mainOverlay.style.opacity + 0.4;

      mainOverlay.style.opacity = opacity.toString();
      if (opacity >= 1) {
        mainOverlay.style.opacity = "1";
        clearInterval(interval);
      }
    }, 50);
  } else {
    hamClasses[1].removeChild;
    hamClasses[0].append(hamburguerButton);
    navElement.classList.remove("nav-push");

    let opacity = 1;
    let interval = setInterval(() => {
      let opacity = +mainOverlay.style.opacity - 0.2;

      mainOverlay.style.opacity = opacity.toString();
      if (opacity <= 0) {
        mainOverlay.style.opacity = "0";

        const overlayTimeout = setTimeout(() => {
          mainOverlay.classList.toggle("overflowed");
        }, 500);

        clearInterval(interval);
      }
    }, 50);
  }
  sideNavClasses.classList.toggle("sideNavClosed");
}

const chips = document.getElementsByClassName("side-nav-chip");
for (let i = 0; i < chips.length; i++) {
  chips[i].addEventListener("click", clickChip);
}

const sidemenuLinks = document.getElementsByClassName("sidemenu-link");
for (let i = 0; i < chips.length; i++) {
  sidemenuLinks[i].addEventListener("keydown", pressChip);
}

function pressChip(e) {
  this.nextSibling.nextSibling.classList.toggle("closed-nav-submenu");
}

function clickChip(e) {
  this.previousSibling.previousSibling.classList.toggle("closed-nav-submenu");
}

// Preventing horizontal scroll
let scrollEventHandler = function () {
  window.scroll(0, window.scrollY);
};

window.addEventListener("scroll", scrollEventHandler, false);
