// var amb = '=AMB_LT';
// var urlStart = 'https://go3.lt';
// var bundlesByLanguage;

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
//     search: { //done
//         usp1: 'Originalus Go3 turinys',
//         usp2: '??i??r??k visuose ??renginiuose',
//         usp3: 'Atsisi??sk ir ??i??r??k bet kada',
//         usp4: 'Daugiau nei 3.000 film?? ir serial??',
//     },
//     films: {//done
//         usp1: 'Populiariausi Lietuvi??ki filmai',
//         usp2: 'Daugiau nei 2000 film??',
//         usp3: '??garsinta lietuvi??kai',
//         usp4: 'Tarptautiniai film?? hitai',
//     },
//     serials: {//done
//         usp1: 'I??skirtinis Go3 originalus turinys',
//         usp2: 'Daugiau nei 1000+ skirting?? serial??',
//         usp3: '??garsinta lietuvi??kai',
//         usp4: 'Populiariausi tarptautiniai serialai',
//     },
//     livetv: {//done
//         usp1: 'Daugiau nei 30 populiari?? TV kanal??',
//         usp2: '7 dien?? archyvas',
//         usp3: 'Lietuvi??ki kanalai',
//         usp4: 'Populiariausia dokumentika',
//     },
//     sport: {//done
//         usp1: 'Pagrindin??s krep??inio lygos',
//         usp2: 'Tiesiogin??s var??yb?? transliacijos',
//         usp3: 'Tenisas, dvira??iai, boksas',
//         usp4: 'Komentatoriai lietuvi?? kalba',
//     },
//     rent: {//done
//         usp1: 'Naujausi kino teatr?? hitai',
//         usp2: 'Daugiau nei 500 film?? nuomai',
//         usp3: '??i??r??kite su ??eima namuose',
//         usp4: 'Pastovus film?? papildymas',
//     },
//     disney: {//done
//         usp1: 'Populiariausi filmai',
//         usp2: 'Daugiau nei 2000 film??',
//         usp3: '??garsinta lietuvi??kai',
//         usp4: 'Tarptautiniai film?? hitai',
//     },
//     paramount: {//done
//         usp1: 'Populiariausi filmai',
//         usp2: 'Daugiau nei 2000 film??',
//         usp3: '??garsinta lietuvi??kai',
//         usp4: 'Tarptautiniai film?? hitai',
//     },
//     discovery: {//done
//         usp1: 'Apdovanojimus pelniusi dokumentika',
//         usp2: 'Sporto var??ybos per Eurosport',
//         usp3: 'Olimpiados transliacijos ir ap??valga',
//         usp4: 'Populiar??s realyb??s ??ou',
//     },
//     shortVideos: {//done
//         usp1: 'Originalus lietuvi??kas turinys',
//         usp2: 'U?? kadro lik??s turinys',
//         usp3: 'Sportas ir gro??is',
//         usp4: 'Automobiliai ir kelion??s',
//     },
// };

