// var getJSON = function (url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.responseType = 'json';
//     xhr.onload = function () {
//         var status = xhr.status;
//         if (status === 200) {
//             callback(null, xhr.response);
//         } else {
//             callback(status, xhr.response);
//         }
//     };
//     xhr.send();
// };

// var urlForTenant = '/api/subscribers/detail?platform=BROWSER';
// var urlForActiveSubscriber = '/api/subscribers/payments?platform=BROWSER&lang=EN&tenant=AMB_EE&maxResults=100&channel[]=POSTPAID';

// var checkIfUserSubscribed = function () {
//     getJSON(urlForTenant, function (err, data) {
//         if (err !== null) {
//             ga('send', 'event', 'Popup test', 'new user');
//             localStorage.setItem('newUser', true);
//             console.log(true, data);
//         } else {
//             if (!data) {
//                 ga('send', 'event', 'Popup test', 'new user');
//                 localStorage.setItem('newUser', true);
//                 console.log(true, data);
//                 return;
//             }
//             if (data.tenant == 'AMB_LT' || data.tenant == 'AMB_LV' || data.tenant == 'AMB_EE') {
//                 getJSON(urlForActiveSubscriber, function (err, data) {
//                     if (err !== null) {
//                         ga('send', 'event', 'Popup test', 'new user');
//                         localStorage.setItem('newUser', true);
//                         console.log(true, data);
//                     } else {
//                         if (!data.items.length) {
//                             ga('send', 'event', 'Popup test', 'new user');
//                             localStorage.setItem('newUser', true);
//                             console.log(true, data);
//                         }

//                         for (var i = 0; i < data.items.length; ++i) {
//                             var item = data.items[i];
//                             if (!item.till) {
//                                 localStorage.setItem('newUser', false);
//                                 console.log(false, data);

//                                 ga('send', 'event', 'Popup test', 'active subscriber');
//                                 return;
//                             }
//                         }

//                         for (var t = 0; t < data.items.length; ++t) {
//                             var item2 = data.items[i - 1];
//                             var till = new Date(item2.till);
//                             var dateNow = new Date();

//                             if (till < dateNow) {
//                                 ga('send', 'event', 'Popup test', 'new user');
//                                 localStorage.setItem('newUser', true);
//                                 console.log(true, data);

//                                 return;
//                             } else {
//                                 localStorage.setItem('newUser', false);
//                                 console.log(false, data);

//                                 ga('send', 'event', 'Popup test', 'active subscriber');
//                             }
//                         }
//                     }
//                 });
//             } else {
//                 localStorage.setItem('newUser', false);
//                 console.log(false, data);

//                 ga('send', 'event', 'Popup test', 'active subscriber');
//             }
//         }
//     });
// };

// checkIfUserSubscribed();


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

// window.addEventListener('locationchange', function () {
//     checkIfUserSubscribed();
// });

// // setInterval(function () {
// //     checkIfUserSubscribed();
// // }, 2000);

// var bundlesLt = {
//     topInBaltics: 'TOP BALTIJOS ŠALYSE',
//     allInclusive: 'Viskas įskaičiuota',
//     price: '14,99 Eur / mėn.',
//     tvChannelsIncluded: 'Įtraukta TV kanalų (55)',
//     discoveryFree: 'Discovery+ NEMOKAMAI',

//     title1: 'Disney ir Paramount+ hitai',
//     title2: 'Išskirtinis Go3 originalus turinys',
//     title3: 'Nesibaigiantis sporto turinys',
//     title4: 'Tiesioginiai televizijos kanalai ir 7 dienų archyvas',

//     startWatchingNow: 'Pradėkite žiūrėti jau dabar!',
//     cancelAnytime: 'Atšaukite bet kada',
//     adultContent: {
//         title: 'Turinys suaugusiems',
//         price: '17,98 Eur / mėn.',
//     },
//     nbaContent: {
//         title: 'NBA League Pass prenumerata',
//         price: '23,39 Eur / mėn.',
//     },
// };

// var bundlesEn = {
//     topInBaltics: 'TOP IN BALTICS',
//     allInclusive: 'All Inclusive',
//     price: '14.99 € / month',
//     tvChannelsIncluded: 'TV channels included (55)',
//     discoveryFree: 'Discovery+ for FREE',

