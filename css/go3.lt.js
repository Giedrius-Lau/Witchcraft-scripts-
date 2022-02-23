var bundles = [
    {
        id: 989311,
        title: 'TV and Sports',
        price: '9.99 €',
        description: [
            { title: 'More than 30 local and foreign TV channels' },
            { title: 'TV3 sport, Setanta, NBA TV' },
            { title: 'Live stream for events' },
            { title: 'Sport documentaries' },
            { title: 'Up to 7 day catch-up' },
        ],
        addons: [{ 2935377: '& discovery+' }, { 2218494: '& Turinys suaugusiems' }, { 3411405: '& NBA' }],
        subscribe: 'Subscribe',
    },
    {
        id: 989321,
        title: 'Films',
        price: '6.99 €',
        includes: 'Includes Paramount+ & Go3 Originals',
        description: [
            { title: 'Paramount+: Paramount Pictures movies, CBS/ShowTime TV series, Comedy Central, Nickelodeon animation, MTV reality shows and more' },
            { title: 'Go3 originals' },
            { title: 'Disney blockbusters' },
            { title: 'Premium channels for movies' },
            { title: 'Latest movies & series' },
            { title: 'Kids content' },
            { title: 'Early access to local shows' },
        ],
        addons: [{ 2935377: '& discovery+' }, { 2218494: '& Turinys suaugusiems' }, { 3411405: '& NBA' }],
        subscribe: 'Subscribe',
    },
    {
        id: 2935376,
        title: 'Films',
        price: '9.98 €',
        includes: 'Includes Paramount+ & Go3 Originals',
        plus: ['& discovery+'],
        description: [
            { title: 'Paramount+: Paramount Pictures movies, CBS/ShowTime TV series, Comedy Central, Nickelodeon animation, MTV reality shows and more' },
            { title: 'Go3 originals' },
            { title: 'Disney blockbusters' },
            { title: 'Premium channels for movies' },
            { title: 'Latest movies & series' },
            { title: 'Kids content' },
            { title: 'Early access to local shows' },
        ],
        addons: [{ 2935377: '& discovery+' }, { 2218494: '& Turinys suaugusiems' }, { 3411405: '& NBA' }],
        subscribe: 'Subscribe',
    },
    {
        id: 989319,
        title: 'TV',
        price: '7.99 €',
        description: [{ title: '7 day catch-up' }, { title: 'More than 30 local and foreign TV channels' }],
        addons: [{ 2935377: '& discovery+' }, { 2218494: '& Turinys suaugusiems' }, { 3411405: '& NBA' }],
        subscribe: 'Subscribe',
    },

    {
        id: 989317,
        title: 'Sports',
        price: '6.99 €',
        description: [{ title: 'TV3 sport, Setanta, NBA TV' }, { title: 'Live streams for events' }, { title: 'Sports documentaries' }],
        addons: [{ 2935377: '& discovery+' }, { 2218494: '& Turinys suaugusiems' }, { 3411405: '& NBA' }],
        subscribe: 'Subscribe',
    },
];

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

var getProductBundleIds = function (href) {
    if (href) {
        var pageUrl = href;
    } else {
        var pageUrl = window.location.href;
    }

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

            console.table(bundles);
            // console.log(data);
            pageBundleId = bundleIds;
            localStorage.setItem('bundleIds', '[' + bundleIds + ']');
            // window.location = 'https://go3.lt/subscriber/register';
        }
    });
};

var generateModal = function () {
    pageBundleId = '';
    getProductBundleIds();

    var interval = window.setInterval(function () {
        if (pageBundleId && !document.querySelector('.ab-test-modal')) {
            clearInterval(interval);

            var filteredBundles = [];
            var splittedPageBundleIds = pageBundleId.split(',');

            for (let index = 0; index < splittedPageBundleIds.length; index++) {
                const splittedBundleId = splittedPageBundleIds[index];

                for (let index = 0; index < bundles.length; index++) {
                    const bundleId = bundles[index];

                    if (splittedBundleId == bundleId.id) {
                        filteredBundles.push(bundleId);
                        break;
                    }
                }
            }

            var includes = filteredBundles[0].includes && filteredBundles[0].includes;
            var title = filteredBundles[0].title;
            var plus = filteredBundles[0].plus && filteredBundles[0].plus;
            var price = filteredBundles[0].price;
            var description = filteredBundles[0].description;
            var subscribe = filteredBundles[0].subscribe;

            var modal = document.createElement('div');
            modal.setAttribute('class', 'ab-test-modal');
            modal.innerHTML =
                '<div class="modal-overflow"></div><div class="modal-inner"> ' +
                (!!includes ? '<div class="modal-includes">' + includes + '</div>' : '') +
                ' <div class="modal-close"></div><div class="modal-recommended">RECOMMENDED PLAN</div>' +
                '<div class="modal-title">' +
                title +
                '</div>' +
                (!!plus ? '<div class="modal-plus">' + plus + '</div>' : '') +
                '<div class="modal-price">' +
                price +
                '<span class="modal-price-month"> / month</span>' +
                '</div>' +
                '<div class="c-feature__column"></div>' +
                '<button class="o-button o-button--primary modal-subscribe-button"> <span class="o-typography__label o-button__label u-bold"> ' +
                subscribe +
                ' </span> </button>';

            document.querySelector('body').append(modal);
            var modalList = document.querySelector('.ab-test-modal .c-feature__column');

            description.forEach(function (item) {
                modalList.innerHTML +=
                    "<div class='c-feature__item'><i class='o-icon c-feature__icon u-color-accent o-icon--check'></i><span class='o-typography__subtitle3 c-feature__label'>" +
                    item.title +
                    '</span></div>';
            });

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
                window.location = 'https://go3.lt/subscriber/register';
            });
        }
    }, 200);
};

