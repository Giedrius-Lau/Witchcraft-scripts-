// var headerBannerInterval = window.setInterval(function () {
//     var headerContainer = document.querySelector('#page > div.header-container');
//     var headerBanner = document.querySelector('.header-banner');

//     if (headerContainer && !headerBanner) {
//         var headerBanner = document.createElement('div');
//         headerBanner.setAttribute('class', 'header-banner');
//         headerBanner.innerHTML =
//             ' <div class="banner-item"> <img src="https://semexit.s3.eu-west-1.amazonaws.com/BigBox/label.svg" alt="price label icon"> <span>Draugiškos kainos</span> </div> <div class="banner-item"> <img src="https://semexit.s3.eu-west-1.amazonaws.com/BigBox/headphones.svg" alt="headphones icon"> <span>Išskirtinis klientų aptarnavimas</span> </div> <div class="banner-item"> <img src="https://semexit.s3.eu-west-1.amazonaws.com/BigBox/truck.svg" alt="truck icon"> <span>Greitas pristatymas visoje Lietuvoje</span> </div> <div class="banner-item"> <img src="https://semexit.s3.eu-west-1.amazonaws.com/BigBox/check.svg" alt="check icon"> <span>Autorizuoti garantiniai servisai</span> </div>';

//         headerContainer.append(headerBanner);

//         var stickyHeder = document.querySelector('.header-sticky');
//         var headerBanner = document.querySelector('.header-banner');
//         if (stickyHeder && headerBanner) {
//             headerBanner.classList.add('banner-sticky');
//         } else if (!stickyHeder && document.querySelector('.banner-sticky')) {
//             headerBanner.classList.remove('banner-sticky');
//         }

//         if (window.screen.width < 767) {
//             jQuery('.header-banner').owlCarousel({
//                 loop: true,
//                 nav: false,
//                 autoplayTimeout: 3000,
//                 dots: false,
//                 items: 1,
//                 center: true,
//             });
//         }

//         clearInterval(headerBannerInterval);
//     }
// }, 300);

// window.onscroll = function () {
//     var stickyHeder = document.querySelector('.header-sticky');
//     var headerBanner = document.querySelector('.header-banner');
//     if (stickyHeder && headerBanner) {
//         headerBanner.classList.add('banner-sticky');
//     } else if (!stickyHeder && document.querySelector('.banner-sticky')) {
//         headerBanner.classList.remove('banner-sticky');
//     }
// };
