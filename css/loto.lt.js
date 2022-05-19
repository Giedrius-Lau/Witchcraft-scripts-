// function isScriptLoaded(src) {
//     return Boolean(document.querySelector('script[src*="' + src + '"]'));
// }

// if (isScriptLoaded('slick.min.js') != true) {
//     const tag = document.createElement('script');
//     tag.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
//     tag.type = "text/javascript"
//     const firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag && firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
// }



// (function ($) {
//     // add class to body for variation
//    // 50 * 200 = 10 secs
//    var croTVGTime = 50;
//    var croTVGInterval = setInterval(function () {
//      if ($) {
//        clearInterval(croTVGInterval);

//        if (window.innerWidth > 767) {
//         var onlineInterval = window.setInterval(function () {
//             var upperNavigation = document.querySelector('#navbar-mini-header > div');
//             var middleNavigation = document.querySelector('.rd-header-middle');
    
//             if (upperNavigation && middleNavigation && !document.querySelector('.loto-slider')) {
//                 var dropdown = document.createElement('div');
//                 dropdown.setAttribute('class', 'container__nav-item test-dropdown');
//                 dropdown.innerHTML =
//                     'Daugiau <i class="svg-icon svg-chevron-down"></i> <div class="closing-container"></div> <div class="test-dropdown-content"> <a href="https://loto.lt/lt/news" class="test-dropdown-content-item">Akcijos</a> <a href="/lt/laidu-irasai" class="test-dropdown-content-item">Laidų įrašai</a> <a href="https://loto.lt/lt/momentines-loterijos" class="test-dropdown-content-item">Momentinės loterijos</a> <a href="https://loto.lt/lt/winners" class="test-dropdown-content-item">Laimėjimai</a> <a href="https://loto.lt/lt/lotoklubas" class="test-dropdown-content-item">Apie Loto klubą</a> <a href="https://loto.lt/lt/page/misijos" class="test-dropdown-content-item">Loto klubo misijos</a> </div>';
//                 upperNavigation.append(dropdown);
    
//                 var dropdownButton = document.querySelector('.test-dropdown, .test-dropdown-content a, .closing-container');
//                 dropdownButton.addEventListener('click', function () {
//                     dropdownButton.querySelector('.test-dropdown-content').classList.toggle('display');
//                     dropdownButton.querySelector('.closing-container').classList.toggle('display');
//                     dropdownButton.querySelector('.svg-icon').classList.toggle('display');
//                 });
    
//                 middleNavigation.querySelector('.nav').remove();
    
//                 var slider = document.createElement('div');
//                 slider.setAttribute('class', 'loto-slider hide-mobile');
//                 slider.innerHTML =
//                     '<a href="https://loto.lt/lt/teleloto"><img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/teleloto.png" alt="Tele loto"></img></a> <a href="https://loto.lt/lt/eurojackpot"><img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/eurojackpot.png" alt="EuroJackpot"></img></a> <a href="https://loto.lt/lt/vikinglotto"><img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/vikinglotto.png" alt="Viking Lotto"></img></a> <a href="https://loto.lt/lt/blitzloto"><img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/blitzlogo.png" alt="Blitz loto"></img></a> <a href="https://loto.lt/lt/superloto"><img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/superlotto.png" alt="Super lotto"></img></a> <a href="https://loto.lt/lt/jega2"><img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/jega_white.png" alt="Jėga"></img></a> <a href="https://loto.lt/lt/kenoloto"><img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/keno_white.png" alt="Keno loto"></img></a>';
//                 middleNavigation.append(slider);
    
//                 var slickSettings = {
//                     dots: false,
//                     infinite: true,
//                     slidesToShow: 5,
//                     slidesToScroll: 1,
//                     arrows: true,
//                 };
    
//                 setTimeout(() => {
//                     jQuery('.loto-slider').slick(slickSettings);
//                 }, 300);
    
//                 clearInterval(onlineInterval);
//             }
//         }, 1000);
//     }
    
//     if (window.innerWidth < 768) {
//         var onlineIntervalMobile = window.setInterval(function () {
//             var navigation = document.querySelector('#rd-header');
    
//             if (navigation && !document.querySelector('.loto-slider')) {
//                 var slider = document.createElement('div');
//                 slider.setAttribute('class', 'loto-slider hide-desktop');
//                 slider.innerHTML =
//                     '<a href="https://loto.lt/lt/teleloto"><img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/teleloto.png" alt="Tele loto"></img></a> <a href="https://loto.lt/lt/eurojackpot"><img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/eurojackpot.png" alt="EuroJackpot"></img></a> <a href="https://loto.lt/lt/vikinglotto"><img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/vikinglotto.png" alt="Viking Lotto"></img></a> <a href="https://loto.lt/lt/blitzloto"><img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/blitzlogo.png" alt="Blitz loto"></img></a> <a href="https://loto.lt/lt/superloto"><img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/superlotto.png" alt="Super lotto"></img></a> <a href="https://loto.lt/lt/jega2"><img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/jega_white.png" alt="Jėga"></img></a> <a href="https://loto.lt/lt/kenoloto"><img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/keno_white.png" alt="Keno loto"></img></a>';
//                 navigation.append(slider);
    
//                 var slickSettings = {
//                     dots: false,
//                     infinite: true,
//                     slidesToShow: 5,
//                     slidesToScroll: 1,
//                     arrows: true,
//                 };
    
//                 setTimeout(() => {
//                     jQuery('.loto-slider').slick(slickSettings);
//                 }, 300);
    
//                 clearInterval(onlineIntervalMobile);
//             }
//         }, 1000);
//     }
    

//      }
//      // clear interval after 10 secs. if element not found
//      croTVGTime--;
//      if (croTVGTime < 0) {
//        clearInterval(croTVGInterval);
//      }
//    }, 200);


// })(jQuery);
