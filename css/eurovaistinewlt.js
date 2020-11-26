// Helper functions

var found;
function changeText(element, searchText, changedText) {
    var elementArray = element;
    for (var i = 0; i < elementArray.length; i++) {
        if (elementArray[i].childNodes[1].textContent !== undefined && elementArray[i].childNodes[1].textContent.trim() == searchText) {
            found = elementArray[i].childNodes[1];

            found.nodeValue = changedText;
            break;
        }
    }
}

// Change text

changeText(document.getElementsByTagName('label'), 'Pristatymas į namus visoje Lietuvoje su LP Express', 'LP Express');
changeText(document.getElementsByTagName('label'), 'Pristatymas į OMNIVA paštomatą', 'OMNIVA');
changeText(document.getElementsByTagName('label'), 'Pristatymas į Omniva paštomatą TĄ PAČIĄ DIENĄ Vilniuje', 'OMNIVA');
changeText(document.getElementsByTagName('label'), 'Pristatymas į namus TĄ PAČIĄ DIENĄ Vilniuje su ZITICITY', 'ZITICITY');
changeText(document.getElementsByTagName('label'), 'Pristatymas į namus kitą dieną Vilniuje su ZITICITY', 'ZITICITY');
changeText(document.getElementsByTagName('label'), 'Pristatymas į namus kitą darbo dieną Kaune ir Klaipėdoje su ZITICITY', 'ZITICITY');
changeText(document.getElementsByTagName('label'), 'Pristatymas į namus TĄ PAČIĄ DIENĄ Kaune ir Klaipėdoje su ZITICITY', 'ZITICITY');
changeText(document.getElementsByTagName('label'), 'Atsiėmimas vaistinėje', 'Vaistinėje');

// Ojects with selectors

var omniva = {
    pickupOmniva: document.querySelector('input[value="pickup_omniva"]').parentNode.parentNode.parentNode.parentNode,
    pickupOmnivaSameDayVilnius: document.querySelector('input[value="pickup_omniva_sameday"]').parentNode.parentNode.parentNode.parentNode,
};

var namus = {
    lpExpressLithuania: document.querySelector('input[value="courier"]').parentNode.parentNode.parentNode.parentNode,
    zitiCitySameDayVilnius: document.querySelector('input[value="sameday"]').parentNode.parentNode.parentNode.parentNode,
    zitiCityNextDayVilnius: document.querySelector('input[value="nextday_ziti"]').parentNode.parentNode.parentNode.parentNode,
    zitiCityNextDayKaunasKlaipeda: document.querySelector('input[value="nextday_ziti_kns_klp"]').parentNode.parentNode.parentNode.parentNode,
    zitiCitySameDayKaunasKlaipeda: document.querySelector('input[value="sameday_ziti_kns_klp"]').parentNode.parentNode.parentNode.parentNode,
};

var vaistineje = {
    pharmacy: document.querySelector('input[value="at_pharmacy"]').parentNode.parentNode.parentNode.parentNode,
};

// Create new accordion containers

var deliveryContainer = $('.cart-delivery.radio-stripped');

var deliveryOmniva = document.createElement('div');
deliveryOmniva.setAttribute('class', 'delivery-block-accordion omniva-accordion');
deliveryOmniva.innerHTML =
    '<div class="accordion-header"><div class="accordion-left"><img src="https://semexit.s3-eu-west-1.amazonaws.com/eurovaistine/location.png" alt="location"><p>Į paštomatą</p></div><div class="accordion-right"><p>nuo 1,49€</p></div></div><div class="accordion-content"></div>';

var deliveryHome = document.createElement('div');
deliveryHome.setAttribute('class', 'delivery-block-accordion home-accordion');
deliveryHome.innerHTML =
    '<div class="accordion-header"><div class="accordion-left"><img src="https://semexit.s3-eu-west-1.amazonaws.com/eurovaistine/home.png" alt="home"><p>Į namus</p></div><div class="accordion-right"><p>nuo 2,90€</p></div></div><div class="accordion-content"></div>';

var deliveryPharmacy = document.createElement('div');
deliveryPharmacy.setAttribute('class', 'delivery-block-accordion pharmacy-accordion');
deliveryPharmacy.innerHTML =
    '<div class="accordion-header"><div class="accordion-left"><img src="https://semexit.s3-eu-west-1.amazonaws.com/eurovaistine/cross.png" alt="cross"><p>Atsiimti vaistinėje</p></div><div class="accordion-right"><p>0,49€</p></div></div><div class="accordion-content"></div>';

