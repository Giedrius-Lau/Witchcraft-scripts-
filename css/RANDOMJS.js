var price =
    document.querySelector(
        '#productPage > div.productFullDetail-productPageGrid-zbG > div > article > div.TopBlock-contentWrapper-1o3 > div.TopBlock-right-3Py > div.AddToCartContainer-addToCartContainer-39c > div.Price-priceContainer-1fB > div.Price-pricesWrapper-2Wl > div.Price-price-6S1 > span'
    ) ||
    document.querySelector(
        '#productPage > div.productFullDetail-productPageGrid-zbG > div > article > div.TopBlock-contentWrapper-1o3 > div.TopBlock-right-3Py > div.AddToCartContainer-addToCartContainer-39c > div.Price-priceContainer-1fB > div.Price-pricesWrapper-2Wl > div > span'
    ) ||
    document.querySelector(
        '#productPage > div.productFullDetail-productPageGrid-zbG > div > article > div.TopBlock-contentWrapper-1o3 > div.AddToCartContainer-addToCartContainer-39c > div.Price-priceContainer-1fB > div.Price-pricesWrapper-2Wl > div > span'
    ) ||
    document.querySelector(
        '#productPage > div.productFullDetail-productPageGrid-zbG > div > article > div.TopBlock-contentWrapper-1o3 > div.AddToCartContainer-addToCartContainer-39c > div.Price-priceContainer-1fB > div.Price-pricesWrapper-2Wl > div.Price-price-6S1 > span'
    );

var convertedPrice = Number(price.textContent.replace(',', '.').replace('€', ''));
return convertedPrice < 50 ? true : false;
