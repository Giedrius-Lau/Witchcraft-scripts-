// var productInterval = window.setInterval(function () {
//     var leftBlock = document.querySelector('.TopBlock-imageCarousel-dui');
//     var main = document.querySelector('main');

//     if (leftBlock && main) {
//         var specifikacija = document.createElement('div');
//         specifikacija.setAttribute('class', 'specifikacija');
//         specifikacija.innerHTML = '<a href="#parameters">Prekės informacija</a>';

//         var scrollToTop = document.createElement('div');
//         scrollToTop.setAttribute('class', 'scrollToTop');

//         leftBlock.append(specifikacija);

//         if (!document.querySelector('.scrollToTop')) {
//             main.append(scrollToTop);
//         }

//         var y = $(this).scrollTop();
//         if (y < 850) {
//             $('.scrollToTop').hide();
//         } else {
//             $('.scrollToTop').show();
//             document.querySelector('.scrollToTop').addEventListener('click', function () {
//                 console.log('click1');

//                 $('html, body').animate({ scrollTop: 0 }, 'slow');
//                 return false;
//             });
//         }

//         clearInterval(productInterval);
//     }
// }, 300);

// $(document).scroll(function () {
//     var y = $(this).scrollTop();
//     if (y < 850) {
//         $('.scrollToTop').hide();
//     } else {
//         $('.scrollToTop').show();
//         document.querySelector('.scrollToTop').addEventListener('click', function () {
//             console.log('click2');
//             $('html, body').animate({ scrollTop: 0 }, 'slow');
//             return false;
//         });
//     }
// });
