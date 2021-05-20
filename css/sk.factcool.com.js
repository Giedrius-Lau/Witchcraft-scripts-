var language =
    window.location.hostname === 'gr.factcool.com'
        ? 'gr'
        : window.location.hostname === 'si.factcool.com'
        ? 'si'
        : window.location.hostname === 'ro.factcool.com'
        ? 'ro'
        : window.location.hostname === 'sk.factcool.com'
        ? 'sk'
        : 'lt';

var cartButtonName = language == 'gr' ? 'GR' : language == 'si' ? 'SI' : language == 'ro' ? 'RO' : language == 'sk' ? 'SK' : 'GR';

var cartCTAInterval = window.setInterval(function () {
    var addToCartButton = document.querySelector('.navbar-cart > div > div > div > div.col-xs-100.awsc-action > a');

    if (addToCartButton) {
        addToCartButton.textContent = cartButtonName;
        clearInterval(cartCTAInterval);
    }
}, 500);
