// var telelotoPaveiksliukasMobile = "https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/Teleloto+prizai+08.08+-+08.14+mobile.png"
// var telelotoPaveiksliukasDesktop = "https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/Teleloto+prizai+08.08+-+08.14.png"
// var vikinglotoPaveiksliukasMobile = "https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/prizas+mobile-vikingai.png"
// var vikinglotoPaveiksliukasDesktop = "https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/prizas-vikingai.png"
// var eurojackpotPaveiksliukasMobile = "https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/prizas+mobile-ejp.png"
// var eurojackpotPaveiksliukasDesktop = "https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/prizas+mobile-ejp.png"


// function insertAfter(el, referenceNode) {
//     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
// }

// var onlineInterval = window.setInterval(function () {
//     var skirtukas = document.querySelector('#vk > div.ticket-check__win-info-container > hr') || document.querySelector('#main > div:nth-child(2) > div > div.content.ticket-check__ticket-check-container > div > div > hr');

//     if (skirtukas && !document.querySelector('.newBanner')) {
//         var newBanner = document.createElement('div');

//         if (window.location.href.indexOf('/check-ticket/teleloto') > -1) {
//             newBanner.setAttribute('class', 'newBanner teleloto');
//              newBanner.innerHTML = '<div class="left"></div> <div class="newBanner-inner"> <div class="banner-title">Artimiausio žaidimo prizai:</div> <div id="demo"> <img class="img-desktop" src="'+ 
//              telelotoPaveiksliukasDesktop +
//              '" /> <img class="img-mobile" src="'+ 
//              telelotoPaveiksliukasMobile +
//              '"</div></div> <a href="#" class="button-link">Rinkis bilietą ></a> </div>';
//           }
//           if (window.location.href.indexOf('/check-ticket/vikingloto') > -1) {
//             newBanner.setAttribute('class', 'newBanner vikingloto');
//             newBanner.innerHTML = '<div class="left"></div> <div class="newBanner-inner"> <div class="banner-title">Artimiausio žaidimo prizai:</div> <div id="demo"> <img class="img-desktop" src="'+ 
//             vikinglotoPaveiksliukasDesktop +
//             '" /> <img class="img-mobile" src="'+ 
//             vikinglotoPaveiksliukasMobile +
//             '"</div></div> <a href="#" class="button-link">Rinkis bilietą ></a> </div>';
//           }
//           if (window.location.href.indexOf('/check-ticket/eurojackpot') > -1) {
//             newBanner.setAttribute('class', 'newBanner eurojackpot');
//             newBanner.innerHTML = '<div class="left"></div> <div class="newBanner-inner"> <div class="banner-title">Artimiausio žaidimo prizai:</div> <div id="demo"> <img class="img-desktop" src="'+ 
//             eurojackpotPaveiksliukasDesktop +
//              '" /> <img class="img-mobile" src="'+ 
//              eurojackpotPaveiksliukasMobile +
//              '"</div></div> <a href="#" class="button-link">Rinkis bilietą ></a> </div>';
//           }
//         insertAfter(newBanner, skirtukas);

//         clearInterval(onlineInterval);

//     }
// }, 1000);