deliveryContainer.append(deliveryOmniva);
deliveryContainer.append(deliveryHome);
deliveryContainer.append(deliveryPharmacy);

// Append to accordions

var omnivaAccordion = $('.omniva-accordion .accordion-content');
var homeAccordion = $('.home-accordion .accordion-content');
var pharmacyAccordion = $('.pharmacy-accordion .accordion-content');

$(omniva.pickupOmniva).appendTo(omnivaAccordion);
$(omniva.pickupOmnivaSameDayVilnius).appendTo(omnivaAccordion);

$(namus.lpExpressLithuania).appendTo(homeAccordion);
$(namus.zitiCitySameDayVilnius).appendTo(homeAccordion);
$(namus.zitiCityNextDayVilnius).appendTo(homeAccordion);
$(namus.zitiCityNextDayKaunasKlaipeda).appendTo(homeAccordion);
$(namus.zitiCitySameDayKaunasKlaipeda).appendTo(homeAccordion);

$(vaistineje.pharmacy).appendTo(pharmacyAccordion);

document.querySelectorAll('.delivery-name .dynamic-label').forEach(function (item) {
    console.log(item.querySelector('.subtext'));
});

var dynamicLabel = document.querySelectorAll('.delivery-name, .dynamic-label');
for (var i = 0; i < dynamicLabel.length; i++) {
    dynamicLabel[i].classList.remove('col-md-4');
    dynamicLabel[i].classList.remove('col-sm-4');
    dynamicLabel[i].classList.remove('col-xs-9');
    dynamicLabel[i].classList.remove('col-md-10');
    dynamicLabel[i].classList.remove('col-sm-10');

    var label = dynamicLabel[i].querySelector('label');
    var subtext = dynamicLabel[i].querySelector('.subtext');

    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'text-container');
    var textLabels = document.createElement('div');
    textLabels.setAttribute('class', 'text-labels');

    if (dynamicLabel[i].parentNode.parentNode !== null) {
        var freeDelivery = dynamicLabel[i].parentNode.parentNode.querySelector('.free-delivery-disclaimer');
        var consultationWrapper = dynamicLabel[i].parentNode.parentNode.querySelector('.consultation-wrapper');
    }

    if (dynamicLabel[i].parentNode !== null) {
        var price = dynamicLabel[i].parentNode.querySelector('.delivery-price div');
    }

    if (consultationWrapper !== null) {
        consultationWrapper.remove();
    }

    if (freeDelivery !== null) {
        freeDelivery.classList.remove('col-md-12');
        freeDelivery.classList.remove('mt-2');
    }

    if (price !== null) {
        price.setAttribute('class', 'price-delivery');
    }

    if (label !== null) {
        label.append(newDiv);
        $(price).appendTo(label);
        dynamicLabel[i].parentNode.querySelector('.delivery-price').remove();
        dynamicLabel[i].querySelector('.text-container').append(textLabels);
        dynamicLabel[i].querySelector('.text-container').append(subtext);
        dynamicLabel[i].querySelector('.text-labels').append(freeDelivery);
    }
}

/////////////
/////////////
/////////////
/////////////
/////////////
/////////////
/////////////
/////////////
/////////////
/////////////
/////////////

// var accordion = document.getElementsByClassName('delivery-block-accordion');
// document.querySelectorAll('.accordion')[0].classList.add('active');
// var i;

// for (i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     var accordion1 = document.querySelectorAll('.accordion')[0];
//     var accordion2 = document.querySelectorAll('.accordion')[1];
//     var block1 = document.querySelectorAll('.account-inner.shown')[0];
//     var block2 = document.querySelectorAll('.account-inner.shown')[1];
//     var panel = this.nextElementSibling;

//     if (panel.classList.contains('shown')) {
//       panel.classList.remove('shown');
//     } else {
//       if (block1) {
//         block1.classList.remove('shown');
//       } else if (block2) {
//         block2.classList.remove('shown');
//       }

//       panel.classList.add('shown');
//     }

//     if (this.classList.contains('active')) {
//       this.classList.remove('active');
//     } else {
//       accordion1.classList.remove('active');
//       accordion2.classList.remove('active');
//       this.classList.add('active');
//     }
//   });
// }
