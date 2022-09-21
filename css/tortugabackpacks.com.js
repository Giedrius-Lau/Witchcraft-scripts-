// if (window.location.pathname === '/') {
//     var homepageInterval = window.setInterval(function () {
//         var title = document.querySelector('.ShoppableCards-title');
//         var iconsMobile = document.querySelector('div.BackpackBenefits-container.u-hideMd__flex');
//         var iconsDesktop = document.querySelector('div.BackpackBenefits-container.u-showMd__flex');

//         if (title && iconsDesktop) {
//             title.append(iconsDesktop);
//             title.append(iconsMobile);
//             clearInterval(homepageInterval);
//         }
//     }, 300);
// }

// if (window.location.pathname === '/pages/learn-more') {
//     var learnMoreInterval = window.setInterval(function () {
//         var header = document.querySelector('.Header-menuList');
//         var body = document.querySelector('body');
//         var mainButton = document.querySelector('a.LMCta.js-lm-cta.o-button');

//         if (header && window.innerWidth > 1023) {
//             var sticky = document.createElement('div');
//             sticky.setAttribute('class', 'sticky-cta');
//             sticky.innerHTML = '<div class="sticky-cta-inner LM-container"> <img src="https://cdn.shopify.com/s/files/1/0049/1212/files/backpack-front_4.png?v=1662723524" alt="" class="sticky-img"> <div class="sticky-middle"> <div class="sticky-bold-text">Outbreaker Backpack</div> <div class="sticky-description">The maximum-sized carry on for big trips. Fits in the overhead bin.</div> </div> </div>';
           
//             body.append(sticky);
//             document.querySelector('.sticky-cta-inner').append(mainButton);

//             clearInterval(learnMoreInterval);
//         }
//     }, 300);
// }

// var headerInterval = window.setInterval(function () {
//     if (document.querySelector('nav.OffcanvasNav > ul > li:nth-child(3)') && document.querySelector('#shopify-section-header > div.Header-main > header > nav > ul > li:nth-child(3)')) {
//         document.querySelector('nav.OffcanvasNav > ul > li:nth-child(3)').remove();
//         document.querySelector('nav.OffcanvasNav > ul > li:nth-child(2) > a').textContent = 'Discover Travel Backpacks';
//         document.querySelector('nav.OffcanvasNav > ul > li:nth-child(1) > a').textContent = 'Shop';
//         document.querySelector('nav.OffcanvasNav > ul > li:nth-child(1) > a').href = '/collections/travel-backpacks';

//         document.querySelector('#shopify-section-header > div.Header-main > header > nav > ul > li:nth-child(3)').remove();
//         document.querySelector('#shopify-section-header > div.Header-main > header > nav > ul > li:nth-child(2) > a').textContent = 'Discover Travel Backpacks';
//         document.querySelector('#shopify-section-header > div.Header-main > header > nav > ul > li:nth-child(2) > a').classList.add('margin-l-50');
//         document.querySelector('#shopify-section-header > div.Header-main > header > nav > ul > li:nth-child(1) > a').textContent = 'Shop';
//         document.querySelector('#shopify-section-header > div.Header-main > header > nav > ul > li:nth-child(1) > a').href = '/collections/travel-backpacks';
//         clearInterval(headerInterval);
//     }
// }, 300);
