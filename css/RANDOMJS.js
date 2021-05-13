var productInterval = window.setInterval(function () {
    var saving = document.querySelector('.Price-youSaveContainer-1M7');
    var stickyPriceContainer = document.querySelector(
        '#productPage > div.productFullDetail-productPageGrid-zbG > div > div.AddToCartContainer-addToCartContainer-39c > div > div.AddToCartContainer-stickyAddToCartContainer-2Of > div'
    ) ? : ;

    if (stickyPriceContainer) {
        if (saving) {
            stickyPriceContainer.appendChild(saving.cloneNode(true));
            document.querySelector(
                '#productPage > div.productFullDetail-productPageGrid-zbG > div > div.AddToCartContainer-sticky-9Zl.false > div > div.AddToCartContainer-stickyAddToCartContainer-2Of > div > div.Price-youSaveContainer-1M7 > div.Price-youSaveInfo-2R7'
            ).textContent = 'Sutaupote: ';
        }

        clearInterval(productInterval);
    }
}, 300);

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y < 500) {
        $('.AddToCartContainer-sticky-9Zl').hide();
    } else {
        $('.AddToCartContainer-sticky-9Zl').show();
    }
});


var price = document.querySelector('div.Price-price-34Y > span')
var sutaupote = document.querySelector('div.Price-youSaveContainer-1M7')
var senaKaina = document.querySelector('div.Price-oldPrice-vVi')
var body = document.querySelector('body')
var addToCart = document.querySelector('div.AddToCartContainer-addToCartButtonWrapper-99O.null > button')

var newSticky = document.querySelector('div')
newSticky.setAttribute('class','new-sticky')
newSticky.innerHTML = '<div class="sticky-prices"></div>'

body.append(newSticky)

var newStickyContainer = document.querySelector('.new-sticky')
var pricesContainer = document.querySelector('.sticky-prices')

newStickyContainer.append(addToCart)
pricesContainer.append(price)

if(sutaupote && senaKaina) {
    pricesContainer.append(senaKaina)
    pricesContainer.append(sutaupote)
}