// var uspRu = {
//     search: {
//         usp1: '???????????????????????? ?????????????? Go3',
//         usp2: '???????????? ???? ???????? ??????????????????????',
//         usp3: '???????????????????? ?? ???????????????? ?? ?????????? ??????????',
//         usp4: '?????????? 3000 ?????????????? ?? ????????????????',
//     },
//     films: {
//         usp1: '?????????? ???????????????????? ?????????????? ????????????',
//         usp2: '?????????? 2000 ??????????????',
//         usp3: '?????????????????????? ???? ??????????????????/??????????????????/?????????????????? ????????????',
//         usp4: '?????????????????????????? ??????????????????????',
//     },
//     serials: {
//         usp1: '???????????????????????? ???????????????????????? ?????????????? Go3',
//         usp2: '?????????? 1000 ?????????????????? ????????????????',
//         usp3: '?????????????????????? ???? ??????????????????/??????????????????/??????????????????',
//         usp4: '???????????????????? ?????????????????????????? ??????????????',
//     },
//     livetv: {
//         usp1: '?????????? 30 ???????????????????? ??????????????????????',
//         usp2: '?????????? ???? 7 ????????',
//         usp3: '??????????????????/????????????????????/?????????????????? ????????????',
//         usp4: '?????????? ???????????????????? ??????????????????????',
//     },
//     sport: {
//         usp1: '"???????????????? ?????????????????????????? ???????? / ?????? / ?????????????????? ???????? ???? ??????????"',
//         usp2: '???????????? ????????????????????',
//         usp3: '????????????, ???????????????????????? ??????????, ???????? ',
//         usp4: '?????????????? ????????????????????????',
//     },
//     rent: {
//         usp1: '?????????? ??????????????????????',
//         usp2: '?????????? 500 ?????????????? ?? ??????????????',
//         usp3: '???????????????? ???????? ???????? ????????????',
//         usp4: '???????????????????? ???????????????????? ??????????????',
//     },
//     disney: {
//         usp1: '???????????????????? ????????????',
//         usp2: '?????????? 2000 ??????????????',
//         usp3: '?????????????????????? ???? ?????????????????? / ?????????????????? / ??????????????????',
//         usp4: '?????????????????????????? ??????????????????????',
//     },
//     paramount: {
//         usp1: '???????????????????? ????????????',
//         usp2: '?????????? 2000 ??????????????',
//         usp3: '???????????????????????? ',
//         usp4: '?????????????????????????? ??????????????????????',
//     },
//     discovery: {
//         usp1: '?????????????????????? ?????????????????? ??????????????????????',
//         usp2: '???????????????????? ?????????????????????? ???? Eurosport',
//         usp3: '?????????????????????? ???????????????????? ?? ????????????',
//         usp4: '???????????????????? ??????????????-??????',
//     },
//     shortVideos: {
//         usp1: '???????????????????????? ?????????????? ??????????????',
//         usp2: '???? ????????????????',
//         usp3: '?????????? ?? ??????????????',
//         usp4: '???????? ?? ??????????????????????',
//     },
// };

// var uspLv = {
//     search: {
//         usp1: 'Go3 Ori??in??lsaturs',
//         usp2: 'Skaties vis??s ier??c??s',
//         usp3: 'Lejupl??d?? un skaties, kad v??lies',
//         usp4: 'Vair??k k?? 3000 filmas un seri??li',
//     },
//     films: {
//         usp1: 'Popul??r??k??s latvie??u filmas',
//         usp2: 'Vair??k k?? 2000 filmas',
//         usp3: 'Dubl??tas latvie??u valod??',
//         usp4: 'Starptautiskas gr??v??jfilmas',
//     },
//     serials: {
//         usp1: 'Ekskluz??vs Go3 ori??in??lsaturs',
//         usp2: 'Vair??k k?? 1000 da????du seri??lu',
//         usp3: 'Dubl??ti latvie??u valod??',
//         usp4: 'Popul??ri starptautiski seri??li',
//     },
//     livetv: {
//         usp1: 'Vair??k k?? 30 popul??ru TV kan??lu',
//         usp2: '7 dienu arh??vs',
//         usp3: 'Latvijas kan??li',
//         usp4: 'Popul??ras dokument??l??s filmas',
//     },
//     sport: {
//         usp1: 'KHL sp??les',
//         usp2: 'Sporta tie??raides',
//         usp3: 'Teniss, rite??brauk??ana, bokss',
//         usp4: 'Viet??jie koment??t??ji',
//     },
//     rent: {
//         usp1: 'Jaun??kie kino gr??v??ji',
//         usp2: 'Vair??k k?? 500 filmas nom??',
//         usp3: 'Skaties kop?? ar ??imeni m??j??s',
//         usp4: 'Past??v??ga filmu papildin????ana',
//     },
//     disney: {
//         usp1: 'Popul??ras filmas',
//         usp2: 'Vair??k k?? 2000 filmas',
//         usp3: 'Dubl??tas latvie??u valod??',
//         usp4: 'Starptautiski kases gr??v??ji',
//     },
//     paramount: {
//         usp1: 'Popul??ras filmas',
//         usp2: 'Vair??k k?? 2000 filmas',
//         usp3: 'Tulkotas latviski',
//         usp4: 'Starptautiski kases gr??v??ji',
//     },
//     discovery: {
//         usp1: 'Godalgotas dokument??l??s filmas',
//         usp2: 'Sporta tie??raides Eurosport kan??l??',
//         usp3: 'Olimpisko sp????u tie??raides un apskati',
//         usp4: 'Popul??ri realit??tes ??ovi',
//     },
//     shortVideos: {
//         usp1: 'Ori??in??ls viet??jais saturs',
//         usp2: 'Aizkadri',
//         usp3: 'Sports un skaistums',
//         usp4: 'Auto un ce??ojumi',
//     },
// };

