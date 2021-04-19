// var interval = window.setInterval(function () {
//     var email = document.querySelector('#checkout_email');

//     if (email && !document.querySelector('.accordion')) {
//         var email = document.querySelector('#checkout_email').parentNode.parentNode;
//         var name = document.querySelector('#checkout_shipping_address_first_name').parentNode.parentNode;
//         var lastName = document.querySelector('#checkout_shipping_address_last_name').parentNode.parentNode;
//         var address = document.querySelector('#checkout_shipping_address_address1').parentNode.parentNode;
//         if (document.querySelector('#checkout_shipping_address_address2')) {
//             document.querySelector('#checkout_shipping_address_address2').parentNode.parentNode.remove();
//         }
//         var firstSectionContainer = document.querySelector(
//             'body > div.content > div > div > main > div.step > form > div.step__sections > div.section.section--contact-information'
//         );
//         var secondSectionContainer = document.querySelector(
//             'body > div.content > div > div > main > div.step > form > div.step__sections > div.section.section--shipping-address'
//         );
//         var firstFieldset = document.querySelector(
//             'body > div.content > div > div > main > div.step > form > div.step__sections > div.section.section--contact-information > div.section__content > div.fieldset'
//         );
//         firstFieldset.prepend(lastName);
//         firstFieldset.prepend(name);
//         firstFieldset.classList.add('shown');
//         var firstSection = document.querySelector(
//             'body > div.content > div > div > main > div.step > form > div.step__sections > div.section.section--contact-information > div.section__content'
//         );

//         firstSection.classList.add('shown');

//         var buyerInfo = 'Contact information';
//         var address = 'Shipping address';

//         var accordionButton = document.createElement('div');
//         accordionButton.setAttribute('class', 'accordion accordion-name');
//         accordionButton.textContent = '1. ' + buyerInfo;
//         firstSectionContainer.prepend(accordionButton);

//         var accordionButton = document.createElement('div');
//         accordionButton.setAttribute('class', 'accordion accordion-address');
//         accordionButton.textContent = '2. ' + address;
//         secondSectionContainer.prepend(accordionButton);

//         var accordion = document.getElementsByClassName('accordion');
//         document.querySelectorAll('.accordion')[0].classList.add('active');
//         var i;

//         for (i = 0; i < accordion.length; i++) {
//             accordion[i].addEventListener('click', function () {
//                 var accordion1 = document.querySelectorAll('.accordion')[0];
//                 var accordion2 = document.querySelectorAll('.accordion')[1];
//                 var panel = this.parentNode.children[2];

//                 if (panel.classList.contains('shown')) {
//                     panel.classList.remove('shown');
//                 } else {
//                     panel.classList.add('shown');
//                 }

//                 if (this.classList.contains('active')) {
//                     this.classList.remove('active');
//                 } else {
//                     accordion1.classList.remove('active');
//                     accordion2.classList.remove('active');
//                     this.classList.add('active');
//                 }
//             });
//         }

//         function required(inputtx) {
//             if (inputtx && inputtx.value.length == 0) {
//                 return false;
//             }
//             return true;
//         }

//         var emails = document.getElementById('checkout_email');
//         var names = document.querySelector('#checkout_shipping_address_first_name');
//         var lastNames = document.getElementById('checkout_shipping_address_last_name');

//         document.querySelectorAll('input').forEach(function (item) {
//             item.addEventListener('change', function () {
//                 checkIfNotEmpty();
//                 checkIfCanProceed();
//             });
//         });

//         var checkIfNotEmpty = function () {
//             if (required(emails) && required(names) && required(lastNames)) {
//                 document.querySelector('.accordion-address').classList.add('active');
//                 document
//                     .querySelector(
//                         'body > div.content > div > div > main > div.step > form > div.step__sections > div.section.section--shipping-address > div.section__content'
//                     )
//                     .classList.add('shown');
//             }
//         };

//         var form = document.querySelector('body > div.content > div > div > main > div.step > form');
//         var login = document.querySelector(
//             'body > div.content > div > div > main > div.step > form > div.step__sections > div.section.section--contact-information > div.section__header'
//         );
//         form.insertBefore(login, form.firstChild);
//         clearInterval(interval);
//     }
// }, 300);
