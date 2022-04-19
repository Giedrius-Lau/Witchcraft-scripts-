// var selectedLanguage;

// var uspEn = {
//     search: {
//         usp1: 'Go3 original content',
//         usp2: 'Watch on all devices',
//         usp3: 'Download and watch any time',
//         usp4: 'More than 3.000 movies and series',
//     }, 
//     films: {
//         usp1: 'Most popular Lithuanian movies',
//         usp2: 'More than 2000 movies',
//         usp3: 'Dubbed in Lithuanian/Latvian/Estonian',
//         usp4: 'International blockbusters',
//     },
//     serials: {
//         usp1: 'Exlusive Go3 originals',
//         usp2: 'More than 1000 various series',
//         usp3: 'Dubbed in Lithuanian/Latvian/Estonian',
//         usp4: 'Popular international series',
//     },
//     livetv: {
//         usp1: 'More than 30 popular TV channels',
//         usp2: '7 days catch-up',
//         usp3: 'Lithuanian/Latvian/Estonian channels',
//         usp4: 'Most popular documentaries',
//     },
//     sport: {
//         usp1: 'Famous sports basketball/khl/wrc (choose country specific)',
//         usp2: 'Live events',
//         usp3: 'Tennis, bicycle (Cycle sport?), box',
//         usp4: 'Local commentators',
//     },
//     rent: {
//         usp1: 'Newest cinema blockbusters',
//         usp2: 'More than 500 moveis for rent',
//         usp3: 'Watch with family at home',
//         usp4: 'Constant rent renewals',
//     },
//     disney: {
//         usp1: 'Popular movies',
//         usp2: 'More than 2000 movies',
//         usp3: 'Dubbed in Lithuanian/Latvian/Estonian',
//         usp4: 'International blockbusters',
//     },
//     paramount: {
//         usp1: 'Popular movies',
//         usp2: 'More than 2000 movies',
//         usp3: 'Localized',
//         usp4: 'International blockbusters',
//     },
//     ruski: {
//         usp1: 'All content in RU language',
//         usp2: 'Original movies in Russian language',
//         usp3: 'Go3 originals and international movies',
//         usp4: 'Everything in one place',
//     },
//     discovery: {
//         usp1: 'Award winning documentaries',
//         usp2: 'Sport event on Eurosport',
//         usp3: 'Olympics live translation and coverage',
//         usp4: 'Popular reality shows',
//     },
//     shortVideos: {
//         usp1: 'Original local content',
//         usp2: 'Behind the scenes',
//         usp3: 'Sport and beauty',
//         usp4: 'Auto and travels',
//     },
// };

// var uspLt = {
//     search: {
//         usp1: 'Originalus Go3 turinys',
//         usp2: 'Žiūrėk visuose įrenginiuose',
//         usp3: 'Atsisiųsk ir žiūrėk bet kada',
//         usp4: 'Daugiau nei 3.000 filmų ir serialų',
//     }, 
//     films: {
//         usp1: 'Populiariausi Lietuviški filmai',
//         usp2: 'Daugiau nei 2000 filmų',
//         usp3: 'Įgarsinta lietuviškai',
//         usp4: 'Tarptautiniai filmų hitai',
//     },
//     serials: {
//         usp1: 'Išskirtinis Go3 originalus turinys',
//         usp2: 'Daugiau nei 1000+ skirtingų serialų',
//         usp3: 'Įgarsinta lietuviškai',
//         usp4: 'Populiariausi tarptautiniai serialai',
//     },
//     livetv: {
//         usp1: 'Daugiau nei 30 populiarių TV kanalų',
//         usp2: '7 dienų archyvas',
//         usp3: 'Lietuviški kanalai',
//         usp4: 'Populiariausia dokumentika',
//     },
//     sport: {
//         usp1: 'Pagrindinės krepšinio lygos',
//         usp2: 'Tiesioginės varžybų transliacijos',
//         usp3: 'Tenisas, dviračiai, boksas',
//         usp4: 'Komentatoriai lietuvių kalba',
//     },
//     rent: {
//         usp1: 'Naujausi kino teatrų hitai',
//         usp2: 'Daugiau nei 500 filmų nuomai',
//         usp3: 'Žiūrėkite su šeima namuose',
//         usp4: 'Pastovus filmų papildymas',
//     },
//     disney: {
//         usp1: 'Populiariausi filmai',
//         usp2: 'Daugiau nei 2000 filmų',
//         usp3: 'Įgarsinta lietuviškai',
//         usp4: 'Tarptautiniai filmų hitai',
//     },
//     paramount: {
//         usp1: 'Populiariausi filmai',
//         usp2: 'Daugiau nei 2000 filmų',
//         usp3: 'Įgarsinta lietuviškai',
//         usp4: 'Tarptautiniai filmų hitai',
//     },
//     ruski: {
//         usp1: 'Visas turinys rusų kalba',
//         usp2: 'Originalūs filmai rusų kalba',
//         usp3: 'Go3 originalus turinys ir tarptautiniai filmai',
//         usp4: 'Viskas vienoje vietoje',
//     },
//     discovery: {
//         usp1: 'Apdovanojimus pelniusi dokumentika',
//         usp2: 'Sporto varžybos per Eurosport',
//         usp3: 'Olimpiados transliacijos ir apžvalga',
//         usp4: 'Populiarūs realybės šou',
//     },
//     shortVideos: {
//         usp1: 'Originalus lietuviškas turinys',
//         usp2: 'Už kadro likęs turinys',
//         usp3: 'Sportas ir grožis',
//         usp4: 'Automobiliai ir kelionės',
//     },
// };

