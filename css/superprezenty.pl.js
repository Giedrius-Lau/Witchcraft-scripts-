var productCostLayout = window.setInterval(function () {
    var discountedPrice = document.querySelector('#product > div.prodinfoblock > div.prodlocinfoblock > div.productcost > div > span.prodlocinfoblockprice.prodlocinfoblockprice2');
    var discount = document.querySelector('#product > div.prodinfoblock > div.prodlocinfoblock > div.productcost');

    if (discountedPrice && discount) {
        clearInterval(productCostLayout);
        discount.prepend(discountedPrice);
    }
}, 300);
