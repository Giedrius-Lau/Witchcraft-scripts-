var amb = '=AMB_LT';
var urlStart = 'https://go3.lt';

// var amb = '=AMB_LV';
// var urlStart = 'https://go3.lv';

// var amb = '=AMB_EE';
// var urlStart = 'https://go3.tv';

var bundlesByLanguage;

var uspEn = {
    search: {
        usp1: 'Go3 original content',
        usp2: 'Watch on all devices',
        usp3: 'Download and watch any time',
        usp4: 'More than 3.000 movies and series',
    },
    films: {
        usp1: 'Most popular Lithuanian movies',
        usp2: 'More than 2000 movies',
        usp3: 'Dubbed in Lithuanian/Latvian/Estonian',
        usp4: 'International blockbusters',
    },
    serials: {
        usp1: 'Exlusive Go3 originals',
        usp2: 'More than 1000 various series',
        usp3: 'Dubbed in Lithuanian/Latvian/Estonian',
        usp4: 'Popular international series',
    },
    livetv: {
        usp1: 'More than 30 popular TV channels',
        usp2: '7 days catch-up',
        usp3: 'Lithuanian/Latvian/Estonian channels',
        usp4: 'Most popular documentaries',
    },
    sport: {
        usp1: 'Famous sports basketball/khl/wrc (choose country specific)',
        usp2: 'Live events',
        usp3: 'Tennis, bicycle (Cycle sport?), box',
        usp4: 'Local commentators',
    },
    rent: {
        usp1: 'Newest cinema blockbusters',
        usp2: 'More than 500 moveis for rent',
        usp3: 'Watch with family at home',
        usp4: 'Constant rent renewals',
    },
    disney: {
        usp1: 'Popular movies',
        usp2: 'More than 2000 movies',
        usp3: 'Dubbed in Lithuanian/Latvian/Estonian',
        usp4: 'International blockbusters',
    },
    paramount: {
        usp1: 'Popular movies',
        usp2: 'More than 2000 movies',
        usp3: 'Localized',
        usp4: 'International blockbusters',
    },
    discovery: {
        usp1: 'Award winning documentaries',
        usp2: 'Sport event on Eurosport',
        usp3: 'Olympics live translation and coverage',
        usp4: 'Popular reality shows',
    },
    shortVideos: {
        usp1: 'Original local content',
        usp2: 'Behind the scenes',
        usp3: 'Sport and beauty',
        usp4: 'Auto and travels',
    },
};

var uspLt = {
    search: {
        usp1: 'Originalus Go3 turinys',
        usp2: 'Žiūrėk visuose įrenginiuose',
        usp3: 'Atsisiųsk ir žiūrėk bet kada',
        usp4: 'Daugiau nei 3.000 filmų ir serialų',
    },
    films: {
        usp1: 'Populiariausi Lietuviški filmai',
        usp2: 'Daugiau nei 2000 filmų',
        usp3: 'Įgarsinta lietuviškai',
        usp4: 'Tarptautiniai filmų hitai',
    },
    serials: {
        usp1: 'Išskirtinis Go3 originalus turinys',
        usp2: 'Daugiau nei 1000+ skirtingų serialų',
        usp3: 'Įgarsinta lietuviškai',
        usp4: 'Populiariausi tarptautiniai serialai',
    },
    livetv: {
        usp1: 'Daugiau nei 30 populiarių TV kanalų',
        usp2: '7 dienų archyvas',
        usp3: 'Lietuviški kanalai',
        usp4: 'Populiariausia dokumentika',
    },
    sport: {
        usp1: 'Pagrindinės krepšinio lygos',
        usp2: 'Tiesioginės varžybų transliacijos',
        usp3: 'Tenisas, dviračiai, boksas',
        usp4: 'Komentatoriai lietuvių kalba',
    },
    rent: {
        usp1: 'Naujausi kino teatrų hitai',
        usp2: 'Daugiau nei 500 filmų nuomai',
        usp3: 'Žiūrėkite su šeima namuose',
        usp4: 'Pastovus filmų papildymas',
    },
    disney: {
        usp1: 'Populiariausi filmai',
        usp2: 'Daugiau nei 2000 filmų',
        usp3: 'Įgarsinta lietuviškai',
        usp4: 'Tarptautiniai filmų hitai',
    },
    paramount: {
        usp1: 'Populiariausi filmai',
        usp2: 'Daugiau nei 2000 filmų',
        usp3: 'Įgarsinta lietuviškai',
        usp4: 'Tarptautiniai filmų hitai',
    },
    discovery: {
        usp1: 'Apdovanojimus pelniusi dokumentika',
        usp2: 'Sporto varžybos per Eurosport',
        usp3: 'Olimpiados transliacijos ir apžvalga',
        usp4: 'Populiarūs realybės šou',
    },
    shortVideos: {
        usp1: 'Originalus lietuviškas turinys',
        usp2: 'Už kadro likęs turinys',
        usp3: 'Sportas ir grožis',
        usp4: 'Automobiliai ir kelionės',
    },
};

