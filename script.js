//Menu on mobile

//Get elements
const closeBtn = document.querySelector(".close-nav");
const openBtn = document.querySelector(".open-nav");
const navMenu = document.querySelector(".menu-nav-mobile");

//Attach eventlisteners and toggle navigation-open class
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("navigation-open");
});

openBtn.addEventListener("click", () => {
  navMenu.classList.add("navigation-open");
});

//Get to sections from mobile menu
const aboutLink = document.querySelector("#js-about");
const skillsLink = document.querySelector("#js-skills");
const projectsLink = document.querySelector("#js-projects");
const contactLink = document.querySelector("#js-contact");

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

