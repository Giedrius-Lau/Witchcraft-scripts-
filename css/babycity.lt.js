// window.addEventListener('DOMContentLoaded', function () {
//     var day1 = new Date();
//     sessionStorage.setItem('banner-timeout', day1);

//     var interval = setInterval(function () {
//         var day2 = new Date();
//         var difference = day2.getTime() - Date.parse(sessionStorage.getItem('banner-timeout'));

//         if (difference / 1000 > 1) {
//             if (sessionStorage.getItem('banner-exists') !== 'true' && !document.querySelector('.new-popup')) {
//                 var body = document.querySelector('body');
//                 var popup = document.createElement('div');

//                 popup.setAttribute('class', 'new-popup');
//                 popup.innerHTML =
//                     '<a href="https://www.babycity.lt/lt/registracija-konsultacijai"><img class="mobile-image" src="https://semexit.s3-eu-west-1.amazonaws.com/babycity/pop-up_consultation_mobile.png" alt="promo-banner"><img class="desktop-image" src="https://semexit.s3-eu-west-1.amazonaws.com/babycity/pop-up_consultation-beX.jpg" alt="promo-banner"></a><div class="close-btn"><img src="https://semexit.s3-eu-west-1.amazonaws.com/babycity/btn.png" alt="close button"></div>';

//                 body.append(popup);

//                 document.querySelector('.close-btn').addEventListener('click', function () {
//                     sessionStorage.setItem('banner-exists', 'true');
//                     document.querySelector('.new-popup').remove();
//                 });
//                 clearInterval(interval);
//             }
//         }
//     }, 1000);
// });
