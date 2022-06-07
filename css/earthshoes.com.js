// (() => {
//     let oldPushState = history.pushState;
//     history.pushState = function pushState() {
//         let ret = oldPushState.apply(this, arguments);
//         window.dispatchEvent(new Event('pushstate'));
//         window.dispatchEvent(new Event('locationchange'));
//         return ret;
//     };

//     let oldReplaceState = history.replaceState;
//     history.replaceState = function replaceState() {
//         let ret = oldReplaceState.apply(this, arguments);
//         window.dispatchEvent(new Event('replacestate'));
//         window.dispatchEvent(new Event('locationchange'));
//         return ret;
//     };

//     window.addEventListener('popstate', () => {
//         window.dispatchEvent(new Event('locationchange'));
//     });
// })();

// function insertAfter(el, referenceNode) {
//     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
// }

// var initialise = function () {
//     var interval = window.setInterval(() => {
//         var sizeContainer = document.querySelector('.ProductRadioButtons-group.is-group-SIZE');

//         if (sizeContainer && !document.querySelector('.dropdown-toggle')) {
//             var emptyButton = document.createElement('div');
//             emptyButton.setAttribute('class', 'dropdown-toggle');
//             emptyButton.innerHTML = '<div class="dropdown-toggle-content">Select your size</div>';

//             sizeContainer.parentNode.parentNode.parentNode.prepend(emptyButton);

//             clearInterval(interval);

//             var toggle = document.querySelector('.dropdown-toggle');
//             var sizeList = document.querySelectorAll('.is-group-SIZE .ProductRadioButtons-item');

//             toggle.addEventListener('click', function () {
//                 toggle.classList.toggle('open');

//                 sizeList.forEach(function (item) {
//                     item.classList.toggle('open');
//                 });
//             });

//             sizeList.forEach(function (item) {
//                 item.addEventListener('click', function () {
//                     sizeList.forEach(function (item) {
//                         item.classList.remove('open');
//                         toggle.classList.remove('open');
//                     });
//                 });
//             });

//             var widthContaier = document.querySelector('.ProductForm-options');
//             var notifyMeButton = document.querySelector('#js-back-to-stock');
//             notifyMeButton.textContent = "Haven't found your size?";

//             insertAfter(notifyMeButton, widthContaier);
//         }
//     }, 300);
// };

// initialise();

// setInterval(() => {
//     var toggleContent = document.querySelector('.dropdown-toggle .dropdown-toggle-content');
//     var titleValue = document.querySelector('#js-selected-variant_1');

//     if (titleValue) {
//         if (toggleContent && titleValue.textContent != '') {
//             toggleContent.textContent = titleValue.textContent;
//         } else {
//             toggleContent.textContent = 'Select your size';
//         }
//     }
// }, 300);

// window.addEventListener('locationchange', function () {
//     initialise();
// });
