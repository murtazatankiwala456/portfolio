let mobNav = document.querySelector(".hamburger-icons");
let mainNav = document.querySelector(".main-nav");

mobNav.addEventListener("click", mobileView);

function mobileView() {
  mobNav.classList.toggle("mobile-active");
  if (mainNav.style.display === "flex") {
    mainNav.style.display = "none";
  } else {
    mainNav.style.display = "flex";
  }
}
