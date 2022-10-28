let data = document.getElementById("primary");
console.log(data);
data.innerText = "clog";

let hamburguerButton = document.getElementById("tablet-hamburguer");
console.log(hamburguerButton);
hamburguerButton.addEventListener("click", showSideBar);

const hamburguerSpanContent = document.querySelector(".hamburguer").innerHTML;
const hamClasses = document.querySelectorAll(".hamburguer");
const navElement = document.querySelector("nav");

console.log(navElement);

function showSideBar(e) {
  sideNavClasses = document.getElementById("sideNav");

  if (JSON.stringify(sideNavClasses.classList).includes("sideNavClosed")) {
    hamClasses[0].removeChild;
    hamClasses[1].append(hamburguerButton);
    navElement.classList.add("nav-push");
  } else {
    hamClasses[1].removeChild;
    hamClasses[0].append(hamburguerButton);
    navElement.classList.remove("nav-push");
  }
  sideNavClasses.classList.toggle("sideNavClosed");
}

// function overDropdown(e, ele) {
//   console.log("over");
//   console.log(ele);
//   console.log(e);

//   console.log(typeof ele);
//   console.log(overDropdown.caller);
// }

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
