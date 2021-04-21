// var language =
//     window.location.hostname === 'gr.factcool.com'
//         ? 'GR'
//         : window.location.hostname === 'si.factcool.com'
//         ? 'SI'
//         : window.location.hostname === 'ro.factcool.com'
//         ? 'RO'
//         : window.location.hostname === 'sk.factcool.com'
//         ? 'SK'
//         : 'LT';

// var trendingNow = language === 'gr' ? 'Trending now' : language === 'si' ? 'SI' : language === 'ro' ? 'RO' : language === 'sk' ? 'SK' : 'Trending now';

// var linkOne = language === 'gr' ? 'GRlink' : language === 'si' ? 'SIlink' : language === 'ro' ? 'ROlink' : language === 'sk' ? 'SKlink' : 'GRlink';

// var linkTwo = language === 'gr' ? 'GRlink' : language === 'si' ? 'SIlink' : language === 'ro' ? 'ROlink' : language === 'sk' ? 'SKlink' : 'GRlink';

// var linkThree = language === 'gr' ? 'GRlink' : language === 'si' ? 'SIlink' : language === 'ro' ? 'ROlink' : language === 'sk' ? 'SKlink' : 'GRlink';

// var linkFour = language === 'gr' ? 'GRlink' : language === 'si' ? 'SIlink' : language === 'ro' ? 'ROlink' : language === 'sk' ? 'SKlink' : 'GRlink';

// var linkFive = language === 'gr' ? 'GRlink' : language === 'si' ? 'SIlink' : language === 'ro' ? 'ROlink' : language === 'sk' ? 'SKlink' : 'GRlink';

// var linkSix = language === 'gr' ? 'GRlink' : language === 'si' ? 'SIlink' : language === 'ro' ? 'ROlink' : language === 'sk' ? 'SKlink' : 'GR link';

// var textOne = language === 'gr' ? 'GRtext' : language === 'si' ? 'SItext' : language === 'ro' ? 'ROtext' : language === 'sk' ? 'SKtext' : 'GRtext';

// var textTwo = language === 'gr' ? 'GRtext' : language === 'si' ? 'SItext' : language === 'ro' ? 'ROtext' : language === 'sk' ? 'SKtext' : 'GRtext';

// var textThree = language === 'gr' ? 'GRtext' : language === 'si' ? 'SItext' : language === 'ro' ? 'ROtext' : language === 'sk' ? 'SKtext' : 'GRtext';

// var textFour = language === 'gr' ? 'GRtext' : language === 'si' ? 'SItext' : language === 'ro' ? 'ROtext' : language === 'sk' ? 'SKtext' : 'GRtext';

// var textFive = language === 'gr' ? 'GRtext' : language === 'si' ? 'SItext' : language === 'ro' ? 'ROtext' : language === 'sk' ? 'SKtext' : 'GRtext';

// var textSix = language === 'gr' ? 'GRtext' : language === 'si' ? 'SItext' : language === 'ro' ? 'ROtext' : language === 'sk' ? 'SKtext' : 'GRtext';

// setInterval(function () {
//     var container = $('.test-container');

//     if (
//         ($('#vyhladat-produkt').is(':focus') || $('body > div.search-mobile > div > form > input').is(':focus')) &&
//         $('.focusedin').css('display') === 'block' &&
//         !container.length &&
//         !$('.luigi-ac.luigi-ac-grid.luigi-ac-autocomplete.luigi-ac-open').length
//     ) {
//         var screenWidth = $(window).width();

//         if (screenWidth > 767) {
//             var block = document.querySelector('.main-nav-search form');
//         } else {
//             var block = document.querySelector('.search-mobile-inner form');
//         }

//         var trendingSearches = document.createElement('div');
//         trendingSearches.setAttribute('class', 'test-container');
//         trendingSearches.innerHTML =
//             '<div class="second-block"> <div class="block-title"><img src="https://semexit.s3-eu-west-1.amazonaws.com/Factcool/zaibas.svg" alt="star"><p>' +
//             trendingNow +
//             '</p></div> <div class="suggestions-list"> <div class="suggestion-link"> <a href="' +
//             linkOne +
//             '">' +
//             textOne +
//             '</a> </div> <div class="suggestion-link"> <a href="' +
//             linkTwo +
//             '">' +
//             textTwo +
//             ' </a> </div> <div class="suggestion-link"> <a href="' +
//             linkThree +
//             '">' +
//             textThree +
//             ' </a> </div> <div class="suggestion-link"> <a href="' +
//             linkFour +
//             '">' +
//             textFour +
//             ' </a> </div> <div class="suggestion-link"> <a href="' +
//             linkFive +
//             '">' +
//             textFive +
//             ' </a> </div> <div class="suggestion-link"> <a href="' +
//             linkSix +
//             '">' +
//             textSix +
//             ' </a> </div> </div> </div>';
//         block.append(trendingSearches);
//     } else if ($('.focusedin').css('display') === 'none' && container.length) {
//         setTimeout(function () {
//             container.remove();
//         }, 100);
//     } else if ($('.focusedin').css('display') === 'block' && container.length && $('.luigi-ac.luigi-ac-grid.luigi-ac-autocomplete.luigi-ac-open').length) {
//         container.remove();
//     } else if (!$('#vyhladat-produkt').is(':focus') && !$('body > div.search-mobile > div > form > input').is(':focus')) {
//         container.remove();
//     }
// }, 100);
