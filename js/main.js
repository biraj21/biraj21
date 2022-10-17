"use strict";

let pages;
let navBtns;

let activePage = 0;

window.addEventListener("load", () => {
  pages = document.querySelectorAll(".page");
  navBtns = document.querySelectorAll(".nav-btn");

  document.querySelectorAll(".next-page-btn").forEach((btn) => {
    btn.addEventListener("click", () => loadPage(activePage + 1));
  });

  navBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => loadPage(i));
  });

  // adding transition delays
  let skills = document.querySelectorAll(".skills .skill");
  for (let i = 1; i < skills.length; ++i) {
    skills[i].style.animationDelay = `${50 * (i + 1)}ms`;
  }

  document.querySelectorAll(".tools .skill").forEach((el, i) => {
    el.style.animationDelay = `${50 * (skills.length + i + 1)}ms`;
  });

  document.querySelectorAll(".project:not(:first-child)").forEach((el, i) => {
    el.style.animationDelay = `${100 + 50 * i}ms`;
  });

  // hiding other pages
  for (let i = activePage + 1; i < pages.length; ++i) {
    pages[i].classList.add("page--inactive");
  }
});

function loadPage(pageNo) {
  navBtns[activePage].classList.remove("nav-btn--active");

  // making current page inactive
  pages[activePage].classList.add("page--inactive");
  pages[activePage].classList.remove("page--active");

  activePage = pageNo;
  navBtns[activePage].classList.add("nav-btn--active");
  pages[activePage].classList.remove("page--inactive");
  pages[activePage].classList.add("page--active");
}
