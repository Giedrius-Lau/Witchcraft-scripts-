setTimeout(() => {
    var allLinks = document.querySelectorAll(
        '#mask > div.container-fluid > div.main-menu-scroll-container > div > div.main-menu-inner > ul > li '
    );

    document
        .querySelector(
            '#mask > div.container-fluid > div.main-menu-scroll-container > div > div.main-menu-inner > ul > li:nth-child(2)'
        )
        .classList.add('nav-displayed');

    document
        .querySelectorAll('.col-xs-100.col-lg-60.submenu-left .col-lg-33')
        .forEach(function (item) {
            item.classList.remove('col-lg-33');
        });

    document.querySelectorAll('.menu li ul.submenu a.submenu-title + ul').forEach(function (item) {
        item.parentNode.querySelector('a').append(item);
    });

    allLinks.forEach(function (item) {
        if (item.classList.contains('menu-secondary') || item.classList.contains('menu-home')) {
            return;
        }

        item.addEventListener(
            'mouseenter',
            function (event) {
                allLinks.forEach(function (link) {
                    if (link.classList.contains('nav-displayed')) {
                        link.classList.remove('nav-displayed');
                    }
                });
                console.log(event.target);
                event.target.classList.add('nav-displayed');
            },
            false
        );
    });
}, 1000);