var uspRu = {
    search: {
        usp1: 'Оригинальный контент Go3',
        usp2: 'Смотри на всех устройствах',
        usp3: 'Скачивайте и смотрите в любое время',
        usp4: 'Более 3000 фильмов и сериалов',
    },
    films: {
        usp1: 'Самые популярные местные фильмы',
        usp2: 'Более 2000 фильмов',
        usp3: 'Дублировано на литовском/латышском/эстонском языках',
        usp4: 'Международные блокбастеры',
    },
    serials: {
        usp1: 'Эксклюзивный оригинальный контент Go3',
        usp2: 'Более 1000 различных сериалов',
        usp3: 'Дублировано на литовском/латышском/эстонском',
        usp4: 'Популярные международные сериалы',
    },
    livetv: {
        usp1: 'Более 30 популярных телеканалов',
        usp2: 'Архив до 7 дней',
        usp3: 'Литовские/латвийские/эстонские каналы',
        usp4: 'Самая популярная документика',
    },
    sport: {
        usp1: '"Основные баскетбольные лиги / КХЛ / Чемпионат мира по ралли"',
        usp2: 'Прямые трансляции',
        usp3: 'Теннис, велосипедный спорт, бокс ',
        usp4: 'Местные комментаторы',
    },
    rent: {
        usp1: 'Новые блокбастеры',
        usp2: 'Более 500 фильмов в прокате',
        usp3: 'Смотрите дома всей семьей',
        usp4: 'Постоянное добавление фильмов',
    },
    disney: {
        usp1: 'Популярные фильмы',
        usp2: 'Более 2000 фильмов',
        usp3: 'Дублировано на литовском / латышском / эстонском',
        usp4: 'Международные блокбастеры',
    },
    paramount: {
        usp1: 'Популярные фильмы',
        usp2: 'Более 2000 фильмов',
        usp3: 'Локализовано ',
        usp4: 'Международные блокбастеры',
    },
    discovery: {
        usp1: 'Удостоенная наградами документика',
        usp2: 'Спортивные мероприятия на Eurosport',
        usp3: 'Олимпийские трансляции и обзоры',
        usp4: 'Популярные реалити-шоу',
    },
    shortVideos: {
        usp1: 'Оригинальный местный контент',
        usp2: 'За кулисами',
        usp3: 'Спорт и красота',
        usp4: 'Авто и путешествия',
    },
};

