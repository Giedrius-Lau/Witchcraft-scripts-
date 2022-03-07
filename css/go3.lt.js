var bundlesLt = {
    topInBaltics: 'TOP BALTIJOS ŠALYSE',
    allInclusive: 'Viskas įskaičiuota',
    price: '14,99 Eur / mėn.',
    tvChannelsIncluded: 'Įtraukta TV kanalų (49)',
    discoveryFree: 'Discovery+ NEMOKAMAI',

    title1: 'Disney ir Paramount+ hitai',
    title2: 'Išskirtinis Go3 originalus turinys',
    title3: 'Nesibaigiantis sporto turinys',
    title4: 'Tiesioginiai televizijos kanalai ir 7 dienų archyvas',

    startWatchingNow: 'Start watching now!',
    cancelAnytime: 'Atšaukti bet kada',
    adultContent: {
        title: 'Turinys suaugusiems',
        price: '17,98 Eur / mėn.',
    },
    nbaContent: {
        title: 'NBA League Pass prenumerata',
        price: '23,39 Eur / mėn.',
    },
};

var bundlesEn = {
    topInBaltics: 'TOP IN BALTICS',
    allInclusive: 'All Inclusive',
    price: '14.99 € / month',
    tvChannelsIncluded: 'TV channels included (49)',
    discoveryFree: 'Discovery+ for FREE',

    title1: 'Disney & Paramount+ blockbusters',
    title2: 'Exclusive original Go3 content',
    title3: 'Unlimited sports content',
    title4: 'Live TV & 7 days TV Archive"',

    startWatchingNow: 'Start watching now!',
    cancelAnytime: 'Cancel anytime',
    adultContent: {
        title: 'Adult content included',
        price: '17.98 € / month',
    },
    nbaContent: {
        title: 'NBA League Pass subscription',
        price: '23.39 € / month',
    },
};

var bundlesRu = {
    topInBaltics: 'Top Baltijos šalyse',
    allInclusive: 'Все включено',
    price: '14.99 € / месяц',
    tvChannelsIncluded: 'ТВ каналы включены (49)',
    discoveryFree: 'Discovery+ NEMOKAMAI',

    title1: 'Disney & Paramount+ блокбастеры',
    title2: 'Эксклюзивный оригинальный Go3 контент',
    title3: 'Безлимитный спорт контент',
    title4: 'ТВ и 7 дневный архив каналов',

    startWatchingNow: 'Start watching now!',
    cancelAnytime: 'Atšaukti bet kada',
    adultContent: {
        title: 'Пакет для взрослых',
        price: '17.98 € / месяц',
    },
    nbaContent: {
        //Reikia vertimo
        title: 'NBA League Pass abonements',
        price: '23.39 € / месяц',
    },
};

var bundlesLv = {
    topInBaltics: 'Top Baltijos šalyse',
    allInclusive: 'Viskas įskaičiuota',
    price: '14,99 €',
    tvChannelsIncluded: 'Įtraukta TV kanalų (49)',
    discoveryFree: 'Discovery+ NEMOKAMAI',

    title1: 'Disney ir Paramount+ hitai',
    title2: 'Išskirtinis Go3 originalus turinys',
    title3: 'Nesibaigiantis sporto turinys',
    title4: 'Tiesioginiai televizijos kanalai ir 7 dienų archyvas',

    startWatchingNow: 'Start watching now!',
    cancelAnytime: 'Atšaukti bet kada',
    adultContent: {
        title: 'Turinys suaugusiems',
        price: '17,98 Eur / mėn.',
    },
    nbaContent: {
        title: 'NBA League Pass prenumerata',
        price: '23,39 Eur / mėn.',
    },
};

var bundlesEe = {
    topInBaltics: 'Top Baltijos šalyse',
    allInclusive: 'Viskas įskaičiuota',
    price: '14,99 €',
    tvChannelsIncluded: 'Įtraukta TV kanalų (49)',
    discoveryFree: 'Discovery+ NEMOKAMAI',

    title1: 'Disney ir Paramount+ hitai',
    title2: 'Išskirtinis Go3 originalus turinys',
    title3: 'Nesibaigiantis sporto turinys',
    title4: 'Tiesioginiai televizijos kanalai ir 7 dienų archyvas',

    startWatchingNow: 'Start watching now!',
    cancelAnytime: 'Atšaukti bet kada',
    adultContent: {
        title: 'Turinys suaugusiems',
        price: '17,98 Eur / mėn.',
    },
    nbaContent: {
        title: 'NBA League Pass prenumerata',
        price: '23,39 Eur / mėn.',
    },
};

