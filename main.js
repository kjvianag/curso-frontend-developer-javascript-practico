const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const btnMobileMenu = document.querySelector('.btnMobileMenu');
const MobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.shoppingCart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.cards-container');


navbarEmail.addEventListener('click',toggleDesktopMenu);
btnMobileMenu.addEventListener('click',toggleMobileMenu);
shoppingCart.addEventListener('click',toggleProductDetail);

function toggleDesktopMenu() {
    const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        shoppingCartContainer.classList.add('inactive');
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

    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
name: 'Pantalla',
price: 150,
image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Compu',
    price: 900,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info'); 

        const productInfoDiv = document.createElement('div');

        const producPrice = document.createElement('p');
        producPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(producPrice);
        productInfoDiv.appendChild(productName);

        const productInfigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardContainer.appendChild(productCard);
    }
}

renderProducts(productList);