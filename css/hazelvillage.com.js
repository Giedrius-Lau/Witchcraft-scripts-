// var interval = window.setInterval(function () {
//     var cartSidebar = document.querySelector('footer');

//     if (cartSidebar) {
//         clearInterval(interval);

//         var wardrobeClone = document
//             .querySelector('#product-CA69E31E-01D2-4626-ACF9-A10A3AD8865E > main > div > main > div.ProductContent-options > div:nth-child(4) > div')
//             .cloneNode(true);

//         var wardrobeItems = document.querySelectorAll(
//             '#product-CA69E31E-01D2-4626-ACF9-A10A3AD8865E > main > div > main > div.ProductContent-options > div:nth-child(4) > div > div.ProductOptions > div li'
//         );

//         cartSidebar.prepend(wardrobeClone);

//         var appendedCollection = document.querySelectorAll('footer .ProductDropdown-content li');

//         appendedCollection.forEach((element) => {
//             element.addEventListener('click', function () {
//                 var elementId = element.getAttribute('productid');
//                 wardrobeItems.forEach(function (item) {
//                     var itemId = item.getAttribute('productid');
//                     if (itemId === elementId) {
//                         item.querySelector('button').click();
//                     }
//                 });
//             });
//         });
//     }
// }, 500);

setInterval(() => {
    var cartSidebar = document.querySelector('#shopify-section-header > aside.js-offcanvas.Offcanvas.OffcanvasCart');
    if (cartSidebar.classList.contains('is-expanded') && !document.querySelector('.ab-cart-upsel')) {
        var body = document.querySelector('body');

        if (body) {
            var cartUpsell = document.createElement('div');
            cartUpsell.setAttribute('class', 'ab-cart-upsel');
            cartUpsell.innerHTML =
                '<div class="row-1"> <h2>Added to Your Cart!</h2> <div class="row-1-products"> <div class="row-1-added-product"> </div> <div class="row-1-outfits"> </div> </div> </div><div class="row-2"><span class="row-2-title">Matching Childrenswear</span><span class="row-2-subtitle"> items match</span></div> <div class="row-3"></div>';

            body.append(cartUpsell);

            var lastAddedProduct = document.querySelector('#js-cart-drawer > div > div.CartDrawer-main > div:nth-child(2) > ul > li:nth-child(1) > div');
            var addedProduct = document.querySelector('.row-1-added-product');
            var outfits = document.querySelector('.row-1-outfits');
            var row2 = document.querySelector('.row-2');
            var productImage = lastAddedProduct.querySelector('.CartDrawerItem-imagePlaceholder.o-placeholder').cloneNode(true);
            var productTitle = lastAddedProduct.querySelector('.CartDrawerItem-title');
            var favoriteClothes = document
                .querySelector('div.ProductContent-options > div.ProductDropdown.is-active > div > div.ProductOptions > div')
                .cloneNode(true);
            var childwearBlock = document.querySelector('div.ProductContent-options > div:nth-child(4) > div > div.ProductOptions > div').cloneNode(true);
            var row2Subtitle = document.querySelector('.row-2-subtitle');

            var favoritClothesTitleName = document.createElement('div');
            favoritClothesTitleName.setAttribute('class', 'favorite-outfit-title');
            favoritClothesTitleName.innerHTML = productTitle.textContent + "'s Favorite Outfits";

            addedProduct.append(productImage);
            addedProduct.append(productTitle.cloneNode(true));
            outfits.append(favoritClothesTitleName);
            outfits.append(favoriteClothes);
            row2.append(childwearBlock);
            row2Subtitle.prepend(childwearBlock.querySelectorAll('li').length);
        }
    } else if (!cartSidebar.classList.contains('is-expanded') && document.querySelector('.ab-cart-upsel')) {
        document.querySelector('.ab-cart-upsel').remove();
    }
}, 500);

// var interval = window.setInterval(function () {
//     var body = document.querySelector('body');

//     if (body) {
//         clearInterval(interval);
//         var cartUpsell = document.createElement('div');
//         cartUpsell.setAttribute('class', 'ab-cart-upsel');
//         cartUpsell.innerHTML =
//             '<div class="row-1"> <h2>Added to Your Cart!</h2> <div class="row-1-products"> <div class="row-1-added-product"> </div> <div class="row-1-outfits"> </div> </div> </div>';

//         body.append(cartUpsell);

//         var lastAddedProduct = document.querySelector('#js-cart-drawer > div > div.CartDrawer-main > div:nth-child(2) > ul > li:nth-child(1) > div');
//         var productImage = lastAddedProduct.querySelector('.CartDrawerItem-imagePlaceholder.o-placeholder').cloneNode(true);
//         var addedProduct = document.querySelector('.row-1-added-product');

//         addedProduct.append(productImage);
//     }
// }, 500);

// FOR MOBILE
// function insertAfter(el, referenceNode) {
//     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
// }

// var interval = window.setInterval(function () {
//     var aside = document.querySelector('div.CartUpsell-container.CartUpsell-container--visible');

//     if (aside) {
//         clearInterval(interval);
//         var cartUpsell = document.createElement('div');
//         cartUpsell.setAttribute('class', 'ab-cart-upsel');
//         cartUpsell.innerHTML = 'TESTAS';

//         insertAfter(cartUpsell, aside);
//     }
// }, 500);
