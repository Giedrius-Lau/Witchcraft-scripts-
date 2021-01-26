// var coreFunction = function () {
//     function insertAfter(el, referenceNode) {
//         referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
//     }

//     var allLinks = document.querySelectorAll('.header-menu-wrapper .main-navigation-wrapper .nav a');
//     var nav = document.querySelector('.header-menu-wrapper .main-navigation-wrapper .nav');

//     allLinks.forEach(function (link) {
//         if (link.textContent.trim() === 'Shop') {
//             link.parentNode.classList.add('highlighted-link');
//             link.querySelector('.nav-label').textContent = 'View Skincare';
//         }
//         if (link.textContent === 'Wishlist') {
//             link.textContent = 'How to use';
//             link.href = '/blogs/how-to/';
//         }
//         if (link.textContent === 'Our story') {
//             link.parentNode.remove();
//         }
//         if (link.textContent === 'Blog') {
//             link.parentNode.remove();
//         }
//         if (link.textContent === 'Rewards') {
//             link.textContent = 'Exclusive rewards';
//             nav.appendChild(link.parentNode);
//         }
//         if (link.textContent === 'FAQs') {
//             nav.appendChild(link.parentNode);
//         }
//         if (link.textContent === 'Skin Quiz') {
//             link.textContent = 'Skin type quiz';
//             link.classList.add('highlighted-link');

//             insertAfter(link.parentNode, document.querySelector('.header-menu-wrapper .main-navigation-wrapper .nav li.dropdown'));
//         }
//     });

//     var dropdownMenuLinks = document.querySelectorAll('.header-menu-wrapper .main-navigation-wrapper .dropdown-menu a');

//     dropdownMenuLinks.forEach(function (link) {
//         if (link.textContent === 'Supercharged Routines: Oily Skin') {
//             link.textContent = 'FOR OILY SKIN: supercharged routines';
//         }

//         if (link.textContent === 'Nourishing Routines: Dry Skin') {
//             link.textContent = 'FOR DRY SKIN: nourishing routines';
//         }

//         if (link.textContent === 'Upgrade Packs') {
//             link.textContent = 'Ageless skin routines, acne management, skin refreshers, bodycare kits';
//         }

//         if (link.textContent === 'Top-Ups - Full Range') {
//             link.textContent = 'Top ups';
//         }
//     });

//     // MOBILE

//     document.querySelector('.header-logo-wrapper .mobile-header--wrapper .slide-menu[href="#theme-menu"]').addEventListener('click', function () {
//         var MobileMenuLinks = document.querySelectorAll('.mobile-menu a');
//         var nav = document.querySelector('.mobile-menu-main');
//         if (nav.querySelector('.sm-icons')) {
//             nav.querySelector('.sm-icons').remove();
//         }

//         MobileMenuLinks.forEach(function (link) {
//             if (link.textContent.trim() === 'Shop') {
//                 link.classList.add('highlighted-link-mobile');
//                 link.innerHTML = '<span>VIEW SKINCARE</span><br><span class="small">customized for skin types</span>';
//             }
//             if (link.textContent === 'Wishlist') {
//                 link.parentNode.remove();
//             }

//             if (link.textContent === 'How to use') {
//                 link.parentNode.remove();
//             }
//             if (link.textContent === 'Our story') {
//                 link.parentNode.remove();
//             }
//             if (link.textContent === 'Blog') {
//                 link.parentNode.remove();
//             }
//             if (link.textContent === 'Rewards') {
//                 link.textContent = 'Exclusive rewards';
//                 nav.appendChild(link.parentNode);
//             }
//             setTimeout(() => {
//                 if (link.textContent === 'FAQs') {
//                     link.textContent = 'FAQS';
//                     nav.appendChild(link.parentNode);
//                 }
//             });

//             if (link.textContent === 'Skin Quiz') {
//                 link.textContent = 'FREE SKIN TYPE QUIZ';
//                 insertAfter(link.parentNode, document.querySelector('#mobile-menu--new-main-menu > li:nth-child(4)'));
//             }
//         });
//     });

//     document
//         .querySelector('#mobile-menu--new-main-menu > li:nth-child(4) > a.mobile-menu-sub.mobile-menu-right.mobile-menu-link')
//         .addEventListener('click', function () {
//             var mobileDropdownMenuLinks = document.querySelectorAll('.mobile-menu .mobile-menu-link');

//             document.querySelector('#mobile-menu > li:nth-child(2) > a > div').textContent = 'VIEW SKINCARE';
//             document.querySelector('#mobile-menu > li:nth-child(2) > a').classList.add('highlighted-link-mobile');
//             document.querySelector('#mobile-menu .menu-close-icon').classList.add('highlighted-link-mobile');

//             mobileDropdownMenuLinks.forEach(function (link) {
//                 if (link.textContent === 'Supercharged Routines: Oily Skin') {
//                     link.textContent = 'FOR OILY SKIN: supercharged routines';
//                 }

//                 if (link.textContent === 'Nourishing Routines: Dry Skin') {
//                     link.textContent = 'FOR DRY SKIN: nourishing routines';
//                 }

//                 if (link.textContent === 'Upgrade Packs') {
//                     link.textContent = 'Ageless skin routines, acne management, skin refreshers, bodycare kits';
//                 }

//                 if (link.textContent === 'Top-Ups - Full Range') {
//                     link.textContent = 'Top ups';
//                 }
//             });
//         });
// };

// var interval = window.setInterval(function () {
//     var button = document.querySelector('.dropdown-envy-toggle');
//     if (button) {
//         coreFunction();

//         clearInterval(interval);
//     }
// }, 300);

// var intervalForSliderButton = window.setInterval(function () {
//     var slider = document.querySelector(
//         '#shopify-section-image--slideshow > div.container-fluid.homepage-slider-container.slider-section--image--slideshow.slider-dots--caption-padding > div > div > div > div > div > div > ul > li.slider-block--image--slideshow-0.mobile-image--disabled.flex-active-slide > div'
//     );

//     if (slider) {
//         var newButton = document.createElement('div');
//         newButton.innerHTML = '<a class="btn btn-custom-added " href="/collections">Or view skincare products now</a>';

//         slider.append(newButton);

//         clearInterval(intervalForSliderButton);
//     }
// }, 300);