var uspLv = {
    search: {
        usp1: 'Go3 Oriģinālsaturs',
        usp2: 'Skaties visās ierīcēs',
        usp3: 'Lejuplādē un skaties, kad vēlies',
        usp4: 'Vairāk kā 3000 filmas un seriāli',
    },
    films: {
        usp1: 'Populārākās latviešu filmas',
        usp2: 'Vairāk kā 2000 filmas',
        usp3: 'Dublētas latviešu valodā',
        usp4: 'Starptautiskas grāvējfilmas',
    },
    serials: {
        usp1: 'Ekskluzīvs Go3 oriģinālsaturs',
        usp2: 'Vairāk kā 1000 dažādu seriālu',
        usp3: 'Dublēti latviešu valodā',
        usp4: 'Populāri starptautiski seriāli',
    },
    livetv: {
        usp1: 'Vairāk kā 30 populāru TV kanālu',
        usp2: '7 dienu arhīvs',
        usp3: 'Latvijas kanāli',
        usp4: 'Populāras dokumentālās filmas',
    },
    sport: {
        usp1: 'KHL spēles',
        usp2: 'Sporta tiešraides',
        usp3: 'Teniss, riteņbraukšana, bokss',
        usp4: 'Vietējie komentētāji',
    },
    rent: {
        usp1: 'Jaunākie kino grāvēji',
        usp2: 'Vairāk kā 500 filmas nomā',
        usp3: 'Skaties kopā ar ģimeni mājās',
        usp4: 'Pastāvīga filmu papildināšana',
    },
    disney: {
        usp1: 'Populāras filmas',
        usp2: 'Vairāk kā 2000 filmas',
        usp3: 'Dublētas latviešu valodā',
        usp4: 'Starptautiski kases grāvēji',
    },
    paramount: {
        usp1: 'Populāras filmas',
        usp2: 'Vairāk kā 2000 filmas',
        usp3: 'Tulkotas latviski',
        usp4: 'Starptautiski kases grāvēji',
    },
    discovery: {
        usp1: 'Godalgotas dokumentālās filmas',
        usp2: 'Sporta tiešraides Eurosport kanālā',
        usp3: 'Olimpisko spēļu tiešraides un apskati',
        usp4: 'Populāri realitātes šovi',
    },
    shortVideos: {
        usp1: 'Oriģināls vietējais saturs',
        usp2: 'Aizkadri',
        usp3: 'Sports un skaistums',
        usp4: 'Auto un ceļojumi',
    },
};

var uspEe = {
    search: {
        usp1: 'Go3 Oriģinālsaturs',
        usp2: 'Skaties visās ierīcēs',
        usp3: 'Lejuplādē un skaties, kad vēlies',
        usp4: 'Vairāk kā 3000 filmas un seriāli',
    },
    films: {
        usp1: 'Populārākās latviešu filmas',
        usp2: 'Vairāk kā 2000 filmas',
        usp3: 'Dublētas latviešu valodā',
        usp4: 'Starptautiskas grāvējfilmas',
    },
    serials: {
        usp1: 'Ekskluzīvs Go3 oriģinālsaturs',
        usp2: 'Vairāk kā 1000 dažādu seriālu',
        usp3: 'Dublēti latviešu valodā',
        usp4: 'Populāri starptautiski seriāli',
    },
    livetv: {
        usp1: 'Vairāk kā 30 populāru TV kanālu',
        usp2: '7 dienu arhīvs',
        usp3: 'Latvijas kanāli',
        usp4: 'Populāras dokumentālās filmas',
    },
    sport: {
        usp1: 'KHL spēles',
        usp2: 'Sporta tiešraides',
        usp3: 'Teniss, riteņbraukšana, bokss',
        usp4: 'Vietējie komentētāji',
    },
    rent: {
        usp1: 'Jaunākie kino grāvēji',
        usp2: 'Vairāk kā 500 filmas nomā',
        usp3: 'Skaties kopā ar ģimeni mājās',
        usp4: 'Pastāvīga filmu papildināšana',
    },
    disney: {
        usp1: 'Populāras filmas',
        usp2: 'Vairāk kā 2000 filmas',
        usp3: 'Dublētas latviešu valodā',
        usp4: 'Starptautiski kases grāvēji',
    },
    paramount: {
        usp1: 'Populāras filmas',
        usp2: 'Vairāk kā 2000 filmas',
        usp3: 'Tulkotas latviski',
        usp4: 'Starptautiski kases grāvēji',
    },
    discovery: {
        usp1: 'Godalgotas dokumentālās filmas',
        usp2: 'Sporta tiešraides Eurosport kanālā',
        usp3: 'Olimpisko spēļu tiešraides un apskati',
        usp4: 'Populāri realitātes šovi',
    },
    shortVideos: {
        usp1: 'Oriģināls vietējais saturs',
        usp2: 'Aizkadri',
        usp3: 'Sports un skaistums',
        usp4: 'Auto un ceļojumi',
    },
};

function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}
function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