// Interval for movies

setInterval(() => {
    if (window.location.href.indexOf('movies') > -1) {
        console.log('movies');

        var buttonContainer = document.querySelector(' div.c-highlight__wrapper > div.c-highlight__buttons ');

        if (buttonContainer && !document.querySelector('.changed-button')) {
            buttonContainer.classList.add('changed-button');

            if (buttonContainer.querySelector('.o-button--primary') && buttonContainer.querySelector('.o-button--primary').textContent.includes('BUY')) {
                buttonContainer.querySelector('.o-button--primary').remove();

                var newButton = document.createElement('div');
                newButton.setAttribute('class', 'o-button o-button--primary ab-test-button');
                newButton.innerHTML = 'WATCH <div class="arrow-right"></div>';

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

// Interval for series

setInterval(() => {
    if (
        window.location.href.indexOf('series') > -1 ||
        window.location.href.indexOf('go3_extra') > -1 ||
        window.location.href.indexOf('ghost') > -1 ||
        window.location.href.indexOf('discoveryplus') > -1
    ) {
        console.log('series');
        var buttonContainer = document.querySelector(' div.c-highlight__wrapper > div.c-highlight__buttons ');

        if (buttonContainer && !document.querySelector('.changed-button')) {
            buttonContainer.classList.add('changed-button');

            var additionalSeriesBlocks = document.querySelectorAll(
                '#app > div.app-container > div > section.c-section.c-section--two-lines > div > div.c-section__container.js-section-container > div.c-section__wrapper > div'
            );
            var newButton = document.createElement('div');
            newButton.setAttribute('class', 'o-button o-button--primary ab-test-button');
            newButton.innerHTML = 'WATCH <div class="arrow-right"></div>';

            if (additionalSeriesBlocks) {
                var seriesButton = document.createElement('div');
                seriesButton.setAttribute('class', 'ab-test-button');
                seriesButton.innerHTML = '<div class="arrow-right"></div>';

                additionalSeriesBlocks.forEach(function (block) {
                    block.prepend(seriesButton.cloneNode(true));
                });
            }

            buttonContainer.prepend(newButton);

            var newAddedButtons = document.querySelectorAll('.ab-test-button');

            if (newAddedButtons) {
                newAddedButtons.forEach(function (button) {
                    button.addEventListener('click', function () {
                        getProductBundleIds();
                        generateModal();
                    });
                });
            }
        }
    }
}, 500);

// Interval for live tv

setInterval(() => {
    if (window.location.href.indexOf('live_tv') > -1) {
        console.log('live tv');

        var buttonContainer = document.querySelector('div.c-live-detail__preview.c-live-detail__preview--channel > div.c-live-detail__cover.u-desktop-only');
        var buttonContainerMobile = document.querySelector('a.is-selected.js-current-program > div.c-epg-program-detail.u-mobile-only > div');

        if (buttonContainer && !document.querySelector('.changed-button')) {
            buttonContainer.classList.add('changed-button');

            var newButton = document.createElement('div');
            newButton.setAttribute('class', 'o-button o-button--primary ab-test-button');
            newButton.innerHTML = 'WATCH <div class="arrow-right"></div>';

            buttonContainer.prepend(newButton);
            buttonContainerMobile.prepend(newButton.cloneNode(true));
            var newAddedButtons = document.querySelectorAll('.ab-test-button');

            newAddedButtons.forEach(function (button) {
                button.addEventListener('click', function () {
                    getProductBundleIds();
                    generateModal();
                });
            });
        }
    }
}, 500);
