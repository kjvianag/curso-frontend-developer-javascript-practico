const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMobileMenu = document.querySelector('.btnMobileMenu');
const MobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.shoppingCart');
const productDetail = document.querySelector('.product-detail');


navbarEmail.addEventListener('click',toggleDesktopMenu);
btnMobileMenu.addEventListener('click',toggleMobileMenu);
shoppingCart.addEventListener('click',toggleProductDetail);

function toggleDesktopMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }

    MobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
    const isMobileMenuClosed = MobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        MobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}