// var uspEe = {
//     search: {
//         usp1: 'Go3 Ori??in??lsaturs',
//         usp2: 'Skaties vis??s ier??c??s',
//         usp3: 'Lejupl??d?? un skaties, kad v??lies',
//         usp4: 'Vair??k k?? 3000 filmas un seri??li',
//     },
//     films: {
//         usp1: 'Popul??r??k??s latvie??u filmas',
//         usp2: 'Vair??k k?? 2000 filmas',
//         usp3: 'Dubl??tas latvie??u valod??',
//         usp4: 'Starptautiskas gr??v??jfilmas',
//     },
//     serials: {
//         usp1: 'Ekskluz??vs Go3 ori??in??lsaturs',
//         usp2: 'Vair??k k?? 1000 da????du seri??lu',
//         usp3: 'Dubl??ti latvie??u valod??',
//         usp4: 'Popul??ri starptautiski seri??li',
//     },
//     livetv: {
//         usp1: 'Vair??k k?? 30 popul??ru TV kan??lu',
//         usp2: '7 dienu arh??vs',
//         usp3: 'Latvijas kan??li',
//         usp4: 'Popul??ras dokument??l??s filmas',
//     },
//     sport: {
//         usp1: 'KHL sp??les',
//         usp2: 'Sporta tie??raides',
//         usp3: 'Teniss, rite??brauk??ana, bokss',
//         usp4: 'Viet??jie koment??t??ji',
//     },
//     rent: {
//         usp1: 'Jaun??kie kino gr??v??ji',
//         usp2: 'Vair??k k?? 500 filmas nom??',
//         usp3: 'Skaties kop?? ar ??imeni m??j??s',
//         usp4: 'Past??v??ga filmu papildin????ana',
//     },
//     disney: {
//         usp1: 'Popul??ras filmas',
//         usp2: 'Vair??k k?? 2000 filmas',
//         usp3: 'Dubl??tas latvie??u valod??',
//         usp4: 'Starptautiski kases gr??v??ji',
//     },
//     paramount: {
//         usp1: 'Popul??ras filmas',
//         usp2: 'Vair??k k?? 2000 filmas',
//         usp3: 'Tulkotas latviski',
//         usp4: 'Starptautiski kases gr??v??ji',
//     },
//     discovery: {
//         usp1: 'Godalgotas dokument??l??s filmas',
//         usp2: 'Sporta tie??raides Eurosport kan??l??',
//         usp3: 'Olimpisko sp????u tie??raides un apskati',
//         usp4: 'Popul??ri realit??tes ??ovi',
//     },
//     shortVideos: {
//         usp1: 'Ori??in??ls viet??jais saturs',
//         usp2: 'Aizkadri',
//         usp3: 'Sports un skaistums',
//         usp4: 'Auto un ce??ojumi',
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

// if (localStorage.getItem('language') == '"LT"') {
//     bundlesByLanguage = uspLt;
// } else if (localStorage.getItem('language') == '"EN"') {
//     bundlesByLanguage = uspEn;
// } else if (localStorage.getItem('language') == '"RU"') {
//     bundlesByLanguage = uspRu;
// } else if (localStorage.getItem('language') == '"LV"') {
//     bundlesByLanguage = uspLv;
// } else if (localStorage.getItem('language') == '"ET"') {
//     bundlesByLanguage = uspEe;
// }

// function insertAfter(el, referenceNode) {
//     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
// }

// var urlForTenant = '/api/subscribers/detail?platform=BROWSER';
// var urlForActiveSubscriber = '/api/subscribers/payments?platform=BROWSER&lang=EN&tenant=' + amb + '&maxResults=100&channel[]=POSTPAID';

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

// // TIKRINA AR PASIKEITE URL
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

// // TIKRINA AR PASIKEITE URL

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

// var categoryInfo;

// var getCategoryInfo = function () {
//     var pageUrl = window.location.href;

//     var mediaId = pageUrl.match(/\d+/g)[pageUrl.match(/\d+/g).length - 1];

//     var serialPage = pageUrl.match(/\bserial\b/);
//     var videoPage = pageUrl.match(/\bvod\b/);
//     var livePage = pageUrl.match(/\blive\b/);
//     var url;

