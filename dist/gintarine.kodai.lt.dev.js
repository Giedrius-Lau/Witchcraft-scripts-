"use strict";

function _findClosest(el, selector) {
  var matchesFn;
  ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
    if (typeof document.body[fn] == 'function') {
      matchesFn = fn;
      return true;
    }

    return false;
  });
  var parent;

  while (el) {
    parent = el.parentElement;

    if (parent && parent[matchesFn](selector)) {
      return parent;
    }

    el = parent;
  }

  return null;
}

function css(el, styles) {
  for (var property in styles) {
    el.style[property] = styles[property];
  }
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp("\\b" + className + "\\b", "g"), "");
}

function insertAfter(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

var x = window.matchMedia("(min-width: 1001px)");

if (x.matches) {
  var selector = {
    searchWrap: document.querySelectorAll(".search-wrap")[0],
    searchBox: document.getElementById("small-search-box-form"),
    searchButton: document.querySelectorAll("#small-search-box-form .search-box-button")[0],
    searchIconSpan: document.querySelectorAll(".search-wrap > span")[0],
    searchBoxText: document.querySelectorAll("span.search-box-text ")[0],
    headerLinks: document.getElementById("headerMenuParent"),
    searchInput: document.querySelectorAll("#small-search-box-form input")[0],
    searchInputWrapper: document.querySelectorAll(".search-input-wrapper")[0],
    navBarWrapper: document.querySelectorAll(".desktop-nav-wrapper")[0],
    navBarMenu: document.querySelectorAll(".desktop-nav-wrapper .nav-spacer")[0],
    navCategories: document.querySelectorAll(".desktop-nav-wrapper .products-menu-spacer")[0],
    searchInputText: document.querySelectorAll("#small-searchterms")[0]
  };
  selector.searchIconSpan.click();
  removeClass(selector.headerLinks, "hide");
  removeClass(selector.navCategories, "hide");
  selector.searchWrap.remove();
  var searchTextStyle = selector.searchInputText.getAttribute("style");
  searchTextStyle += " text-transform: initial; font-weight: normal !important;";
  selector.searchInputText.setAttribute("style", searchTextStyle);
  selector.searchInput.setAttribute("placeholder", "Įveskite paieškos raktažodį");
  selector.searchButton.innerHTML += "IEŠKOTI";
  css(selector.searchInputWrapper, {
    "margin-left": "15px"
  });
  css(selector.navBarMenu, {
    "flex-basis": "auto",
    "flex-grow": 0
  });
  css(selector.navBarWrapper, {
    "justify-content": "flex-start"
  });
  css(selector.searchInputWrapper, {
    "flex-grow": 1
  });
  css(selector.searchButton, {
    opacity: 1,
    cursor: "pointer",
    padding: "0 15px",
    width: "unset",
    "background-color": "#F22A00",
    color: "white",
    "font-size": "14px",
    "font-weight": "bolder",
    position: "unset"
  });
  css(selector.searchBoxText, {
    display: "inline-block",
    "margin-right": "10px"
  });
  css(selector.searchBox, {
    display: "flex"
  });
}

var y = window.matchMedia("(max-width:1000px)");

if (y.matches) {
  var selector = {
    searchToggler: document.querySelectorAll(".search-wrap > span")[0],
    searchBox: document.getElementById("small-search-box-form"),
    searchWrapper: document.querySelectorAll(".search-wrap")[0],
    searchBoxText: document.querySelectorAll("span.search-box-text ")[0],
    navbarMenu: document.querySelectorAll(".menu-title")[0],
    searchButton: document.querySelectorAll("#small-search-box-form .search-box-button")[0],
    searchButtonIcon: document.querySelectorAll("#small-search-box-form .search-box-button span")[0],
    searchInputWrapper: document.querySelectorAll(".search-input-wrapper")[0],
    searchInputSpan: document.querySelectorAll("#small-search-box-form span")[0],
    searchInput: document.querySelectorAll("#small-search-box-form input")[0],
    canvas: document.querySelectorAll(".overlayOffCanvas")[0],
    masterContent: document.querySelectorAll(".master-wrapper-content")[0]
  };
  selector.searchToggler.click();
  selector.searchWrapper.remove();
  selector.searchButtonIcon.remove();
  selector.searchButton.innerHTML += "IEŠKOTI";
  selector.searchInput.setAttribute("placeholder", "Įveskite paieškos raktažodį");
  css(selector.searchButton, {
    opacity: 1,
    cursor: "pointer",
    padding: "0 15px",
    width: "unset",
    "background-color": "#F22A00",
    color: "white",
    "font-size": "14px",
    "font-weight": "bolder",
    position: "unset"
  });
  css(selector.searchInputWrapper, {
    padding: "4px 6px",
    "background-color": "#FCE7B2",
    "-webkit-box-shadow": "0px 10px 15px -7px rgba(0,0,0,0.75)",
    "-moz-box-shadow": "0px 10px 15px -7px rgba(0,0,0,0.75)",
    "box-shadow": "0px 10px 15px -7px rgba(0,0,0,0.75)"
  });
  css(selector.searchBoxText, {
    display: "inline-block",
    "margin-right": "5px"
  });
  css(selector.searchBox, {
    display: "flex"
  });
  var backHome = document.createElement("div");
  backHome.innerHTML = '<a href="/"><span class="fas fa-home navbar-icon">Personal menu</span></a>';
  insertAfter(backHome, selector.navbarMenu);
  selector.canvas.style.display = "none";
  selector.masterContent.style.marginTop = "60px";
}

(function () {
  function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
  }

  var x = window.matchMedia("(min-width: 1001px)");

  if (x.matches) {
    var selector = {
      backInStock: document.querySelectorAll('#product-details-form .back-in-stock-subscription'),
      priceBlock: document.querySelectorAll('#product-details-form .prices')[0]
    };

    if (selector.backInStock.length == 1) {
      selector.backInStock[0].setAttribute('style', 'width: min-content; margin: 0 auto; padding: 5px 30px; border: 2px solid #f09114;');
      insertAfter(selector.backInStock[0], selector.priceBlock);
    }
  }

  ;
  var y = window.matchMedia("(max-width:1000px)");

  if (y.matches) {
    var selector = {
      backInStock: document.querySelectorAll('#product-details-form .back-in-stock-subscription'),
      backInStockInput: document.querySelectorAll('#product-details-form .back-in-stock-subscription input')[0],
      priceBlock: document.querySelectorAll('#product-details-form .prices')[0]
    };

    if (selector.backInStock.length == 1) {
      selector.backInStock[0].setAttribute('style', 'width: min-content; margin: 0 auto; padding: 5px 30px; border: 2px solid #f09114;');
      selector.backInStockInput.setAttribute('style', 'border: none');
      insertAfter(selector.backInStock[0], selector.priceBlock);
    }
  }

  ;
})();

