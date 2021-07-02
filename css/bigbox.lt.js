// setInterval(function () {
//     var products = document.querySelectorAll('#center_column > div:nth-child(3) > div > div.col-lg-9.col-md-8 > div > div.af_pl_wrapper > ul > li > div');

//     products.forEach(function (product) {
//         if (!product.querySelector('.new-labels')) {
//             var productLabels = product.querySelectorAll('.label-preview-image');
//             var shipping = product.querySelector('.shipping-label-container');
//             var leasing = product.querySelector('.uleasing-price-container');
//             var labelBlock = document.createElement('div');
//             labelBlock.setAttribute('class', 'new-labels');
//             labelBlock.innerHTML = '';

//             if (shipping) {
//                 labelBlock.innerHTML +=
//                     '<div class="label-shipping"><div class="label-information">' + shipping.textContent + ' Nemokamas pristatymas</div></div>';
//             }

//             if (productLabels.length != 0) {
//                 productLabels.forEach(function (label) {
//                     if (label.style.backgroundImage === 'url("/modules/advlabels/upload/Aq9AzGB9.png")') {
//                         labelBlock.innerHTML +=
//                             '<div class="label-dpd"><div class="label-information">DPD Pristatymas tą pačią dieną Vilniuje.</br>Užsakymams iki 10 val.</div></div>';
//                     }
//                     if (label.style.backgroundImage === 'url("/modules/advlabels/upload/n1oeGVwj.png")') {
//                         labelBlock.innerHTML +=
//                             '<div class="label-ziticity"><div class="label-information">ZITICITY Pristatymas tą pačią dieną Kaune ir</br> Vilniuje. Užsakymams iki 14 val.</div></div>';
//                     }
//                     if (label.style.backgroundImage === 'url("/modules/advlabels/upload/muJxF2CR.png")') {
//                         labelBlock.innerHTML += '<div class="label-sandelyje"><div class="label-information">Yra sandėlyje.</div></div>';
//                     }
//                 });
//             }

//             if (leasing) {
//                 labelBlock.innerHTML +=
//                     '<div class="label-leasing"><div class="label-information">SB Lizingo akcija iki 24 mėn.</br><span style="color: red;">' +
//                     leasing.textContent +
//                     '</span></div></div>';
//             }

//             product.append(labelBlock);
//         }
//     });
// }, 1000);
