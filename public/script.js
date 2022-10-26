let data = document.getElementById("primary");
console.log(data);
data.innerText = "clog";

let hamburguerButton = document.getElementById("tablet-hamburguer");
console.log(hamburguerButton);
hamburguerButton.addEventListener("click", showSideBar);

const hamburguerSpanContent = document.querySelector(".hamburguer").innerHTML;
const hamClasses = document.querySelectorAll(".hamburguer");

function showSideBar(e) {
  console.log("clicked");

  sideNavClasses = document.getElementById("sideNav");

  if (JSON.stringify(sideNavClasses.classList).includes("sideNavClosed")) {
    hamClasses[0].removeChild;
    hamClasses[1].append(hamburguerButton);
  } else {
    hamClasses[1].removeChild;
    hamClasses[0].append(hamburguerButton);
  }
  sideNavClasses.classList.toggle("sideNavClosed");
}
