var viewCart =
    window.location.hostname === 'gr.factcool.com'
        ? 'GR'
        : window.location.hostname === 'si.factcool.com'
        ? 'SI'
        : window.location.hostname === 'ro.factcool.com'
        ? 'RO'
        : window.location.hostname === 'sk.factcool.com'
        ? 'SK'
        : 'View cart';

var addToCartButton = document.querySelectorAll('.cart-widget.nu-box.navbar-cart a.btn.btn-green.btn-xs.btn-block');
addToCartButton.forEach(function (element) {
    element.textContent = viewCart;
});
