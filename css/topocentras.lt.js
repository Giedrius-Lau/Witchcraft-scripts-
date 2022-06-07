// var interval = window.setInterval(function () {
//     var deliveryList = document.querySelectorAll('.Shipping-shippingItem-2zy');
//     var buttonContainer = document.querySelector('.AddToCartContainer-actionButtonsWrapper-QDm');

//     if (deliveryList.length && buttonContainer && !document.querySelector('.new-notification')) {
//         clearInterval(interval);

//         deliveryList.forEach(function (item) {
//             if (item.querySelector('.Shipping-title-36d').textContent.trim().startsWith('Atsiimkite TOPO CENTRE, per')) {
//                 var newNotification = document.createElement('div')
//                 newNotification.setAttribute('class', 'new-notification')
//                 newNotification.innerHTML = '<img src="https://www.topocentras.lt/9af51a58a5c78410e1db649d6698c5f1.svg" /><span><strong>Turime! </strong>Atsiimkite TOPO CENTRE <strong>per 30min.</strong></span>'
//                 buttonContainer.prepend(newNotification)
//             }
//         });
//     }
// }, 100);
