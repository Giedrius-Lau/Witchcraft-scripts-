// var resizeImages = function () {
//     var items = document.querySelectorAll('.ProductGrid-imageContainer-3rN > img');

//     items.forEach(function (item) {
//         var itemSrc = $(item).attr('src');

//         newSrc = itemSrc.split(',');
//         if (newSrc[2] !== 'height=250') {
//             newSrc[2] = 'height=250';
//             newSrc.join(',');
//             $(item).attr('src', newSrc);
//         }
//     });
// };

// setInterval(function ()  {
//     resizeImages();

// }, 1000);

// var xhrSend = window.XMLHttpRequest.prototype.send;
// window.XMLHttpRequest.prototype.send = function () {
//     var xhr = this;
//     var intervalIdDelivery = window.setInterval(function () {
//         if (xhr.readyState != 4) {
//             return;
//         }
//         resizeImages();

//         clearInterval(intervalIdDelivery);
//     }, 1);
//     return xhrSend.apply(this, [].slice.call(arguments));
// };

// setTimeout(function () {
//     resizeImages();
// }, 300);
