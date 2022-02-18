// var interval = window.setInterval(function () {
//     var searchInput = document.querySelector('#search');
//     var form = document.querySelector('#search_mini_form');

//     if (form && searchInput) {
//         var newPopup = document.createElement('div');
//         newPopup.setAttribute('id', 'am_search_container-2');
//         newPopup.innerHTML =
//             '<div class="am_search_popup_triangle"></div> <div id="am_search_popup" class="am_search_popup"> <div class="am_search_popup_inner"> <div class="popup-title">Skaitytojai ieško</div> <div class="popup-links"> <a href="https://www.patogupirkti.lt/haris-poteris/">Haris Poteris</a>' +
//             ' <a href="https://www.patogupirkti.lt/knygos-su-defektais">Knygos su defektais</a> <a href="https://www.patogupirkti.lt/knygu-ispardavimas">Knygų išpardavimas</a>' +
//             ' <a href="https://www.patogupirkti.lt/populiariausios-knygos">Populiariausios knygos</a> </div> <div class="popup-line"></div> <a href="https://www.patogupirkti.lt/knyga/dinastija-landsbergiu-isgyvenimo-istorija.html"> <div class="am_element"> <div> <div class="am_image"><img src="https://www.patogupirkti.lt/media/catalog/product/cache/1/small_image/135x/9df78eab33525d08d6e5fb8d27136e95/d/i/dinastija-landsbergiu-isgyvenimo-istorija.jpg"> </div> <div class="am_right">' +
//             ' <div class="am_title">Dinastija. Landsbergių išgyvenimo istorija</div> <div class="author"><a href="https://www.patogupirkti.lt/ruta-janutiene-knygos/">Rūta Janutienė</a></div> <div class="desc"></div> <table class="price_footer"> <tbody> <tr> <td class="price_cell" style="width: 97px;"> <div class="price-wrapper"> <strong class="font-14">14,99 €</strong> <span><span class="asterisk" data-toggle="modal" data-target="#storePriceModal">*</span>' +
//             ' </span> </div> </td> <td></td> </tr> </tbody> </table> </div> </div> </div> </a> <a href="https://www.patogupirkti.lt/knyga/kita-psichosomatikos-puse-psy2-o-mastymas.html"> <div class="am_element"> <div> <div class="am_image"><img src="https://www.patogupirkti.lt/media/catalog/product/cache/1/small_image/135x/9df78eab33525d08d6e5fb8d27136e95/k/i/kita-psichosomatikos-puse-psy2o-mastymas.jpg"> </div> <div class="am_right">' +
//             ' <div class="am_title">Kita psichosomatikos pusė. PSY2.O mąstymas</div> <div class="author"><a href="https://www.patogupirkti.lt/michailas-filiajevas-knygos/">Michailas Filiajevas, </a><a href="https://www.patogupirkti.lt/lana-bojeva-knygos/">Lana Bojeva</a></div> <div class="desc"></div> <table class="price_footer"> <tbody> <tr> <td class="price_cell" style="width: 97px;"> <div class="price-wrapper"> <strong class="font-14">17,99 €</strong> <span> 24,29 €* <span class="asterisk" data-toggle="modal" data-target="#storePriceModal">*</span> ' +
//             '</span> </div> </td> <td></td> </tr> </tbody> </table> </div> </div> </div> </a> <a href="https://www.patogupirkti.lt/knyga/geros-nuotaikos-vadovas-nauja-emociju-terapija.html"> <div class="am_element"> <div> <div class="am_image"><img src="https://www.patogupirkti.lt/media/catalog/product/cache/1/small_image/135x/9df78eab33525d08d6e5fb8d27136e95/g/e/geros-nuotaikos-vadovas.jpg"> </div> <div class="am_right"> <div class="am_title">Geros nuotaikos vadovas. Nauja emocijų terapija</div>' +
//             ' <div class="author"><a href="https://www.patogupirkti.lt/david-d-burns-knygos/">David D. Burns</a></div> <div class="desc"></div> <table class="price_footer"> <tbody> <tr> <td class="price_cell" style="width: 97px;"> <div class="price-wrapper"> <strong class="font-14">11,99 €<span> 15,48 €* <span class="asterisk" data-toggle="modal" data-target="#storePriceModal">*</span></span></strong>' +
//             '</div> </td> <td></td> </tr> </tbody> </table> </div> </div> </div> </a> <div> <a class="more_results" href="https://www.patogupirkti.lt/populiariausios-knygos?order=top&dir=desc">Daugiau rezultatų </a> </div> </div> </div>';
//         searchInput.onfocus = function () {
//             form.append(newPopup);
//         };

