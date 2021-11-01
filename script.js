//Menu on Mobile up to min width: 35em

//Get Elements

const openBtn = document.querySelector(".open-nav");
const navMenu = document.querySelector(".menu-nav-mobile");
const closeBtn = document.querySelector(".close-nav");

//Open the menu

openBtn.addEventListener("click", () => {
  navMenu.classList.add("navigation-open");
});

//Close the menu
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("navigation-open");
});

