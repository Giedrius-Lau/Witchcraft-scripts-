// if (window.location.href.indexOf('/payment') > -1) {
//     var header = document.querySelector('header');

//     var skipContent = document.createElement('a');
//     skipContent.setAttribute('href', '#checkout-main');
//     skipContent.setAttribute('class', 'skip-to-main-content-link');
//     skipContent.textContent = 'Skip to main content';

//     header.prepend(skipContent);
// }

// var css = '.skip-to-main-content-link {     transition: none; position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden; color: #555555; } .skip-to-main-content-link:focus {     width: auto; height: auto; left: 35px; top: 0; padding: 5px min(2rem,3vw); outline: none; text-decoration: underline;}',
//     head = document.head || document.getElementsByTagName('head')[0],
//     style = document.createElement('style');

// style.type = 'text/css';
// if (style.styleSheet) {
//     // This is required for IE8 and below.
//     style.styleSheet.cssText = css;
// } else {
//     style.appendChild(document.createTextNode(css));
// }
// head.appendChild(style);
