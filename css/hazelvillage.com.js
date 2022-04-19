// function insertAfter(el, referenceNode) {
//     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
// }

// var createSingleProduct = function (handle, image, name, price) {
//     var singleProduct =
//         "<article class='GridItem' data-item-type='product' aria-hidden='false'> <div class='GridItem-imageContainer'> <a class='GridItem-link has-secondImage'" +
//         `href='/products/${handle}' aria-hidden='true' > <div class='GridItem-imagePlaceholder o-placeholder has-outline skeleton has-icon lazyloaded'` +
//         `data-bgset='${image} 480w, 640w,//cdn.shopify.com/s/files/1/1176/3548/products/70005_emc-greeting-cards_flat-lay_laid-out_1000x1000_f83659c2-5564-4e9e-8930-3d1b702df3fb_800x.jpg?v=1605214067 800w,//cdn.shopify.com/s/files/1/1176/3548/products/70005_emc-greeting-cards_flat-lay_laid-out_1000x1000_f83659c2-5564-4e9e-8930-3d1b702df3fb_960x.jpg?v=1605214067 960w,//cdn.shopify.com/s/files/1/1176/3548/products/70005_emc-greeting-cards_flat-lay_laid-out_1000x1000_f83659c2-5564-4e9e-8930-3d1b702df3fb_1024x.jpg?v=1605214067 1024w,//cdn.shopify.com/s/files/1/1176/3548/products/70005_emc-greeting-cards_flat-lay_laid-out_1000x1000_f83659c2-5564-4e9e-8930-3d1b702df3fb_1280x.jpg?v=1605214067 1280w' style='background-image: url("${image}");' > <img style='display: none;'></img> </div> </a> </div> <div class='GridItem-details'> <h3 class='GridItem-title'> <a class='GridItem-titleLink heading-6'` +
//         `href='/products/${handle}'>${name}</a>` +
//         `</h3> <div class='GridItem-extraDetails'> <div class='GridItem-price body-2'>$ ${price}</div> </div> </div> </article>`;
//     return singleProduct;
// };

// var ajaxSettings = {
//     async: true,
//     crossDomain: true,
//     url: 'https://hazelvillage.com/collections/dolls-animals/products.json?sort-by=best-selling',
//     method: 'GET',
// };

// if (document.querySelector('.ProductContent-options .ProductDropdown')) {
//     var productList = document.createElement('div');
//     productList.setAttribute('class', 'popular-products-collection');

//     $.ajax(ajaxSettings).done(function (response) {
//         response.products.slice(0, 10).forEach((product) => {
//             productList.innerHTML += createSingleProduct(product.handle, product.images[0].src, product.title, product.variants[0].price);
//         });
//     });

//     var buttonInterval = window.setInterval(function () {
//         var aTCButtons = document.querySelectorAll('.ProductSummary-add, .ProductButton ');
//         var body = document.querySelector('body');

//         if (aTCButtons) {
//             aTCButtons.forEach(function (button) {
//                 button.addEventListener('click', function () {
//                     body.classList.add('running-experience');
//                 });
//             });

//             document.querySelector('a.Header-iconLink.is-icon-cart.js-offcanvas-trigger').addEventListener('click', function () {
//                 body.classList.remove('running-experience');
//             });

//             clearInterval(buttonInterval);
//         }
//     }, 200);

//     setInterval(() => {
//         var cartSidebar = document.querySelector('#shopify-section-header > aside.js-offcanvas.Offcanvas.OffcanvasCart');
//         if (cartSidebar.classList.contains('is-expanded') && !document.querySelector('.ab-cart-upsel')) {
//             var body = document.querySelector('body');

//             if (body) {
//                 var cartUpsell = document.createElement('div');
//                 cartUpsell.setAttribute('class', 'ab-cart-upsel');
//                 cartUpsell.innerHTML =
//                     '<div class="row-1"> <h2>Added to Your Cart!</h2> <div class="row-1-products"> <div class="row-1-added-product"> </div> <div class="row-1-outfits"> </div> </div> </div><div class="row-2"><span class="row-2-title">Matching Childrenswear</span><span class="row-2-subtitle"> items match</span></div> <hr/><div class="row-3"><span class="row-3-title">Complete your Village</span><span class="row-3-subtitle"> items match</span></div>';