if (localStorage.getItem('language') == '"LT"') {
    bundlesByLanguage = uspLt;
} else if (localStorage.getItem('language') == '"EN"') {
    bundlesByLanguage = uspEn;
} else if (localStorage.getItem('language') == '"RU"') {
    bundlesByLanguage = uspRu;
} else if (localStorage.getItem('language') == '"LV"') {
    bundlesByLanguage = uspLv;
} else if (localStorage.getItem('language') == '"ET"') {
    bundlesByLanguage = uspEe;
}

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

var urlForTenant = '/api/subscribers/detail?platform=BROWSER';
var urlForActiveSubscriber = '/api/subscribers/payments?platform=BROWSER&lang=EN&tenant' + amb + '&maxResults=100&channel[]=POSTPAID';

var checkIfUserSubscribed = function () {
    getJSON(urlForTenant, function (err, data) {
        if (err !== null) {
            ga('send', 'event', 'Popup test', 'new user');
            localStorage.setItem('newUser', true);
            // console.log('0', true, data);
        } else {
            if (!data) {
                ga('send', 'event', 'Popup test', 'new user');
                localStorage.setItem('newUser', true);
                // console.log('1', true, data);
                return;
            }
            if (data.tenant == 'AMB_LT' || data.tenant == 'AMB_LV' || data.tenant == 'AMB_EE') {
                getJSON(urlForActiveSubscriber, function (err, data) {
                    if (err !== null) {
                        ga('send', 'event', 'Popup test', 'new user');
                        localStorage.setItem('newUser', true);
                        // console.log('2', true, data);
                    } else {
                        if (!data.items.length) {
                            ga('send', 'event', 'Popup test', 'new user');
                            localStorage.setItem('newUser', true);
                            // console.log('3', true, data);
                        }

                        for (var i = 0; i < data.items.length; ++i) {
                            var item = data.items[i];
                            if (!item.till) {
                                localStorage.setItem('newUser', false);
                                // console.log('4', false, data);

                                ga('send', 'event', 'Popup test', 'active subscriber');
                                return;
                            }
                        }

                        for (var t = 0; t < data.items.length; ++t) {
                            var item2 = data.items[i - 1];
                            var till = new Date(item2.till);
                            console.log(data.items);
                            console.log(till);
                            var dateNow = new Date();
                            console.log(till < dateNow);

                            if (till < dateNow) {
                                ga('send', 'event', 'Popup test', 'new user');
                                localStorage.setItem('newUser', true);
                                // console.log('5', true, data);

                                return;
                            } else {
                                localStorage.setItem('newUser', false);
                                // console.log('6', false, data);

                                ga('send', 'event', 'Popup test', 'active subscriber');
                            }
                        }
                    }
                });
            } else {
                localStorage.setItem('newUser', false);
                // console.log('7', false, data);

                ga('send', 'event', 'Popup test', 'active subscriber');
            }
        }
    });
};

checkIfUserSubscribed();

(() => {
    let oldPushState = history.pushState;
    history.pushState = function pushState() {
        let ret = oldPushState.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };

    let oldReplaceState = history.replaceState;
    history.replaceState = function replaceState() {
        let ret = oldReplaceState.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };

    window.addEventListener('popstate', () => {
        window.dispatchEvent(new Event('locationchange'));
    });
})();

var categoryInfo;

var getCategoryInfo = function () {
    var pageUrl = window.location.href;

    var mediaId = pageUrl.match(/\d+/g)[pageUrl.match(/\d+/g).length - 1];

    var serialPage = pageUrl.match(/\bserial\b/);
    var videoPage = pageUrl.match(/\bvod\b/);
    var livePage = pageUrl.match(/\blive\b/);
    var url;

    if (serialPage) {
        var serialId = pageUrl.match(/\bserial-\b.[0-9]+/)[0];
        var extractedNumbersFormSeries = serialId.match(/[0-9]+/);
        url = urlStart + '/api/products/vods/serials/' + extractedNumbersFormSeries + '?platform=BROWSER&lang=EN&tenant' + amb;
    }

    if (videoPage) {
        url = urlStart + '/api/products/vods/' + mediaId + '?platform=BROWSER&lang=EN&tenant' + amb;
    }

    if (livePage) {
        var liveTvMediaId = pageUrl.match(/\blive-\b.[0-9]+/)[0];
        var extractedNumbers = liveTvMediaId.match(/[0-9]+/);
        url = urlStart + '/api/products/lives/' + extractedNumbers + '?platform=BROWSER&lang=EN&tenant' + amb;
    }

    getJSON(url, function (err, data) {
        if (err !== null) {
            console.table('Something went wrong: ' + err);
        } else {
            console.log(data)

            if (data.type && data.mainCategory && data.provider) {
                categoryInfo = {
                    type: data.type ? data.type : '',
                    name: data.mainCategory.name ? data.mainCategory.name : '',
                    label: data.mainCategory.label ? data.mainCategory.label : '',
                    provider: data.provider.name ? data.provider.name : '',
                    slug: data.slug ? data.slug : ''
                };
            } else if (data.type && data.mainCategory) {
                categoryInfo = {
                    type: data.type ? data.type : '',
                    name: data.mainCategory.name ? data.mainCategory.name : '',
                    label: data.mainCategory.label ? data.mainCategory.label : '',
                    slug: data.slug ? data.slug : ''
                };
            }
        }
    });
};

