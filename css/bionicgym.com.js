// var loaded = false;

// setInterval(() => {
//     var button = document.querySelector('#updateform > div.pt-shopcart-wrapperbox > div > div.col-12.col-md-8.col-lg > div > button');
//     var placement = document.querySelector('#updateform > div.pt-shopcart-page > div.pt-shopcart-btn > div:nth-child(2)');

//     if (loaded === false && button && placement) {
//         placement.appendChild(button);
//         document.querySelector('#updateform > div.pt-shopcart-wrapperbox').remove();
//         document.querySelector('h2').remove();
//         document.querySelector('#shopify-section-cart-template > div:nth-child(2)').remove();
//         document.querySelector('#updateform > div > div.pt-shopcart-btn > div:nth-child(2) > a:nth-child(1)').remove();

//         document.querySelector('#updateform > div > div.pt-shopcart-btn > div:nth-child(2) > button').textContent = 'Get it now';

//         loaded = true;
//     }
// }, 100);

// var interval = window.setInterval(function () {
//     var button = document.querySelector('#updateform > div.pt-shopcart-wrapperbox > div > div.col-12.col-md-8.col-lg > div > button');
//     var placement = document.querySelector('#updateform > div.pt-shopcart-page > div.pt-shopcart-btn > div:nth-child(2)');
//     if (button && placement) {
//         placement.appendChild(button);
//         document.querySelector('#updateform > div.pt-shopcart-wrapperbox').remove();
//         document.querySelector('h2').remove();
//         document.querySelector('#shopify-section-cart-template > div:nth-child(2)').remove();
//         document.querySelector('#updateform > div > div.pt-shopcart-btn > div:nth-child(2) > a:nth-child(1)').remove();

//         document.querySelector('#updateform > div > div.pt-shopcart-btn > div:nth-child(2) > button').textContent = 'Get it now';

//         clearInterval(interval);
//     }
// }, 300);
