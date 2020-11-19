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
  var buyButtonText = "Peržiūrėti krepšelį";
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
    document.querySelector(".new-mini-cart-count").innerText = productCount; //   hj("trigger", "ab_test_EuroI1H8TDM_var1");
  }

  function destroyCart() {
    document.querySelector(".new-mini-cart-wrap").remove();
  }

  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos < currentScrollPos) {
      document.querySelector(".new-mini-cart-wrap").style.top = "20px";
    } else if (currentScrollPos < 40) {
      document.querySelector(".new-mini-cart-wrap").style.top = "130px";
    }

    prevScrollpos = currentScrollPos;
  };

  var css = '.cart-message.top-message.top-message-warning{display: none!important;} .header-wrapper{position: relative;} .new-mini-cart-wrap{transition: top 0.3s ease-in-out;width: 100%; max-width: 280px; min-width: 280px; border-radius: 4px; border: 1px solid #d4d4d4; background: #fff;position: fixed;top: 120px;right: 12vw; z-index: 11111111;} .new-mini-cart-header{position: relative; background: #878787; text-align: center; color: #ffffff; font-weight: 600; padding: 8px; text-transform: uppercase; font-size: 12px;} .new-mini-cart-bottom{padding: 10px 20px;} .new-mini-cart-ok{font-weight:bold;font-size: 13px;background: #01a652; border: none; color: #fff; border-radius: 4px; padding: 8px; width: 100%;} .new-mini-cart-back{border: none; background: none; text-align: center; width: 100%; color: #878787; margin: 10px 0px 4px; font-size: 12px;} .new-mini-cart-ok:after{content: ""; border-bottom: 1px solid #fff; border-right: 1px solid #fff; display: inline-block; width: 8px; height: 8px; transform: rotate(-45deg); margin-left: 7px;} .new-mini-cart-back:before{content: ""; border-bottom: 1px solid #616159; border-right: 1px solid #616159; display: inline-block; width: 8px; height: 8px; transform: rotate(135deg); margin-right: 7px;} .new-mini-cart-body{display: flex; justify-content: space-between; align-items: center; padding: 16px 0px 16px;} ',
      head = document.head || document.getElementsByTagName("head")[0],
      style = document.createElement("style");
  css += '.new-mini-cart-img{width: 35%; min-width: 35%;} .new-mini-cart-img img{width: 100%} .new-mini-cart-txt{width: 65%; min-width: 65%; padding: 10px 16px 0px 0px;} .new-mini-cart-name{color: #01a652;} .new-mini-cart-price{color: #41413e; font-size: 20px; font-weight: 700; line-height: 100%; margin-top: 12px;} .new-mini-cart-close{position: absolute; top: 10px; right: 10px; width: 20px; height: 20px; cursor: pointer;} .new-mini-cart-close:after, .new-mini-cart-close:before{content: ""; width: 16px; height: 2px; background: #ffffff; top: 4px; left: 0px; display: block; position: absolute;} .new-mini-cart-close:before{transform: rotate(45deg);} .new-mini-cart-close:after{transform: rotate(135deg);} .new-mini-cart-wrap:before{content: ""; display: block; width: 0; height: 0; border-style: solid; border-width: 0 10px 15px 10px; border-color: transparent transparent #878787 transparent; position: absolute; top: -15px; left: 110px;}';
  css += "@media (max-width: 1199px){.new-mini-cart-wrap:before{left: 124px;}}@media (max-width: 991px){.new-mini-cart-wrap {top: 140%;} .new-mini-cart-wrap:before{left: 172px;}}@media (max-width: 767px){.new-mini-cart-wrap{position: fixed; top: 46px; left: 0px; width: 100%; max-width: 100%; border-radius: 0px;} .new-mini-cart-header{background: #d0fee7; color: #16ae61; border-bottom: 1px solid #16ae61; border-radius: 0px;} .new-mini-cart-close:after, .new-mini-cart-close:before{background: #16ae61;} .new-mini-cart-body{max-width: 340px; margin: 0px auto; padding: 10px 0px 4px;} .new-mini-cart-bottom{max-width: 380px; margin: 0px auto; display: flex; justify-content: space-between; align-items: center; flex-direction: row-reverse;} .new-mini-cart-ok{margin-left: 4px; line-height: 100%; padding: 10px 6px;} .new-mini-cart-back{border: 1px solid #616159; border-radius: 4px; padding: 8px 6px; margin: 0px; margin-right: 4px;} .new-mini-cart-wrap:before{content: none;} .new-mini-cart-ok:after, .new-mini-cart-back:before{content: none;}.top--wrapper.no-mobile{display: block !important;height: 0;}} @media (min-width:992px){.new-mini-cart-wrap{top:170px;right:50px}} @media (min-width:1200px){.new-mini-cart-wrap{top:130px;right:20px}} @media (min-width:1400px){.new-mini-cart-wrap{right:11w}}";
  style.type = "text/css";

  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);
}, 2000);