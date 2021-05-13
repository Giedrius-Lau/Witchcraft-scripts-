 /* ------------ Style changes ----------------- */
 var css = "body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile {display: block !important;margin-bottom: 30px;}body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile.closed {background: #e9e9e9;margin-left: -7px;margin-right: -7px;padding: 1px 9px 15px;margin-bottom: 20px;}body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile.closed h2 {margin-top: 15px;}body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile.closed .cart-item {display: none;}body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile.closed .cart-edit {display: none;}body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile.closed .cart-sum > div:nth-child(1), body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile.closed .cart-sum > div:nth-child(2), body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile.closed .cart-sum > div:nth-child(3) {display: none;}.cart-total{display:block !important}body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile.closed .cart-sum {border-bottom: 1px solid #ffffff;}",
 head = document.head || document.getElementsByTagName("head")[0],
 style = document.createElement("style");

css += "body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile.closed img.arrow-down {transform: rotate(180deg);}body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile .col-xs-7 {width: 52.33333%;}body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile .cart-checkout-price {margin-right: 0;text-align: right;}body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile .cart-checkout-price > span {display: block;white-space: nowrap;}body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile .cart-item {border-bottom: 1px solid #eeeeee;padding-bottom: 15px;padding-top: 15px;}body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile .cart-sum {border-bottom: 1px solid #eeeeee;}body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile .toggle-button {font-weight: 600;color: #dd5881;display: flex;}body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile .toggle-button img.arrow-down {margin-left: 10px;}body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile > div:nth-child(7) > div > div.col-xs-2.col-sm-4.col-md-3 > div > img {object-fit: contain;}"

style.type = "text/css";
if (style.styleSheet) {
// This is required for IE8 and below.
style.styleSheet.cssText = css;
} else {
style.appendChild(document.createTextNode(css));
}
head.appendChild(style);
/* ------------ End of style changes ----------------- */
/* ------------ Code changes ----------------- */

var cart = $('body > div.container.main-content > div > form > div > div.col-md-5-2ths.col-sm-5-2ths > div > div.no-mobile');
var container = $('body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form');

$(container).prepend(cart);

var newCartMobile = $('body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile');
newCartMobile.addClass('closed');
var toggleButton = document.createElement('div');
toggleButton.setAttribute('class', 'toggle-button');
toggleButton.innerHTML = "Informācija par pasūtījumu <img src='https://semexit.s3-eu-west-1.amazonaws.com/Azeta/chevron-down.svg' class='arrow-down'></img>";
$(newCartMobile).append(toggleButton);

var toggleSelector = $('body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div.no-mobile > div.toggle-button');

toggleSelector.on('click', function () {
newCartMobile.toggleClass('closed');
});





})();
