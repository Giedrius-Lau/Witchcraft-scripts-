
function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

var onlineInterval = window.setInterval(function () {
    var skirtukas = document.querySelector('#vk > div.ticket-check__win-info-container > hr') || document.querySelector('#main > div:nth-child(2) > div > div.content.ticket-check__ticket-check-container > div > div > hr');

    if (skirtukas && !document.querySelector('.newBanner')) {
        var newBanner = document.createElement('div');
        if (window.location.href.indexOf('/check-ticket/teleloto') > -1) {
            newBanner.setAttribute('class', 'newBanner teleloto');
            newBanner.innerHTML = '<div class="left"></div><div class="newBanner-inner"><div class="banner-title">Nepražiopsok, bilietus pirkti dar gali:</div><div id="demo"></div><a href="https://loto.lt/lt/teleloto" class="button-link">Rinkis bilietą ></a></div>';
        }
        if (window.location.href.indexOf('/check-ticket/vikingloto') > -1) {
            newBanner.setAttribute('class', 'newBanner vikingloto');
            newBanner.innerHTML = '<div class="left"></div><div class="newBanner-inner"><div class="banner-title">Nepražiopsok, bilietus pirkti dar gali:</div><div id="demo"></div><a href="https://loto.lt/lt/vikinglotto" class="button-link">Rinkis bilietą ></a></div>';
        }
        if (window.location.href.indexOf('/check-ticket/eurojackpot') > -1) {
            newBanner.setAttribute('class', 'newBanner eurojackpot');
            newBanner.innerHTML = '<div class="left"></div><div class="newBanner-inner"><div class="banner-title">Nepražiopsok, bilietus pirkti dar gali:</div><div id="demo"></div><a href="https://loto.lt/lt/eurojackpot" class="button-link">Rinkis bilietą ></a></div>';
        }

        insertAfter(newBanner, skirtukas);

        clearInterval(onlineInterval);

        var countDownDate, countDownDate1, countDownDate2, countDownDate3, countDownDate4, countDownDate5, countDownDate6, countDownDate7, countDownDate8, countDownDate9, countDownDate10;
        var countDownDate11, countDownDate12, countDownDate13, countDownDate14, countDownDate15, countDownDate16, countDownDate17, countDownDate18, countDownDate19, countDownDate20;
        var bonusTime;

        // Set the date we're counting down to
        if (window.location.href.indexOf('/check-ticket/teleloto/') > -1) {
            bonusTime = 6;
            countDownDate = new Date('July 26, 2022 19:30:00');
            countDownDate1 = new Date('July 26, 2022 19:30:00');
            countDownDate2 = new Date('July 31, 2022 23:24:00');
            countDownDate3 = new Date('August 06, 2022 23:24:00');
            countDownDate4 = new Date('August 12, 2022 23:24:00');
            countDownDate5 = new Date('August 20, 2022 23:24:00');
            countDownDate6 = new Date('August 27, 2022 23:24:00');
            countDownDate7 = new Date('September 03, 2022 23:24:00');
            countDownDate8 = new Date('September 10, 2022 23:24:00');
            countDownDate9 = new Date('September 17, 2022 23:24:00');
            countDownDate10 = new Date('September 24, 2022 23:24:00');
        }

        if (window.location.href.indexOf('/check-ticket/vikingloto') > -1) {
            bonusTime = 3;
            countDownDate = new Date('July 26, 2022 19:30:00');
            countDownDate1 = new Date('July 26, 2022 19:30:00');
            countDownDate2 = new Date('July 27, 2022 19:00:00');
            countDownDate3 = new Date('August 03, 2022 19:00:00');
            countDownDate4 = new Date('August 10, 2022 19:00:00');
            countDownDate5 = new Date('August 17, 2022 19:00:00');
            countDownDate6 = new Date('August 24, 2022 19:00:00');
            countDownDate6 = new Date('August 31, 2022 19:00:00');
            countDownDate7 = new Date('September 07, 2022 19:00:00');
            countDownDate8 = new Date('September 14, 2022 19:00:00');
            countDownDate9 = new Date('September 21, 2022 19:00:00');
            countDownDate10 = new Date('September 28, 2022 19:00:00');
        }

        if (window.location.href.indexOf('/check-ticket/eurojackpot') > -1) {
            bonusTime = 7;
            countDownDate = new Date('July 26, 2022 19:30:00');
            countDownDate1 = new Date('July 26, 2022 19:30:00');
            countDownDate2 = new Date('July 29, 2022 19:30:00');
            countDownDate3 = new Date('August 02, 2022 19:30:00');
            countDownDate4 = new Date('August 05, 2022 19:30:00');
            countDownDate5 = new Date('August 09, 2022 19:30:00');
            countDownDate6 = new Date('August 12, 2022 19:30:00');
            countDownDate7 = new Date('August 16, 2022 19:30:00');
            countDownDate8 = new Date('August 19, 2022 19:30:00');
            countDownDate9 = new Date('August 23, 2022 19:30:00');
            countDownDate10 = new Date('August 26, 2022 19:30:00');
            countDownDate11 = new Date('August 30, 2022 19:30:00');
            countDownDate12 = new Date('September 02, 2022 19:30:00');
            countDownDate13 = new Date('September 06, 2022 19:30:00');
            countDownDate14 = new Date('September 09, 2022 19:30:00');
            countDownDate15 = new Date('September 13, 2022 19:30:00');
            countDownDate16 = new Date('September 16, 2022 19:30:00');
            countDownDate17 = new Date('September 20, 2022 19:30:00');
            countDownDate18 = new Date('September 23, 2022 19:30:00');
            countDownDate19 = new Date('September 27, 2022 19:30:00');
            countDownDate20 = new Date('September 30, 2022 19:30:00');
        }

        function addHours(numOfHours, date) {
            date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

            return date.getTime();
        }

        var initiateFunction = function (endingDate) {
            var x = window.setInterval(function () {
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var distance = endingDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Display the result in the element with id="demo"
                document.getElementById('demo').innerHTML = '<div class="days">' + days + '</div>' + '<div class="separators">:</div>' + '<div class="hours">' + hours + '</div>' + '<div class="separators">:</div>' + '<div class="minutes">' + minutes + '</div>' + '<div class="separators">:</div>' + '<div class="seconds">' + seconds + '</div>';

                // If the count down is finished, write some text
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById('demo').innerHTML = 'EXPIRED';
                }
            }, 1000);
        };

        var now = new Date().getTime();


        if (now > addHours(bonusTime, countDownDate)) {
            initiateFunction(countDownDate2.getTime());
        }

        if (now > addHours(bonusTime, countDownDate2)) {
            initiateFunction(countDownDate3.getTime());
        }

        if (now > addHours(bonusTime, countDownDate3)) {
            initiateFunction(countDownDate4.getTime());
        }

        if (now > addHours(bonusTime, countDownDate4)) {
            initiateFunction(countDownDate5.getTime());
        }

        if (now > addHours(bonusTime, countDownDate5)) {
            initiateFunction(countDownDate6.getTime());
        }

        if (now > addHours(bonusTime, countDownDate6)) {
            initiateFunction(countDownDate7.getTime());
        }

        if (now > addHours(bonusTime, countDownDate7)) {
            initiateFunction(countDownDate8.getTime());
        }

        if (now > addHours(bonusTime, countDownDate8)) {
            initiateFunction(countDownDate9.getTime());
        }

        if (now > addHours(bonusTime, countDownDate9)) {
            initiateFunction(countDownDate10);
        }

        if (now > addHours(bonusTime, countDownDate10)) {
            initiateFunction(countDownDate11.getTime());
        }

        if (now > addHours(bonusTime, countDownDate11)) {
            initiateFunction(countDownDate12.getTime());
        }

        if (now > addHours(bonusTime, countDownDate12)) {
            initiateFunction(countDownDate13.getTime());
        }

        if (now > addHours(bonusTime, countDownDate13)) {
            initiateFunction(countDownDate14.getTime());
        }

        if (now > addHours(bonusTime, countDownDate14)) {
            initiateFunction(countDownDate15.getTime());
        }

        if (now > addHours(bonusTime, countDownDate15)) {
            initiateFunction(countDownDate16.getTime());
        }

        if (now > addHours(bonusTime, countDownDate16)) {
            initiateFunction(countDownDate17.getTime());
        }

        if (now > addHours(bonusTime, countDownDate17)) {
            initiateFunction(countDownDate18.getTime());
        }

        if (now > addHours(bonusTime, countDownDate18)) {
            initiateFunction(countDownDate19.getTime());
        }

        if (now > addHours(bonusTime, countDownDate19)) {
            initiateFunction(countDownDate20.getTime());
        }
    }
}, 1000);
