// var insertAfter = function (el, referenceNode) {
//     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
// };

// setTimeout(function () {
//     var intervalas = window.setInterval(function () {
//         var desktopContainer = document.querySelector('.top-offers.bitrec-recommendations.bitrec-bought-block');
//         var desktopContainer2 = document.querySelector('article.productFullDetail-whiteBox-3_B.product-page-departments')

//         if (!document.getElementById('product-information-tab')) {
//             var createTabs = function (list, tabsContainer, contentTabs) {
//                 list.forEach(function (item) {
//                     console.log(item.textContent);
//                     if (item && item.parentNode && item.parentNode.parentNode) {
//                         var newElement = document.createElement('li');
//                         newElement.innerHTML = '<div class="content__wrapper"></div>';
//                         newElement.querySelector('.content__wrapper').appendChild(item.parentNode.parentNode);

//                         if (
//                             (item.textContent === 'Aprašymas' ||
//                                 item.textContent === 'Specifikacija' ||
//                                 item.textContent === 'Apžvalgos ir vertinimai (Bazaarvoice)' ||
//                                 item.textContent === 'Papildoma gamintojo informacija') &&
//                             item.parentNode.parentNode.style.display != 'none'
//                         ) {
//                             tabsContainer.innerHTML += '<li>' + item.textContent + '</li>';
//                             contentTabs.appendChild(newElement);
//                         }
//                     }
//                 });
//             };

//             var spanElements = document.querySelectorAll('h2 > span');

//             var newTabs = document.createElement('ul');
//             newTabs.setAttribute('class', 'tabs product-information-tab');
//             newTabs.setAttribute('id', 'product-information-tab');

//             var contentTabs = document.createElement('ul');
//             contentTabs.setAttribute('class', 'tab__content product-information-content-tab');
//             contentTabs.setAttribute('id', 'product-information-content-tab');

//             createTabs(spanElements, newTabs, contentTabs);

//             if (desktopContainer) {
//                 insertAfter(newTabs, desktopContainer);
//             } else if (desktopContainer2) {
//                 insertAfter(newTabs, desktopContainer2);

//             }

//             insertAfter(contentTabs, document.querySelector('.product-information-tab'));

//             document.querySelector('#product-information-tab > li').classList.add('active');
//             document.querySelector('#product-information-content-tab > li').classList.add('active');

//             clearInterval(intervalas);

//             setTimeout(function () {
//                 var clickedTab = $('.tabs > .active');
//                 var tabWrapper = $('.tab__content');
//                 var activeTab = tabWrapper.find('li.active');
//                 var activeTabHeight = activeTab.outerHeight();
//                 activeTab.show();

//                 setInterval(function () {
//                     var activeTab = $('#product-information-content-tab li.active');
//                     var activeTabHeight = activeTab.outerHeight();
//                     tabWrapper.height(activeTabHeight);
//                 }, 1000);

//                 $('.tabs > li').on('click', function () {
//                     $('.tabs > li').removeClass('active');

//                     $(this).addClass('active');

//                     clickedTab = $('.tabs .active');

//                     activeTab.fadeOut(250, function () {
//                         $('.tab__content > li').removeClass('active');

//                         var clickedTabIndex = clickedTab.index();

//                         $('.tab__content > li').eq(clickedTabIndex).addClass('active');

//                         activeTab = $('.tab__content > .active');

//                         activeTabHeight = activeTab.outerHeight();

//                         tabWrapper
//                             .stop()
//                             .delay(50)
//                             .animate(
//                                 {
//                                     height: activeTabHeight,
//                                 },
//                                 500,
//                                 function () {
//                                     activeTab.delay(50).fadeIn(250);
//                                 }
//                             );
//                     });
//                 });

//                 var stickyButtons = document.querySelectorAll('.AddToCartContainer-stickyLeftBar-agC > div > ul > li > button');
//                 var tabButtons = document.querySelectorAll('#product-information-tab > li');

//                 stickyButtons.forEach(function (stickyButton) {
//                     if (stickyButton.textContent == 'Papildoma gamintojo informacija') {
//                         stickyButton.textContent = 'Gamintojo informacija';
//                     }
//                     tabButtons.forEach(function (tabButton) {
//                         if (stickyButton.textContent === tabButton.textContent) {
//                             console.log('match');
//                             stickyButton.addEventListener('click', function () {
//                                 tabButton.click();

//                                 stickyButtons.forEach(function (secondStickyButton) {
//                                     secondStickyButton.classList.remove('AddToCartContainer-stickyLeftBarLinkActive-2bQ');
//                                 });
//                                 stickyButton.classList.add('AddToCartContainer-stickyLeftBarLinkActive-2bQ');
//                             });
//                         }
//                     });
//                 });
//             }, 1500);
//         }
//     }, 100);
// }, 3000);

// var textChangeInterval = window.setInterval(function () {
//     if (
//         document.querySelector('#product-information-tab > li') &&
//         document.querySelector('#product-information-tab > li').textContent === 'Papildoma gamintojo informacija'
//     ) {
//         document.querySelector('#product-information-tab > li').textContent = 'Gamintojo informacija';
//         clearInterval(textChangeInterval);
//     }
// });
