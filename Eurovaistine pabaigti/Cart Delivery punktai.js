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
var nextDayRadioAlert = document.createElement('div');
nextDayRadioAlert.setAttribute('class', 'radio-alert');
nextDayRadioAlert.innerHTML = htmldata;

var htmldata = '<div class="radio-alert__first"><p>TĄ PAČIĄ DIENĄ</p></div><div class="radio-alert__second"><p>TIK VILNIUJE</p></div>';
var radioAlert = document.createElement('div');
radioAlert.setAttribute('class', 'radio-alert');
radioAlert.innerHTML = htmldata;

var radioAlert2 = radioAlert.cloneNode(true);

document.querySelector('#cart_shipments_0_method_3').parentNode.parentNode.appendChild(radioAlert2);
document.querySelector('#cart_shipments_0_method_4').parentNode.parentNode.appendChild(radioAlert);
document.querySelector('#cart_shipments_0_method_5').parentNode.parentNode.appendChild(nextDayRadioAlert);

var imgPLus = document.createElement('div');
imgPLus.setAttribute('class', 'radio-image');
imgPLus.innerHTML = '<img src="https://i.ibb.co/d7xZ52c/plus.png" class="plus-icon" alt="plus" border="0"></img>';

var imgHouse = document.createElement('div');
imgHouse.setAttribute('class', 'radio-image');
imgHouse.innerHTML = '<img src="https://i.ibb.co/kMG3hkg/home-house-icon-1320087051499461146.png" alt="home-house-icon-1320087051499461146" border="0">';

var imgHouseSecond = document.createElement('div');
imgHouseSecond.setAttribute('class', 'radio-image');
imgHouseSecond.innerHTML = '<img src="https://i.ibb.co/kMG3hkg/home-house-icon-1320087051499461146.png" alt="home-house-icon-1320087051499461146" border="0">';

var imgHouseThird = document.createElement('div');
imgHouseThird.setAttribute('class', 'radio-image');
imgHouseThird.innerHTML = '<img src="https://i.ibb.co/kMG3hkg/home-house-icon-1320087051499461146.png" alt="home-house-icon-1320087051499461146" border="0">';

var imgLocation = document.createElement('div');
imgLocation.setAttribute('class', 'radio-image');
imgLocation.innerHTML = '<img src="https://i.ibb.co/vxvKPS2/location-131965017472890605.png" alt="location-131965017472890605" border="0">';

var imgLocationSecond = document.createElement('div');
imgLocationSecond.setAttribute('class', 'radio-image');
imgLocationSecond.innerHTML = '<img src="https://i.ibb.co/vxvKPS2/location-131965017472890605.png" alt="location-131965017472890605" border="0">';

findElementAndAddElement(document.getElementsByTagName('label'), 'Atsiėmimas vaistinėje', imgPLus);
findElementAndAddElement(document.getElementsByTagName('label'), 'Pristatymas į namus visoje Lietuvoje su LP Express', imgHouse);
findElementAndAddElement(document.getElementsByTagName('label'), 'Pristatymas į OMNIVA paštomatą', imgLocation);
findElementAndAddElement(document.getElementsByTagName('label'), 'Pristatymas į namus kitą dieną Vilniuje su ZITICITY', imgHouseSecond);
findElementAndAddElement(document.getElementsByTagName('label'), 'Pristatymas į namus TĄ PAČIĄ DIENĄ Vilniuje su ZITICITY', imgHouseThird);
findElementAndAddElement(document.getElementsByTagName('label'), 'Pristatymas į Omniva paštomatą TĄ PAČIĄ DIENĄ Vilniuje', imgLocationSecond);

