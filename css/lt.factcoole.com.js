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
document.querySelectorAll('.accordion')[0].classList.add('active');
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        var accordion1 = document.querySelectorAll('.accordion')[0];
        var accordion2 = document.querySelectorAll('.accordion')[1];
        var block1 = document.querySelectorAll('.account-inner.shown')[0];
        var block2 = document.querySelectorAll('.account-inner.shown')[1];
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

        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            accordion1.classList.remove('active');
            accordion2.classList.remove('active');
            this.classList.add('active');
        }
    });
}