var generateUPSMovies = function (location) {
    getCategoryInfo();

    var interval = window.setInterval(function () {
        clearInterval(interval);
        if (!location) {
            return;
        }

    console.log(categoryInfo)


        if (categoryInfo && categoryInfo.label == "kids_movies" && categoryInfo.provider && categoryInfo.provider == 'walt-disney	' && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.disney.usp1 + '</li><li>' + bundlesByLanguage.disney.usp2 + '</li><li>' + bundlesByLanguage.disney.usp3 + '</li><li>' + bundlesByLanguage.disney.usp4 + '</li></ul>';
            insertAfter(usp, location);
        }


        if (categoryInfo && categoryInfo.label == "kids_movies" && categoryInfo.provider && categoryInfo.provider == 'ParamountPlus' && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.paramount.usp1 + '</li><li>' + bundlesByLanguage.paramount.usp2 + '</li><li>' + bundlesByLanguage.paramount.usp3 + '</li><li>' + bundlesByLanguage.paramount.usp4 + '</li></ul>';
            insertAfter(usp, location);
        }

        if (categoryInfo && categoryInfo.label == 'movies' && categoryInfo.provider && categoryInfo.provider == 'walt-disney	' && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.disney.usp1 + '</li><li>' + bundlesByLanguage.disney.usp2 + '</li><li>' + bundlesByLanguage.disney.usp3 + '</li><li>' + bundlesByLanguage.disney.usp4 + '</li></ul>';
            insertAfter(usp, location);
        }

        if (categoryInfo && categoryInfo.label == 'tvod' && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.rent.usp1 + '</li><li>' + bundlesByLanguage.rent.usp2 + '</li><li>' + bundlesByLanguage.rent.usp3 + '</li><li>' + bundlesByLanguage.rent.usp4 + '</li></ul>';
            insertAfter(usp, location);
        }

        if (categoryInfo && categoryInfo.label == 'series' && categoryInfo.provider && categoryInfo.provider == 'ParamountPlus' && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.paramount.usp1 + '</li><li>' + bundlesByLanguage.paramount.usp2 + '</li><li>' + bundlesByLanguage.paramount.usp3 + '</li><li>' + bundlesByLanguage.paramount.usp4 + '</li></ul>';
            insertAfter(usp, location);
        }

        if (categoryInfo && categoryInfo.label == 'series' && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.serials.usp1 + '</li><li>' + bundlesByLanguage.serials.usp2 + '</li><li>' + bundlesByLanguage.serials.usp3 + '</li><li>' + bundlesByLanguage.serials.usp4 + '</li></ul>';
            insertAfter(usp, location);
        }

        if (categoryInfo && categoryInfo.label == 'discoveryplus' && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.discovery.usp1 + '</li><li>' + bundlesByLanguage.discovery.usp2 + '</li><li>' + bundlesByLanguage.discovery.usp3 + '</li><li>' + bundlesByLanguage.discovery.usp4 + '</li></ul>';
            insertAfter(usp, location);
        }

        if (categoryInfo && categoryInfo.label == 'go3_extra' && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.discovery.usp1 + '</li><li>' + bundlesByLanguage.discovery.usp2 + '</li><li>' + bundlesByLanguage.discovery.usp3 + '</li><li>' + bundlesByLanguage.discovery.usp4 + '</li></ul>';
            insertAfter(usp, location);
        }

        if (categoryInfo && categoryInfo.label == "movies" && categoryInfo.provider && categoryInfo.provider == 'discovery' && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.discovery.usp1 + '</li><li>' + bundlesByLanguage.discovery.usp2 + '</li><li>' + bundlesByLanguage.discovery.usp3 + '</li><li>' + bundlesByLanguage.discovery.usp4 + '</li></ul>';
            insertAfter(usp, location);
        }

        if (categoryInfo && categoryInfo.label == 'movies'  && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.films.usp1 + '</li><li>' + bundlesByLanguage.films.usp2 + '</li><li>' + bundlesByLanguage.films.usp3 + '</li><li>' + bundlesByLanguage.films.usp4 + '</li></ul>';
            insertAfter(usp, location);
        }

    }, 200);
};

