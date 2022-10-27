function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

var interval = window.setInterval(function () {
    var sizesContainer = document.querySelector('.configurator__sizes');
    var modalCloseButton = document.querySelector('.rw-modal__body > div.rw-modal__close');
    var modalContainer = document.querySelector('.rw-modal');
    var findLocalyContainer = document.querySelector('div#lcly-button-0');
    var colorSwatches = document.querySelector('.configurator__swatches-container');
    var ATC = document.querySelector('button#atc-pdp');
    var frontPawSelect = document.querySelector('.dropdown.dropdown--large:nth-child(1)');
    var rearPawSelect = document.querySelector('.dropdown.dropdown--large:nth-child(3)');
    var priceTotal = document.querySelectorAll('p.configurator__price span')[0].textContent
    var price = document.querySelectorAll('p.configurator__price span')[0]
    var priceMobile = document.querySelectorAll('p.configurator__price span')[1]
    var frontPawEmptyOption = document.querySelector('form > section:nth-child(8) > div.product__configurator-container > div.configurator > ul > li:nth-child(2) > div.configurator__sizes > div:nth-child(1) > div > ul > li:nth-child(1) > button')
    var rearPawEmptyOption = document.querySelector('form > section:nth-child(8) > div.product__configurator-container > div.configurator > ul > li:nth-child(2) > div.configurator__sizes > div:nth-child(3) > div > ul > li:nth-child(1) > button')

    if (
        sizesContainer &&
        modalCloseButton &&
        modalContainer &&
        findLocalyContainer &&
        colorSwatches &&
        ATC &&
        frontPawSelect &&
        rearPawSelect &&
        price &&
        priceMobile
        ) {
        clearInterval(interval);

        // REMOING SELECTED VALUES
        frontPawEmptyOption.click()
        rearPawEmptyOption.click()

        // ADDING 4 BUTTONS
        var newButtons = document.createElement('div');
        newButtons.setAttribute('class', 'new-buttons');
        newButtons.innerHTML =
            '<div class="i-need"> <div class="buttons-title">I NEED</div> <div class="buttons-container"> <div class="one-pair">1 PAIR OF BOOTS</div> <div class="two-pairs">2 PAIRS OF BOOTS</div> </div> </div> <div class="for-the"> <div class="buttons-title">FOR THE</div> <div class="buttons-container"> <div class="front-paws">FRONT PAWS</div> <div class="back-paws">BACK PAWS</div> </div> </div>';
        insertAfter(newButtons, colorSwatches);
        var forTheContainer = document.querySelector('.for-the')

        // 4 BUTTONS FUNCTIONALITY
        var onePair = document.querySelector('.one-pair')
        var twoPairs = document.querySelector('.two-pairs')
        var frontPaws = document.querySelector('.front-paws')
        var backPaws = document.querySelector('.back-paws')

        onePair.addEventListener('click', function () {
            if (twoPairs.classList.contains('active')) {twoPairs.classList.remove('active')}

            onePair.classList.add('active')
            price.innerHTML = priceTotal;
            priceMobile.innerHTML = priceTotal;

            // Hide rear paw if visible
            if (!rearPawSelect.classList.contains('disabled')) {
                rearPawSelect.classList.add('disabled')
            }

            // show FOR THE
            if (forTheContainer.classList.contains('disabled')) {
                forTheContainer.classList.remove('disabled')
            }

            frontPaws.click()
            
            if (ATC.classList.contains('disabled')) {
                ATC.classList.remove('disabled');
            }
        })

        twoPairs.addEventListener('click', function () {
            if (onePair.classList.contains('active')) {onePair.classList.remove('active')}

            twoPairs.classList.add('active')

            var extractedPriceNumber = price.textContent.replace( /^\D+/g, '')
            price.innerHTML = '$' + (extractedPriceNumber * 2).toFixed(2)
            priceMobile.innerHTML = '$' + (extractedPriceNumber * 2).toFixed(2)

            // Hide FOR THE if visible
            if (!forTheContainer.classList.contains('disabled')) {
                forTheContainer.classList.add('disabled')
            }

            // show FRONT PAW SIZE if NOT visible
            if (frontPawSelect.classList.contains('disabled')) {
                frontPawSelect.classList.remove('disabled')
            }

            // Show REAR PAW if NOT visible
            if (rearPawSelect.classList.contains('disabled')) {
                rearPawSelect.classList.remove('disabled')
            }

            if (ATC.classList.contains('disabled')) {
                ATC.classList.remove('disabled');
            }
        })

        frontPaws.addEventListener('click', function () {
            if (backPaws.classList.contains('active')) {backPaws.classList.remove('active')}

            frontPaws.classList.add('active')


             // show FRONT PAW SIZE
             if (frontPawSelect.classList.contains('disabled')) {
                frontPawSelect.classList.remove('disabled')
            }

            // Hide rear paws
            if (!rearPawSelect.classList.contains('disabled')) {
                rearPawSelect.classList.add('disabled')
            }

            rearPawEmptyOption.click()
        })

        backPaws.addEventListener('click', function () {
            if (frontPaws.classList.contains('active')) {frontPaws.classList.remove('active')}
            backPaws.classList.add('active')
            
            // Show rear paws
            if (rearPawSelect.classList.contains('disabled')) {
                rearPawSelect.classList.remove('disabled')
            }

            // Hide front paws
            if (!frontPawSelect.classList.contains('disabled')) {
                frontPawSelect.classList.add('disabled')
            }

            frontPawEmptyOption.click()
        })

        // DISABLEING FRONT AND REAR PAWS SELECT
        frontPawSelect.classList.add('disabled');
        rearPawSelect.classList.add('disabled');

        // DISABLEING ATC
        ATC.classList.add('disabled');

        // DISABLEING FOR THE CONTAINER
        forTheContainer.classList.add('disabled')

        // SIZE TOGGLE
        var sizeToggle = document.createElement('div');
        sizeToggle.setAttribute('class', 'size');
        sizeToggle.innerHTML =
            '<div class="size-toggle">Find your size<img src="https://cdn.shopify.com/s/files/1/1577/4333/files/Vector_8.svg?v=1666861980" /></div> <div class="size-container"> <img src="https://cdn.shopify.com/s/files/1/1577/4333/files/image_ea71a903-9e32-4e11-971e-4ed48643c0b3.png?v=1666861251" /> <div class="size-container-text"> <div>Measure across widest part of paw when bearing weight. If between sizes, size down.</div> <div href class="size-container-link" onClick="document.querySelector(`.rw-modal`).classList.add(`rw-modal--open`)"> <img src="https://cdn.shopify.com/s/files/1/1577/4333/files/image_1.png?v=1666861251" /> <span>HOW TO MEASURE VIDEO</span> </div> </div> </div>';
        insertAfter(sizeToggle, sizesContainer);

        // SIZE TOGGLE FUNCTION
        var sizeToggleButton = document.querySelector('.size-toggle');
        var sizeContainer = document.querySelector('.size-container');
        sizeToggleButton.addEventListener('click', function () {
            sizeContainer.classList.toggle('open');
            sizeToggleButton.classList.toggle('open');
        });

        // MODAL CLOSE FUNCTION
        modalCloseButton.addEventListener('click', function () {
            modalContainer.classList.remove('rw-modal--open');
        });

        //FIND LOCALY ICON UPDATE
        var newImage = document.createElement('img');
        newImage.src = 'https://cdn.shopify.com/s/files/1/1577/4333/files/Group.svg?v=1666861499';
        newImage.setAttribute('class', 'location-icon');
        findLocalyContainer.prepend(newImage);
    }
}, 100);
