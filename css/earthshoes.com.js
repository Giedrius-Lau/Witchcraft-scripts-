(() => {
    let oldPushState = history.pushState;
    history.pushState = function pushState() {
        let ret = oldPushState.apply(this, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };

    let oldReplaceState = history.replaceState;
    history.replaceState = function replaceState() {
        let ret = oldReplaceState.apply(this, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    };

    window.addEventListener('popstate', () => {
        window.dispatchEvent(new Event('locationchange'));
    });
})();

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function insertBefore(element, firstChild) {
    firstChild.parentNode.insertBefore(element, firstChild);
}

var initiateGlobalFunction = function () {
    var initiateFunction = function () {
        var sizeInterval = window.setInterval(function () {
            var sizeContainer = document.querySelector('.ProductRadioButtons-group.is-group-SIZE');

            if (sizeContainer && !document.querySelector('.ProductRadioButtons-item.init')) {
                var clonedList = sizeContainer.cloneNode(true);
                clonedList.setAttribute('class', 'is-group-SIZE-test');
                insertAfter(clonedList, document.querySelector('.is-group-SIZE'));

                sizeContainer = document.querySelector('.is-group-SIZE-test');

                // var sizeContainerTitle = document.querySelector('.is-group-SIZE .ProductRadioButtons-groupTitle');
                // if (sizeContainerTitle) {
                //     sizeContainerTitle.innerHTML = 'SIZE: <span id="js-selected-variant_1" class="ProductRadioButtons-item injected-ab"></span><span id="js-sizeChart" class="">Size chart</span>';
                //     if (!document.querySelector('.injected-ab')) {
                //         insertBefore(sizeContainerTitle, sizeContainer);
                //     }
                // }

                var emptyButton = document.createElement('div');
                emptyButton.setAttribute('class', 'ProductRadioButtons-item init');
                emptyButton.innerHTML = '<input class="ProductRadioButtons-itemRadio plus-has-listener" type="radio"><label class="ProductRadioButtons-itemLabel">Select your size</label>';

                sizeContainer.prepend(emptyButton);

                document.querySelector('.is-group-SIZE-test').classList.add('prod-gram');

                $('.is-group-SIZE-test .ProductRadioButtons-item').addClass('ab-test');

                var allOptions = $('.prod-gram').children('.ProductRadioButtons-item:not(.init)');
                $('.prod-gram').on('click', '.ProductRadioButtons-item:not(.init)', function () {
                    setTimeout(() => {
                        allOptions.removeClass('selected');
                        $(this).addClass('selected');
                        $('.prod-gram').removeClass('open');
                        $(this).parent().children('.init').html($(this).html());
                        $(this).parent().find('.ProductRadioButtons-item:not(.init)').hide();
                    }, 100);
                });

                clearInterval(sizeInterval);

                if (!document.querySelector('.ProductForm-bts.ab-test-form')) {
                    var widthContaier = document.querySelector('.ProductForm-options');
                    var notifyMeButton = document.createElement('div');
                    notifyMeButton.innerHTML = '<div class="ProductForm-bts ab-test-form"> <span>Haven\'t found your size?</span> </div>';
                    widthContaier.append(notifyMeButton);

                    document.querySelector('.ProductForm-bts.ab-test-form').addEventListener('click', function () {
                        document.querySelector('#js-back-to-stock').click();
                    });
                }
                if (document.querySelector('.ab-test .ProductRadioButtons-itemRadio:checked+.ProductRadioButtons-itemLabel')) {
                    document.querySelector('.ab-test .ProductRadioButtons-itemRadio:checked+.ProductRadioButtons-itemLabel').click();
                }
            }
        }, 500);
    };

    initiateFunction();

    var buttonInterval = window.setInterval(function () {
        var widthButtons = document.querySelectorAll('.is-group-Width .ProductRadioButtons-item .ProductRadioButtons-itemLabel');
        if (widthButtons.length) {
            clearInterval(buttonInterval);

            widthButtons.forEach(function (item) {
                item.addEventListener('click', function () {
                    if (document.querySelector('.is-group-SIZE-test')) {
                        document.querySelector('.is-group-SIZE-test').remove();
                    }

                    initiateFunction();
                });
            });
        }
    }, 500);

    $(document).on('click', '.prod-gram .init', function () {
        $(this).parent().find('.ProductRadioButtons-item:not(.init)').toggle();

        $('.prod-gram').toggleClass('open');
        $('.is-group-SIZE-test .ProductRadioButtons-item').each(function () {
            if (!$(this).hasClass('ab-test')) {
                $(this).addClass('ab-test');
            }
        });
    });
};

initiateGlobalFunction();

window.addEventListener('locationchange', function () {
    initiateGlobalFunction();

    setTimeout(() => {
        $(document).on('click', '.prod-gram .init', function () {
            $(this).parent().find('.ProductRadioButtons-item:not(.init)').toggle();
    
            $('.prod-gram').toggleClass('open');
            $('.is-group-SIZE-test .ProductRadioButtons-item').each(function () {
                if (!$(this).hasClass('ab-test')) {
                    $(this).addClass('ab-test');
                }
            });
        });
    }, 1000);
});