//         searchInput.onblur = function () {
//             setTimeout(function () {
//                 document.querySelector('#am_search_container-2').remove();
//             }, 250);
//         };
//         clearInterval(interval);

//         setInterval(function () {
//             var originalSearchResuslts = document.querySelector('#am_search_container');
//             var newSearchResuslts = document.querySelector('#am_search_container-2');

//             if (originalSearchResuslts) {
//                 newSearchResuslts.remove();
//             }
//         }, 1000);
//     }
// }, 250);

// var interval = window.setInterval(function () {
//     var productList = document.querySelectorAll('.product');
//     var productListScripts = document.querySelectorAll('.product script');

//     if (productList.length && productList.length > 0 && productList.length === productListScripts.length) {
//         productList.forEach(function (product) {
//             if (!product.querySelector('.btn-primary')) {
//                 product.classList.add('product-with-button');
//                 var regexFiveDigits = /\b\d{5}\b/g;
//                 var regexFourDigits = /\b\d{4}\b/g;

//                 var str = product.querySelector('script').textContent;
//                 var m;

//                 if ((m = regexFiveDigits.exec(str)) !== null) {
//                     if (m.index === regexFiveDigits.lastIndex) {
//                         regexFiveDigits.lastIndex++;
//                     }

//                     var firstFunction =
//                         "'https://www.patogupirkti.lt/checkout/cart/add/uenc/aHR0cHM6Ly93d3cucGF0b2d1cGlya3RpLmx0L2RhbHlraW5lLWxpdGVyYXR1cmEvcHJvdGFzLWt1bmFzLWlyLWR2YXNpYT9vcmRlcj10b3AmYW1wO2Rpcj1kZXNj/product/" +
//                         m[0] +
//                         "/form_key/GDJvkOYNCn1K2Ore/'";
//                     var secondFunction = 'product_tracking_data_' + m[0];

//                     var cta = document.createElement('div');
//                     cta.setAttribute('class', 'btn-wrapper');
//                     cta.innerHTML =
//                         '<a class="btn btn-primary line-height-40 mt10" href="javascript:setLocation(' +
//                         firstFunction +
//                         ');" onclick="trackProductAddCart(' +
//                         secondFunction +
//                         ')">Į krepšelį</a>';

//                     product.append(cta);
//                 } else if ((m = regexFourDigits.exec(str)) !== null) {
//                     if (m.index === regexFourDigits.lastIndex) {
//                         regexFourDigits.lastIndex++;
//                     }

//                     var firstFunction =
//                         "'https://www.patogupirkti.lt/checkout/cart/add/uenc/aHR0cHM6Ly93d3cucGF0b2d1cGlya3RpLmx0L2RhbHlraW5lLWxpdGVyYXR1cmEvcHJvdGFzLWt1bmFzLWlyLWR2YXNpYT9vcmRlcj10b3AmYW1wO2Rpcj1kZXNj/product/" +
//                         m[0] +
//                         "/form_key/GDJvkOYNCn1K2Ore/'";
//                     var secondFunction = 'product_tracking_data_' + m[0];

//                     var cta = document.createElement('div');
//                     cta.setAttribute('class', 'btn-wrapper');
//                     cta.innerHTML =
//                         '<a class="btn btn-primary line-height-40 mt10" href="javascript:setLocation(' +
//                         firstFunction +
//                         ');" onclick="trackProductAddCart(' +
//                         secondFunction +
//                         ')">Į krepšelį</a>';

//                     product.append(cta);
//                 }
//             }
//         });

//         clearInterval(interval);
//     }
// }, 250);

// var hjinterval = window.setInterval(() => {
//     if (!!hj) {
//         hj('trigger', 'PatoguPirktiltI2H7TDM');
//         clearInterval(hjinterval);
//     }
// }, 1000);
