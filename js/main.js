"use strict";

let pages;
let nav_btns;

let active_page = 0;

window.addEventListener("load", () => {
    pages = document.querySelectorAll(".page");
    nav_btns = document.querySelectorAll(".nav-btn");

    document.querySelectorAll(".next-page-btn")
        .forEach(btn => {
            btn.addEventListener("click", () => load_page(active_page + 1));
        });

    nav_btns.forEach((btn, i) => {
        btn.addEventListener("click", () => load_page(i));
    });

    // adding transition delays
    let skills = document.querySelectorAll(".skills .skill");
    for (let i = 1; i < skills.length; ++i)
        skills[i].style.animationDelay = `${50 * (i + 1)}ms`;

    document.querySelectorAll(".tools .skill")
        .forEach((el, i) => {
            el.style.animationDelay = `${50 * (skills.length + i + 1)}ms`;
        });

    document.querySelectorAll(".project:not(:first-child)")
        .forEach((el, i) => {
            el.style.animationDelay = `${100 + 50 * i}ms`;
        });

    // hiding other pages
    for (let i = active_page + 1; i < pages.length; ++i)
        pages[i].classList.add("page--inactive");
});

function load_page(page_no) {
    nav_btns[active_page].classList.remove("nav-btn--active");

    // making current page inactive
    pages[active_page].classList.add("page--inactive");
    pages[active_page].classList.remove("page--loaded");

    active_page = page_no;
    nav_btns[active_page].classList.add("nav-btn--active");
    pages[active_page].classList.remove("page--inactive");
    pages[active_page].classList.add("page--loaded");
}