//     if (serialPage) {
//         var serialId = pageUrl.match(/\bserial-\b.[0-9]+/)[0];
//         var extractedNumbersFormSeries = serialId.match(/[0-9]+/);
//         url = urlStart + '/api/products/vods/serials/' + extractedNumbersFormSeries + '?platform=BROWSER&lang=EN&tenant' + amb;
//     }

//     if (videoPage) {
//         url = urlStart + '/api/products/vods/' + mediaId + '?platform=BROWSER&lang=EN&tenant' + amb;
//     }

//     if (livePage) {
//         var liveTvMediaId = pageUrl.match(/\blive-\b.[0-9]+/)[0];
//         var extractedNumbers = liveTvMediaId.match(/[0-9]+/);
//         url = urlStart + '/api/products/lives/' + extractedNumbers + '?platform=BROWSER&lang=EN&tenant' + amb;
//     }

//     getJSON(url, function (err, data) {
//         if (err !== null) {
//             console.table('Something went wrong: ' + err);
//         } else {
//             console.log(data)

//             if (data.type && data.mainCategory && data.provider) {
//                 categoryInfo = {
//                     type: data.type ? data.type : '',
//                     name: data.mainCategory.name ? data.mainCategory.name : '',
//                     label:  data.mainCategory.label ? data.mainCategory.label : '',
//                     provider:  data.provider.name ? data.provider.name : '',
//                 };
//             } else if (data.type && data.mainCategory) {
//                 categoryInfo = {
//                     type: data.type ? data.type : '',
//                     name: data.mainCategory.name ? data.mainCategory.name : '',
//                     label:  data.mainCategory.label ? data.mainCategory.label : '',
//                 };
//             }
//         }
//     });
// };

// var generateUPSMovies = function (location) {
//     getCategoryInfo();

//     var interval = window.setInterval(function () {
//         clearInterval(interval);
//         if (!location) {
//             return
//         }

//         console.log(categoryInfo) 
        

//         if (categoryInfo && categoryInfo.label == "movies" && categoryInfo.provider && categoryInfo.provider == "walt-disney	" && !document.querySelector('.ab-test-ups')) {
//             var usp = document.createElement('div');
//             usp.setAttribute('class', 'ab-test-ups');
//             usp.innerHTML = '<ul><li>' + bundlesByLanguage.disney.usp1 + '</li><li>' + bundlesByLanguage.disney.usp2 + '</li><li>' + bundlesByLanguage.disney.usp3 + '</li><li>' + bundlesByLanguage.disney.usp4 + '</li></ul>';
//             insertAfter(usp, location)
//         } 

//         if (categoryInfo && categoryInfo.label == "tvod" && !document.querySelector('.ab-test-ups')) {
//             var usp = document.createElement('div');
//             usp.setAttribute('class', 'ab-test-ups');
//             usp.innerHTML = '<ul><li>' + bundlesByLanguage.rent.usp1 + '</li><li>' + bundlesByLanguage.rent.usp2 + '</li><li>' + bundlesByLanguage.rent.usp3 + '</li><li>' + bundlesByLanguage.rent.usp4 + '</li></ul>';
//             insertAfter(usp, location)
//         } 

//         if (categoryInfo && categoryInfo.label == "movies" && !document.querySelector('.ab-test-ups')) {
//             var usp = document.createElement('div');
//             usp.setAttribute('class', 'ab-test-ups');
//             usp.innerHTML = '<ul><li>' + bundlesByLanguage.films.usp1 + '</li><li>' + bundlesByLanguage.films.usp2 + '</li><li>' + bundlesByLanguage.films.usp3 + '</li><li>' + bundlesByLanguage.films.usp4 + '</li></ul>';
//             insertAfter(usp, location)
//         } 

//         if (categoryInfo && categoryInfo.label == "series" && categoryInfo.provider && categoryInfo.provider == "ParamountPlus" && !document.querySelector('.ab-test-ups')) {
//             var usp = document.createElement('div');
//             usp.setAttribute('class', 'ab-test-ups');
//             usp.innerHTML = '<ul><li>' + bundlesByLanguage.paramount.usp1 + '</li><li>' + bundlesByLanguage.paramount.usp2 + '</li><li>' + bundlesByLanguage.paramount.usp3 + '</li><li>' + bundlesByLanguage.paramount.usp4 + '</li></ul>';
//             insertAfter(usp, location)
//         } 


