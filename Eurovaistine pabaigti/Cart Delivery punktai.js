var found;
function changeText(element, searchText, changedText) {
    var elementArray = element;
    for (var i = 0; i < elementArray.length; i++) {
        if (elementArray[i].childNodes[2].textContent.trim() == searchText) {
            found = elementArray[i].childNodes[2];

            found.nodeValue = changedText;
            break;
        }
    }
}

function findElementAndAddElement(element, searchText, addElement) {
    var elementArray = element;
    for (var i = 0; i < elementArray.length; i++) {
        if (elementArray[i].textContent.trim() == searchText) {
            found = elementArray[i];
            found.prepend(addElement);
            break;
        }
    }
}

var htmldata = '<div class="radio-alert__first"><p>KITĄ DIENĄ</p></div><div class="radio-alert__second"><p>TIK VILNIUJE</p></div>';
var nextDayVilnius = document.createElement('div');
nextDayVilnius.setAttribute('class', 'radio-alert');
nextDayVilnius.innerHTML = htmldata;

var htmldata =
    '<div class="radio-alert__first"><p>KITĄ DIENĄ</p></div><div class="radio-alert__second"><p>KAUNAS</p></div><div class="radio-alert__second"><p>KLAIPĖDA</p></div>';
var nextDayRadioAlertKaunasKlaipeda = document.createElement('div');
nextDayRadioAlertKaunasKlaipeda.setAttribute('class', 'radio-alert');
nextDayRadioAlertKaunasKlaipeda.innerHTML = htmldata;

var htmldata =
    '<div class="radio-alert__first"><p>TĄ PAČIĄ DIENĄ</p></div><div class="radio-alert__second"><p>KAUNAS</p></div><div class="radio-alert__second"><p>KLAIPĖDA</p></div>';
var todayKaunasKlaipeda = document.createElement('div');
todayKaunasKlaipeda.setAttribute('class', 'radio-alert');
todayKaunasKlaipeda.innerHTML = htmldata;

var htmldata = '<div class="radio-alert__first"><p>TĄ PAČIĄ DIENĄ</p></div><div class="radio-alert__second"><p>TIK VILNIUJE</p></div>';
var thisDayVilnius = document.createElement('div');
thisDayVilnius.setAttribute('class', 'radio-alert');
thisDayVilnius.innerHTML = htmldata;

var thisDayVilnius2 = thisDayVilnius.cloneNode(true);

document.querySelector(".cart-delivery .radio input[value='sameday']").parentNode.parentNode.appendChild(thisDayVilnius); // Same day Vilnius
document.querySelector(".cart-delivery .radio input[value='nextday_ziti']").parentNode.parentNode.appendChild(nextDayVilnius); // Kita diena  Vilniuje
document.querySelector(".cart-delivery .radio input[value='nextday_ziti_kns_klp']").parentNode.parentNode.appendChild(nextDayRadioAlertKaunasKlaipeda);
document.querySelector(".cart-delivery .radio input[value='sameday_ziti_kns_klp']").parentNode.parentNode.appendChild(todayKaunasKlaipeda);
if (document.querySelectorAll(".cart-delivery .radio input[value='pickup_omniva_sameday']").length) {
    document.querySelector(".cart-delivery .radio input[value='pickup_omniva_sameday']").parentNode.parentNode.appendChild(thisDayVilnius2);
}

var imgPLus = document.createElement('div');
imgPLus.setAttribute('class', 'radio-image');
imgPLus.innerHTML = "<img src='https://svgshare.com/i/PGu.svg' title='' />";

var imgHouse = document.createElement('div');
imgHouse.setAttribute('class', 'radio-image');
imgHouse.innerHTML = "<img src='https://svgshare.com/i/PGv.svg' title='' />";

var imgHouse2 = document.createElement('div');
imgHouse2.setAttribute('class', 'radio-image');
imgHouse2.innerHTML = "<img src='https://svgshare.com/i/PGv.svg' title='' />";

var imgHouse3 = document.createElement('div');
imgHouse3.setAttribute('class', 'radio-image');
imgHouse3.innerHTML = "<img src='https://svgshare.com/i/PGv.svg' title='' />";

