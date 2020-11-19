"use strict";

console.log("prasideda 1");
setTimeout(function () {
  function css(el, styles) {
    for (var property in styles) {
      el.style[property] = styles[property];
    }
  }

  var tablet = window.matchMedia("(max-width: 992px)");
  var smallDesktop = window.matchMedia("(max-width: 1200px)");
  var selector = {
    topHeader: document.querySelectorAll(".top")[0],
    header: document.querySelectorAll(".header")[0],
    navbarCollapse: document.querySelectorAll(".navbar-collapse")[0]
  };

  var topHeaderMarginBottom = function topHeaderMarginBottom() {
    if (tablet.matches) {
      return "110px";
    } else if (smallDesktop.matches) {
      return "110px";
    }

    return "140px";
  };

  var headerInitialTop = function headerInitialTop() {
    if (tablet.matches) {
      return "54px";
    } else if (smallDesktop.matches) {
      return "69px";
    }

    return "39px";
  };

  var navInitialPositionTop = function navInitialPositionTop() {
    if (tablet.matches) {
      return "142px";
    } else if (smallDesktop.matches) {
      return "187px";
    }

    return "144px";
  };

  css(selector.topHeader, {
    "margin-bottom": topHeaderMarginBottom()
  });
  css(selector.header, {
    position: "fixed",
    "z-index": "999",
    width: "100%",
    transition: "top 0.2s ease-in-out",
    background: "#ffffff",
    top: headerInitialTop()
  });
  css(selector.navbarCollapse, {
    position: "fixed",
    "z-index": "998",
    width: "100%",
    transition: "top 0.2s ease-in-out",
    top: navInitialPositionTop()
  });
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    var headerTop = function headerTop() {
      if (tablet.matches) {
        return "54px";
      } else if (smallDesktop.matches) {
        return "69px";
      }

      return "39px";
    };

    var headerScrolled = function headerScrolled() {
      if (tablet.matches) {
        return "-32px";
      } else if (smallDesktop.matches) {
        return "0";
      }

      return "0";
    };

    var navTop = function navTop() {
      if (tablet.matches) {
        return "142px";
      } else if (smallDesktop.matches) {
        return "184px";
      }

      return "144px";
    };

    var navScrolled = function navScrolled() {
      if (tablet.matches) {
        return "56px";
      } else if (smallDesktop.matches) {
        return "118px";
      }

      return "105px";
    };

    var navHidden = function navHidden() {
      if (tablet.matches) {
        return "0";
      } else if (smallDesktop.matches) {}

      return "52px";
    };

    if (currentScrollPos < 10) {
      selector.header.style.top = headerTop();
    } else {
      selector.header.style.top = headerScrolled();
    }

    if (prevScrollpos > currentScrollPos) {
      if (currentScrollPos < 10) {
        selector.navbarCollapse.style.top = navTop();
      } else {
        selector.navbarCollapse.style.top = navScrolled();
      }
    } else {
      selector.navbarCollapse.style.top = navHidden();
    }

    prevScrollpos = currentScrollPos;
  };
}, 2000);