//         if (categoryInfo && categoryInfo.label == "series" && !document.querySelector('.ab-test-ups')) {
//             var usp = document.createElement('div');
//             usp.setAttribute('class', 'ab-test-ups');
//             usp.innerHTML = '<ul><li>' + bundlesByLanguage.serials.usp1 + '</li><li>' + bundlesByLanguage.serials.usp2 + '</li><li>' + bundlesByLanguage.serials.usp3 + '</li><li>' + bundlesByLanguage.serials.usp4 + '</li></ul>';
//             insertAfter(usp, location)
//         } 

//           if (categoryInfo && categoryInfo.label == "discoveryplus" && !document.querySelector('.ab-test-ups')) {
//             var usp = document.createElement('div');
//             usp.setAttribute('class', 'ab-test-ups');
//             usp.innerHTML = '<ul><li>' + bundlesByLanguage.discovery.usp1 + '</li><li>' + bundlesByLanguage.discovery.usp2 + '</li><li>' + bundlesByLanguage.discovery.usp3 + '</li><li>' + bundlesByLanguage.discovery.usp4 + '</li></ul>';
//             insertAfter(usp, location)
//         } 

//         if (categoryInfo && categoryInfo.label == "go3_extra" && !document.querySelector('.ab-test-ups')) {
//             var usp = document.createElement('div');
//             usp.setAttribute('class', 'ab-test-ups');
//             usp.innerHTML = '<ul><li>' + bundlesByLanguage.discovery.usp1 + '</li><li>' + bundlesByLanguage.discovery.usp2 + '</li><li>' + bundlesByLanguage.discovery.usp3 + '</li><li>' + bundlesByLanguage.discovery.usp4 + '</li></ul>';
//             insertAfter(usp, location)
//         }
//     }, 200);
// };

// var generateUPS = function (location) {
//     getCategoryInfo();

//     var interval = window.setInterval(function () {
//         clearInterval(interval);

//         if (!location[0]) {
//             return
//         }

//         console.log(categoryInfo) 

//         if (categoryInfo.label == "live_tv" && categoryInfo.name == "Sport" && !document.querySelector('.ab-test-ups')) {
//             var usp = document.createElement('div');
//             usp.setAttribute('class', 'ab-test-ups');
//             usp.innerHTML = '<ul><li>' + bundlesByLanguage.sport.usp1 + '</li><li>' + bundlesByLanguage.sport.usp2 + '</li><li>' + bundlesByLanguage.sport.usp3 + '</li><li>' + bundlesByLanguage.sport.usp4 + '</li></ul>';
//             location[0].append(usp);
//         } else if (categoryInfo.label == "live_tv" && !document.querySelector('.ab-test-ups')) {
//             var usp = document.createElement('div');
//             usp.setAttribute('class', 'ab-test-ups');
//             usp.innerHTML = '<ul><li>' + bundlesByLanguage.livetv.usp1 + '</li><li>' + bundlesByLanguage.livetv.usp2 + '</li><li>' + bundlesByLanguage.livetv.usp3 + '</li><li>' + bundlesByLanguage.livetv.usp4 + '</li></ul>';
//             location[0].append(usp);
//         }
//     }, 200);
// };

// var generateUPSLiveTv = function (location) {
//     getCategoryInfo();

//     var interval = window.setInterval(function () {
//         clearInterval(interval);

//         console.log(categoryInfo.label == "live_tv");
//         console.log(categoryInfo.name == "sport" );
//         console.log(categoryInfo)
//         if (!location[0]) {
//             return
//         }

//         if (categoryInfo && categoryInfo.label == "live_tv" && categoryInfo.name == "Sport" && !document.querySelector('.ab-test-ups')) {
//             var usp = document.createElement('div');
//             usp.setAttribute('class', 'ab-test-ups');
//             usp.innerHTML = '<ul><li>' + bundlesByLanguage.sport.usp1 + '</li><li>' + bundlesByLanguage.sport.usp2 + '</li><li>' + bundlesByLanguage.sport.usp3 + '</li><li>' + bundlesByLanguage.sport.usp4 + '</li></ul>';
//             location[0].append(usp)
//         } 

