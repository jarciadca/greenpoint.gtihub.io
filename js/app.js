
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const icd = entry.target.getAttribute("id");
    const menuLink = document.querySelector(`.menu a[href^="#${icd}"]`)

    if (entry.isIntersecting) {
      document.querySelector(".menu a.selected").classList.remove("selected");
      menuLink.classList.add("selected");
    }
  })
}, {rootMargin: "-40% 0px -60% 0px"});

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", function() {
    menu.classList.remove("menu_opened");
  })

  const hash = menuLink.getAttribute('href');
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});

/*
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

*/



const navmenu = document.querySelector(".nav-menu");
const openNavmenuBtn = document.querySelector(".nav-toggle");
const closeNavmenuBtn = document.querySelector(".nav-toggle-cerrar");

function toggleNavmenu() {
  navmenu.classList.toggle("nav-menu_opened");
}

openNavmenuBtn.addEventListener("click", toggleNavmenu);
closeNavmenuBtn.addEventListener("click", toggleNavmenu);

const navmenuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');


const navobserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const icd = entry.target.getAttribute("id");
    const navmenuLink = document.querySelector(`.nav-menu a[href^="#${icd}"]`)

    if (entry.isIntersecting) {
      document.querySelector(".nav-menu a.selectedd").classList.remove("selectedd");
      navmenuLink.classList.add("selectedd");
    }
  })
}, {rootMargin: "-40% 0px -60% 0px"});




navmenuLinks.forEach(navmenuLink => {
  navmenuLink.addEventListener("click", function() {
    navmenu.classList.remove("nav-menu_opened");
  })

  const navhash = navmenuLink.getAttribute('href');
  const navtarget = document.querySelector(navhash);
  if (navtarget) {
    navobserver.observe(navtarget);
  }


});