var setButtonText = function () {
    if (localStorage.getItem('language') == '"LT"') {
        return 'ŽIŪRĖTI';
    } else if (localStorage.getItem('language') == '"EN"') {
        return 'WATCH';
    } else if (localStorage.getItem('language') == '"RU"') {
        return 'СМОТРЕТЬ';
    }
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

setCookie('new-user', true, 90);

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

var pageBundleId;

var getProductBundleIds = function () {
    var pageUrl = window.location.href;

    var mediaId = pageUrl.match(/\d+/g)[pageUrl.match(/\d+/g).length - 1];

    var serialPage = pageUrl.match(/\bserial\b/);
    var videoPage = pageUrl.match(/\bvod\b/);
    var livePage = pageUrl.match(/\blive\b/);
    var url;

    if (serialPage) {
        var serialId = pageUrl.match(/\bserial-\b.[0-9]+/)[0];
        var extractedNumbersFormSeries = serialId.match(/[0-9]+/);
        url = 'https://go3.lt/api/products/vods/serials/' + extractedNumbersFormSeries + '?platform=BROWSER&lang=EN&tenant=AMB_LT';
    }

    if (videoPage) {
        url = 'https://go3.lt/api/products/vods/' + mediaId + '?platform=BROWSER&lang=EN&tenant=AMB_LT';
    }

    if (livePage) {
        var liveTvMediaId = pageUrl.match(/\blive-\b.[0-9]+/)[0];
        var extractedNumbers = liveTvMediaId.match(/[0-9]+/);
        url = 'https://go3.lt/api/products/lives/' + extractedNumbers + '?platform=BROWSER&lang=EN&tenant=AMB_LT';
    }

    getJSON(url, function (err, data) {
        if (err !== null) {
            console.table('Something went wrong: ' + err);
        } else {
            var bundles = data.bundles;
            var bundleIds = [];

            for (i = 0; i < bundles.length; i++) {
                if (i != bundles.length - 1) {
                    bundleIds += bundles[i].id + ',';
                } else {
                    bundleIds += bundles[i].id;
                }
            }
            console.log(bundleIds);

            if (bundleIds == '989311,989317,989318,989339,2958734') {
                localStorage.setItem('bundleIds', '[2958734,2935377,3411405]');
            }

            if (bundleIds == '2218494') {
                localStorage.setItem('bundleIds', '[2958734,2935377,2218494]');
            }

            localStorage.setItem('bundleIds', '[2958734,2935377]');
        }
    });
};

var generateModal = function () {
    pageBundleId = '';
    getProductBundleIds();

    var interval = window.setInterval(function () {
        var bundlesByLanguage;

        if (localStorage.getItem('language') == '"LT"') {
            bundlesByLanguage = bundlesLt;
        } else if (localStorage.getItem('language') == '"EN"') {
            bundlesByLanguage = bundlesEn;
        } else if (localStorage.getItem('language') == '"RU"') {
            bundlesByLanguage = bundlesRu;
        } else if (localStorage.getItem('language') == '"LV"') {
            bundlesByLanguage = bundlesLv;
        } else if (localStorage.getItem('language') == '"EE"') {
            bundlesByLanguage = bundlesEe;
        }

        if (pageBundleId && !document.querySelector('.ab-test-modal')) {
            clearInterval(interval);

            // var filteredBundles = [];
            // var splittedPageBundleIds = pageBundleId.split(',');

            // for (let index = 0; index < splittedPageBundleIds.length; index++) {
            //     const splittedBundleId = splittedPageBundleIds[index];

            //     for (let index = 0; index < bundlesByLanguage.length; index++) {
            //         const bundleId = bundlesByLanguage[index];

            //         if (splittedBundleId == bundleId.id) {
            //             filteredBundles.push(bundleId);
            //             break;
            //         }
            //     }
            // }

            // if (!filteredBundles.length) {
            //     filteredBundles[0] = bundlesByLanguage[2];
            // }

            console.log(bundlesByLanguage);
            console.log(pageBundleId);

            var price = bundlesByLanguage.price;
            var title5;

            if (pageBundleId == 2218494) {
                console.log('adult content')
                price = bundlesByLanguage.adultContent.price;
                title5 = bundlesByLanguage.adultContent.title;
            }

            if (pageBundleId == '989311,989317,989318,989339,2958734') {
                console.log('NBA content')
                price = bundlesByLanguage.nbaContent.price;
                title5 = bundlesByLanguage.nbaContent.title;

            }

            var topInBaltics = bundlesByLanguage.topInBaltics;
            var allInclusive = bundlesByLanguage.allInclusive;
            var tvChannelsIncluded = bundlesByLanguage.tvChannelsIncluded;
            var discoveryFree = bundlesByLanguage.discoveryFree;
            var title1 = bundlesByLanguage.title1;
            var title2 = bundlesByLanguage.title2;
            var title3 = bundlesByLanguage.title3;
            var title4 = bundlesByLanguage.title4;
            var startWatchingNow = bundlesByLanguage.startWatchingNow;
            var cancelAnytime = bundlesByLanguage.cancelAnytime;

            var modal = document.createElement('div');
            modal.setAttribute('class', 'ab-test-modal');
            modal.innerHTML =
                '<div class="modal-overflow"></div><div class="modal-inner"> ' +
                '<div class="modal-top-in-baltics">' +
                topInBaltics +
                '</div>' +
                '<div class="modal-close"></div>' +
                '<div class="modal-recommended">' +
                '<div class="modal-title">' +
                allInclusive +
                '</div>' +
                '<div class="modal-price">' +
                price +
                '</div></div>' +
                '<div class="modal-channels">' +
                tvChannelsIncluded +
                '</div>' +
                '<div class="c-feature__column">' +
                '<div class="c-feature__item"><i class="o-icon c-feature__icon u-color-accent o-icon--check"></i><span class="o-typography__subtitle3 c-feature__label">' +
                discoveryFree +
                '</span></div>' +
                '<div class="c-feature__item"><i class="o-icon c-feature__icon u-color-accent o-icon--check"></i><span class="o-typography__subtitle3 c-feature__label">' +
                title1 +
                '</span></div>' +
                '<div class="c-feature__item"><i class="o-icon c-feature__icon u-color-accent o-icon--check"></i><span class="o-typography__subtitle3 c-feature__label">' +
                title2 +
                '</span></div>' +
                '<div class="c-feature__item"><i class="o-icon c-feature__icon u-color-accent o-icon--check"></i><span class="o-typography__subtitle3 c-feature__label">' +
                title3 +
                '</span></div>' +
                '<div class="c-feature__item"><i class="o-icon c-feature__icon u-color-accent o-icon--check"></i><span class="o-typography__subtitle3 c-feature__label">' +
                title4 +
                '</span></div>' +
                '<div class="c-feature__item"><i class="o-icon c-feature__icon u-color-accent o-icon--check"></i><span class="o-typography__subtitle3 c-feature__label">' +
                title5 +
                '</span></div>' +
                '</div>' +
                '<button class="o-button o-button--primary modal-subscribe-button"> <span class="o-typography__label o-button__label u-bold"> ' +
                startWatchingNow +
                ' </span> </button>' +
                '<div class="modal-cancelAnytime">' +
                cancelAnytime +
                '</div>';

            document.querySelector('body').append(modal);


            var modalCloseButton = document.querySelector('.modal-close');
            var modalOverflow = document.querySelector('.modal-close, .modal-overflow ');
            var modalSubscribeButton = document.querySelector('.modal-subscribe-button');

            modalCloseButton.addEventListener('click', function () {
                document.querySelector('.ab-test-modal').remove();
            });

            modalOverflow.addEventListener('click', function () {
                document.querySelector('.ab-test-modal').remove();
            });

            modalSubscribeButton.addEventListener('click', function () {
                document.querySelector('.ab-test-modal').remove();
                window.location = 'https://go3.lt/subscriber/checkout';
            });

            var contentUrl = window.location.href;

            var modalInterval = window.setInterval(function () {
                if (contentUrl != window.location.href) {
                    clearInterval(modalInterval);
                    document.querySelector('.ab-test-modal').remove();
                }
            }, 1000);
        }
    }, 200);
};

setInterval(() => {
    if (window.location.href.indexOf('movies') > -1 || window.location.href.indexOf('paramount') > -1) {
        var buttonContainer = document.querySelector(' div.c-highlight__wrapper > div.c-highlight__buttons ');
        if (buttonContainer && !document.querySelector('.changed-button')) {
            buttonContainer.classList.add('changed-button');
            if (
                buttonContainer.querySelector('.o-button--primary') &&
                (buttonContainer.querySelector('.o-button--primary').textContent.includes('BUY') ||
                    buttonContainer.querySelector('.o-button--primary').textContent.includes('PIRKTI') ||
                    buttonContainer.querySelector('.o-button--primary').textContent.includes('КУПИТЬ'))
            ) {
                buttonContainer.querySelector('.o-button--primary').remove();

                var newButton = document.createElement('div');
                newButton.setAttribute('class', 'o-button o-button--primary ab-test-button');
                newButton.innerHTML = setButtonText() + ' <div class="arrow-right"></div>';

                buttonContainer.prepend(newButton);
                var newAddedButton = document.querySelector('.ab-test-button');

                newAddedButton.addEventListener('click', function () {
                    getProductBundleIds();
                    generateModal();
                });
            }
        }
    }
}, 500);

setInterval(() => {
    if (
        window.location.href.indexOf('serial') > -1 ||
        window.location.href.indexOf('go3_extra') > -1 ||
        window.location.href.indexOf('ghost') > -1 ||
        window.location.href.indexOf('paramount') > -1 ||
        window.location.href.indexOf('discoveryplus') > -1
    ) {
        var buttonContainer = document.querySelector(' div.c-highlight__wrapper > div.c-highlight__buttons ');
        if (
            !document.querySelector('div.c-highlight__buttons > div:nth-child(1) > i.o-icon--play') &&
            buttonContainer &&
            !document.querySelector('.changed-button')
        ) {
            buttonContainer.classList.add('changed-button');

            var newButton = document.createElement('div');
            newButton.setAttribute('class', 'o-button o-button--primary ab-test-button');
            newButton.innerHTML = setButtonText() + ' <div class="arrow-right"></div>';

            buttonContainer.prepend(newButton);
            buttonContainer.querySelector('.ab-test-button').addEventListener('click', function () {
                getProductBundleIds();
                generateModal();
            });
            document.querySelector('div.c-highlight__buttons.changed-button > div:nth-child(2)').remove();
        }
        var additionalSeriesBlocks = document.querySelectorAll(
            '#app > div.app-container > div > section.c-section.c-section--two-lines > div > div.c-section__container.js-section-container > div.c-section__wrapper > div'
        );

        if (additionalSeriesBlocks) {
            var seriesButton = document.createElement('div');
            seriesButton.setAttribute('class', 'ab-test-button');
            seriesButton.innerHTML = '<div class="arrow-right"></div>';

            setInterval(() => {
                document
                    .querySelectorAll(
                        '#app > div.app-container > div > section.c-section.c-section--two-lines > div > div.c-section__container.js-section-container > div.c-section__wrapper > div'
                    )
                    .forEach(function (block) {
                        if (!block.querySelector('.ab-test-button') && !block.querySelector('i.o-icon.o-button__icon.o-icon--play-circle.o-icon--xlarge')) {
                            block.prepend(seriesButton.cloneNode(true));
                            block.querySelector('.ab-test-button').addEventListener('click', function () {
                                getProductBundleIds();
                                generateModal();
                            });
                        }
                    });
            }, 1000);
        }
    }
}, 500);

// Interval for live tv

setInterval(() => {
    if (window.location.href.indexOf('live_tv') > -1) {
        var buttonContainer = document.querySelectorAll('div.c-live-detail__preview.c-live-detail__preview--channel > div.c-live-detail__cover.u-desktop-only');
        var buttonContainerMobile = document.querySelectorAll('a.is-selected.js-current-program > div.c-epg-program-detail.u-mobile-only > div');

        if (buttonContainer) {
            var newButton = document.createElement('div');
            newButton.setAttribute('class', 'o-button o-button--primary ab-test-button');
            newButton.innerHTML = setButtonText() + ' <div class="arrow-right"></div>';

            buttonContainer.forEach(function (container) {
                if (!container.querySelector('ab-test-button-button')) {
                    container.prepend(newButton);

                    container.querySelector('.ab-test-button').addEventListener('click', function () {
                        getProductBundleIds();
                        generateModal();
                    });
                }
            });

            buttonContainerMobile.forEach(function (container) {
                if (!container.querySelector('ab-test-button-button')) {
                    container.prepend(newButton.cloneNode(true));

                    container.querySelector('.ab-test-button').addEventListener('click', function () {
                        getProductBundleIds();
                        generateModal();
                    });
                }
            });
        }
    }
}, 500);