//     title1: 'Disney & Paramount+ blockbusters',
//     title2: 'Exclusive original Go3 content',
//     title3: 'Unlimited sports content',
//     title4: 'Live TV & 7 days TV Archive',

//     startWatchingNow: 'Start watching now!',
//     cancelAnytime: 'Cancel anytime',
//     adultContent: {
//         title: 'Adult content included',
//         price: '17.98 € / month',
//     },
//     nbaContent: {
//         title: 'NBA League Pass subscription',
//         price: '23.39 € / month',
//     },
// };

// var bundlesRu = {
//     topInBaltics: 'ТОП В БАЛТИИ',
//     allInclusive: 'Все включено',
//     price: '14.99 € / месяц',
//     tvChannelsIncluded: 'ТВ каналы включены (55)',
//     discoveryFree: 'discovery+ БЕСПЛАТНО',

//     title1: 'Disney & Paramount+ блокбастеры',
//     title2: 'Эксклюзивный оригинальный Go3 контент',
//     title3: 'Безлимитный спорт контент',
//     title4: 'ТВ и 7 дневный архив каналов',

//     startWatchingNow: 'Начинайте смотреть прямо сейчас!',
//     cancelAnytime: 'Отключите в любое время',
//     adultContent: {
//         title: 'Пакет для взрослых',
//         price: '17.98 € / месяц',
//     },
//     nbaContent: {
//         title: 'Подписка NBA League Pass',
//         price: '23.39 € / месяц',
//     },
// };

// var setButtonText = function () {
//     if (localStorage.getItem('language') == '"LT"') {
//         return 'ŽIŪRĖTI';
//     } else if (localStorage.getItem('language') == '"EN"') {
//         return 'WATCH';
//     } else if (localStorage.getItem('language') == '"RU"') {
//         return 'СМОТРЕТЬ';
//     }
// };

// function setCookie(name, value, days) {
//     var expires = '';
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//         expires = '; expires=' + date.toUTCString();
//     }
//     document.cookie = name + '=' + (value || '') + expires + '; path=/';
// }
// function getCookie(name) {
//     var nameEQ = name + '=';
//     var ca = document.cookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//     }
//     return null;
// }

// var getJSON = function (url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.responseType = 'json';
//     xhr.onload = function () {
//         var status = xhr.status;
//         if (status === 200) {
//             callback(null, xhr.response);
//         } else {
//             callback(status, xhr.response);
//         }
//     };
//     xhr.send();
// };

// var pageBundleId;

// var getProductBundleIds = function () {
//     var pageUrl = window.location.href;

//     var mediaId = pageUrl.match(/\d+/g)[pageUrl.match(/\d+/g).length - 1];

//     var serialPage = pageUrl.match(/\bserial\b/);
//     var videoPage = pageUrl.match(/\bvod\b/);
//     var livePage = pageUrl.match(/\blive\b/);
//     var url;

//     if (serialPage) {
//         var serialId = pageUrl.match(/\bserial-\b.[0-9]+/)[0];
//         var extractedNumbersFormSeries = serialId.match(/[0-9]+/);
//         url = 'https://go3.lt/api/products/vods/serials/' + extractedNumbersFormSeries + '?platform=BROWSER&lang=EN&tenant=AMB_LT';
//     }

//     if (videoPage) {
//         url = 'https://go3.lt/api/products/vods/' + mediaId + '?platform=BROWSER&lang=EN&tenant=AMB_LT';
//     }

//     if (livePage) {
//         var liveTvMediaId = pageUrl.match(/\blive-\b.[0-9]+/)[0];
//         var extractedNumbers = liveTvMediaId.match(/[0-9]+/);
//         url = 'https://go3.lt/api/products/lives/' + extractedNumbers + '?platform=BROWSER&lang=EN&tenant=AMB_LT';
//     }

//     getJSON(url, function (err, data) {
//         if (err !== null) {
//             console.table('Something went wrong: ' + err);
//         } else {
//             var bundles = data.bundles;
//             var bundleIds = [];

//             for (i = 0; i < bundles.length; i++) {
//                 if (i != bundles.length - 1) {
//                     bundleIds += bundles[i].id + ',';
//                 } else {
//                     bundleIds += bundles[i].id;
//                 }
//             }