(function () {
  function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
  }

  ;

  function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
  }

  ;

  function increaseQuantity() {
    selector.quantityValue.value = selector.quantityValue.value * 1 + 1;
  }

  ;

  function decreaseQuantity() {
    if (selector.quantityValue.value > 1) {
      selector.quantityValue.value = selector.quantityValue.value * 1 - 1;
    }
  }

  ;
  var x = window.matchMedia("(min-width: 1001px)");

  if (x.matches) {
    var selector = {
      contentWrapper: document.querySelectorAll('.master-wrapper-content')[0],
      overview: document.querySelectorAll('#product-details-form .overview')[0],
      usageWarning: document.querySelectorAll('#product-details-form .product-usage-warning')[0],
      brand: document.querySelectorAll('#product-details-form .basic-product-info > div:nth-child(3)')[0],
      productCode: document.querySelectorAll('#product-details-form .basic-product-info > div:nth-child(1)')[0],
      manufacturer: document.querySelectorAll('#product-details-form .manufacturers')[0],
      basicInfo: document.querySelectorAll('#product-details-form .overview .basic-product-info')[0],
      title: document.querySelectorAll('.page-title')[0],
      titleText: document.querySelectorAll('h1')[0],
      availability: document.querySelectorAll('#product-details-form .availability')[0],
      addToWishlist: document.querySelectorAll('#product-details-form .overview-buttons'),
      addToCartPanel: document.querySelectorAll('#product-details-form .add-to-cart-panel')[0],
      addToCart: document.querySelectorAll('#product-details-form .button')[0],
      quantitySelector: document.querySelectorAll('#product-details-form .quantity')[0],
      delivery: document.querySelectorAll('#product-details-form .delivery')[0],
      prices: document.querySelectorAll('#product-details-form .prices')[0],
      priceWarning: document.querySelectorAll('#product-details-form .limext-eshop-price-warning')[0],
      nonDicountedPrice: document.querySelectorAll('#product-details-form .non-discounted-price'),
      stockAvailability: document.querySelectorAll('.availability span.value')[0],
      stockWrapper: document.querySelectorAll('.stock')[0],
      backInStock: document.querySelectorAll('.back-in-stock-subscription')[0],
      addToWishlistInner: document.querySelectorAll('.add-to-wishlist')[0],
      quantityValue: document.querySelectorAll('.quantity .qty-input')[0],
      quantityDecrease: document.querySelectorAll('#product-details-form div.quantity > span.decrease'),
      quantityIncrease: document.querySelectorAll('#product-details-form div.quantity > span.increase')
    };
    selector.overview.setAttribute('style', 'padding-right: 10%; text-align: left;');
    selector.usageWarning.setAttribute('style', 'width: 100%; margin: 0; color: #666;');

    if (selector.brand) {
      if (selector.brand.innerText.includes('enklas:')) {
        selector.brand.setAttribute('style', 'display: inline-block; border-right: ; border-left: 1px solid; padding-left: 10px; margin-left: 10px;');
      }
    }

    selector.manufacturer.setAttribute('style', 'display: inline-block;');
    selector.basicInfo.setAttribute('style', 'padding: 0; font-size: 16px;');

    if (selector.addToWishlist.length == 1) {
      selector.delivery.setAttribute('style', 'font-size: 16px;');
    } else {
      selector.delivery.setAttribute('style', 'font-size: 16px; margin: 30px 0;');
    }

    selector.prices.setAttribute('style', 'display: flex; width: 100%; flex-direction: row; flex-wrap: wrap; margin: 40px 0 30px;');
    selector.contentWrapper.setAttribute('style', 'padding-top: 10px !important;');

    if (selector.quantitySelector) {
      selector.quantitySelector.setAttribute('style', 'display: inline-block;position: relative;');
      insertBefore(selector.quantitySelector, selector.priceWarning);
    }

    selector.priceWarning.setAttribute('style', 'display: inline-block;width: 100%;margin-top: 20px;font-size: 14px;');

    if (selector.addToCart) {
      selector.addToCart.setAttribute('style', 'display: inline-block;');
    }

    selector.titleText.setAttribute('style', 'color: #444;margin: 20px 0;');
    selector.title.remove();
    insertBefore(selector.titleText, selector.basicInfo);
    insertBefore(selector.productCode, selector.usageWarning);
    insertAfter(selector.availability, selector.productCode);
    selector.availability.setAttribute('style', 'margin: 10px 0;');

    if (selector.addToWishlist.length == 1) {
      if (selector.addToCart) {
        selector.addToWishlist[0].setAttribute('style', 'display: inline-block;border: none;margin-left: 20px;');
        insertAfter(selector.addToWishlist[0], selector.addToCart);
      } else {
        selector.addToWishlist[0].setAttribute('style', 'border: none;');
        insertAfter(selector.addToWishlist[0], selector.priceWarning);
      }
    }

    ;

    if (selector.nonDicountedPrice.length == 1) {
      var nonDiscountPice = document.querySelectorAll('#product-details-form .non-discounted-price')[0].children[1].innerText;
      var newDiscountedPrice = document.createElement('div');
      newDiscountedPrice.innerText = nonDiscountPice;
      newDiscountedPrice.setAttribute('style', 'text-decoration: line-through;  font-size: 16px;');
      selector.nonDicountedPrice[0].setAttribute('style', 'display: flex;align-items: center;flex-direction: row;');
      insertAfter(newDiscountedPrice, document.querySelectorAll('#product-details-form .non-discounted-price')[0].children[1]);
      document.querySelectorAll('#product-details-form .non-discounted-price')[0].children[1].remove();
      insertBefore(document.querySelectorAll('#product-details-form .non-discounted-price')[0], selector.quantitySelector);
    }

    ;
    var dot = document.createElement('div');

    if (selector.stockAvailability.innerText == 'Yra') {
      dot.setAttribute('style', 'display: inline-block;width: 10px;height: 10px;border-radius: 50%;margin: 0 5px;background-color: #19d819;');
    }

    ;

    if (selector.stockAvailability.innerText == 'Nėra') {
      dot.setAttribute('style', 'display: inline-block;width: 10px;height: 10px;border-radius: 50%;margin: 0 5px;background-color: tomato;');
    }

    ;
    insertBefore(dot, selector.stockAvailability);

    if (selector.addToCartPanel) {
      insertAfter(selector.delivery, selector.addToCartPanel);
    } else {
      insertAfter(selector.delivery, selector.prices);
      selector.backInStock.setAttribute('style', 'width: min-content; margin: 20px 0; padding: 5px 30px; border: 2px solid #f09114;');
    }

    if (selector.addToWishlistInner) {
      selector.addToWishlistInner.setAttribute('style', 'margin: 0;');
    }

    selector.quantityIncrease[0].addEventListener('click', increaseQuantity);
    selector.quantityDecrease[0].addEventListener('click', decreaseQuantity);
  }

  ;
  var y = window.matchMedia("(max-width: 1000px)");

  if (y.matches) {
    var selector = {
      contentWrapper: document.querySelectorAll('.master-wrapper-content')[0],
      overview: document.querySelectorAll('#product-details-form .overview')[0],
      usageWarning: document.querySelectorAll('#product-details-form .product-usage-warning')[0],
      brand: document.querySelectorAll('#product-details-form .basic-product-info > div:nth-child(3)')[0],
      productCode: document.querySelectorAll('#product-details-form .basic-product-info > div:nth-child(1)')[0],
      manufacturer: document.querySelectorAll('#product-details-form .manufacturers')[0],
      basicInfo: document.querySelectorAll('#product-details-form .overview .basic-product-info')[0],
      title: document.querySelectorAll('h1')[0],
      availability: document.querySelectorAll('#product-details-form .availability')[0],
      addToWishlist: document.querySelectorAll('#product-details-form .overview-buttons'),
      addToCartPanel: document.querySelectorAll('#product-details-form .add-to-cart-panel')[0],
      addToCart: document.querySelectorAll('#product-details-form .button')[0],
      addToCartButton: document.querySelectorAll('#product-details-form .add-to-cart-button')[0],
      quantitySelector: document.querySelectorAll('#product-details-form .quantity')[0],
      delivery: document.querySelectorAll('#product-details-form .delivery')[0],
      prices: document.querySelectorAll('#product-details-form .prices')[0],
      priceWarning: document.querySelectorAll('#product-details-form .limext-eshop-price-warning')[0],
      price: document.querySelectorAll('#product-details-form .product-price')[0],
      imageDisclaimer: document.querySelectorAll('#product-details-form .text-below-product-picture')[0],
      nonDicountedPrice: document.querySelectorAll('#product-details-form .non-discounted-price'),
      stockAvailability: document.querySelectorAll('.availability span.value')[0],
      stockWrapper: document.querySelectorAll('.stock')[0],
      backInStock: document.querySelectorAll('.back-in-stock-subscription')[0],
      addToWishlistInner: document.querySelectorAll('.add-to-wishlist')[0],
      quantityValue: document.querySelectorAll('.quantity .qty-input')[0],
      quantityDecrease: document.querySelectorAll('#product-details-form div.quantity > span.decrease'),
      quantityIncrease: document.querySelectorAll('#product-details-form div.quantity > span.increase')
    };
    selector.overview.setAttribute('style', 'padding: 20px; text-align: left;');
    selector.usageWarning.setAttribute('style', 'width: 100%;margin: 20px 0;color: #666;');

    if (selector.brand) {
      if (selector.brand.innerText.includes('enklas:')) {
        selector.brand.setAttribute('style', 'display: inline-block;border-right: ;width: 100%');
      }
    }

    selector.manufacturer.setAttribute('style', 'display: inline-block;width: 100%;');
    selector.basicInfo.setAttribute('style', 'padding: 0;font-size: 16px;');

    if (selector.addToWishlist.length == 1) {
      selector.delivery.setAttribute('style', 'font-size: 16px;margin: 0 0 20px;');
    } else {
      selector.delivery.setAttribute('style', 'font-size: 16px;margin: 40px 0 20px;');
    }

    selector.imageDisclaimer.setAttribute('style', 'font-size: 16px;margin: 0 0 20px;');
    selector.prices.setAttribute('style', 'display: flex;width: 100%;max-width: 330px;flex-direction: row;flex-wrap: wrap;margin: 40px 0 30px;justify-content: space-between;');
    selector.price.setAttribute('style', 'font-size: 30px;');
    selector.contentWrapper.setAttribute('style', 'padding-top: 10px !important;');

    if (selector.quantitySelector) {
      selector.quantitySelector.setAttribute('style', 'display: inline-block;position: relative;');
      insertBefore(selector.quantitySelector, selector.priceWarning);
    }

    selector.priceWarning.setAttribute('style', 'display: inline-block;width: 100%;margin-top: 20px;font-size: 14px;');

    if (selector.addToCart) {
      selector.addToCart.setAttribute('style', 'display: inline-block;');
      selector.addToCartButton.setAttribute('style', 'padding: 0 65px;');
    }

    selector.title.setAttribute('style', 'color: #444;margin: 20px 0;');
    insertBefore(selector.title, selector.basicInfo);
    insertBefore(selector.productCode, selector.usageWarning);
    insertAfter(selector.availability, selector.productCode);
    selector.availability.setAttribute('style', 'margin: 10px 0;');

    if (selector.addToWishlist.length == 1) {
      if (selector.addToCart) {
        selector.addToWishlist[0].setAttribute('style', 'display: inline-block;border: none;margin-left: 20px;');
        insertAfter(selector.addToWishlist[0], selector.addToCart);
      } else {
        selector.addToWishlist[0].setAttribute('style', 'display: inline-block;border: none;margin: 0;');
        selector.addToWishlistInner.setAttribute('style', 'margin: 0;');
        insertAfter(selector.addToWishlist[0], selector.priceWarning);
      }
    }

    ;

    if (selector.nonDicountedPrice.length == 1) {
      var nonDiscountPice = document.querySelectorAll('#product-details-form .non-discounted-price')[0].children[1].innerText;
      var newDiscountedPrice = document.createElement('div');
      newDiscountedPrice.innerText = nonDiscountPice;
      newDiscountedPrice.setAttribute('style', 'text-decoration: line-through; font-size: 16px;');
      insertAfter(newDiscountedPrice, document.querySelectorAll('#product-details-form .non-discounted-price')[0].children[1]);
      document.querySelectorAll('#product-details-form .non-discounted-price')[0].children[1].remove();
      insertAfter(document.querySelectorAll('#product-details-form .non-discounted-price')[0], selector.quantitySelector);
      selector.nonDicountedPrice[0].setAttribute('style', 'width: 100%');
    }

    ;

    if (selector.addToCartPanel) {
      insertAfter(selector.delivery, selector.addToCartPanel);
    } else {
      insertAfter(selector.delivery, selector.prices);
    }

    var dot = document.createElement('div');

    if (selector.stockAvailability.innerText == 'Yra') {
      dot.setAttribute('style', 'display: inline-block;width: 10px;height: 10px;border-radius: 50%;margin: 0 5px;background-color: #19d819;');
    }

    ;

    if (selector.stockAvailability.innerText == 'Nėra') {
      dot.setAttribute('style', 'display: inline-block;width: 10px;height: 10px;border-radius: 50%;margin: 0 5px;background-color: tomato;');
    }

    ;
    insertBefore(dot, selector.stockAvailability);
    insertAfter(selector.imageDisclaimer, selector.delivery);

    if (!selector.addToCart) {
      selector.backInStock.setAttribute('style', 'margin: 20px 0;');
    }

    selector.quantityIncrease[0].addEventListener('click', increaseQuantity);
    selector.quantityDecrease[0].addEventListener('click', decreaseQuantity);
  }

  ;
})();