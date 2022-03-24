let pages;
let nav_btns;

let active_page = 0;

window.addEventListener("load", () => {
    pages = document.querySelectorAll(".page");

    document.querySelectorAll(".next-page-btn")
        .forEach(btn => {
            btn.addEventListener("click", () => load_page(active_page + 1));
        });

    nav_btns = document.querySelectorAll(".nav-btn");
    nav_btns.forEach((btn, i) => {
        btn.addEventListener("click", () => load_page(i));
    });

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