changeText(document.getElementsByTagName('label'), 'Pristatymas į namus visoje Lietuvoje su LP Express', 'Į namus visoje Lietuvoje');
changeText(document.getElementsByTagName('label'), 'Pristatymas į OMNIVA paštomatą', 'Į OMNIVA paštomatą');
changeText(document.getElementsByTagName('label'), 'Pristatymas į namus TĄ PAČIĄ DIENĄ Vilniuje su ZITICITY', 'Į namus su ZITICITY');
changeText(document.getElementsByTagName('label'), 'Pristatymas į namus kitą dieną Vilniuje su ZITICITY', 'Į namus su ZITICITY');
changeText(document.getElementsByTagName('label'), 'Pristatymas į Omniva paštomatą TĄ PAČIĄ DIENĄ Vilniuje', 'Į OMNIVA paštomatą');

// .cart .cart-delivery .radio {
//     padding-bottom: 40px;
//     padding-top: 40px;
//   }

//   .cart .cart-delivery .radio label {
//     float: left;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     width: 190px;
//     color: #41413e;
//     font-size: 17px;
//     margin: 0 20px;
//     position: relative;
//     min-height: 60px;
//   }

//   .radio-alert {
//     position: absolute;
//     top: -25px;
//     left: 60px;
//     color: #ffffff;
//     font-size: 9px;
//     font-weight: 600;
//     display: flex;
//   }

//   .radio-image {
//     width: 50px;
//     min-width: 50px;
//     margin-right: 15px;
//     text-align: center;
//   }

//   .radio-image img {
//     width: 100%;
//   }

//   .plus-icon {
//     max-width: 38px;
//   }

//   .radio-alert div {
//     transform: skew(-50deg);
//     background: #ec1c23;
//     margin-right: 10px;
//     padding: 2px 10px;
//   }

//   .disabled .radio-alert div {
//     background: #333333;
//   }

//   .radio-alert div p {
//     transform: rotate(120deg);
//     margin: 0;
//     -webkit-transform: skewX(50deg) skewY(0deg);
//     transform: skewX(50deg) skewY(0deg);
//   }

//   .cart .cart-delivery .radio label input {
//     position: absolute;
//     left: 0;
//     top: 7px;
//     opacity: 0.5;
//   }

//   .dynamic-label .new-cart-delivery-price,
//   .delivery-name .new-cart-delivery-price {
//     padding-left: 0;
//     display: inline-block;
//     margin-top: 10px;
//   }

//   .cart .cart-delivery .radio .subtext {
//     display: table-row;
//     margin-left: 0;
//     font-size: 11px;
//     font-style: italic;
//     font-style: unset;
//     color: #9c9c9c;
//   }

//   .row.dynamic-label-flex {
//     display: block;
//   }

//   .dynamic-label-flex .selects-block {
//     padding-left: 220px;
//   }

//   @media (max-width: 767px) {
//     .cart .cart-delivery .radio label {
//       width: 100%;
//       padding: 0 100px 0 10px;
//       margin-right: 0;
//     }

//     .cart .cart-delivery .radio label input {
//       left: 10px;
//       top: 10px;
//     }

//     .radio-image {
//       max-width: 30px;
//       min-width: 30px;
//       margin-right: 10px;
//     }

//     .plus-icon {
//       max-width: 25px;// console.log("prasideda");
//       // setTimeout(() => {
//       // var found;
//       // function changeText(element, searchText, changedText) {
//       // var elementArray = element;
//       // for (var i = 0; i < elementArray.length; i++) {
//       //     if (elementArray[i].childNodes[2].textContent.trim() == searchText) {
//       //     found = elementArray[i].childNodes[2];

//       //     found.nodeValue = changedText;
//       //     break;
//       //     }
//       // }
//       // }

//       // function findElementAndAddElement(element, searchText, addElement) {
//       // var elementArray = element;
//       // for (var i = 0; i < elementArray.length; i++) {
//       //     if (elementArray[i].textContent.trim() == searchText) {
//       //     found = elementArray[i];
//       //     found.prepend(addElement)
//       //     break;
//       //     }
//       // }
//       // }

//       // var htmldata =
//       // '<div class="radio-alert__first"><p>KITĄ DIENĄ</p></div><div class="radio-alert__second"><p>TIK VILNIUJE</p></div>';
//       // var nextDayRadioAlert = document.createElement("div");
//       // nextDayRadioAlert.setAttribute("class", "radio-alert");
//       // nextDayRadioAlert.innerHTML = htmldata;

