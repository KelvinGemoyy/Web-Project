//* Toggle Class Active (Hamburger Menu)
const navbarNav = document.querySelector('.navbar-nav');

//* Ketika Hamburger Menu Di Klik
document.querySelector('#hamburger-menu').onClick = () => {
    navbarNav.classList.toggle('active');
}

//* Toggle Class Active (Search Form)
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onClick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

//* Klik Di Luar Event
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.claassList.remove('active');
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.claassList.remove('active');
    }
});