// var uspRu = {
//     search: {
//         usp1: 'Оригинальный контент Go3',
//         usp2: 'Смотри на всех устройствах',
//         usp3: 'Скачивайте и смотрите в любое время',
//         usp4: 'Более 3000 фильмов и сериалов',
//     }, 
//     films: {
//         usp1: 'Самые популярные местные фильмы',
//         usp2: 'Более 2000 фильмов',
//         usp3: 'Дублировано на литовском/латышском/эстонском языках',
//         usp4: 'Международные блокбастеры',
//     },
//     serials: {
//         usp1: 'Эксклюзивный оригинальный контент Go3',
//         usp2: 'Более 1000 различных сериалов',
//         usp3: 'Дублировано на литовском/латышском/эстонском',
//         usp4: 'Популярные международные сериалы',
//     },
//     livetv: {
//         usp1: 'Более 30 популярных телеканалов',
//         usp2: 'Архив до 7 дней',
//         usp3: 'Литовские/латвийские/эстонские каналы',
//         usp4: 'Самая популярная документика',
//     },    
//     sport: {
//         usp1: '"Основные баскетбольные лиги / КХЛ / Чемпионат мира по ралли"',
//         usp2: 'Прямые трансляции',
//         usp3: 'Теннис, велосипедный спорт, бокс ',
//         usp4: 'Местные комментаторы',
//     },
//     rent: {
//         usp1: 'Новые блокбастеры',
//         usp2: 'Более 500 фильмов в прокате',
//         usp3: 'Смотрите дома всей семьей',
//         usp4: 'Постоянное добавление фильмов',
//     },
//     disney: {
//         usp1: 'Популярные фильмы',
//         usp2: 'Более 2000 фильмов',
//         usp3: 'Дублировано на литовском / латышском / эстонском',
//         usp4: 'Международные блокбастеры',
//     },
//     paramount: {
//         usp1: 'Популярные фильмы',
//         usp2: 'Более 2000 фильмов',
//         usp3: 'Локализовано ',
//         usp4: 'Международные блокбастеры',
//     },
//     ruski: {
//         usp1: 'Весь контент на русском языке',
//         usp2: 'Оригинальные фильмы на русском языке',
//         usp3: 'Оригинальный контент Go3 и международные фильмы',
//         usp4: 'Всё в одном месте',
//     },
//     discovery: {
//         usp1: 'Удостоенная наградами документика',
//         usp2: 'Спортивные мероприятия на Eurosport',
//         usp3: 'Олимпийские трансляции и обзоры',
//         usp4: 'Популярные реалити-шоу',
//     },
//     shortVideos: {
//         usp1: 'Оригинальный местный контент',
//         usp2: 'За кулисами',
//         usp3: 'Спорт и красота',
//         usp4: 'Авто и путешествия',
//     },
// };

