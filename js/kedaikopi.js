// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika Hamburger Menu Di Klik
document.querySelector('#hamburger-menu').onClick = () => {
    navbarNav.classList.toggle('active');
}

// Klik Di Luar Sidebar  Untuk Menghilankan Nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.claassList.remove('active');
    }
});



