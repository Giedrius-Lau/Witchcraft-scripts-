(function () {
  var css =
      '.new-cart-delivery-price{color: #0091ff; font-weight: 600; margin-top: 12px; font-size: 14px; padding-left: 28px; min-width: 300px; max-width: 500px;} .new-cart-delivery-price:before{content: ""; display: inline-block; vertical-align: top; width: 16px; height: 8px; border-bottom: 2px solid #0091ff; border-left: 2px solid #0091ff; transform: rotate(-45deg); margin-top: 2px; margin-right: 10px;} @media (max-width: 767px){.new-cart-delivery-price{font-weight: 300; font-size: 13px;}}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);

  /*-----TRANSLATIONS------*/
  var tillFree = 'Līdz BEZMAKSAS piegādei:';
  var nowIsFree = 'Izmantojiet šo piegādes veidu bez maksas!';
  if (window.location.pathname.indexOf('/ru/') > -1) {
    tillFree = 'До бесплатной доставки оталось:';
    nowIsFree = 'Воспользуйтесь этим способом доставки бесплатно!';
  }
  /*---END TRANSLATIONS----*/

  var finalPrice = 0;
  var priceHolders = document.querySelectorAll('.tar.cart-price strong');
  priceHolders.forEach(function (elem) {
    finalPrice += parseFloat(elem.innerText.replace(',', '.').replace('€', ''));
  });
  var countPriceStart = Number(finalPrice).toFixed(2);

  function countPrices(price, parent) {
    //var countPriceStart = document.querySelector(".cart-total .col-xs-4").innerText.replace(",",".").replace("€","");

    var elemWithPrice = document.createElement('div');
    if (countPriceStart < price) {
      elemWithPrice.innerHTML =
        "<div class='new-cart-delivery-price'>" +
        tillFree +
        ' &euro;' +
        (price - countPriceStart).toFixed(2) +
        '</div>';
    } else {
      elemWithPrice.innerHTML =
        "<div class='new-cart-delivery-price'>" + nowIsFree + '</div>';
    }
    parent.append(elemWithPrice);
  }

  if (document.querySelectorAll("input[value='at_pharmacy']").length > 0) {
    var thisElem = document.querySelector("input[value='at_pharmacy']")
      .parentNode.parentNode;
    var thisPrice = 30.0;
    if (!thisElem.classList.contains('disabled')) {
      countPrices(thisPrice, thisElem);
    }
  }
  if (document.querySelectorAll("input[value='courier']").length > 0) {
    var thisElem = document.querySelector("input[value='courier']").parentNode
      .parentNode;
    var thisPrice = 35.0;
    if (!thisElem.classList.contains('disabled')) {
      countPrices(thisPrice, thisElem);
    }
  }
  if (document.querySelectorAll("input[value='dpd']").length > 0) {
    var thisElem = document.querySelector("input[value='dpd']").parentNode
      .parentNode;
    var thisPrice = 10.0;
    if (!thisElem.classList.contains('disabled')) {
      countPrices(thisPrice, thisElem);
    }
  }
  if (document.querySelectorAll("input[value='circle_k']").length > 0) {
    var thisElem = document.querySelector("input[value='circle_k']").parentNode
      .parentNode;
    var thisPrice = 10.0;
    if (!thisElem.classList.contains('disabled')) {
      countPrices(thisPrice, thisElem);
    }
  }
})();