// var uspLv = {
//     search: {
//         usp1: 'Go3 Oriģinālsaturs',
//         usp2: 'Skaties visās ierīcēs',
//         usp3: 'Lejuplādē un skaties, kad vēlies',
//         usp4: 'Vairāk kā 3000 filmas un seriāli',
//     }, 
//     films: {
//         usp1: 'Populārākās latviešu filmas',
//         usp2: 'Vairāk kā 2000 filmas',
//         usp3: 'Dublētas latviešu valodā',
//         usp4: 'Starptautiskas grāvējfilmas',
//     },
//     serials: {
//         usp1: 'Ekskluzīvs Go3 oriģinālsaturs',
//         usp2: 'Vairāk kā 1000 dažādu seriālu',
//         usp3: 'Dublēti latviešu valodā',
//         usp4: 'Populāri starptautiski seriāli',
//     },
//     livetv: {
//         usp1: 'Vairāk kā 30 populāru TV kanālu',
//         usp2: '7 dienu arhīvs',
//         usp3: 'Latvijas kanāli',
//         usp4: 'Populāras dokumentālās filmas',
//     },    
//     sport: {
//         usp1: 'KHL spēles',
//         usp2: 'Sporta tiešraides',
//         usp3: 'Teniss, riteņbraukšana, bokss',
//         usp4: 'Vietējie komentētāji',
//     },
//     rent: {
//         usp1: 'Jaunākie kino grāvēji',
//         usp2: 'Vairāk kā 500 filmas nomā',
//         usp3: 'Skaties kopā ar ģimeni mājās',
//         usp4: 'Pastāvīga filmu papildināšana',
//     },
//     disney: {
//         usp1: 'Populāras filmas',
//         usp2: 'Vairāk kā 2000 filmas',
//         usp3: 'Dublētas latviešu valodā',
//         usp4: 'Starptautiski kases grāvēji',
//     },
//     paramount: {
//         usp1: 'Populāras filmas',
//         usp2: 'Vairāk kā 2000 filmas',
//         usp3: 'Tulkotas latviski',
//         usp4: 'Starptautiski kases grāvēji',
//     },
//     ruski: {
//         usp1: 'Saturs krievu valodā',
//         usp2: 'Oriģinālfilmas krievu valodā',
//         usp3: 'Go3 Oriģinālsaturs un starptautiskas filmas',
//         usp4: 'Viss vienuviet',
//     },
//     discovery: {
//         usp1: 'Godalgotas dokumentālās filmas',
//         usp2: 'Sporta tiešraides Eurosport kanālā',
//         usp3: 'Olimpisko spēļu tiešraides un apskati',
//         usp4: 'Populāri realitātes šovi',
//     },
//     shortVideos: {
//         usp1: 'Oriģināls vietējais saturs',
//         usp2: 'Aizkadri',
//         usp3: 'Sports un skaistums',
//         usp4: 'Auto un ceļojumi',
//     },
// };

// var uspEe = {
//     search: {
//         usp1: 'Go3 Oriģinālsaturs',
//         usp2: 'Skaties visās ierīcēs',
//         usp3: 'Lejuplādē un skaties, kad vēlies',
//         usp4: 'Vairāk kā 3000 filmas un seriāli',
//     }, 
//     films: {
//         usp1: 'Populārākās latviešu filmas',
//         usp2: 'Vairāk kā 2000 filmas',
//         usp3: 'Dublētas latviešu valodā',
//         usp4: 'Starptautiskas grāvējfilmas',
//     },
//     serials: {
//         usp1: 'Ekskluzīvs Go3 oriģinālsaturs',
//         usp2: 'Vairāk kā 1000 dažādu seriālu',
//         usp3: 'Dublēti latviešu valodā',
//         usp4: 'Populāri starptautiski seriāli',
//     },
//     livetv: {
//         usp1: 'Vairāk kā 30 populāru TV kanālu',
//         usp2: '7 dienu arhīvs',
//         usp3: 'Latvijas kanāli',
//         usp4: 'Populāras dokumentālās filmas',
//     },    
//     sport: {
//         usp1: 'KHL spēles',
//         usp2: 'Sporta tiešraides',
//         usp3: 'Teniss, riteņbraukšana, bokss',
//         usp4: 'Vietējie komentētāji',
//     },
//     rent: {
//         usp1: 'Jaunākie kino grāvēji',
//         usp2: 'Vairāk kā 500 filmas nomā',
//         usp3: 'Skaties kopā ar ģimeni mājās',
//         usp4: 'Pastāvīga filmu papildināšana',
//     },
//     disney: {
//         usp1: 'Populāras filmas',
//         usp2: 'Vairāk kā 2000 filmas',
//         usp3: 'Dublētas latviešu valodā',
//         usp4: 'Starptautiski kases grāvēji',
//     },
//     paramount: {
//         usp1: 'Populāras filmas',
//         usp2: 'Vairāk kā 2000 filmas',
//         usp3: 'Tulkotas latviski',
//         usp4: 'Starptautiski kases grāvēji',
//     },
//     ruski: {
//         usp1: 'Saturs krievu valodā',
//         usp2: 'Oriģinālfilmas krievu valodā',
//         usp3: 'Go3 Oriģinālsaturs un starptautiskas filmas',
//         usp4: 'Viss vienuviet',
//     },
//     discovery: {
//         usp1: 'Godalgotas dokumentālās filmas',
//         usp2: 'Sporta tiešraides Eurosport kanālā',
//         usp3: 'Olimpisko spēļu tiešraides un apskati',
//         usp4: 'Populāri realitātes šovi',
//     },
//     shortVideos: {
//         usp1: 'Oriģināls vietējais saturs',
//         usp2: 'Aizkadri',
//         usp3: 'Sports un skaistums',
//         usp4: 'Auto un ceļojumi',
//     },
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

