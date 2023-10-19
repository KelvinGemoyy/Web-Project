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

// Toggle Class Active Untuk Shopping Cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onClick = () => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

//* Klik Di Luar Event
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');


document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.claassList.remove('active');
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.claassList.remove('active');
    }

    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.claassList.remove('active');
    }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButton = document.querySelector('.item-detail-button');

itemDetailButton.onClick = (e) =>  {
    itemDetailButton.style.display = 'flex';
    e.preventDefault();
}






