//$('#cart_items_0_quantity').val(Number($('#cart_items_0_quantity').val()) - 1)
$('#cart_items_0_quantity').val(Number($('#cart_items_0_quantity').val()) + 1);
$(
    'body > div.container.main-content > div > div > form > div.col-md-5-4ths.col-sm-5-4ths.cart-content > div > div.cart-rows > div.cart-item > div > div.col-xs-4.col-xs-offset-3.col-sm-offset-0.col-md-offset-0.col-sm-2.col-md-2.col-lg-2.cart-amount > button'
).click();
