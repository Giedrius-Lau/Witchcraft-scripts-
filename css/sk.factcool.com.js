function insertBefore(element, firstChild) {
    firstChild.parentNode.insertBefore(element, firstChild);
}

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

setTimeout(() => {
    var newCta = document.createElement('div');
    newCta.setAttribute('class', 'new-cta');

    var body = document.querySelector('body');
    var prices = document.querySelector(
        'body > div.site-wrapper > section > div.product-detail-wrapper.marginb48 > div > div.col-xs-100.col-sm-50.col-lg-38.product-info > div.pd-prices'
    );
    var CTA = document.querySelector('div:nth-child(3) > div > div.col-xs-80.col-md-70.col-lg-65.pd-add-to-cart > button')
        ? document.querySelector('div:nth-child(3) > div > div.col-xs-80.col-md-70.col-lg-65.pd-add-to-cart > button')
        : document.querySelector('div:nth-child(4) > div > div.col-xs-80.col-md-70.col-lg-65.pd-add-to-cart > button');

    newCta.append(prices.cloneNode(true));
    newCta.append(CTA.cloneNode(true));

    body.append(newCta);

    var newCtaButton = document.querySelector('body > div.new-cta > button');
    newCtaButton.addEventListener('click', function () {
        CTA.click();
    });
    var productImage = document.querySelector('#slick-slide10 > div > img');
    var productTitle = document.querySelector('.pd-mobile-title').cloneNode(true);

    var modalInterval = window.setInterval(() => {
        var modal = document.querySelector('body > div.sweet-alert.showSweetAlert.visible');

        if (modal) {
            var modalText = document.querySelector('body > div.sweet-alert.showSweetAlert.visible > h2');
            var modalSizes = document.querySelector('body > div.sweet-alert.showSweetAlert.visible > p');
            var modalContent = document.createElement('div');

            modalContent.setAttribute('class', 'new-modal-content');
            modalContent.innerHTML = '<div class="image-side"></div><div class="content-side"></div>';

            modal.append(modalContent);

            var newImage = document.createElement('img');
            newImage.setAttribute('src', productImage.src);

            document.querySelector('.image-side').append(newImage);
            document.querySelector('.content-side').append(productTitle);
            document.querySelector('.content-side').append(modalText);
            document.querySelector('.content-side').append(modalSizes);

            clearInterval(modalInterval);
        }
    }, 30);

    setInterval(() => {
        var modalCta = document.querySelector('body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button');
        if (modalCta) {
            modalCta.innerHTML = CTA.innerHTML;
        }
    }, 300);
}, 1000);