var imgHouse4 = document.createElement('div');
imgHouse4.setAttribute('class', 'radio-image');
imgHouse4.innerHTML = "<img src='https://svgshare.com/i/PGv.svg' title='' />";

var imgHouse5 = document.createElement('div');
imgHouse5.setAttribute('class', 'radio-image');
imgHouse5.innerHTML = "<img src='https://svgshare.com/i/PGv.svg' title='' />";

var imgLocation = document.createElement('div');
imgLocation.setAttribute('class', 'radio-image');
imgLocation.innerHTML = "<img src='https://svgshare.com/i/PGt.svg' title='' />";

var imgLocationSecond = document.createElement('div');
imgLocationSecond.setAttribute('class', 'radio-image');
imgLocationSecond.innerHTML = "<img src='https://svgshare.com/i/PGt.svg' title='' />";

findElementAndAddElement(document.querySelectorAll('.radio label'), 'Atsiėmimas vaistinėje', imgPLus);
findElementAndAddElement(document.querySelectorAll('.radio label'), 'Pristatymas į namus visoje Lietuvoje su LP Express', imgHouse);
findElementAndAddElement(document.querySelectorAll('.radio label'), 'Pristatymas į OMNIVA paštomatą', imgLocation);
findElementAndAddElement(document.querySelectorAll('.radio label'), 'Pristatymas į namus kitą dieną Vilniuje su ZITICITY', imgHouse2);
findElementAndAddElement(document.querySelectorAll('.radio label'), 'Pristatymas į namus TĄ PAČIĄ DIENĄ Vilniuje su ZITICITY', imgHouse3);
findElementAndAddElement(document.querySelectorAll('.radio label'), 'Pristatymas į Omniva paštomatą TĄ PAČIĄ DIENĄ Vilniuje', imgLocationSecond);
findElementAndAddElement(document.querySelectorAll('.radio label'), 'Pristatymas į namus TĄ PAČIĄ DIENĄ Kaune ir Klaipėdoje su ZITICITY', imgHouse4);
findElementAndAddElement(document.querySelectorAll('.radio label'), 'Pristatymas į namus kitą darbo dieną Kaune ir Klaipėdoje su ZITICITY', imgHouse5);

changeText(document.querySelectorAll('.radio label'), 'Pristatymas į namus visoje Lietuvoje su LP Express', 'Į namus visoje Lietuvoje');
changeText(document.querySelectorAll('.radio label'), 'Pristatymas į OMNIVA paštomatą', 'Į OMNIVA paštomatą');
changeText(document.querySelectorAll('.radio label'), 'Pristatymas į namus TĄ PAČIĄ DIENĄ Vilniuje su ZITICITY', 'Į namus su ZITICITY');
changeText(document.querySelectorAll('.radio label'), 'Pristatymas į namus kitą dieną Vilniuje su ZITICITY', 'Į namus su ZITICITY');
changeText(document.querySelectorAll('.radio label'), 'Pristatymas į Omniva paštomatą TĄ PAČIĄ DIENĄ Vilniuje', 'Į OMNIVA paštomatą');
changeText(document.querySelectorAll('.radio label'), 'Pristatymas į namus TĄ PAČIĄ DIENĄ Kaune ir Klaipėdoje su ZITICITY', 'Į namus su ZITICITY');
changeText(document.querySelectorAll('.radio label'), 'Pristatymas į namus kitą darbo dieną Kaune ir Klaipėdoje su ZITICITY', 'Į namus su ZITICITY');

var totalPrice = parseFloat(document.querySelector('.cart-total .col-md-3').textContent.replace(/[^\d\.]*/g, '')) / 100;

var priceUntilFreeShipping = function (price) {
    return (price - totalPrice).toFixed(2);
};

var htmldata =
    parseInt(priceUntilFreeShipping(45)) > 1
        ? '<div class="new-cart-delivery-price">Iki nemokamo pristatymo liko ' + priceUntilFreeShipping(45) + ' €</div>'
        : '<div class="new-cart-delivery-price">Šis pristatymo būdas Jums priklauso NEMOKAMAI</div>';
