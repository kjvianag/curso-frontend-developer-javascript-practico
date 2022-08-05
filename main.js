const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMobileMenu = document.querySelector('.movil-menu');
const MobileMenu = document.querySelector('.mobile-menu');


navbarEmail.addEventListener('click',toggleDesktopMenu);
btnMobileMenu.addEventListener('click',toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    MobileMenu.classList.toggle('inactive');
}