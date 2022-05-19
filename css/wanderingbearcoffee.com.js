// convert.$(document).ready(function () {

//     var interval = window.setInterval(function () {
//         var productImage = document.querySelector('.PDPGallery-imagePlaceholder.o-placeholder');
//         var black = document.querySelectorAll('.PDPSWatchesContainer .Swatches-link')[0];
//         var vanilla = document.querySelectorAll('.PDPSWatchesContainer .Swatches-link')[1];
//         var caramel = document.querySelectorAll('.PDPSWatchesContainer .Swatches-link')[2];
//         var mocha = document.querySelectorAll('.PDPSWatchesContainer .Swatches-link')[3];
//         var hazelnut = document.querySelectorAll('.PDPSWatchesContainer .Swatches-link')[4];
//         var decaf = document.querySelectorAll('.PDPSWatchesContainer .Swatches-link')[5];
//         var dirty = document.querySelectorAll('.PDPSWatchesContainer .Swatches-link')[6];

//         var oneBox = document.querySelectorAll('.PDPOptions-list .PDPOptions-item')[0];
//         var twoBoxes = document.querySelectorAll('.PDPOptions-list .PDPOptions-item')[1];
//         var threeBoxes = document.querySelectorAll('.PDPOptions-list .PDPOptions-item')[2];

//         if (productImage && black && vanilla && caramel && mocha && hazelnut && decaf && dirty && oneBox && twoBoxes && threeBoxes) {
//             var oneBoxBlack = 'https://cdn.shopify.com/s/files/1/1418/5086/files/1boxBlack.webp?v=1651040496' + '&width=675';
//             var oneBoxVanilla = 'https://cdn.shopify.com/s/files/1/1418/5086/files/1boxVanilla.webp?v=1651040496' + '&width=675';
//             var oneBoxCaramel = 'https://cdn.shopify.com/s/files/1/1418/5086/files/1boxCaramel.webp?v=1651040496' + '&width=675';
//             var oneBoxMocha = 'https://cdn.shopify.com/s/files/1/1418/5086/files/1boxMocha.webp?v=1651040496' + '&width=675';
//             var oneBoxHazelnut = 'https://cdn.shopify.com/s/files/1/1418/5086/files/1boxHazelnut.webp?v=1651040496' + '&width=675';
//             var oneBoxDecaf = 'https://cdn.shopify.com/s/files/1/1418/5086/files/1boxDecaf.webp?v=1651040496' + '&width=675';
//             var oneBoxDirty = 'https://cdn.shopify.com/s/files/1/1418/5086/files/1boxDirty.webp?v=1652544817' + '&width=675';

//             var twoBoxBlack = 'https://cdn.shopify.com/s/files/1/1418/5086/files/2boxBlack.webp?v=1651040568' + '&width=675';
//             var twoBoxVanilla = 'https://cdn.shopify.com/s/files/1/1418/5086/files/2boxVanilla.webp?v=1651040568' + '&width=675';
//             var twoBoxCaramel = 'https://cdn.shopify.com/s/files/1/1418/5086/files/2boxCaramel.webp?v=1651040568' + '&width=675';
//             var twoBoxMocha = 'https://cdn.shopify.com/s/files/1/1418/5086/files/2boxMocha.webp?v=1651040568' + '&width=675';
//             var twoBoxHazelnut = 'https://cdn.shopify.com/s/files/1/1418/5086/files/2boxHazelnut.webp?v=1651040568' + '&width=675';
//             var twoBoxDecaf = 'https://cdn.shopify.com/s/files/1/1418/5086/files/2boxDecaf.webp?v=1651040568' + '&width=675';
//             var twoBoxDirty = 'https://cdn.shopify.com/s/files/1/1418/5086/files/2boxDirty.webp?v=1652544817' + '&width=675';

