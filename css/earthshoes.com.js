// function insertBefore(element, firstChild) {
//     firstChild.parentNode.insertBefore(element, firstChild);
// }

// var sizeInterval = window.setInterval(function () {
//     var sizeContainer = document.querySelector('.ProductRadioButtons-group.is-group-SIZE');
//     var sizeContainerTitle = document.querySelector('.ProductRadioButtons-group.is-group-SIZE .ProductRadioButtons-groupTitle');

//     if (sizeContainer && !document.querySelector('.ProductRadioButtons-item.init')) {
//         if (sizeContainerTitle) {
//             sizeContainerTitle.innerHTML =
//                 'SIZE: <span id="js-selected-variant_1" class="ProductRadioButtons-item ">7</span><span id="js-sizeChart" class="ProductRadioButtons-item ">Size chart</span>';
//             insertBefore(sizeContainerTitle, sizeContainer);
//         }

//         sizeContainer.classList.add('prod-gram');

//         var emptyButton = document.createElement('div');
//         emptyButton.setAttribute('class', 'ProductRadioButtons-item init');
//         emptyButton.innerHTML =
//             '<input class="ProductRadioButtons-itemRadio plus-has-listener" type="radio"><label class="ProductRadioButtons-itemLabel">Select your size</label>';

//         sizeContainer.prepend(emptyButton);
//         $('.ProductRadioButtons-item').addClass('ab-test');

//         $(document).ready(function () {
//             $(document).on('click', '.prod-gram .init', function () {
//                 $(this).parent().find('.ProductRadioButtons-item:not(.init)').show();
//                 $('.prod-gram').addClass('open');
//                 $('.ProductRadioButtons-item').each(function () {
//                     if (!$(this).hasClass('ab-test')) {
//                         $(this).addClass('ab-test');
//                     }
//                 });
//             });
//             var allOptions = $('.prod-gram').children('.ProductRadioButtons-item:not(.init)');
//             $('.prod-gram').on('click', '.ProductRadioButtons-item:not(.init)', function () {
//                 console.log('lable');

//                 setTimeout(() => {
//                     allOptions.removeClass('selected');
//                     $(this).addClass('selected');
//                     $('.prod-gram').removeClass('open');
//                     $(this).parent().children('.init').html($(this).html());
//                     $(this).parent().find('.ProductRadioButtons-item:not(.init)').hide();

//                 }, 100);
//             });
//         });

//         clearInterval(sizeInterval);
//     }
// }, 500);

