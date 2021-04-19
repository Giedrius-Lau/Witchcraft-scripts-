// setInterval(function () {
//     var newPrice = document.querySelector(
//         '#shopify-section-product-template > div.container-indent > div.container.container-fluid-mobile > div > div:nth-child(2) > div > div.mrprprice > div > span.new-price'
//     );

//     var newPriceSticky = document.querySelector(
//         '#shopify-section-product-template > div.pt-fixed-product-wrapper.atdshowed > div > div > div.col-6.col-lg-4.col-xl-4 > div > div.pt-description > div > span.new-price'
//     );

//     if (newPrice && newPrice.textContent === '$749.00') {
//         $('.new-test-price').remove();
//         newPrice.classList.add('test-price');
//         if (!$('.new-test-price').length) {
//             $(newPrice.parentNode).prepend('<div class="new-test-price">$949.00</div>');
//         }
//     } else if (newPrice && newPrice.textContent === '$649.00') {
//         $('.new-test-price').remove();
//         newPrice.classList.add('test-price');

//         if (!$('.new-test-price').length) {
//             $(newPrice.parentNode).prepend('<div class="new-test-price">$849.00</div>');
//         }
//     }

//     if (newPriceSticky && newPriceSticky.textContent === '$749.00') {
//         $('.new-test-price').remove();
//         newPriceSticky.classList.add('test-price');
//         if (!$('.new-test-price').length) {
//             $(newPriceSticky.parentNode).prepend('<div class="new-test-price">$949.00</div>');
//         }
//     } else if (newPriceSticky && newPriceSticky.textContent === '$649.00') {
//         $('.new-test-price').remove();
//         newPriceSticky.classList.add('test-price');
//         if (!$('.new-test-price').length) {
//             $(newPriceSticky.parentNode).prepend('<div class="new-test-price">$849.00</div>');
//         }
//     }
// }, 300);
