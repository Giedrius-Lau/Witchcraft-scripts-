"use strict";

console.log("prasideda");

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

var selector 
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