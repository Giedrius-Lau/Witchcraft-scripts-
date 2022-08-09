// var inerval = window.setInterval(() => {
//     if (window.innerWidth < 768) {
//       var mainCTA = document.querySelector('.PDPBuy button.PDPBuy-btn.o-button.is-secondary.is-large.js-pdp-add-to-cart').cloneNode(true);
//       var pdpIntro = document.querySelector('#shopify-section-pdp-intro');
//       var newPlacement = document.querySelector('#shopify-section-pdp-intro button.PDPBuy-btn.o-button.is-secondary.is-large');
//       if (mainCTA && pdpIntro) {
//         if (newPlacement) {
//           newPlacement.remove()
//         }
//         pdpIntro.append(mainCTA);
//         var clonedButton = document.querySelector('#shopify-section-pdp-intro button.PDPBuy-btn.o-button.is-secondary.is-large.js-pdp-add-to-cart');
//         clonedButton.classList.remove('js-pdp-add-to-cart');
//         clonedButton.addEventListener('click', function () {
//           document.querySelector('.js-pdp-add-to-cart').click();
//           console.log(document.querySelector('.js-pdp-add-to-cart'));
//         });
//       }
//     }
//   }, 1000);
