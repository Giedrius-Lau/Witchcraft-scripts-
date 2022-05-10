var listInterval = window.setInterval(function () {
    var listItem = document.querySelector('#shopify-section-pdp-intro > div.PDPForm-description > ul > li:nth-child(4)');

    if (listItem && !document.querySelector('#shopify-section-pdp-intro > div.PDPForm-description > ul > li:nth-child(5)')) {
        listItem.parentNode.append(listItem.cloneNode(true));
    }
}, 1000);

var textInterval = window.setInterval(function () {
    var text = document.querySelector('.PDPTrialMessage-text p');

    if (text && text.textContent != "This offer signs you up for a monthly 2-box subscription. Your first order will be for 1-box of your chosen flavor at the two-box discount price (25% off the normal one box price). If you love it, you'll already be set up with a 2-box subscription moving forward--and if you don't, just be sure to cancel or change flavors before your next order is processed. Your subscription will auto-ship every 4 weeks; this will keep one human caffeinated for roughly a month.") {
        text.textContent =
            "This offer signs you up for a monthly 2-box subscription. Your first order will be for 1-box of your chosen flavor at the two-box discount price (25% off the normal one box price). If you love it, you'll already be set up with a 2-box subscription moving forward--and if you don't, just be sure to cancel or change flavors before your next order is processed. Your subscription will auto-ship every 4 weeks; this will keep one human caffeinated for roughly a month.";
    }
}, 1000);

var howItWorksInterval = window.setInterval(function () {
    var howItWorksText = document.querySelectorAll('p.TrialHIW-itemText.copy');

    if (howItWorksText.length > 2 && howItWorksText[0].textContent != 'Choose a flavor, sign up for a 2-box subscription, and get ready for your first shipment of ONE box of cold brew in the flavor of your choice.') {
        howItWorksText[0].textContent = 'Choose a flavor, sign up for a 2-box subscription, and get ready for your first shipment of ONE box of cold brew in the flavor of your choice.';
        howItWorksText[1].innerHTML =
            "<p>Once you're hooked, we will ship you 2 boxes of cold brew each month at $26.99 per box (($53.98 total) that’s an $18 savings from our non-subscription pricing!). <br><br> Don't worry, we will send you an email before your second shipment so you have the ability to change up the flavor or cancel your trial (no hard feelings).</p>";
        howItWorksText[2].textContent = 'Enjoy our surprisingly smooth Cold Brew AND enjoy never running out of caffeine again!';
    }
}, 1000);