//             localStorage.setItem('bundleIds', '[2958734,2935377]');

//             if (bundleIds == '989311,989317,989318,989339,2958734') {
//                 localStorage.setItem('bundleIds', '[2958734,2935377,3411405]');
//             }

//             if (bundleIds == '2218494') {
//                 localStorage.setItem('bundleIds', '[2958734,2935377,2218494]');
//             }

//             pageBundleId = bundleIds;
//         }
//     });
// };

// var generateModal = function () {
//     pageBundleId = '';
//     getProductBundleIds();

//     var interval = window.setInterval(function () {
//         var bundlesByLanguage;

//         if (localStorage.getItem('language') == '"LT"') {
//             bundlesByLanguage = bundlesLt;
//         } else if (localStorage.getItem('language') == '"EN"') {
//             bundlesByLanguage = bundlesEn;
//         } else if (localStorage.getItem('language') == '"RU"') {
//             bundlesByLanguage = bundlesRu;
//         } else if (localStorage.getItem('language') == '"LV"') {
//             bundlesByLanguage = bundlesLv;
//         } else if (localStorage.getItem('language') == '"EE"') {
//             bundlesByLanguage = bundlesEe;
//         }

//         clearInterval(interval);
//         if (pageBundleId && !document.querySelector('.ab-test-modal')) {
//             var price = bundlesByLanguage.price;
//             var title5Placeholder = '<span hidden>';

//             if (pageBundleId == 2218494) {
//                 price = bundlesByLanguage.adultContent.price;
//                 var title5 = bundlesByLanguage.adultContent.title;
//                 title5Placeholder =
//                     '<div class="c-feature__item"><i class="o-icon c-feature__icon u-color-accent o-icon--check"></i><span class="o-typography__subtitle3 c-feature__label">' +
//                     title5 +
//                     '</span></div>';
//             }

//             if (pageBundleId == '989311,989317,989318,989339,2958734') {
//                 price = bundlesByLanguage.nbaContent.price;
//                 var title5 = bundlesByLanguage.nbaContent.title;
//                 title5Placeholder =
//                     '<div class="c-feature__item"><i class="o-icon c-feature__icon u-color-accent o-icon--check"></i><span class="o-typography__subtitle3 c-feature__label">' +
//                     title5 +
//                     '</span></div>';
//             }

//             var topInBaltics = bundlesByLanguage.topInBaltics;
//             var allInclusive = bundlesByLanguage.allInclusive;
//             var tvChannelsIncluded = bundlesByLanguage.tvChannelsIncluded;
//             var discoveryFree = bundlesByLanguage.discoveryFree;
//             var title1 = bundlesByLanguage.title1;
//             var title2 = bundlesByLanguage.title2;
//             var title3 = bundlesByLanguage.title3;
//             var title4 = bundlesByLanguage.title4;
//             var startWatchingNow = bundlesByLanguage.startWatchingNow;
//             var cancelAnytime = bundlesByLanguage.cancelAnytime;

//             var modal = document.createElement('div');
//             modal.setAttribute('class', 'ab-test-modal');
//             modal.innerHTML =
//                 '<div class="modal-overflow"></div><div class="modal-inner"> ' +
//                 '<div class="modal-top-in-baltics">' +
//                 topInBaltics +
//                 '</div>' +
//                 '<div class="modal-close"></div>' +
//                 '<div class="modal-recommended">' +
//                 '<div class="modal-title">' +
//                 allInclusive +
//                 '</div>' +
//                 '<div class="modal-price">' +
//                 price +
//                 '</div></div>' +
//                 '<div class="modal-channels">' +
//                 tvChannelsIncluded +
//                 '</div>' +
//                 '<div class="c-feature__column">' +
//                 '<div class="c-feature__item"><i class="o-icon c-feature__icon u-color-accent o-icon--gift"></i><span class="o-typography__subtitle3 c-feature__label">' +
//                 discoveryFree +
//                 '</span></div>' +
//                 '<div class="c-feature__item"><i class="o-icon c-feature__icon u-color-accent o-icon--check"></i><span class="o-typography__subtitle3 c-feature__label">' +
//                 title1 +
//                 '</span></div>' +
//                 '<div class="c-feature__item"><i class="o-icon c-feature__icon u-color-accent o-icon--check"></i><span class="o-typography__subtitle3 c-feature__label">' +
//                 title2 +
//                 '</span></div>' +
//                 '<div class="c-feature__item"><i class="o-icon c-feature__icon u-color-accent o-icon--check"></i><span class="o-typography__subtitle3 c-feature__label">' +
//                 title3 +
//                 '</span></div>' +
//                 '<div class="c-feature__item"><i class="o-icon c-feature__icon u-color-accent o-icon--check"></i><span class="o-typography__subtitle3 c-feature__label">' +
//                 title4 +
//                 '</span></div>' +
//                 title5Placeholder +
//                 '</div>' +
//                 '<button class="o-button o-button--primary modal-subscribe-button"> <span class="o-typography__label o-button__label u-bold"> ' +
//                 startWatchingNow +
//                 ' </span> </button>' +
//                 '<div class="modal-cancelAnytime">' +
//                 cancelAnytime +
//                 '</div>';

