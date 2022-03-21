let pages;

let active_page = 0;

window.onload = e => {
    pages = document.querySelectorAll(".page");

    document.querySelectorAll(".next-page-btn")
        .forEach(btn => btn.onclick = load_next_page);

    for (let i = active_page + 1; i < pages.length; ++i)
        pages[i].classList.add("page--inactive");
};

function load_next_page(e) {
    // makeing current page inactive
    pages[active_page].classList.add("page--inactive");

    // making next page active
    ++active_page;
    pages[active_page].classList.remove("page--inactive");
}