//       // var htmldata =
//       // '<div class="radio-alert__first"><p>TĄ PAČIĄ DIENĄ</p></div><div class="radio-alert__second"><p>TIK VILNIUJE</p></div>';
//       // var radioAlert = document.createElement("div");
//       // radioAlert.setAttribute("class", "radio-alert");
//       // radioAlert.innerHTML = htmldata;

//       // var radioAlert2 = radioAlert.cloneNode(true);

//       // document.querySelector("#cart_shipments_0_method_3").parentNode.parentNode.appendChild(radioAlert2);
//       // document.querySelector("#cart_shipments_0_method_4").parentNode.parentNode.appendChild(radioAlert);
//       // document.querySelector("#cart_shipments_0_method_5").parentNode.parentNode.appendChild(nextDayRadioAlert);

//       // var imgPLus = document.createElement("div");
//       // imgPLus.setAttribute("class", "radio-image");
//       // imgPLus.innerHTML = "<img src='https://svgshare.com/i/PGu.svg' title='' />";

//       // var imgHouse = document.createElement("div");
//       // imgHouse.setAttribute("class", "radio-image");
//       // imgHouse.innerHTML = "<img src='https://svgshare.com/i/PGv.svg' title='' />";

//       // var imgHouseSecond = document.createElement("div");
//       // imgHouseSecond.setAttribute("class", "radio-image");
//       // imgHouseSecond.innerHTML = "<img src='https://svgshare.com/i/PGv.svg' title='' />";

//       // var imgHouseThird = document.createElement("div");
//       // imgHouseThird.setAttribute("class", "radio-image");
//       // imgHouseThird.innerHTML = "<img src='https://svgshare.com/i/PGv.svg' title='' />";

//       // var imgLocation = document.createElement("div");
//       // imgLocation.setAttribute("class", "radio-image");
//       // imgLocation.innerHTML = "<img src='https://svgshare.com/i/PGt.svg' title='' />";

//       // var imgLocationSecond = document.createElement("div");
//       // imgLocationSecond.setAttribute("class", "radio-image");
//       // imgLocationSecond.innerHTML = "<img src='https://svgshare.com/i/PGt.svg' title='' />";

//       // findElementAndAddElement(document.getElementsByTagName("label"), "Atsiėmimas vaistinėje", imgPLus)
//       // findElementAndAddElement(document.getElementsByTagName("label"), "Pristatymas į namus visoje Lietuvoje su LP Express", imgHouse)
//       // findElementAndAddElement(document.getElementsByTagName("label"), "Pristatymas į OMNIVA paštomatą", imgLocation)
//       // findElementAndAddElement(document.getElementsByTagName("label"), "Pristatymas į namus kitą dieną Vilniuje su ZITICITY", imgHouseSecond)
//       // findElementAndAddElement(document.getElementsByTagName("label"), "Pristatymas į namus TĄ PAČIĄ DIENĄ Vilniuje su ZITICITY", imgHouseThird)
//       // findElementAndAddElement(document.getElementsByTagName("label"), "Pristatymas į Omniva paštomatą TĄ PAČIĄ DIENĄ Vilniuje", imgLocationSecond)

//       // changeText(document.getElementsByTagName("label"), "Pristatymas į namus visoje Lietuvoje su LP Express", "Į namus visoje Lietuvoje");
//       // changeText(document.getElementsByTagName("label"), "Pristatymas į OMNIVA paštomatą", "Į OMNIVA paštomatą");
//       // changeText(document.getElementsByTagName("label"), "Pristatymas į namus TĄ PAČIĄ DIENĄ Vilniuje su ZITICITY", "Į namus su ZITICITY");
//       // changeText(document.getElementsByTagName("label"), "Pristatymas į namus kitą dieną Vilniuje su ZITICITY", "Į namus su ZITICITY");
//       // changeText(document.getElementsByTagName("label"), "Pristatymas į Omniva paštomatą TĄ PAČIĄ DIENĄ Vilniuje", "Į OMNIVA paštomatą");
//       // }, 2000);

