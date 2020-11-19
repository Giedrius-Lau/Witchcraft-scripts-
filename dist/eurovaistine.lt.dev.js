"use strict";

console.log("prasideda");
setTimeout(function () {
  function _findClosest(el, selector) {
    var matchesFn;
    ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"].some(function (fn) {
      if (typeof document.body[fn] == "function") {
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

  var productTitle = "";
  var imageUrl = "";
  var productPrice = "";
  var productCount = 1;
  var buyButtonText = "Į atsiskaitymą";
  var returnToShopText = "Tęsti apsipirkimą";
  var productAdded = "Prekės <span class='new-mini-cart-count'>1</span> vnt. įdėta į krepšelį";

  if (document.querySelectorAll("#video-dialog-mobile").length > 0) {
    document.querySelector(".product-content button[data-handler='addToCart']").addEventListener("click", function () {
      productTitle = document.querySelector(".product-content h1").innerText;
      imageUrl = document.querySelector(".product-photo-image img").getAttribute("src");
      productPrice = document.querySelector(".product-content .product-price-default").innerText;
      productCount = document.querySelector(".product-content #sylius_order_item_quantity").value;
      createCart();
    });
  }

  var allAddToCart = document.querySelectorAll(".product-item button[data-handler='addToCart']");
  allAddToCart.forEach(function (item, idx) {
    item.addEventListener("click", function () {
      var productName = _findClosest(this, ".product-item ");

      productTitle = productName.querySelector(".product-text").innerText;
      imageUrl = productName.querySelector(".product-img img").getAttribute("src");
      productPrice = productName.querySelector(".product-price-default").innerText;
      productCount = productName.querySelector("#sylius_order_item_quantity").value;
      createCart();
    });
  });

  function createCart() {
    if (document.querySelectorAll(".new-mini-cart-wrap").length > 0) {
      document.querySelector(".new-mini-cart-wrap").remove();
    }

    var htmldata = '<div class="new-mini-cart-header">' + productAdded + '<span class="new-mini-cart-close"></span></div><div class="new-mini-cart-body"><div class="new-mini-cart-img"><img src="' + imageUrl + '" title="" alt="" /></div><div class="new-mini-cart-txt"><div class="new-mini-cart-name">' + productTitle + '</div><div class="new-mini-cart-price">' + productPrice + '</div></div></div><div class="new-mini-cart-bottom"><button class="new-mini-cart-ok">' + buyButtonText + '</button><button class="new-mini-cart-back">' + returnToShopText + "</button></div>";
    var newMiniCart = document.createElement("div");
    newMiniCart.setAttribute("class", "new-mini-cart-wrap");
    newMiniCart.innerHTML = htmldata;
    document.querySelector(".header-wrapper").appendChild(newMiniCart);
    document.querySelector(".new-mini-cart-ok").addEventListener("click", function () {
      window.location = "/krepselis";
    });
    document.querySelector(".new-mini-cart-close").addEventListener("click", function () {
      destroyCart();
    });
    document.querySelector(".new-mini-cart-back").addEventListener("click", function () {
      destroyCart();
    });
    document.querySelector(".new-mini-cart-count").innerText = productCount;
    hj("trigger", "ab_test_EuroI1H8TDM_var1");
  }

  function destroyCart() {
    document.querySelector(".new-mini-cart-wrap").remove();
  }

  var productCart = document.querySelector(".product-cart").cloneNode(true);
  var productImage = document.querySelector(".product-photo-image img").cloneNode(true);
  var productTitle = document.querySelector("div.product-content>h1").cloneNode(true);
  var secondaryCtaContainer = document.createElement("div");
  secondaryCtaContainer.setAttribute("class", "secondary-cta");
  document.querySelector(".tab-content").appendChild(secondaryCtaContainer);
  document.querySelector(".secondary-cta").appendChild(productCart);
  document.querySelector(".secondary-cta .col-md-2").remove();
  document.querySelector(".secondary-cta .product-prices").appendChild(productImage);
  document.querySelector(".secondary-cta .product-prices").appendChild(productTitle);
}, 2000);