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

var buyerInfo =
    window.location.hostname === 'lt.factcool.com'
        ? 'Pirkėjo informacija'
        : window.location.hostname === 'bg.factcool.com'
        ? 'Информация за клиента'
        : window.location.hostname === 'cs.factcool.com'
        ? 'Informace o zákazníkovi'
        : '1. BUYER INFORMATION';

var address =
    window.location.hostname === 'lt.factcool.com'
        ? 'Adresas'
        : window.location.hostname === 'bg.factcool.com'
        ? 'Адрес'
        : window.location.hostname === 'cs.factcool.com'
        ? 'Adresa'
        : '2. ADDRESS';

var accordionButton = document.createElement('div');
accordionButton.setAttribute('class', 'accordion');
accordionButton.textContent = '1. ' + buyerInfo;
firstSectionContainer.prepend(accordionButton);

var accordionButton = document.createElement('div');
accordionButton.setAttribute('class', 'accordion');
accordionButton.textContent = '2. ' + address;
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

var email = document.getElementById('checkout_address_email'),
    phone = document.getElementById('checkout_address_telephone'),
    firstName = document.getElementById('checkout_address_paymentAddress_firstname'),
    surname = document.getElementById('checkout_address_paymentAddress_lastname');

var city = document.getElementById('checkout_address_paymentAddress_city'),
    postIndex = document.getElementById('checkout_address_paymentAddress_postcode'),
    street = document.getElementById('checkout_address_paymentAddress_address1'),
    houseNumber = document.getElementById('checkout_address_paymentAddress_address2');

function required(inputtx) {
    if (inputtx.value.length == 0) {
        return false;
    }
    return true;
}

$('#formStep2 > div.mobile-row > div:nth-child(2) > div.accordion').addClass('required-accordion');
$('button.btn.btn-orange.btn-xs.btn-prevent-double-click').addClass('disabled-button');

$('input').on('input', function () {
    checkIfNotEmpty();
    checkIfCanProceed();
});

var checkIfNotEmpty = function () {
    if (required(email) && required(phone) && required(firstName) && required(surname)) {
        $('#formStep2 > div.mobile-row > div:nth-child(2) > div.accordion').removeClass(
            'required-accordion'
        );
        $('#formStep2 > div.mobile-row > div:nth-child(2) > div.accordion').addClass('active');
        $('#formStep2 > div.mobile-row > div:nth-child(2) > div.account-inner').addClass('shown');
    }
};

var checkIfCanProceed = function () {
    if (
        required(email) &&
        required(phone) &&
        required(firstName) &&
        required(surname) &&
        required(city) &&
        required(postIndex) &&
        required(street) &&
        required(houseNumber)
    ) {
        $('button.btn.btn-orange.btn-xs.btn-prevent-double-click').removeClass('disabled-button');
    }
};