//       /* .cart .cart-delivery .radio {
//         padding-bottom: 40px;
//         padding-top: 40px;
//       }

//       .cart .cart-delivery .radio label {
//         float: left;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         width: 190px;
//         color: #41413e;
//         font-size: 14px;
//         margin: 0 20px;
//         position: relative;
//         min-height: 60px;
//       }

//       .radio-alert {
//         position: absolute;
//         top: -25px;
//         left: 60px;
//         color: #ffffff;
//         font-size: 9px;
//         font-weight: 600;
//         display: flex;
//       }

//       .radio-image {
//         width: 50px;
//         min-width: 50px;
//         margin-right: 15px;
//         text-align: center;
//       }

//       .radio-image img {
//         width: 100%;
//         max-height: 30px;
//       }

//       .plus-icon {
//         max-width: 38px;
//       }

//       .radio-alert div {
//         transform: skew(-40deg);
//         background: #ff3a3a;
//         margin-right: 10px;
//         padding: 2px 10px;
//       }

//       .disabled .radio-alert div {
//         background: #333333;
//       }

//       .radio-alert div p {
//         transform: rotate(120deg);
//         margin: 0;
//         -webkit-transform: skewX(40deg) skewY(0deg);
//         transform: skewX(40deg) skewY(0deg);
//       }

//       .cart .cart-delivery .radio label input {
//         position: absolute;
//         left: 0;
//         top: 7px;
//         opacity: 0.5;
//       }

//       .dynamic-label .new-cart-delivery-price,
//       .delivery-name .new-cart-delivery-price {
//         padding-left: 0;
//         display: inline-block;
//         margin-top: 10px;
//         font-size: 11px;
//       }

//       .cart .cart-delivery .radio .subtext {
//         display: table-row;
//         margin-left: 0;
//         font-size: 11px;
//         font-style: italic;
//         font-style: unset;
//         color: #9c9c9c;
//       }

//       .row.dynamic-label-flex {
//         display: block;
//       }

//       .dynamic-label-flex .selects-block {
//         padding-left: 220px;
//       }

//       @media (max-width: 767px) {
//         .cart .cart-delivery .radio label {
//           width: 100%;
//           padding: 0 90px 0 10px;
//           margin-right: 0;
//           font-size: 13px;
//         }

//         .cart .cart-delivery .radio label input {
//           left: 10px;
//           top: 10px;
//         }

//         .radio-image {
//           max-width: 30px;
//           min-width: 30px;
//           margin-right: 10px;
//         }

//         .radio-image img {
//           max-height: 25px;
//         }

//         .plus-icon {
//           max-width: 25px;
//         }

//         .radio-alert {
//           display: block;
//           top: 13px;
//           right: -10px;
//           left: auto;
//         }

//         .radio-alert div {
//           margin: 0 0 5px 0;
//           font-size: 8px;
//           font-weight: 400;
//         }

//         .radio-alert__second {
//           left: -2px;
//           position: relative;
//           display: inline-block;
//         }

//         .cart .cart-delivery .radio .subtext {
//           display: block;
//           padding-left: 30px;
//         }

//         .dynamic-label .new-cart-delivery-price,
//         .delivery-name .new-cart-delivery-price {
//           padding-left: 30px;
//         }
//       } */
//     }

//     .radio-alert {
//       display: block;
//       top: 13px;
//       right: -10px;
//       left: auto;
//     }

//     .radio-alert div {
//       margin: 0 0 10px 0;
//     }

//     .cart .cart-delivery .radio .subtext {
//       padding-left: 20px;
//     }

//     .dynamic-label .new-cart-delivery-price,
//     .delivery-name .new-cart-delivery-price {
//       padding-left: 20px;
//     }
//   }
// s
