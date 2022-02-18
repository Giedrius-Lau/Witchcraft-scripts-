function trackHoverIntent(selector) {
    var timeoutId;
    var elements = window.document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseenter', function (event) {
            var targetElement = event.target || event.srcElement;
            var classes = targetElement.className;
            var id = targetElement.id;
            if (!timeoutId) {
                timeoutId = window.setTimeout(function () {
                    dataLayer.push({
                        event: 'gtm.hover',
                        'gtm.element': targetElement,
                        'gtm.elementClasses': classes,
                        'gtm.elementId': id,
                    });
                    timeoutId = null;
                });
            }
        });
    }
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseleave', function () {
            if (timeoutId) {
                window.clearTimeout(timeoutId);
                timeoutId = null;
            }
        });
    }
}
trackHoverIntent(
    '#viewport > div.header-wrapper.default-header-desktop > header > div.header-menu > div > div > div:nth-child(1) > div.position-relative.placement-left > a',
    1000
);
