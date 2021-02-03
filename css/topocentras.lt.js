// const hasClass = function (el, className) {
//     el.classList.contains(className);
// };

// document.querySelectorAll('.ProductGrid-productWrapper-1hm, .ProductList-productWrapper-3xz').forEach(function (item) {
//     if (!hasClass(item, 'moved-discount')) {
//         var priceOld;
//         var priceOldSpan = item.querySelector('.Price-oldPrice-3co');
//         var priceLease = item.querySelector('.Price-leasingPrice-6n0');

//         if (!!priceOldSpan) {
//             priceOld = priceOldSpan;
//         } else if (!!priceLease) {
//             priceOld = priceLease;
//         }

//         var priceNew = item.querySelector('.Price-price-27p');
//         var discount;
//         var discountOrange = item.querySelector('span.ProductStickers-orangeLabel-5C-:nth-child(2)');
//         var discountYellow = item.querySelector('span.ProductStickers-yellowLabel-21f:nth-child(2)');
//         var discountGold = item.querySelector('div.ProductStickers-productLabels-1ke > div > span:last-child');
//         var discountBlue = item.querySelectorAll('div.ProductStickers-productLabels-1ke > div > span:last-child');

//         var divider = item.querySelectorAll(
//             '.ProductStickers-divider-2Q-, .ProductStickers-blueLabelDivider-2OR, .ProductStickers-yellowLabelDivider--vq, .ProductStickers-goldLabelDivider-1rs, .ProductStickers-orangeLabelDivider-2R_'
//         );

//         if (!!discountBlue) {
//             discount = discountBlue;
//         } else if (!!discountYellow) {
//             discount = discountYellow;
//         } else if (!!discountGold) {
//             discount = discountGold;
//         } else if (!!discountOrange) {
//             discount = discountOrange;
//         }

//         if (!!priceOld && !!priceNew) {
//             $(priceOld).insertBefore(priceNew);
//         }
//         if (!!discount && !!priceOld) {
//             $(discount).insertBefore(priceOld.parentNode);
//             item.classList.add('moved-discount');
//         }

//         if (!!divider && !!discount) {
//             $(divider).remove();
//         }
//     }
// });
