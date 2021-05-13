function insertBefore(element, destination) {
    destination.parentNode.insertBefore(element, destination);
}

setTimeout(() => {
    var prisijungti =
        document.querySelector('div.TopBar-topBarContainer-1E0 > button') ??
        document.querySelector('div.TopBar-topBarContainer-1E0 > div.TopBar-buttonContainer-3dd > a.TopBar-button-3MC');
    var krepselis = document.querySelector('div.Cart-cartContainer-1zC > div');

    insertBefore(prisijungti.cloneNode(true), krepselis);

    var newPridijungti = document.querySelector('div.HeaderContent-headerContentContainer-2N9 > div.Cart-cartContainer-1zC > button');

    newPridijungti.addEventListener('click', function () {
        prisijungti.click();
    });

    var header = document.querySelector('#root > header.header-desktopHeader-1gy.show-from-desktop');
    var button = document.createElement('div');
    button.setAttribute('class', 'new-meniu-button');
    header.append(button);
    var addedButton = document.querySelector('.new-meniu-button');

    addedButton.addEventListener('click', function () {
        var meniuList = document.querySelector('#desktopMenu');
        var maskRoot = document.querySelector('.mask-root-1oJ');

        if (maskRoot.classList.contains('mask-root_active-3D9') === false) {
            maskRoot.classList.add('mask-root_active-3D9');
        } else {
            maskRoot.classList.remove('mask-root_active-3D9');
        }

        if (meniuList.classList.contains('displayed-meniu') === false) {
            meniuList.classList.add('displayed-meniu');
        } else {
            meniuList.classList.remove('displayed-meniu');
        }
    });

    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;

        if (currentScrollPos > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
}, 1000);