var generateUPS = function (location) {
    getCategoryInfo();

    var interval = window.setInterval(function () {
        clearInterval(interval);

        if (!location[0]) {
            return;
        }

        if (categoryInfo.label == 'live_tv' && categoryInfo.name == 'Sport' && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.sport.usp1 + '</li><li>' + bundlesByLanguage.sport.usp2 + '</li><li>' + bundlesByLanguage.sport.usp3 + '</li><li>' + bundlesByLanguage.sport.usp4 + '</li></ul>';
            location[0].append(usp);
        } else if (categoryInfo.label == 'live_tv' && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.livetv.usp1 + '</li><li>' + bundlesByLanguage.livetv.usp2 + '</li><li>' + bundlesByLanguage.livetv.usp3 + '</li><li>' + bundlesByLanguage.livetv.usp4 + '</li></ul>';
            location[0].append(usp);
        }
    }, 200);
};

var generateUPSLiveTv = function (location) {
    getCategoryInfo();

    var interval = window.setInterval(function () {
        clearInterval(interval);

        console.log(categoryInfo)
        if (!location) {
            return;
        }

        if (categoryInfo && categoryInfo.label == 'live_tv' && categoryInfo.slug == 'discovery' && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.discovery.usp1 + '</li><li>' + bundlesByLanguage.discovery.usp2 + '</li><li>' + bundlesByLanguage.discovery.usp3 + '</li><li>' + bundlesByLanguage.discovery.usp4 + '</li></ul>';
            location.append(usp);
        }

        if (categoryInfo && categoryInfo.label == 'live_tv' && categoryInfo.name == 'Sport' && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.sport.usp1 + '</li><li>' + bundlesByLanguage.sport.usp2 + '</li><li>' + bundlesByLanguage.sport.usp3 + '</li><li>' + bundlesByLanguage.sport.usp4 + '</li></ul>';
            location.append(usp);
        }

        if (categoryInfo && categoryInfo.label == 'live_tv' && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.livetv.usp1 + '</li><li>' + bundlesByLanguage.livetv.usp2 + '</li><li>' + bundlesByLanguage.livetv.usp3 + '</li><li>' + bundlesByLanguage.livetv.usp4 + '</li></ul>';
            location.append(usp);
        }
    }, 200);
};

var generateUPSSearch = function (location) {
    var interval = window.setInterval(function () {
        if (location && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.search.usp1 + '</li><li>' + bundlesByLanguage.search.usp2 + '</li><li>' + bundlesByLanguage.search.usp3 + '</li><li>' + bundlesByLanguage.search.usp4 + '</li></ul>';
            insertAfter(usp, location);
            clearInterval(interval);
        }
    }, 200);
};

var generateUPSKids = function (location) {
    var interval = window.setInterval(function () {
        if (location && !document.querySelector('.ab-test-ups')) {
            var usp = document.createElement('div');
            usp.setAttribute('class', 'ab-test-ups');
            usp.innerHTML = '<ul><li>' + bundlesByLanguage.serials.usp1 + '</li><li>' + bundlesByLanguage.serials.usp2 + '</li><li>' + bundlesByLanguage.serials.usp3 + '</li><li>' + bundlesByLanguage.serials.usp4 + '</li></ul>';
            insertAfter(usp, location);
            clearInterval(interval);
        }
    }, 200);
};

