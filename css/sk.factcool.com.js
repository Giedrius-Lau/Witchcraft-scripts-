var productPageInterval = window.setInterval(function () {
    var priceCurrent2 = $(
        'body > div.site-wrapper > section > div.product-detail-wrapper.marginb48 > div > div.col-xs-100.col-sm-50.col-lg-38.product-info > div.pd-prices > span.three-prices > span.pd-price-current'
    );

    var priceCurrent = document.querySelector(
        'body > div.site-wrapper > section > div.product-detail-wrapper.marginb48 > div > div.col-xs-100.col-sm-50.col-lg-38.product-info > div.pd-prices > span.three-prices > span.pd-price-current'
    ).textContent;

    var discountPrice = document.querySelector('#form-1342196 > div.pd-promo-code-widget > div:nth-child(1) > strong').textContent;

    if (priceCurrent && discountPrice) {
        setInterval(() => {
            priceCurrent2
                .fadeOut(function () {
                    $(this).text(discountPrice);
                    $(this).addClass('discounted-price');
                })
                .fadeIn();
            console.log(discountPrice);
        }, 8000);

        setTimeout(() => {
            setInterval(() => {
                priceCurrent2
                    .fadeOut(function () {
                        $(this).text(priceCurrent);
                        $(this).removeClass('discounted-price');
                    })
                    .fadeIn();
                console.log(priceCurrent);
            }, 8000);
        }, 4000);
        clearInterval(productPageInterval);
    }
}, 300);
