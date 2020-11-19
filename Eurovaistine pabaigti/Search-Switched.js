console.log("prasideda 1");

setTimeout(() => {
  var css =
      "@media (max-width:767px){.sn-suggest-docs .sn-suggest-item{display:none}.sn-suggest-docs .sn-suggest-item:first-child{display:block}.sn-suggest-docs .sn-suggest-item:nth-child(2){display:block}.sn-suggest-docs .sn-suggest-item.sn-suggest-btn{display:block}.sn-suggest-docs .sn-suggest-pages{display:none!important;height:0!important;min-height:0!important;overflow:hidden;opacity:0}.sn-suggest-pages{flex:1;order:1}.sn-suggest-hints{order:2}.sn-suggest-docs{order:3}span.sn-suggest-dropdown{max-height:calc(100vh - 200px)!important}}@media (min-width:768px){.reverse-direction{flex-direction:row-reverse!important}}",
    head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");

  style.type = "text/css";
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);

  setInterval(function () {
    if (
      document.querySelectorAll(".sn-suggest-dropdown-wrap")[0] &&
      !document
        .querySelectorAll(".sn-suggest-dropdown-wrap")[0]
        .classList.contains("reverse-direction")
    ) {
      document
        .querySelectorAll(".sn-suggest-dropdown-wrap")[0]
        .classList.add("reverse-direction");
    }

    if (document.querySelector(".sn-suggest-pages") && document.querySelectorAll(".sn-suggest-pages").length < 2) {
      var suggestPages = document.querySelector(".sn-suggest-pages").cloneNode(true);
      document.querySelector(".sn-suggest-dropdown-wrap").appendChild(suggestPages);
    }
  }, 300);

}, 2000);


/* @media (max-width: 767px) {
  .reverse-direction {
    flex-direction: row-reverse !important;
  }
  .sn-suggest-docs .sn-suggest-item {
    display: none;
  }
  .sn-suggest-docs .sn-suggest-item:first-child {
    display: block;
  }
  .sn-suggest-docs .sn-suggest-item:nth-child(2) {
    display: block;
  }
  .sn-suggest-docs .sn-suggest-item.sn-suggest-btn {
    display: block;
  }
  .sn-suggest-docs .sn-suggest-pages {
    display: none !important;
    height: 0 !important;
    min-height: 0 !important;
    overflow: hidden;
    opacity: 0;
  }
  .sn-suggest-pages {
    flex: 1;
    order: 3;
  }
  .sn-suggest-hints {
    order: 2;
  }
  .sn-suggest-docs {
    order: 1;
  }
  span.sn-suggest-dropdown {
    max-height: calc(100vh - 200px) !important;
  }
}
@media (min-width: 768px) {
  .reverse-direction {
    flex-direction: row-reverse !important;
  }

  .sn-suggest-pages {
    display: none !important;
  }

  .sn-suggest-docs .sn-suggest-pages {
    display: flex !important;
  }
}

.sn-suggest-dropdown {
  display: block !important;
} */
