setTimeout(() => {
    var miestas = $('#checkout_address_paymentAddress div')[2];
    var pastoIndeksas = $('#checkout_address_paymentAddress div')[3];
    var gatve = $('#checkout_address_paymentAddress div')[4];
    var namoNumeris = $('#checkout_address_paymentAddress div')[5];
    var checkbox = $('#formStep2 > div.mobile-row > div:nth-child(1) > div > div:nth-child(6)');
    var firstSectionContainer = $('#formStep2 > div.mobile-row > div:nth-child(1)');
    var secondSectionContainer = $('#formStep2 > div.mobile-row > div:nth-child(2)');
    var secondSection = $('#formStep2 > div.mobile-row > div:nth-child(2) > div');
    var accountInnerBlock = document.querySelectorAll('.account-inner')[0];

    accountInnerBlock.classList.add('shown');

    secondSection.append(checkbox);
    secondSection.prepend(namoNumeris);
    secondSection.prepend(gatve);
    secondSection.prepend(pastoIndeksas);
    secondSection.prepend(miestas);

    var accordionButton = document.createElement('div');
    accordionButton.setAttribute('class', 'accordion');
    accordionButton.textContent = '1. BUYER INFORMATION';
    firstSectionContainer.prepend(accordionButton);

    var accordionButton = document.createElement('div');
    accordionButton.setAttribute('class', 'accordion');
    accordionButton.textContent = '2. ADDRESS';
    secondSectionContainer.prepend(accordionButton);

    var accordion = document.getElementsByClassName('accordion');
    var i;

    for (i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            var block1 = document.querySelectorAll('.account-inner.shown')[0];
            var block2 = document.querySelectorAll('.account-inner.shown')[1];
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            if (panel.classList.contains('shown')) {
                panel.classList.remove('shown');
            } else {
                if (block1) {
                    block1.classList.remove('shown');
                } else if (block2) {
                    block2.classList.remove('shown');
                }

                panel.classList.add('shown');
            }
        });
    }
}, 100);

// .accordion {
//     background-color: #e4e4e4;
//     color: #444;
//     cursor: pointer;
//     padding: 18px;
//     width: 100%;
//     border: none;
//     text-align: left;
//     outline: none;
//     font-size: 15px;
//     transition: 0.4s;
//     font-weight: 700;
// }

// .active,
// .accordion:hover {
//     background-color: #ccc;
// }

// .account-inner {
//     padding: 0 18px;
//     display: none;
//     background-color: white;
//     overflow: hidden;
// }

// .account-inner.shown {
//     display: block;
// }

// .account-wrapper {
//     padding: 0 !important;
//     border: 0;
// }

// .cart-step-terms {
//     padding: 0 40px;
// }
