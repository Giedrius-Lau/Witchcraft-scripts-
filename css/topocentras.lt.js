// function insertAfter(el, referenceNode) {
//     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
// }

// var intervalPayments = window.setInterval(function () {
//     var sliders = document.querySelectorAll('.Services-container-31Y.product-page-services-slider');

//     if (sliders.length) {
//         clearInterval(intervalPayments);

//         document.querySelector('.Services-promotedOptionsTitle-2ly').textContent = 'Apsaugokite savo pirkinį: ';

//         sliders.forEach(function (item) {
//             var lastChild = item.querySelector('button.Services-serviceBoxOptionsContainer-3Li:first-child .Services-serviceBoxPrice-11D');
//             var title = item.querySelector('.Services-serviceNameContainer-gHU');
//             var placiauMaziau = document.createElement('div');
//             placiauMaziau.setAttribute('class', 'placiau-maziau');
//             placiauMaziau.innerHTML = '<button class="placiau active">Plačiau<img src="/dd600b6a8ab748c9cbdd58728b426dca.svg" alt="read more"></button><button class="maziau">Mažiau<img src="/dd600b6a8ab748c9cbdd58728b426dca.svg" alt="read more"></button>';

//             var checkbox = document.createElement('div');
//             checkbox.setAttribute('class', 'custom-checkbox');

//             var priceBlock = document.createElement('div');
//             priceBlock.setAttribute('class', 'price');
//             priceBlock.textContent = 'nuo ';

//             var fromBlock = document.createElement('div');
//             fromBlock.setAttribute('class', 'from');

//             title.prepend(checkbox);
//             title.append(priceBlock);
//             title.append(fromBlock);
//             title.querySelector('.price').append(lastChild.querySelector('.Services-serviceBoxMonthlyPrice-3p1').textContent);
//             title.querySelector('.from').append(lastChild.querySelector('.Services-defaultPriceContainer-3N1').textContent);
//             title.append(placiauMaziau);
//         });

//         document.querySelectorAll('.placiau-maziau, .custom-checkbox').forEach(function (button) {
//             var div = button.parentNode.parentNode.querySelectorAll('div')[5].classList;
//             var placiau = button.parentNode.parentNode.querySelector('.placiau').classList;
//             var maziau = button.parentNode.parentNode.querySelector('.maziau').classList;
//             var customCheckbox = button.parentNode.parentNode.querySelector('.custom-checkbox').classList;

//             button.addEventListener('click', function () {
//                 div.toggle('active');
//                 placiau.toggle('active');
//                 maziau.toggle('active');
//                 customCheckbox.toggle('active');
//                 document.querySelector('.custom-checkbox-fake').classList.remove('active');
//             });
//         });

//         var fakeCheckbox = document.createElement('div');
//         fakeCheckbox.setAttribute('class', 'Services-container-31Y product-page-services-slider');
//         fakeCheckbox.innerHTML = '<div class="Services-serviceNameContainer-gHU"> <div class="custom-checkbox custom-checkbox-fake active"></div><span class="Services-serviceTitle-Hoy"><button class="Services-serviceTitleClickable-1FY">Ačiū, man nereikia papildomo draudimo</button></span> <div class="price">0 €/12 mėn.</div><div class="from"></div><div class="placiau-maziau"><button class="placiau active"></button><button class="maziau"></button></div></div>';

//         insertAfter(fakeCheckbox, document.querySelector('.Services-promotedOptionsTitle-2ly'));

//         document.querySelector('#services-block-container > div:nth-child(2) > div').addEventListener('click', function () {
//             document.querySelector('.custom-checkbox-fake').classList.toggle('active');
//         });
//     }
// }, 250);
