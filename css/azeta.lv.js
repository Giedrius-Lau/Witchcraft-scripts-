// function insertAfter(el, referenceNode) {
//     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
// }

// var buyerInfo = '1. BUYER INFORMATION';
// var address = '2. ADDRESS';

// var container = document.querySelector('.information-step-address-form-container');

// var accordionButton2 = document.createElement('div');
// accordionButton2.setAttribute('class', 'accordion accordion-address');
// accordionButton2.textContent = address;
// container.prepend(accordionButton2);

// var accordionButton1 = document.createElement('div');
// accordionButton1.setAttribute('class', 'accordion accordion-name');
// accordionButton1.textContent = buyerInfo;
// container.prepend(accordionButton1);

// var vardas = document.querySelector('div.information-step-address-form-container.visible > div:nth-child(3) > div:nth-child(1) > div');
// var pavarde = document.querySelector('div.information-step-address-form-container.visible > div:nth-child(3) > div:nth-child(2) > div');
// var telefonas = document.querySelector(
//     'div.information-step-address-form-container.visible > div.customer-address-container > div:nth-child(1) > div:nth-child(1) > div'
// );
// var pastas = document.querySelector('div.information-step-address-form-container.visible > div.row.address > div > div');
// var miestas = document.querySelector(
//     'div.information-step-address-form-container.visible > div.customer-address-container > div:nth-child(1) > div:nth-child(2) > div'
// );
// var gatve = document.querySelector(
//     'div.information-step-address-form-container.visible > div.customer-address-container > div:nth-child(2) > div:nth-child(1) > div'
// );
// var namoNumeris = document.querySelector(
//     'div.information-step-address-form-container.visible > div.customer-address-container > div:nth-child(2) > div:nth-child(2) > div'
// );
// var butoNumeris = document.querySelector(
//     'div.information-step-address-form-container.visible > div.customer-address-container > div:nth-child(2) > div:nth-child(3) > div'
// );
// var pastoKodas = document.querySelector(
//     'div.information-step-address-form-container.visible > div.customer-address-container > div:nth-child(2) > div:nth-child(4) > div'
// );

// var accordionPannel2 = document.createElement('div');
// accordionPannel2.setAttribute('class', 'account-inner account-inner-address');
// insertAfter(accordionPannel2, document.querySelector('.accordion-address'));

// var accordionPannel1 = document.createElement('div');
// accordionPannel1.setAttribute('class', 'account-inner account-inner-name');
// insertAfter(accordionPannel1, document.querySelector('.accordion-name'));

// accordionPannel1.append(vardas);
// accordionPannel1.append(pavarde);
// accordionPannel1.append(telefonas);
// accordionPannel1.append(pastas);

// accordionPannel2.append(miestas);
// accordionPannel2.append(gatve);
// accordionPannel2.append(namoNumeris);
// accordionPannel2.append(butoNumeris);
// accordionPannel2.append(pastoKodas);

// var accordion = document.getElementsByClassName('accordion');
// document.querySelectorAll('.accordion')[0].classList.add('active');
// var i;

// for (i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener('click', function () {
//         var accordion1 = document.querySelectorAll('.accordion')[0];
//         var accordion2 = document.querySelectorAll('.accordion')[1];
//         var block1 = document.querySelectorAll('.account-inner.shown')[0];
//         var block2 = document.querySelectorAll('.account-inner.shown')[1];
//         var panel = this.nextElementSibling;

//         if (panel.classList.contains('shown')) {
//             panel.classList.remove('shown');
//         } else {
//             if (block1) {
//                 block1.classList.remove('shown');
//             } else if (block2) {
//                 block2.classList.remove('shown');
//             }

//             panel.classList.add('shown');
//         }

//         if (this.classList.contains('active')) {
//             this.classList.remove('active');
//         } else {
//             accordion1.classList.remove('active');
//             accordion2.classList.remove('active');
//             this.classList.add('active');
//         }
//     });
// }

// // Open accordion if error

// setTimeout(function () {
//     if ($('.account-inner-name').find('.error-message:not(.hidden)').length > 0) {
//         $('.accordion-name').addClass('active');
//         $('.accordion-name').parent().find('.account-inner-name').addClass('shown');
//     }

//     if (document.querySelector('.accordion-address').nextSibling.querySelectorAll('.error-message:not(.hidden)').length > 0) {
//         $('.accordion-address').addClass('active');
//         $('.accordion.accordion-address.active.required-accordion').removeClass('required-accordion');
//         $('.accordion-address').parent().find('.account-inner-address').addClass('shown');
//     }
// }, 300);

// //Validation

// var email = document.getElementById('ev_checkout_information_customer_email'),
//     phone = document.getElementById('ev_checkout_information_billingAddress_phoneNumber'),
//     firstName = document.getElementById('ev_checkout_information_billingAddress_firstName'),
//     surname = document.getElementById('ev_checkout_information_billingAddress_lastName');

// var city = document.getElementById('ev_checkout_information_billingAddress_city'),
//     postIndex = document.getElementById('ev_checkout_information_billingAddress_postcode'),
//     street = document.getElementById('ev_checkout_information_billingAddress_street'),
//     houseNumber = document.getElementById('ev_checkout_information_billingAddress_house');

// function required(inputtx) {
//     if (inputtx.value.length == 0) {
//         return false;
//     }
//     return true;
// }

// $('.information-step-address-form-container.visible > div.accordion.accordion-address').addClass('required-accordion');
// $('body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div:nth-child(12) > div > button').addClass(
//     'disabled-button'
// );

// $('input').on('input', function () {
//     checkIfNotEmpty();
//     checkIfCanProceed();
// });

// var checkIfNotEmpty = function () {
//     if (required(email) && required(phone) && required(firstName) && required(surname)) {
//         $('.information-step-address-form-container.visible > div.accordion.accordion-address').removeClass('required-accordion');
//         $('.information-step-address-form-container.visible > div.accordion.accordion-address').addClass('active');
//         $('.information-step-address-form-container.visible > div.account-inner-address').addClass('shown');
//     }
// };

// var checkIfCanProceed = function () {
//     if (
//         required(email) &&
//         required(phone) &&
//         required(firstName) &&
//         required(surname) &&
//         required(city) &&
//         required(postIndex) &&
//         required(street) &&
//         required(houseNumber)
//     ) {
//         setTimeout(function () {
//             $(
//                 'body > div.container.main-content > div > form > div > div.col-md-5-3ths.col-sm-5-3ths.cart-form > div:nth-child(12) > div > button'
//             ).removeClass('disabled-button');
//             $('.information-step-address-form-container.visible > div.accordion.accordion-address').removeClass('required-accordion');
//         }, 300);
//     }
// };
// checkIfCanProceed();
