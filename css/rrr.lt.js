setTimeout(() => {
    var form = document.querySelector('body > div.wrapper > main > main > section > div > div > form');
    var firstPanel = document.querySelectorAll('#address_search_fill')[0];
    var accordionButton = document.createElement('div');
    accordionButton.setAttribute('class', 'accordion accordion-address');
    accordionButton.innerHTML = '<h2 class="accordion-title">1. Nurodykite adresą prekėms pristatyti</h2>';
    form.append(accordionButton);
    var accordionAddress = document.querySelector('.accordion-address');
    var accordionButton = document.createElement('div');
    accordionButton.setAttribute('class', 'accordion accordion-name disabled');
    accordionButton.innerHTML = '<h2 class="accordion-title">2. Gavėjo duomenys</h2>';
    form.append(accordionButton);
    var accordionName = document.querySelector('.accordion-name');
    var searchField = document.querySelector('body > div.wrapper > main > main > section > div > div > form > div.shipping__panels');
    accordionName.append(firstPanel);
    accordionAddress.append(searchField);
    var accordion = document.getElementsByClassName('accordion');
    document.querySelectorAll('.accordion')[0].classList.add('active');
    var i;
    for (i = 0; i < accordion.length; i++) {
        accordion[i].querySelector('h2').addEventListener('click', function () {
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
            if (this.parentNode.classList.contains('active')) {
                this.parentNode.classList.remove('active');
            } else {
                accordion1.classList.remove('active');
                accordion2.classList.remove('active');
                this.parentNode.classList.add('active');
            }
        });
    }
    var movePanelToFirstAccordion = function () {
        var oldAddress = document.querySelector(' div.accordion.accordion-address.active > div > div.shipping__panels.display > ul');
        if (oldAddress) {
            oldAddress.parentNode.removeChild(oldAddress);
        }
        var searchField = document.querySelector('div.accordion.accordion-address > div ');
        var addressFields = document.querySelector('#address_search_fill > div:nth-child(1)').cloneNode(true);
        searchField.append(addressFields);
        var addressPanels = document.querySelectorAll('div.accordion.accordion-address > div > div.shipping__panels');
        addressPanels.forEach(function (panel) {
            if (!panel.classList.contains('display')) {
                panel.classList.add('display');
            }
        });
        var formButton = document.querySelector('form > button.disabled');
        if (formButton && formButton.classList.contains('disabled')) {
            formButton.classList.remove('disabled');
        }
        var secondAccordion = document.querySelector('.accordion-name');
        if (secondAccordion.classList.contains('disabled')) {
            secondAccordion.classList.remove('disabled');
        }
        var city = document.querySelector('#shipping-city');
        var address = document.querySelector('#shipping-address');
        var postcode = document.querySelector('#shipping-postcode');
        var checkIcon = document.querySelector('.accordion-check');
        if (!checkIcon.classList.contains('display') && city.value && address.value && postcode.value) {
            checkIcon.classList.add('display');
        }
    };
    var xhrSend = window.XMLHttpRequest.prototype.send;
    window.XMLHttpRequest.prototype.send = function () {
        var xhr = this;
        var intervalIdDelivery = window.setInterval(function () {
            if (xhr.readyState != 4) {
                return;
            }
            movePanelToFirstAccordion();
            clearInterval(intervalIdDelivery);
        }, 1);
        return xhrSend.apply(this, [].slice.call(arguments));
    };
    //Move submit button outside
    var button = document.querySelector('#address_search_fill > button');
    button.classList.add('disabled');
    form.append(button);
    //Perka imone toggle
    var newContainer = document.createElement('div');
    newContainer.setAttribute('class', 'company-container');
    document.querySelector('#address_search_fill > div:nth-child(5) > ul').append(newContainer);
    var newContainerDiv = document.querySelector('.company-container');
    var firstField = document.querySelector('#address_search_fill > div:nth-child(5) > ul > li:nth-child(2)');
    var secondField = document.querySelector('#address_search_fill > div:nth-child(5) > ul > li:nth-child(3)');
    var thirdField = document.querySelector('#address_search_fill > div:nth-child(5) > ul > li:nth-child(4)');
    var fourthField = document.querySelector('#address_search_fill > div:nth-child(5) > ul > li:nth-child(5)');
    newContainerDiv.append(firstField);
    newContainerDiv.append(secondField);
    newContainerDiv.append(thirdField);
    newContainerDiv.append(fourthField);
    document
        .querySelector('#address_search_fill > div:nth-child(5) > ul > li label, #address_search_fill > div:nth-child(5) > ul > li input')
        .addEventListener('click', function () {
            console.log('clcik');
            if (!newContainerDiv.classList.contains('shown')) {
                newContainerDiv.classList.add('shown');
            } else {
                newContainerDiv.classList.remove('shown');
            }
        });
    //Add checkmark
    var check = document.createElement('div');
    check.innerHTML = '<img src="https://semexit.s3-eu-west-1.amazonaws.com/rrr.lt/check.png" alt="check icon">';
    check.setAttribute('class', 'accordion-check');
    document.querySelector('.accordion.accordion-address > h2').append(check);
}, 300);