//         if (categoryInfo && categoryInfo.label == "live_tv" && !document.querySelector('.ab-test-ups')) {
//             var usp = document.createElement('div');
//             usp.setAttribute('class', 'ab-test-ups');
//             usp.innerHTML = '<ul><li>' + bundlesByLanguage.livetv.usp1 + '</li><li>' + bundlesByLanguage.livetv.usp2 + '</li><li>' + bundlesByLanguage.livetv.usp3 + '</li><li>' + bundlesByLanguage.livetv.usp4 + '</li></ul>';
//             location[0].append(usp)
//         } 
//     }, 200);
// };


// var generateUPSSearch = function (location) {

//     var interval = window.setInterval(function () {
 
//         if (location[0] && !document.querySelector('.ab-test-ups')) {
//             var usp = document.createElement('div');
//             usp.setAttribute('class', 'ab-test-ups');
//             usp.innerHTML = '<ul><li>' + bundlesByLanguage.search.usp1 + '</li><li>' + bundlesByLanguage.search.usp2 + '</li><li>' + bundlesByLanguage.search.usp3 + '</li><li>' + bundlesByLanguage.search.usp4 + '</li></ul>';
//             insertAfter(usp, location[0])
//             clearInterval(interval);
//         } 
//     }, 200);
// };

// var insertUsp = function () {
//     var moviesInterval = window.setInterval(() => {
//         if (localStorage.getItem('newUser') == 'true' && (window.location.href.indexOf('movies') > -1 || window.location.href.indexOf('series') > -1 || window.location.href.indexOf('paramount') > -1 || window.location.href.indexOf('tvod') > -1) || window.location.href.indexOf('paramount/') > -1 || window.location.href.indexOf('discoveryplus/') > -1 || window.location.href.indexOf('go3_extra') > -1) {
//             var uspLocation = document.querySelector('section.c-highlight.c-highlight--detail');
//             if (uspLocation) {
//                 generateUPSMovies(uspLocation);
//                 clearInterval(moviesInterval);
//             }
//         }
//     }, 500);

//     var mseriesInterval = window.setInterval(() => {
//         if (localStorage.getItem('newUser') == 'true' && (window.location.href.indexOf('serial') > -1  || window.location.href.indexOf('ghost') > -1 )) {
//             var uspLocation = document.querySelector(' div.c-highlight__wrapper > div.c-highlight__buttons ');
//             if (uspLocation) {
//                 generateUPS(uspLocation);
//                 clearInterval(mseriesInterval);
//             }
//         }
//     }, 500);

//     var liveTvInterval = window.setInterval(() => {
//         if (localStorage.getItem('newUser') == 'true' && window.location.href.indexOf('live_tv') > -1) {
//             var uspLocation = document.querySelectorAll('section.o-page--navbar.o-page--full-width.o-page');

//             if (uspLocation) {
//                 generateUPSLiveTv(uspLocation);
//                 clearInterval(liveTvInterval);
//             }
//         }
//     }, 500);

//     var searchInterval = window.setInterval(() => {
//         if (localStorage.getItem('newUser') == 'true' && window.location.href.indexOf('search') > -1) {
//             var uspLocation = document.querySelectorAll('#app > div.app-container > div.o-page--full-width.o-page > div > div.c-search__tabs');

//             if (uspLocation) {
//                 console.log('generateUPSSearch??')
//                 generateUPSSearch(uspLocation);
//                 clearInterval(searchInterval);
//             }
//         }
//     }, 500);
// };

// insertUsp();

// window.addEventListener('locationchange', function () {
//     if (localStorage.getItem('language') == '"LT"') {
//         bundlesByLanguage = uspLt;
//     } else if (localStorage.getItem('language') == '"EN"') {
//         bundlesByLanguage = uspEn;
//     } else if (localStorage.getItem('language') == '"RU"') {
//         bundlesByLanguage = uspRu;
//     } else if (localStorage.getItem('language') == '"LV"') {
//         bundlesByLanguage = uspLv;
//     } else if (localStorage.getItem('language') == '"ET"') {
//         bundlesByLanguage = uspEe;
//     }
//     console.log('loaction changed')
//     checkIfUserSubscribed();
//     insertUsp();

    
// });

// var addClassToBody = window.setInterval(() => {
//     var body = document.querySelector('body');
//     if (body && localStorage.getItem('newUser') == 'true') {
//         if (!body.classList.contains('ab-visible')) {
//             body.classList.add('ab-visible');
//         }
//     } else if (body && localStorage.getItem('newUser') == 'false') {
//         if (body.classList.contains('ab-visible')) {
//             body.classList.remove('ab-visible');
//         }
//     }
// });