//             document.querySelector('body').append(modal);

//             var modalCloseButton = document.querySelector('.modal-close');
//             var modalOverflow = document.querySelector('.modal-close, .modal-overflow ');
//             var modalSubscribeButton = document.querySelector('.modal-subscribe-button');

//             modalCloseButton.addEventListener('click', function () {
//                 document.querySelector('.ab-test-modal').remove();
//             });

//             modalOverflow.addEventListener('click', function () {
//                 document.querySelector('.ab-test-modal').remove();
//             });

//             modalSubscribeButton.addEventListener('click', function () {
//                 document.querySelector('.ab-test-modal').remove();
//                 window.location = 'https://go3.lt/subscriber/checkout';
//             });

//             var contentUrl = window.location.href;

//             var modalInterval = window.setInterval(function () {
//                 if (contentUrl != window.location.href) {
//                     clearInterval(modalInterval);
//                     document.querySelector('.ab-test-modal').remove();
//                 }
//             }, 1000);
//         }
//     }, 200);
// };

// setInterval(() => {
//     if (localStorage.getItem('newUser') == 'true' && (window.location.href.indexOf('movies') > -1 || window.location.href.indexOf('paramount') > -1)) {
//         var buttonContainer = document.querySelector(' div.c-highlight__wrapper > div.c-highlight__buttons ');
//         if (buttonContainer && !document.querySelector('.changed-button')) {
//             buttonContainer.classList.add('changed-button');
//             var buttonPrimary = buttonContainer.querySelector('.o-button--primary');
//             if (
//                 buttonPrimary &&
//                 (buttonPrimary.textContent.includes('BUY') || buttonPrimary.textContent.includes('PIRKTI') || buttonPrimary.textContent.includes('КУПИТЬ'))
//             ) {
//                 buttonPrimary.remove();

//                 var newButton = document.createElement('div');
//                 newButton.setAttribute('class', 'o-button o-button--primary ab-test-button');
//                 newButton.innerHTML = setButtonText() + ' <div class="arrow-right"></div>';

//                 buttonContainer.prepend(newButton);
//                 var newAddedButton = document.querySelector('.ab-test-button');

//                 newAddedButton.addEventListener('click', function () {
//                     getProductBundleIds();
//                     generateModal();
//                 });
//             }
//         }
//     }
// }, 500);

// setInterval(() => {
//     if (
//         localStorage.getItem('newUser') == 'true' &&
//         (window.location.href.indexOf('serial') > -1 ||
//             window.location.href.indexOf('go3_extra') > -1 ||
//             window.location.href.indexOf('ghost') > -1 ||
//             window.location.href.indexOf('paramount/') > -1 ||
//             window.location.href.indexOf('discoveryplus/') > -1)
//     ) {
//         var buttonContainer = document.querySelector(' div.c-highlight__wrapper > div.c-highlight__buttons ');
//         if (
//             !document.querySelector('div.c-highlight__buttons > div:nth-child(1) > i.o-icon--play') &&
//             buttonContainer &&
//             !document.querySelector('.changed-button')
//         ) {
//             buttonContainer.classList.add('changed-button');

