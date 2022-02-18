// function insertBefore(element, firstChild) {
//     firstChild.parentNode.insertBefore(element, firstChild);
// }

// var onlineInterval = window.setInterval(function () {
//     var textarea = document.querySelector('.jsx-2823573103.input-text__field');

//     if (textarea && !document.querySelector('.abtest')) {
//         var rules = document.querySelector('.jsx-3289567554 ');
//         var uploadCv = document.querySelector('form > div.jsx-2111983364.form-container-hidden');

//         textarea.placeholder = 'Parašykite kreipimosi laišką:';
//         textarea.classList.add('abtest');
//         insertBefore(textarea, rules);
//         insertBefore(uploadCv, rules);

//         var sendButton = document.querySelector('div.jsx-2111983364.form-buttons > span:nth-child(2) > button');
//         sendButton.classList.add('disabled');
//         sendButton.textContent = 'Siųsti CV';

//         setInterval(function () {
//             if (document.querySelector('.jsx-1796921770.upload-item.upload-item--state-selected') && !document.querySelector('.input-text--state-error')) {
//                 sendButton.classList.remove('disabled');
//             } else {
//                 sendButton.classList.add('disabled');
//             }
//         }, 400);
//     }
// }, 250);
