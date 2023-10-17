// Toggle Class Active (Hamburger Menu)
const navbarNav = document.querySelector('.navbar-nav');

// Ketika Hamburger Menu Di Klik
document.querySelector('#hamburger-menu').onClick = () => {
    navbarNav.classList.toggle('active');
}

// Toggle Class Active (Search Form)
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onClick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Klik Di Luar Sidebar  Untuk Menghilankan Nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.claassList.remove('active');
    }
});





