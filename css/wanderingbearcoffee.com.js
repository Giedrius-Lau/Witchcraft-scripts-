// (() => {
//     let oldPushState = history.pushState;
//     history.pushState = function pushState() {
//         let ret = oldPushState.apply(this, arguments);
//         window.dispatchEvent(new Event('pushstate'));
//         window.dispatchEvent(new Event('locationchange'));
//         return ret;
//     };

//     let oldReplaceState = history.replaceState;
//     history.replaceState = function replaceState() {
//         let ret = oldReplaceState.apply(this, arguments);
//         window.dispatchEvent(new Event('replacestate'));
//         window.dispatchEvent(new Event('locationchange'));
//         return ret;
//     };

//     window.addEventListener('popstate', () => {
//         window.dispatchEvent(new Event('locationchange'));
//     });
// })();

// var setImage = function () {
//     var interval = window.setInterval(function () {
//         var productImage = document.querySelector('.PDPGallery-imagePlaceholder.o-placeholder');

//         if (productImage) {
//             var oneBoxBlack = 'https://cdn.shopify.com/s/files/1/1418/5086/files/1boxBlack.webp?v=1651040496' + '&width=675';
//             var oneBoxVanilla = 'https://cdn.shopify.com/s/files/1/1418/5086/files/1boxVanilla.webp?v=1651040496' + '&width=675';
//             var oneBoxCaramel = 'https://cdn.shopify.com/s/files/1/1418/5086/files/1boxCaramel.webp?v=1651040496' + '&width=675';
//             var oneBoxMocha = 'https://cdn.shopify.com/s/files/1/1418/5086/files/1boxMocha.webp?v=1651040496' + '&width=675';
//             var oneBoxHazelnut = 'https://cdn.shopify.com/s/files/1/1418/5086/files/1boxHazelnut.webp?v=1651040496' + '&width=675';
//             var oneBoxDecaf = 'https://cdn.shopify.com/s/files/1/1418/5086/files/1boxDecaf.webp?v=1651040496' + '&width=675';

//             var twoBoxBlack = 'https://cdn.shopify.com/s/files/1/1418/5086/files/2boxBlack.webp?v=1651040568' + '&width=675';
//             var twoBoxVanilla = 'https://cdn.shopify.com/s/files/1/1418/5086/files/2boxVanilla.webp?v=1651040568' + '&width=675';
//             var twoBoxCaramel = 'https://cdn.shopify.com/s/files/1/1418/5086/files/2boxCaramel.webp?v=1651040568' + '&width=675';
//             var twoBoxMocha = 'https://cdn.shopify.com/s/files/1/1418/5086/files/2boxMocha.webp?v=1651040568' + '&width=675';
//             var twoBoxHazelnut = 'https://cdn.shopify.com/s/files/1/1418/5086/files/2boxHazelnut.webp?v=1651040568' + '&width=675';
//             var twoBoxDecaf = 'https://cdn.shopify.com/s/files/1/1418/5086/files/2boxDecaf.webp?v=1651040568' + '&width=675';

//             var threeBoxBlack = 'https://cdn.shopify.com/s/files/1/1418/5086/files/3Box-straightblack.png?v=1651040592' + '&width=675';
//             var threeBoxVanilla = 'https://cdn.shopify.com/s/files/1/1418/5086/files/3Box-vanilla.png?v=1651040592' + '&width=675';
//             var threeBoxCaramel = 'https://cdn.shopify.com/s/files/1/1418/5086/files/3Box-caramel.png?v=1651040592' + '&width=675';
//             var threeBoxMocha = 'https://cdn.shopify.com/s/files/1/1418/5086/files/3Box-mocha.png?v=1651040592' + '&width=675';
//             var threeBoxHazelnut = 'https://cdn.shopify.com/s/files/1/1418/5086/files/3Box-hazelnut.png?v=1651040592' + '&width=675';
//             var threeBoxDecaf = 'https://cdn.shopify.com/s/files/1/1418/5086/files/3Box-decaf.png?v=1651040592' + '&width=675';

//             var black = document.querySelectorAll('.PDPSWatchesContainer .Swatches-link')[0].classList.contains('is-active');
//             var vanilla = document.querySelectorAll('.PDPSWatchesContainer .Swatches-link')[1].classList.contains('is-active');
//             var caramel = document.querySelectorAll('.PDPSWatchesContainer .Swatches-link')[2].classList.contains('is-active');
//             var mocha = document.querySelectorAll('.PDPSWatchesContainer .Swatches-link')[3].classList.contains('is-active');
//             var hazelnut = document.querySelectorAll('.PDPSWatchesContainer .Swatches-link')[4].classList.contains('is-active');
//             var decaf = document.querySelectorAll('.PDPSWatchesContainer .Swatches-link')[5].classList.contains('is-active');

//             var oneBox = document.querySelectorAll('.PDPOptions-list .PDPOptions-item')[0].classList.contains('is-active');
//             var twoBoxes = document.querySelectorAll('.PDPOptions-list .PDPOptions-item')[1].classList.contains('is-active');
//             var threeBoxes = document.querySelectorAll('.PDPOptions-list .PDPOptions-item')[2].classList.contains('is-active');

//             if (oneBox && black) {
//                 productImage.style.background = 'url(' + oneBoxBlack + ')';
//             }
//             if (oneBox && vanilla) {
//                 productImage.style.background = 'url(' + oneBoxVanilla + ')';
//             }
//             if (oneBox && caramel) {
//                 productImage.style.background = 'url(' + oneBoxCaramel + ')';
//             }
//             if (oneBox && mocha) {
//                 productImage.style.background = 'url(' + oneBoxMocha + ')';
//             }
//             if (oneBox && hazelnut) {
//                 productImage.style.background = 'url(' + oneBoxHazelnut + ')';
//             }
//             if (oneBox && decaf) {
//                 productImage.style.background = 'url(' + oneBoxDecaf + ')';
//             }

//             if (twoBoxes && black) {
//                 productImage.style.background = 'url(' + twoBoxBlack + ')';
//             }
//             if (twoBoxes && vanilla) {
//                 productImage.style.background = 'url(' + twoBoxVanilla + ')';
//             }
//             if (twoBoxes && caramel) {
//                 productImage.style.background = 'url(' + twoBoxCaramel + ')';
//             }
//             if (twoBoxes && mocha) {
//                 productImage.style.background = 'url(' + twoBoxMocha + ')';
//             }
//             if (twoBoxes && hazelnut) {
//                 productImage.style.background = 'url(' + twoBoxHazelnut + ')';
//             }
//             if (twoBoxes && decaf) {
//                 productImage.style.background = 'url(' + twoBoxDecaf + ')';
//             }

//             if (threeBoxes && black) {
//                 productImage.style.background = 'url(' + threeBoxBlack + ')';
//             }
//             if (threeBoxes && vanilla) {
//                 productImage.style.background = 'url(' + threeBoxVanilla + ')';
//             }
//             if (threeBoxes && caramel) {
//                 productImage.style.background = 'url(' + threeBoxCaramel + ')';
//             }
//             if (threeBoxes && mocha) {
//                 productImage.style.background = 'url(' + threeBoxMocha + ')';
//             }
//             if (threeBoxes && hazelnut) {
//                 productImage.style.background = 'url(' + threeBoxHazelnut + ')';
//             }
//             if (threeBoxes && decaf) {
//                 productImage.style.background = 'url(' + threeBoxDecaf + ')';
//             }

//             clearInterval(interval);
//         }
//     }, 500);
// };

// setImage();

// window.addEventListener('locationchange', function () {
//     setImage();
//     console.log('clasdasd')
// });
