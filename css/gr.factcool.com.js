function insertBefore(element, firstChild) {
    firstChild.parentNode.insertBefore(element, firstChild);
}

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

if (window.location.pathname === '/step1') {
    var returnBandge = document.querySelector('body > div.site-wrapper > section > div:nth-child(2) > div.col-xs-100.return-sidebar-mobile.top-heading');
    if (returnBandge) {
        returnBandge.remove();
    }

    if (document.querySelector('body > div.site-wrapper > section > div:nth-child(2) > div.subpage-main.col-xs-100.col-lg-70.marginb96 > div')) {
        document.querySelector('body > div.site-wrapper > section > div:nth-child(2) > div.subpage-main.col-xs-100.col-lg-70.marginb96 > div').remove();
    }

    var step1interval = window.setInterval(function () {
        var aside = document.querySelector('#aside-info');
        var leftSide = document.querySelector('body > div.site-wrapper > section > div:nth-child(2) > div.subpage-main.col-xs-100.col-lg-70.marginb96');

        console.log(aside, leftSide);
        if (aside && leftSide) {
            insertBefore(aside, leftSide);

            clearInterval(step1interval);
        }
    }, 300);
} else if (window.location.pathname === '/step2') {
    var step2interval = window.setInterval(function () {
        document.querySelector('#formStep2 > h2').remove();
        var aside = document.querySelector('#aside-info');
        var leftSide = document.querySelector('#formStep2');
        if (aside && leftSide) {
            insertBefore(aside, leftSide);
            clearInterval(step2interval);
        }
    }, 300);
}

var content = document.querySelector('#aside-info > aside > div');
content.classList.add('hide');

var functionality = function () {
    console.log('click');
    var title = document.querySelector('#aside-info > aside > h2');
    var content = document.querySelector('#aside-info > aside > div');

    title.addEventListener('click', function () {
        if (content.classList.contains('hide')) {
            content.classList.remove('hide');
            title.classList.add('active');
        } else if (!content.classList.contains('hide')) {
            content.classList.add('hide');
            title.classList.remove('active');
        }
    });
};

setTimeout(function () {
    functionality();
}, 2000);

var xhrSend = window.XMLHttpRequest.prototype.send;
window.XMLHttpRequest.prototype.send = function () {
    var xhr = this;
    var intervalIdDelivery = window.setInterval(function () {
        if (xhr.readyState != 4) {
            return;
        }
        functionality();

        clearInterval(intervalIdDelivery);
    }, 1);
    return xhrSend.apply(this, [].slice.call(arguments));
};

setInterval(function () {
    if (!document.querySelector('#aside-info > aside > span')) {
        var title = document.querySelector('#aside-info > aside > h2');

        var price = document
            .querySelector('#aside-info > aside > div > div.cart-nav-subtotal.text-right > div > div.col-xs-50.cart-nav-subtotal-price > span')
            .cloneNode(true);

        if (price && title) {
            insertAfter(price, title);
        }
    }
}, 300);
