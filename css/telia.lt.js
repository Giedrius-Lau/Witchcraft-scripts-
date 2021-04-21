// var css = '';

// var head = document.head || document.getElementsByTagName('head')[0],
//     style = document.createElement('style');

// style.type = 'text/css';
// if (style.styleSheet) {
//     // This is required for IE8 and below.
//     style.styleSheet.cssText = css;
// } else {
//     style.appendChild(document.createTextNode(css));
// }
// head.appendChild(style);

// if (Cookies.get('t-all-notification-1') != '1') {
//     var text =
//         'Iki balandžio 22 d. 08:00 val. vyksta IT sistemų atnaujinimo darbai, dėl kurių galimi laikini sutrikimai. Prašome sugrįžti vėliau. Atsiprašome dėl nepatogumų.';

//     jQuery('.header').prepend(
//         '<div class="alert alert-warning new-top-notification" role="alert"><div class="container">' +
//             text +
//             '<span class="new-top-notification-close"><i class="icon icon-close" aria-hidden="true"></i></span></div></div>'
//     );
//     jQuery('.sub-menu__wrapper').addClass('.sub-menu-with-notification');
//     jQuery('body').addClass('with-notification');
//     jQuery('.new-top-notification-close').on('click', function () {
//         if (jQuery('.sub-menu__wrapper').length) {
//             jQuery('.sub-menu__wrapper').css('top', '0');
//         }
//         jQuery('body.with-notification').css('padding-top', '0');
//         jQuery('.new-top-notification').remove();
//         jQuery('body').removeClass('with-notification');
//         Cookies.set('t-all-notification-1', '1', { expires: null, path: '/', domain: '.telia.lt' });
//         clearInterval(interval);
//     });

//     var interval = setInterval(function () {
//         if (jQuery('.sub-menu__wrapper').length) {
//             jQuery('body.with-notification').css('padding-top', jQuery('.header').innerHeight() + 64);
//             jQuery('.sub-menu__wrapper').css('top', jQuery('.header').innerHeight());
//         } else {
//             jQuery('body.with-notification').css('padding-top', jQuery('.header').innerHeight());
//         }
//     }, 1000);
// }
