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
  console.log("clicked");

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