var freeDelivery45 = document.createElement('div');
freeDelivery45.innerHTML = htmldata;
document.querySelector(".cart-delivery .radio input[value='sameday']").parentNode.parentNode.appendChild(freeDelivery45);

var htmldata =
    parseInt(priceUntilFreeShipping(35)) > 1
        ? '<div class="new-cart-delivery-price">Iki nemokamo pristatymo liko ' + priceUntilFreeShipping(35) + ' €</div>'
        : '<div class="new-cart-delivery-price">Šis pristatymo būdas Jums priklauso NEMOKAMAI</div>';
var freeDelivery35 = document.createElement('div');
freeDelivery35.innerHTML = htmldata;
document.querySelector(".cart-delivery .radio input[value='nextday_ziti_kns_klp']").parentNode.parentNode.appendChild(freeDelivery35);

// .cart .cart-delivery .radio{padding-bottom:40px;padding-top:40px}.cart .cart-delivery .radio label{float:left;height:100%;display:flex;align-items:center;width:190px;color:#41413e;font-size:14px;margin:0 20px;position:relative;min-height:60px}.radio-alert{position:absolute;top:-25px;left:60px;color:#fff;font-size:9px;font-weight:600;display:flex}.radio-image{width:50px;min-width:50px;margin-right:15px;text-align:center}.radio-image img{width:100%;max-height:30px}.plus-icon{max-width:38px}.radio-alert div{transform:skew(-40deg);background:#ff3a3a;margin-right:10px;padding:2px 10px;text-align:center}@media (max-width:400px){.radio-alert div{padding:2px 5px}}.disabled .radio-alert div{background:#333}.radio-alert div p{transform:rotate(120deg);margin:0;-webkit-transform:skewX(40deg) skewY(0);transform:skewX(40deg) skewY(0)}.cart .cart-delivery .radio label input{position:absolute;left:0;top:7px}.delivery-name .new-cart-delivery-price,.dynamic-label .new-cart-delivery-price{padding-left:230px;display:inline-block;margin-top:5px;font-size:11px;min-width:100%}.cart .cart-delivery .radio .subtext{display:table-row;margin-left:0;font-size:11px;font-style:italic;font-style:unset;color:#9c9c9c}.row.dynamic-label-flex{display:block}.dynamic-label-flex .selects-block{padding-left:220px}
// @media (max-width:1200px) and (min-width:992px){.cart .cart-delivery .radio .dynamic-label{width:90%}.cart .cart-delivery .radio .right-coll{width:10%}}@media (max-width:767px){.cart .cart-delivery .radio label{width:100%;padding:0 90px 0 10px;margin-right:0;font-size:13px}.cart .cart-delivery .radio label input{left:10px;top:10px}.radio-image{max-width:30px;min-width:30px;margin-right:10px}.radio-image img{max-height:20px}.plus-icon{max-width:25px}.radio-alert{display:block;top:13px;right:70px;left:auto}.radio-alert div{margin:0 0 5px 0;font-size:8px;font-weight:400}.radio-alert .radio-alert__second{margin-right:8px;left:-2px;position:relative;display:inline-block}.cart .cart-delivery .radio .subtext{display:block;padding-left:30px}.delivery-name .new-cart-delivery-price,.dynamic-label .new-cart-delivery-price{padding-left:30px;max-width:80%;min-width:unset}.delivery-price{position:absolute;top:48px;right:-10px}.cart .cart-delivery .radio .delivery-price div{font-size:12px}.col-xs-9{width:98%!important;padding-right:15px!important}}@media (min-width:600px) and (max-width:800px){.radio-alert{display:flex}.radio-alert div{margin-right:10px;margin-top:6px}}@media (max-width:400px){.cart .cart-delivery .radio label{padding:0 200px 0 10px;font-size:11px}}@media (min-width:400px) and (max-width:500px){.cart .cart-delivery .radio label{padding:0 260px 0 10px}}@media (min-width:768px){.cart .cart-delivery .radio{padding-bottom:20px}}.radio .hidden{display:block!important}
