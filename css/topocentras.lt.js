document.querySelectorAll('.ProductGrid-productWrapper-1hm, .ProductList-productWrapper-3xz').forEach(function (item) {
    var priceOld;
    var priceOldSpan = item.querySelector('.Price-oldPrice-3co');
    var priceLease = item.querySelector('.Price-leasingPrice-6n0');

    if (!!priceOldSpan) {
        priceOld = priceOldSpan;
    } else if (!!priceLease) {
        priceOld = priceLease;
    }

    var priceNew = item.querySelector('.Price-price-27p');
    var discount;
    var discountOrange = item.querySelector('span.ProductStickers-orangeLabel-5C-:nth-child(2)');
    var discountYellow = item.querySelector('span.ProductStickers-yellowLabel-21f:nth-child(2)');
    var discountGold = item.querySelector('span.ProductStickers-goldLabel-3ar');
    var discountBlue = item.querySelector('span.ProductStickers-blueLabel-2J6:nth-child(2)');

    var divider = item.querySelectorAll(
        '.ProductStickers-divider-2Q-, .ProductStickers-blueLabelDivider-2OR, .ProductStickers-yellowLabelDivider--vq, .ProductStickers-goldLabelDivider-1rs, .ProductStickers-orangeLabelDivider-2R_'
    );

    if (!!discountOrange) {
        discount = discountOrange;
    } else if (!!discountYellow) {
        discount = discountYellow;
    } else if (!!discountGold) {
        discount = discountGold;
    } else if (!!discountBlue) {
        discount = discountBlue;
    }

    if (!!priceOld && !!priceNew) {
        $(priceOld).insertBefore(priceNew);
    }

    if (!!discount && !!priceOld) {
        $(discount).insertBefore(priceOld.parentNode);
    }

    if (!!divider && !!discount) {
        $(divider).remove();
    }
});
