// Desktop

var cvInterval = window.setInterval(function () {
    var button = document.querySelector('.vacancy-info__apply span');

    if (button) {
        button.textContent = 'Kandidatuoti';
        clearInterval(cvInterval);
    }
}, 250);

// Mobile

var cvIntervalMobile = window.setInterval(function () {
    var button = document.querySelector('.sidebar__dock-content span');

    if (button) {
        button.textContent = 'Kandidatuoti';
        clearInterval(cvIntervalMobile);
    }
}, 250);