//             var newButton = document.createElement('div');
//             newButton.setAttribute('class', 'o-button o-button--primary ab-test-button');
//             newButton.innerHTML = setButtonText() + ' <div class="arrow-right"></div>';

//             buttonContainer.prepend(newButton);
//             buttonContainer.querySelector('.ab-test-button').addEventListener('click', function () {
//                 getProductBundleIds();
//                 generateModal();
//             });
//             document.querySelector('div.c-highlight__buttons.changed-button > div:nth-child(2)').remove();
//         }
//         var additionalSeriesBlocks = document.querySelectorAll(
//             '#app > div.app-container > div > section.c-section.c-section--two-lines > div > div.c-section__container.js-section-container > div.c-section__wrapper > div'
//         );

//         if (additionalSeriesBlocks) {
//             var seriesButton = document.createElement('div');
//             seriesButton.setAttribute('class', 'ab-test-button');
//             seriesButton.innerHTML = '<div class="arrow-right"></div>';

//             setInterval(() => {
//                 document
//                     .querySelectorAll(
//                         '#app > div.app-container > div > section.c-section.c-section--two-lines > div > div.c-section__container.js-section-container > div.c-section__wrapper > div'
//                     )
//                     .forEach(function (block) {
//                         if (!block.querySelector('.ab-test-button') && !block.querySelector('i.o-icon.o-button__icon.o-icon--play-circle.o-icon--xlarge')) {
//                             block.prepend(seriesButton.cloneNode(true));
//                             block.querySelector('.ab-test-button').addEventListener('click', function () {
//                                 getProductBundleIds();
//                                 generateModal();
//                             });
//                         }
//                     });
//             }, 1000);
//         }
//     }
// }, 500);

// // Interval for live tv

// setInterval(() => {
//     if (localStorage.getItem('newUser') == 'true' && window.location.href.indexOf('live_tv') > -1) {
//         var buttonContainer = document.querySelectorAll('div.c-live-detail__preview.c-live-detail__preview--channel > div.c-live-detail__cover.u-desktop-only');
//         var buttonContainerMobile = document.querySelectorAll('a.is-selected.js-current-program > div.c-epg-program-detail.u-mobile-only > div');

//         if (buttonContainer) {
//             var newButton = document.createElement('div');
//             newButton.setAttribute('class', 'o-button o-button--primary ab-test-button');
//             newButton.innerHTML = setButtonText() + ' <div class="arrow-right"></div>';

//             buttonContainer.forEach(function (container) {
//                 if (!container.querySelector('.ab-test-button')) {
//                     container.prepend(newButton);

//                     container.querySelector('.ab-test-button').addEventListener('click', function () {
//                         getProductBundleIds();
//                         generateModal();
//                     });
//                 }
//             });

//             buttonContainerMobile.forEach(function (container) {
//                 if (!container.querySelector('.ab-test-button')) {
//                     container.prepend(newButton.cloneNode(true));

//                     container.querySelector('.ab-test-button').addEventListener('click', function () {
//                         getProductBundleIds();
//                         generateModal();
//                     });
//                 }
//             });
//         }
//     }
// }, 500);

// var untilityInterval = window.setInterval(() => {
//     var upselModal = document.querySelector('.o-modal--upsell-popup');
//     if (upselModal && localStorage.getItem('newUser') == 'true') {
//         upselModal.querySelector('.o-modal__close').click();
//     }

//     var button = document.querySelector('#app > div.app-container > section > div > div.o-page__column.o-page__column--right > form > div.o-form__group.u-mb-20 > div:nth-child(1) > button')
//     if (button) {
//         button.addEventListener('click', function () {
//             checkIfUserSubscribed();

//             setTimeout(() => {
//                 checkIfUserSubscribed();
//             }, 2000);
//         })
//     }
// }, 500);



// var addClassToBody = window.setInterval(() => {
//     var body = document.querySelector('body');
//     if (body && localStorage.getItem('newUser') == 'true') {
//         if (!body.classList.contains('ab-visible')) {
//             body.classList.add('ab-visible')
//         }
//     } else if (body && localStorage.getItem('newUser') == 'false') {
//         if (body.classList.contains('ab-visible')) {
//             body.classList.remove('ab-visible')
//         }
//     }
// })
