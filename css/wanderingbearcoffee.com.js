// convert.$(document).ready(function () {
//     (function ($) {
//         // add class to body for variation
//         // 50 * 200 = 10 secs
//         var croTVGTime = 50;
//         var croTVGInterval = setInterval(function () {
//             var croBody = document.getElementsByTagName('body')[0];
//             if ($ && croBody) {
//                 clearInterval(croTVGInterval);


//                window.innerWidth

//                 var inerval = window.setInterval(() => {
//                     if (window.innerWidth < 768) {
//                     var mainCTA = document.querySelector('.PDPBuy button.PDPBuy-btn.o-button.is-secondary.is-large.js-pdp-add-to-cart').cloneNode(true);
//                     var pdpIntro = document.querySelector('.PDPSWatchesContainer');
//                     var newPlacement = document.querySelector('.PDPSWatchesContainer button.PDPBuy-btn.o-button.is-secondary.is-large');

//                     if (mainCTA && pdpIntro && !newPlacement) {
//                         pdpIntro.append(mainCTA);
//                         var clonedButton = document.querySelector('.PDPSWatchesContainer button.PDPBuy-btn.o-button.is-secondary.is-large.js-pdp-add-to-cart');
//                         clonedButton.classList.remove('js-pdp-add-to-cart');

//                         clonedButton.addEventListener('click', function () {
//                             document.querySelector('.js-pdp-add-to-cart').click();
//                             console.log(document.querySelector('.js-pdp-add-to-cart'));
//                         });
//                     }
//                 }, 250);
//             }
//             // clear interval after 10 secs. if element not found
//             croTVGTime--;
//             if (croTVGTime < 0) {
//                 clearInterval(croTVGInterval);
//             }
//         }, 200);
//     })(jQuery);
// });
