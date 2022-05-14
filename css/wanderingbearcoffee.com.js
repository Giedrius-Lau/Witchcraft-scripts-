// function insertAfter(el, referenceNode) {
//     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
// }

// var changeTitleInterval = window.setInterval(function () {
//     var title = document.querySelector('.PDPForm-title');

//     if (title && title.textContent != 'Trial Offer - 25% off your first box when you subscribe.' && !document.querySelector('.product-subheading')) {
//         title.textContent = 'Trial Offer - 25% off your first box when you subscribe.';
//         var subheading = document.createElement('div');
//         subheading.setAttribute('class', 'product-subheading');
//         subheading.innerHTML = 'Roll out of bed to delicious Wandering Bear Cold Brew on Tap, ready to go in your fridge.';
//         document.querySelector('body').append(subheading);
//         insertAfter(document.querySelector('.product-subheading'), title);
//     }
// }, 1000);

// var iconstInterval = window.setInterval(function () {
//     var icons = document.querySelector('.PDPForm-ingredientFeature');
//     var placement = document.querySelector('.PDPBuy-urlContainer');
//     var container = document.querySelector('.PDPForm-container');

//     if (icons && placement && !container.querySelector('.PDPForm-ingredientFeature')) {
//         insertAfter(icons, placement);
//     }
// }, 1000);

// var textInterval = window.setInterval(function () {
//     var text = document.querySelector('.PDPTrialMessage-text p');

//     if (
//         text &&
//         text.textContent !=
//             "This offer signs you up for a monthly 2-box subscription. Your first order will be for 1-box of your chosen flavor at the two-box discount price (25% off the normal one box price). If you love it, you'll already be set up with a 2-box subscription moving forward--and if you don't, just be sure to change flavors or cancel before your next order is processed. Your subscription will ship every 4 weeks, keeping one human caffeinated for roughly a month."
//     ) {
//         text.textContent =
//             "This offer signs you up for a monthly 2-box subscription. Your first order will be for 1-box of your chosen flavor at the two-box discount price (25% off the normal one box price). If you love it, you'll already be set up with a 2-box subscription moving forward--and if you don't, just be sure to change flavors or cancel before your next order is processed. Your subscription will ship every 4 weeks, keeping one human caffeinated for roughly a month.";
//     }
// }, 1000);

// var howItWorksInterval = window.setInterval(function () {
//     var howItWorksText = document.querySelectorAll('p.TrialHIW-itemText.copy');

//     if (howItWorksText.length > 2 && howItWorksText[0].textContent != 'Choose a flavor for your first discounted box') {
//         howItWorksText[0].textContent = 'Choose a flavor for your first discounted box';
//         howItWorksText[1].innerHTML = "<p>Once you're hooked, we will ship you 2 boxes/month at $26.99 per box (That’s nearly $20 of savings per month vs our non-subscription pricing!). <br><br> Don't worry, we will send you an email before your shipment so you have the ability to change flavors or cancel your trial (no hard feelings).</p>";
//         howItWorksText[2].textContent = 'Sip, Sip, AHHHH…Enjoy our surprisingly smooth Cold Brew and stay caffeinated😎!';
//     }
// }, 1000);

// var descriptionInterval = window.setInterval(function () {
//     var description = document.querySelector('.PDPForm-description');

//     if (description && !document.querySelector('.new-description')) {
//         description.innerHTML =
//             '<ul class="new-description"> <p>For a limited time, save 25% on your first box when you sign up for a 2-box monthly subscription. All the flavor of a coffee shop, without any of the hassle. Plus, </p><li>💯 Satisfaction guaranteed or your money back - We’re a small team that stands behind our product.</li> <li>🚫 No more coffee stomach aches - no added sugar or dairy</li> <li>⚡️🏃🏻💨 Each glass = 2 espresso shots. Zoom zoom!</li> <li>😋 We have all your favorite flavors</li> <li>♵ Recyclable & 🌱Organic</li> <li>🧊 Stays Fresh</li> </ul>';
//     }
// }, 1000);