var insertUsp = function () {
    var kidsInterval = window.setInterval(() => {
        if (
            (localStorage.getItem('newUser') == 'true' && window.location.href.indexOf('kids_series') > -1)) {
            var uspLocation = document.querySelector('#app > div > div.o-page--top.o-page--full-width.o-page > div > section');
            if (uspLocation) {
                generateUPSKids(uspLocation);
                clearInterval(kidsInterval);
            }
        }
    }, 500);


    var moviesInterval = window.setInterval(() => {
        if (
            (localStorage.getItem('newUser') == 'true' && (window.location.href.indexOf('kids_movies') > -1 || window.location.href.indexOf('movies') > -1 || window.location.href.indexOf('series') > -1 || window.location.href.indexOf('paramount') > -1 || window.location.href.indexOf('tvod') > -1)) ||
            window.location.href.indexOf('paramount/') > -1 ||
            window.location.href.indexOf('discoveryplus/') > -1 ||
            window.location.href.indexOf('go3_extra') > -1
        ) {
            var uspLocation = document.querySelector('section.c-highlight.c-highlight--detail');
            if (uspLocation) {
                generateUPSMovies(uspLocation);
                clearInterval(moviesInterval);
            }
        }
    }, 500);

    var mseriesInterval = window.setInterval(() => {
        if (localStorage.getItem('newUser') == 'true' && (window.location.href.indexOf('serial') > -1 || window.location.href.indexOf('ghost') > -1)) {
            var uspLocation = document.querySelector(' div.c-highlight__wrapper > div.c-highlight__buttons ');
            if (uspLocation) {
                generateUPS(uspLocation);
                clearInterval(mseriesInterval);
            }
        }
    }, 500);

    var liveTvInterval = window.setInterval(() => {
        if (localStorage.getItem('newUser') == 'true' && window.location.href.indexOf('live_tv') > -1) {
            var uspLocation = document.querySelector('section.o-page--navbar.o-page--full-width.o-page');
            var uspLocation2 = document.querySelector('div.c-channel-epg__list > a.router-link-exact-active.is-active.is-selected.js-current-program > div.c-epg-program-detail.u-mobile-only') || document.querySelector('div.c-styled-scroll.ps.ps--active-y > div.c-channel-epg__list > a.is-selected.js-current-program > div.c-epg-program-detail.u-mobile-only');
            if (uspLocation) {
                if (window.screen.width >= 1024) {
                    generateUPSLiveTv(uspLocation);
                } else {
                    generateUPSLiveTv(uspLocation2);
                }

                clearInterval(liveTvInterval);
            }
        }
    }, 500);

    var searchInterval = window.setInterval(() => {
        if (localStorage.getItem('newUser') == 'true' && window.location.href.indexOf('search') > -1) {
            var uspLocation = document.querySelector('#app > div.app-container > div.o-page--full-width.o-page > div > div.c-search__tabs');

            if (uspLocation) {
                generateUPSSearch(uspLocation);
                clearInterval(searchInterval);
            }
        }
    }, 500);
};

insertUsp();

window.addEventListener('locationchange', function () {
    if (localStorage.getItem('language') == '"LT"') {
        bundlesByLanguage = uspLt;
    } else if (localStorage.getItem('language') == '"EN"') {
        bundlesByLanguage = uspEn;
    } else if (localStorage.getItem('language') == '"RU"') {
        bundlesByLanguage = uspRu;
    } else if (localStorage.getItem('language') == '"LV"') {
        bundlesByLanguage = uspLv;
    } else if (localStorage.getItem('language') == '"ET"') {
        bundlesByLanguage = uspEe;
    }
    checkIfUserSubscribed();
    insertUsp();
});

var addClassToBody = window.setInterval(() => {
    var body = document.querySelector('body');
    if (body && localStorage.getItem('newUser') == 'true') {
        if (!body.classList.contains('ab-visible')) {
            body.classList.add('ab-visible');
        }
    } else if (body && localStorage.getItem('newUser') == 'false') {
        if (body.classList.contains('ab-visible')) {
            body.classList.remove('ab-visible');
        }
    }
});
