//Menu on Mobile up to min width: 45em

//Get Elements

const openBtn = document.querySelector(".open-nav");
const navMenu = document.querySelector(".menu-nav-mobile");
const closeBtn = document.querySelector(".close-nav");

const aboutLink = document.querySelector("#js-about");
const skillsLink = document.querySelector("#js-skills");
const projectsLink = document.querySelector("#js-projects");
const contactLink = document.querySelector("#js-contact");


//Open the menu

openBtn.addEventListener("click", () => {
  navMenu.classList.add("navigation-open");
});

//Close the menu
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("navigation-open");
});


//Get to about section
aboutLink.addEventListener("click", () => {
  navMenu.classList.remove("navigation-open");
});

//Get to skills section
skillsLink.addEventListener("click", () => {
  navMenu.classList.remove("navigation-open");
});

//Get to projects section
projectsLink.addEventListener("click", () => {
  navMenu.classList.remove("navigation-open");
});

//Get to contact section
contactLink.addEventListener("click", () => {
  navMenu.classList.remove("navigation-open");
});