//                 if (window.innerWidth < 1200) {
//                     insertAfter(cartUpsell, document.querySelector('#js-cart-drawer > div > div.CartDrawer-main'));
//                 } else {
//                     body.append(cartUpsell);
//                 }

//                 var addedProduct = document.querySelector('.row-1-added-product');
//                 var outfits = document.querySelector('.row-1-outfits');
//                 var row2 = document.querySelector('.row-2');
//                 var row3 = document.querySelector('.row-3');
//                 var productImage = document
//                     .querySelector('ul.ProductGallery-images.js-product-gallery > li.ProductGallery-image > .o-placeholder')
//                     .cloneNode(true);
//                 var productTitle = document.querySelector('main > div.ProductContent-header > div > h1');
//                 var favoriteClothes = document
//                     .querySelector('div.ProductContent-options > div.ProductDropdown:nth-child(2) > div > div.ProductOptions > div')
//                     .cloneNode(true);
//                 var childwearBlock = document.querySelector('div.ProductContent-options > div:nth-child(4) > div > div.ProductOptions > div').cloneNode(true);
//                 var row2Subtitle = document.querySelector('.row-2-subtitle');
//                 var row3Subtitle = document.querySelector('.row-3-subtitle');

//                 var favoritClothesTitleName = document.createElement('div');
//                 favoritClothesTitleName.setAttribute('class', 'favorite-outfit-title');
//                 favoritClothesTitleName.innerHTML = productTitle.textContent + "'s Favorite Outfits";

//                 addedProduct.append(productImage);
//                 addedProduct.append(productTitle.cloneNode(true));
//                 outfits.append(favoritClothesTitleName);
//                 outfits.append(favoriteClothes);
//                 row2.append(childwearBlock);
//                 row3.append(productList);
//                 row2Subtitle.prepend(childwearBlock.querySelectorAll('li').length);
//                 row3Subtitle.prepend(productList.querySelectorAll('article').length);

//                 //Functionality for row 1
//                 document.querySelectorAll('.row-1 .ProductOptions-list li').forEach(function (item) {
//                     item.addEventListener('click', function () {
//                         document.querySelector('header > div > a.Header-iconLink.is-icon-cart.js-offcanvas-trigger').click();

//                         document.querySelectorAll('span.ProductDropdown-title.heading-6.heading-5-lg').forEach(function (title) {
//                             if (title.textContent.includes('Outfit')) {
//                                 if (!title.parentNode.parentNode.classList.contains('is-active')) {
//                                     title.parentNode.click();
//                                     var body = document.querySelector('body');

//                                     body.classList.remove('running-experience');
//                                 }
//                                 title.scrollIntoView();
//                             }
//                         });
//                     });
//                 });

//                 //Functionality for row 2
//                 document.querySelectorAll('.row-2 li.ProductOptions-item').forEach(function (item) {
//                     item.addEventListener('click', function () {
//                         document.querySelector('header > div > a.Header-iconLink.is-icon-cart.js-offcanvas-trigger').click();

//                         document.querySelectorAll('span.ProductDropdown-title.heading-6.heading-5-lg').forEach(function (title) {
//                             if (title.textContent.includes('Children')) {
//                                 if (!title.parentNode.parentNode.classList.contains('is-active')) {
//                                     title.parentNode.click();
//                                     var body = document.querySelector('body');

//                                     body.classList.remove('running-experience');
//                                 }
//                                 title.scrollIntoView();
//                             }
//                         });
//                     });
//                 });

//                 var slickSettings = {
//                     dots: false,
//                     infinite: true,
//                     slidesToShow: 5,
//                     slidesToScroll: 1,
//                     arrows: true,
//                     responsive: [
//                         {
//                             breakpoint: 1199,
//                             settings: {
//                                 slidesToShow: 2,
//                                 arrows: false,
//                                 slidesToScroll: 1,
//                                 centerMode: true,
//                                 centerPadding: '60px',
//                             },
//                         },
//                     ],
//                 };

//                 jQuery('div.row-2 > .ProductOptions-list').slick(slickSettings);

//                 jQuery('div.row-3 > .popular-products-collection').slick(slickSettings);
//             }
//         } else if (!cartSidebar.classList.contains('is-expanded') && document.querySelector('.ab-cart-upsel')) {
//             document.querySelector('.ab-cart-upsel').remove();
//         }
//     }, 500);
// }