// function insertAfter(el, referenceNode) {
//     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
// }

// if (!document.querySelector('.c-navbar-subscriber')) {
//     setCookie('new-user', true, 90);
// }

// var setUspLanguage = function () {
//     if (localStorage.getItem('language') == '"LT"') {
//         selectedLanguage = uspLt;
//     } else if (localStorage.getItem('language') == '"EN"') {
//         selectedLanguage = uspEn;
//     } else if (localStorage.getItem('language') == '"RU"') {
//         selectedLanguage = uspRu;
//     } else if (localStorage.getItem('language') == '"LV"') {
//         selectedLanguage = uspLv;
//     } else if (localStorage.getItem('language') == '"EE"') {
//         selectedLanguage = uspEe;
//     }
// }

// var generateUspHtml = function (text, uspPlacement, className) {
//     uspPlacement.classList.add('added-usp');

//     var usp = document.createElement('div');
//         usp.setAttribute('class', 'usp-container ' + className);
//         usp.innerHTML = '<div class="usp-conatiner-inner">' + 
//         '<div><i class="o-icon c-feature__icon u-color-accent o-icon--check"></i><div class="usp-text">'+ text.usp1 +'</div></div>' + 
//         '<div><i class="o-icon c-feature__icon u-color-accent o-icon--check"></i><div class="usp-text">'+ text.usp2 +'</div></div>' + 
//         '<div><i class="o-icon c-feature__icon u-color-accent o-icon--check"></i><div class="usp-text">'+ text.usp3 +'</div></div>' + 
//         '<div><i class="o-icon c-feature__icon u-color-accent o-icon--check"></i><div class="usp-text">'+ text.usp4 +'</div></div></div>';

//     uspPlacement.prepend(usp)  
//     insertAfter(usp, uspPlacement)
// }


// setInterval(() => {
//     if (window.location.href.indexOf('search') > -1) {
//         var uspPlacement = document.querySelector('.c-search__tabs');
       
//         if (uspPlacement && !uspPlacement.classList.contains('added-usp')) {
//     setUspLanguage()
//             generateUspHtml(selectedLanguage.search, uspPlacement)
//         }
//     }

//     if (window.location.href.indexOf('paramount') > -1) {
//         var uspPlacement = document.querySelector('section.c-highlight.c-highlight--detail');
       
//         if (uspPlacement && !uspPlacement.classList.contains('added-usp')) {
//             setUspLanguage()
//             generateUspHtml(selectedLanguage.paramount, uspPlacement, 'movies')
//         }
//     }

//     if (window.location.href.indexOf('serial') > -1) {
//         var uspPlacement = document.querySelector('section.c-highlight.c-highlight--detail');
       
//         if (uspPlacement && !uspPlacement.classList.contains('added-usp')) {
//             setUspLanguage()
//             generateUspHtml(selectedLanguage.serials, uspPlacement, 'movies')
//         }
//     }
// }, 500);





// // setInterval(() => {
// //     if (window.location.href.indexOf('movies') > -1 || window.location.href.indexOf('paramount') > -1) {
// //         var buttonContainer = document.querySelector(' div.c-highlight__wrapper > div.c-highlight__buttons ');
// //         if (buttonContainer && !document.querySelector('.changed-button')) {
// //             buttonContainer.classList.add('changed-button');
// //             if (
// //                 buttonContainer.querySelector('.o-button--primary') &&
// //                 (buttonContainer.querySelector('.o-button--primary').textContent.includes('BUY') ||
// //                     buttonContainer.querySelector('.o-button--primary').textContent.includes('PIRKTI') ||
// //                     buttonContainer.querySelector('.o-button--primary').textContent.includes('КУПИТЬ'))
// //             ) {
// //                 buttonContainer.querySelector('.o-button--primary').remove();

// //                 var newButton = document.createElement('div');
// //                 newButton.setAttribute('class', 'o-button o-button--primary ab-test-button');
// //                 newButton.innerHTML = setButtonText() + ' <div class="arrow-right"></div>';

