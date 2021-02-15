setInterval(function () {
    var container = $('.test-container');
    if ($('.sn-suggest-input').is(':focus') && !container.length) {
        var screenWidth = $(window).width();

        if (screenWidth > 767) {
            var block = $('.header-mid');
        } else {
            var block = $('#search-block');
        }

        var trendingSearches = document.createElement('div');
        trendingSearches.setAttribute('class', 'test-container');
        trendingSearches.innerHTML = `
        <div class="first-block">
            <div class="block-title"><p>Meklēšanas vēsture</p></div>
            <div class="test-history-list"></div>
        </div>
        <div class="second-block">
        <div class="block-title"><img src="https://semexit.s3-eu-west-1.amazonaws.com/Azeta/star.svg" alt="star"><p>Aktuālie meklējumi</p></div>
            <div class="suggestions-list">
                <div class="suggestion-link">
                    <a href="/meklet/rezultati?q=bioderma">Bioderma
                        <img src="https://semexit.s3-eu-west-1.amazonaws.com/Azeta/long-arrow-up.svg" alt="arrow">
                    </a>
                </div>
                <div class="suggestion-link">
                    <a href="/meklet/rezultati?q=Vitamīns D">Vitamīns D
                        <img src="https://semexit.s3-eu-west-1.amazonaws.com/Azeta/long-arrow-up.svg" alt="arrow">
                    </a>
                </div>
                <div class="suggestion-link">
                    <a href="/meklet/rezultati?q=Magnijs">Magnijs
                        <img src="https://semexit.s3-eu-west-1.amazonaws.com/Azeta/long-arrow-up.svg" alt="arrow">
                    </a>
                </div>
                <div class="suggestion-link">
                    <a href="/meklet/rezultati?q=Eucerin">Eucerin
                        <img src="https://semexit.s3-eu-west-1.amazonaws.com/Azeta/long-arrow-up.svg" alt="arrow">
                    </a>
                </div>
                <div class="suggestion-link">
                    <a href="/meklet/rezultati?q=Filorga">Filorga
                        <img src="https://semexit.s3-eu-west-1.amazonaws.com/Azeta/long-arrow-up.svg" alt="arrow">
                    </a>
                </div>
                <div class="suggestion-link">
                    <a href="/meklet/rezultati?q=Bezkontakta termometri">Bezkontakta termometri
                        <img src="https://semexit.s3-eu-west-1.amazonaws.com/Azeta/long-arrow-up.svg" alt="arrow">
                    </a>
                </div>
            </div>
        </div>`.trim();
        block.append(trendingSearches);

        var history = document.querySelectorAll('.sn-suggest-history-item');
        history.forEach(function (element) {
            $('.test-history-list').append(element);
        });
    } else if (!$('.sn-suggest-input').is(':focus') && container.length) {
        setTimeout(function () {
            container.remove();
        }, 100);
    } else if ($('.sn-suggest-input').is(':focus') && container.length && !$('.sn-suggest-history').length && $('.sn-suggest-hints').length) {
        container.remove();
    }
}, 100);
