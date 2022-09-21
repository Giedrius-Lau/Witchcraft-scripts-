// function insertAfter(el, referenceNode) {
//     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
// }

// var initializeTemporaryCTA = function () {
//     var ctaInterval = window.setInterval(function () {
//         var cta = document.querySelector('.PDP-buyMobile.js-buy-mobile');
//         if (cta) {
//             clearInterval(ctaInterval);

//             if (!document.querySelector('.temporary-cta')) {
//                 document.querySelector('body').append(cta.cloneNode(true));

//                 setTimeout(() => {
//                     var temporaryCta = document.querySelector('body > div.PDP-buyMobile.js-buy-mobile');
//                     temporaryCta.setAttribute('class', 'PDP-buyMobile temporary-cta');
//                     temporaryCta.querySelector('del.PDPBuy-compareAtPrice.copy').remove();
//                     temporaryCta.querySelector('span.Product-compareAtPrice').innerHTML = '<span class="from">FROM </span><span class="price">35.95</span>';

//                     temporaryCta.addEventListener('click', function () {
//                         document.querySelector('.temporary-cta').remove();
//                         document.querySelector('.PDPOptionsSelectOptions.js-pdp-options-select-options').classList.add('active');
//                         document.querySelector('.PDPCustomRecharge').classList.add('active');
//                         document.querySelector('.PDP-buyMobile.js-buy-mobile').classList.add('active');
//                     });
//                 }, 250);
//             }
//         }
//     }, 300);
// };

// var initialiseClickableBackground = function () {
//     var optionsInterval = window.setInterval(() => {
//         var options = document.querySelector('.PDPOptionsSelectOptions.js-pdp-options-select-options');

//         if (options) {
//             clearInterval(optionsInterval);

//             if (!document.querySelector('.clickable-background')) {
//                 var background = document.createElement('div');
//                 background.setAttribute('class', 'clickable-background');
//                 options.append(background);

//                 document.querySelector('.clickable-background').addEventListener('click', function () {
//                     document.querySelector('.PDPOptionsSelectOptions.js-pdp-options-select-options').classList.remove('active');
//                     document.querySelector('.PDPCustomRecharge').classList.remove('active');
//                     document.querySelector('.PDP-buyMobile.js-buy-mobile').classList.remove('active');

//                     setTimeout(() => {
//                         initializeTemporaryCTA();
//                     }, 300);
//                 });
//             }
//         }
//     }, 300);
// };

// var interval = window.setInterval(() => {
//     if (window.innerWidth < 768) {
//         var icons = document.querySelector('#shopify-section-pdp-intro > div.PDPForm-ingredientFeature');
//         var swatchesContainer = document.querySelector('.PDPSWatchesContainer');
//         var options = document.querySelector('.PDPOptionsSelectOptions.js-pdp-options-select-options');

//         console.log('INITIALISE FUNCTION');

//         if (icons && swatchesContainer && options) {
//             insertAfter(icons, swatchesContainer);

//             // var title = document.querySelector('h1.PDPForm-title.h1');
//             // var reviews = document.querySelector('.PDPForm-reviews');
//             // var galeryContainer = document.querySelector('.PDP-main');

//             // var swatches = document.querySelector('.PDPSWatchesContainer');
//             // var descriptionContainer = document.querySelector('.PDPForm');

//             // galeryContainer.prepend(reviews);
//             // galeryContainer.prepend(title);

//             // descriptionContainer.prepend(swatches);

//             initializeTemporaryCTA();
//             initialiseClickableBackground();

//             document.querySelectorAll('.Swatches-item').forEach(function (swatch) {
//                 swatch.addEventListener('click', function () {
//                     setTimeout(() => {
//                         console.log('switch');
//                         initializeTemporaryCTA();
//                         initialiseClickableBackground();
//                     }, 1000);
//                 });
//             });

//             clearInterval(interval);

//             var hideNewCTA = document.querySelector('.temporary-cta');

//             if (hideNewCTA) {
//                 hideNewCTA.classList.add('invisible');
//             }
//         }
//     }
// }, 1000);

// var myScrollFunc = function () {
//     var y = window.scrollY;
//     if (y >= 300) {
//         if (!document.querySelector('.PDPOptionsSelectOptions.js-pdp-options-select-options.active')) {
//             initializeTemporaryCTA();
//         }
//     } else {
//         if (document.querySelector('.temporary-cta')) {
//             document.querySelector('.temporary-cta').remove();
//         }
//     }
// };

// window.addEventListener('scroll', myScrollFunc);

// setInterval(() => {
//     document.querySelectorAll('span.PDPOptionsSelectOptions-description.copy-medium').forEach(function (item) {
//         if (item.textContent.trim() == '2 Boxes') {
//             item.textContent = '2 BOX';
//         }

//         if (item.textContent.trim() == '3 Boxes') {
//             item.textContent = '3 BOX';
//         }
//     });
// }, 1000);

// setInterval(() => {
//     if (document.querySelector('#js-back-to-stock') && document.querySelector('.temporary-cta')) {
//         document.querySelector('.temporary-cta').classList.add('invisible-out-of-stock');
//     } else if (!document.querySelector('#js-back-to-stock') && document.querySelector('.temporary-cta')) {
//         document.querySelector('.temporary-cta').classList.remove('invisible-out-of-stock');
//     }
// }, 500);