// //                 buttonContainer.prepend(newButton);
// //                 var newAddedButton = document.querySelector('.ab-test-button');

// //                 newAddedButton.addEventListener('click', function () {
// //                     getProductBundleIds();
// //                     generateModal();
// //                 });
// //             }
// //         }
// //     }
// // }, 500);

// // setInterval(() => {
// //     if (
// //         window.location.href.indexOf('serial') > -1 ||
// //         window.location.href.indexOf('go3_extra') > -1 ||
// //         window.location.href.indexOf('ghost') > -1 ||
// //         window.location.href.indexOf('paramount/') > -1 ||
// //         window.location.href.indexOf('discoveryplus/') > -1
// //     ) {
// //         var buttonContainer = document.querySelector(' div.c-highlight__wrapper > div.c-highlight__buttons ');
// //         if (
// //             !document.querySelector('div.c-highlight__buttons > div:nth-child(1) > i.o-icon--play') &&
// //             buttonContainer &&
// //             !document.querySelector('.changed-button')
// //         ) {
// //             buttonContainer.classList.add('changed-button');

// //             var newButton = document.createElement('div');
// //             newButton.setAttribute('class', 'o-button o-button--primary ab-test-button');
// //             newButton.innerHTML = setButtonText() + ' <div class="arrow-right"></div>';

// //             buttonContainer.prepend(newButton);
// //             buttonContainer.querySelector('.ab-test-button').addEventListener('click', function () {
// //                 getProductBundleIds();
// //                 generateModal();
// //             });
// //             document.querySelector('div.c-highlight__buttons.changed-button > div:nth-child(2)').remove();
// //         }
// //         var additionalSeriesBlocks = document.querySelectorAll(
// //             '#app > div.app-container > div > section.c-section.c-section--two-lines > div > div.c-section__container.js-section-container > div.c-section__wrapper > div'
// //         );

// //         if (additionalSeriesBlocks) {
// //             var seriesButton = document.createElement('div');
// //             seriesButton.setAttribute('class', 'ab-test-button');
// //             seriesButton.innerHTML = '<div class="arrow-right"></div>';

// //             setInterval(() => {
// //                 document
// //                     .querySelectorAll(
// //                         '#app > div.app-container > div > section.c-section.c-section--two-lines > div > div.c-section__container.js-section-container > div.c-section__wrapper > div'
// //                     )
// //                     .forEach(function (block) {
// //                         if (!block.querySelector('.ab-test-button') && !block.querySelector('i.o-icon.o-button__icon.o-icon--play-circle.o-icon--xlarge')) {
// //                             block.prepend(seriesButton.cloneNode(true));
// //                             block.querySelector('.ab-test-button').addEventListener('click', function () {
// //                                 getProductBundleIds();
// //                                 generateModal();
// //                             });
// //                         }
// //                     });
// //             }, 1000);
// //         }
// //     }
// // }, 500);

// // // Interval for live tv

// // setInterval(() => {
// //     if (window.location.href.indexOf('live_tv') > -1) {
// //         var buttonContainer = document.querySelectorAll('div.c-live-detail__preview.c-live-detail__preview--channel > div.c-live-detail__cover.u-desktop-only');
// //         var buttonContainerMobile = document.querySelectorAll('a.is-selected.js-current-program > div.c-epg-program-detail.u-mobile-only > div');

// //         if (buttonContainer) {
// //             var newButton = document.createElement('div');
// //             newButton.setAttribute('class', 'o-button o-button--primary ab-test-button');
// //             newButton.innerHTML = setButtonText() + ' <div class="arrow-right"></div>';

// //             buttonContainer.forEach(function (container) {
// //                 if (!container.querySelector('ab-test-button-button')) {
// //                     container.prepend(newButton);

// //                     container.querySelector('.ab-test-button').addEventListener('click', function () {
// //                         getProductBundleIds();
// //                         generateModal();
// //                     });
// //                 }
// //             });

// //             buttonContainerMobile.forEach(function (container) {
// //                 if (!container.querySelector('ab-test-button-button')) {
// //                     container.prepend(newButton.cloneNode(true));

// //                     container.querySelector('.ab-test-button').addEventListener('click', function () {
// //                         getProductBundleIds();
// //                         generateModal();
// //                     });
// //                 }
// //             });
// //         }
// //     }
// // }, 500);

// var removeUpselModalInterval = window.setInterval(() => {
//     var upselModal = document.querySelector('.o-modal--upsell-popup')
//     if (upselModal) {
//         upselModal.querySelector('.o-modal__close').click()
//     }
// }, 500);