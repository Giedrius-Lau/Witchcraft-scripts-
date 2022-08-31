function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

var interval = window.setInterval(() => {
    if (window.innerWidth < 768) {
        var icons = document.querySelector('#shopify-section-pdp-intro > div.PDPForm-ingredientFeature');
        var swatchesContainer = document.querySelector('.PDPSWatchesContainer');
        var options = document.querySelector('.PDPOptionsSelectOptions.js-pdp-options-select-options');
        var cta = document.querySelector('.PDP-buyMobile.js-buy-mobile');

        if (icons && swatchesContainer && options) {
            insertAfter(icons, swatchesContainer);

            var initializeTemporaryCTA = function () {
                document.querySelector('body').append(cta.cloneNode(true));

                var temporaryCta = document.querySelector('body > div.PDP-buyMobile.js-buy-mobile');
                temporaryCta.setAttribute('class', 'PDP-buyMobile temporary-cta');
                temporaryCta.querySelector('del.PDPBuy-compareAtPrice.copy').remove();
                temporaryCta.querySelector('span.Product-compareAtPrice').innerHTML = '<span class="from">FROM </span><span class="price">35.95</span>';

                temporaryCta.addEventListener('click', function () {
                    temporaryCta.remove();
                    document.querySelector('.PDPOptionsSelectOptions.js-pdp-options-select-options').classList.add('active');
                    document.querySelector('.PDPCustomRecharge').classList.add('active');
                    document.querySelector('.PDP-buyMobile.js-buy-mobile').classList.add('active');
                });
            };

            initializeTemporaryCTA();

            var background = document.createElement('div');
            background.setAttribute('class', 'clickable-background');
            options.append(background);

            document.querySelector('.clickable-background').addEventListener('click', function () {
                document.querySelector('.PDPOptionsSelectOptions.js-pdp-options-select-options').classList.remove('active');
                document.querySelector('.PDPCustomRecharge').classList.remove('active');
                document.querySelector('.PDP-buyMobile.js-buy-mobile').classList.remove('active');

                initializeTemporaryCTA();
            });

            clearInterval(interval);

            var hideNewCTA = document.querySelector('.temporary-cta');

            // if (hideOptions) {
            //     hideOptions.classList.add('invisible');
            // }
            // if (hideRecharge) {
            //     hideRecharge.classList.add('invisible');
            // }
            // if (hideCTA) {
            //     hideCTA.classList.add('invisible');
            // }
            if (hideNewCTA) {
                hideNewCTA.classList.add('invisible');
            }
        }
    }
}, 1000);

var myScrollFunc = function () {
    var hideOptions = document.querySelector('.PDPOptionsSelectOptions.js-pdp-options-select-options');
    var hideRecharge = document.querySelector('.PDPCustomRecharge');
    var hideCTA = document.querySelector('.PDP-buyMobile.js-buy-mobile');
    var hideNewCTA = document.querySelector('.temporary-cta');

    var y = window.scrollY;
    if (y >= 500) {
        // if (hideOptions && hideOptions) {
        //     hideOptions.classList.remove('invisible');
        // }
        // if (hideRecharge && hideRecharge) {
        //     hideRecharge.classList.remove('invisible');
        // }
        // if (hideCTA && hideCTA) {
        //     hideCTA.classList.remove('invisible');
        // }
        if (hideNewCTA) {
            hideNewCTA.classList.remove('invisible');
        }
    } else {
        // if (hideOptions) {
        //     hideOptions.classList.add('invisible');
        // }
        // if (hideRecharge) {
        //     hideRecharge.classList.add('invisible');
        // }
        // if (hideCTA) {
        //     hideCTA.classList.add('invisible');
        // }
        if (hideNewCTA) {
            hideNewCTA.classList.add('invisible');
        }
    }
};

window.addEventListener('scroll', myScrollFunc);