//             var threeBoxBlack = 'https://cdn.shopify.com/s/files/1/1418/5086/files/3Box-StraightBlack_39817632-a4f2-4112-8366-8b5e9b70f544.png?v=1651167022' + '&width=675';
//             var threeBoxVanilla = 'https://cdn.shopify.com/s/files/1/1418/5086/files/3Box-Vanilla_204a08d1-acba-42ca-aee4-1273c248bdee.png?v=1651167022' + '&width=675';
//             var threeBoxCaramel = 'https://cdn.shopify.com/s/files/1/1418/5086/files/3Box-caramel.png?v=1651040592' + '&width=675';
//             var threeBoxMocha = 'https://cdn.shopify.com/s/files/1/1418/5086/files/3Box-Mocha_6073f82f-2c95-428a-a0c4-2d1600c90a9b.png?v=1651167021' + '&width=675';
//             var threeBoxHazelnut = 'https://cdn.shopify.com/s/files/1/1418/5086/files/3Box-Hazelnut_8b90ad72-df6f-41ac-b156-7a96667c04e1.png?v=1651167023' + '&width=675';
//             var threeBoxDecaf = 'https://cdn.shopify.com/s/files/1/1418/5086/files/3Box-Decaf_7b2ea8fc-1efe-4a40-a866-327735c3f61a.png?v=1651167021' + '&width=675';
//             var threeBoxDirty = 'https://cdn.shopify.com/s/files/1/1418/5086/files/3boxDirty.webp?v=1652544817' + '&width=675';

//             if (oneBox.classList.contains('is-active') && black.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + oneBoxBlack + ')';
//             }
//             if (oneBox.classList.contains('is-active') && vanilla.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + oneBoxVanilla + ')';
//             }
//             if (oneBox.classList.contains('is-active') && caramel.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + oneBoxCaramel + ')';
//             }
//             if (oneBox.classList.contains('is-active') && mocha.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + oneBoxMocha + ')';
//             }
//             if (oneBox.classList.contains('is-active') && hazelnut.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + oneBoxHazelnut + ')';
//             }
//             if (oneBox.classList.contains('is-active') && decaf.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + oneBoxDecaf + ')';
//             }
//             if (oneBox.classList.contains('is-active') && dirty.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + oneBoxDirty + ')';
//             }

//             if (twoBoxes.classList.contains('is-active') && black.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + twoBoxBlack + ')';
//             }
//             if (twoBoxes.classList.contains('is-active') && vanilla.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + twoBoxVanilla + ')';
//             }
//             if (twoBoxes.classList.contains('is-active') && caramel.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + twoBoxCaramel + ')';
//             }
//             if (twoBoxes.classList.contains('is-active') && mocha.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + twoBoxMocha + ')';
//             }
//             if (twoBoxes.classList.contains('is-active') && hazelnut.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + twoBoxHazelnut + ')';
//             }
//             if (twoBoxes.classList.contains('is-active') && decaf.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + twoBoxDecaf + ')';
//             }
//             if (twoBoxes.classList.contains('is-active') && dirty.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + twoBoxDirty + ')';
//             }

//             if (threeBoxes.classList.contains('is-active') && black.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + threeBoxBlack + ')';
//             }
//             if (threeBoxes.classList.contains('is-active') && vanilla.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + threeBoxVanilla + ')';
//             }
//             if (threeBoxes.classList.contains('is-active') && caramel.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + threeBoxCaramel + ')';
//             }
//             if (threeBoxes.classList.contains('is-active') && mocha.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + threeBoxMocha + ')';
//             }
//             if (threeBoxes.classList.contains('is-active') && hazelnut.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + threeBoxHazelnut + ')';
//             }
//             if (threeBoxes.classList.contains('is-active') && decaf.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + threeBoxDecaf + ')';
//             }
//             if (threeBoxes.classList.contains('is-active') && dirty.classList.contains('is-active')) {
//                 productImage.style.background = 'url(' + threeBoxDirty + ')';
//             }

//         }
//     }, 1000);

// });
