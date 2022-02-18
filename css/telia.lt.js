// function insertBefore(element, firstChild) {
//     firstChild.parentNode.insertBefore(element, firstChild);
// }
// var interval = window.setInterval(function () {
//     var containerBlock = document.querySelector('body > div:nth-child(5) > main > div > section:nth-child(4)');

//     if (containerBlock && !document.querySelector('.noninteractive-banner')) {
//         var desktopImage = 'https://semexit.s3.eu-west-1.amazonaws.com/telia/1200x112-1.jpg';
//         var mobileImage = 'https://semexit.s3.eu-west-1.amazonaws.com/telia/377x140-1.jpg';

//         var banner = document.createElement('div');
//         banner.setAttribute('class', 'interactive-banner');
//         banner.innerHTML =
//             '<a class="interactive-banner-link" onclick="javascript:TC.leads.modal.show();return false;" data-gtm-vis-has-fired-2746359_1882="1"><img class="image-desktop" src="' +
//             desktopImage +
//             '" alt="" /><img class="image-mobile" src="' +
//             mobileImage +
//             '" alt="Telia TV pasiūlymas" /></a>';

//         containerBlock.append(banner);
//         clearInterval(interval);
//     }
// }, 250);
