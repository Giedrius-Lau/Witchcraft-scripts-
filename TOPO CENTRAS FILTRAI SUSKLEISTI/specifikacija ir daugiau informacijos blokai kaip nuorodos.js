setInterval(function () {
    var desktopContainer = document.querySelector('div.AddToCartContainer-priceSeparator-1an');
    var desktopContainer2 = document.querySelector('.IsOnlineOnly-isOnlineOnly-3sq');
    var mobileContainer = document.querySelector('div.AddToCartContainer-topContainer-2ID');
    var placementContainer = desktopContainer || mobileContainer || desktopContainer2;

    if (!document.getElementById('product-information-tabs') && placementContainer) {
        var insertAfter = function (el, referenceNode) {
            referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
        };
        var createTabs = function (list, tabsContainer) {
            list.forEach(function (item) {
                if (item && item.parentNode && item.parentNode.parentNode) {
                    if ((item.textContent === 'Aprašymas' || item.textContent === 'Specifikacija') && item.parentNode.parentNode.style.display !== 'none') {
                        tabsContainer.innerHTML += '<a href="#' + item.parentNode.parentNode.id + '">' + item.textContent + '</a>';
                    } else if (item.textContent === 'Papildoma gamintojo informacija' && item.parentNode.parentNode.style.display !== 'none') {
                        tabsContainer.innerHTML += '<a href="#' + item.parentNode.parentNode.id + '">Gamintojo informacija</a>';
                    }
                }
            });
        };

        var spanElements = document.querySelectorAll('h2 > span');

        var newTabs = document.createElement('div');
        newTabs.setAttribute('class', 'product-information-tabs');
        newTabs.setAttribute('id', 'product-information-tabs');
        createTabs(spanElements, newTabs);
        insertAfter(newTabs, placementContainer);
    }
}, 500);
