var boysLink = $(
    '#mask > div.container-fluid > div.main-menu-scroll-container > div > div.main-menu-inner > ul > li:nth-child(4) > ul > li > div.col-xs-100.col-lg-40.submenu-right > section.hp-promo.marginb16 > div > div:nth-child(1)'
);
var girlsLink = $(
    '#mask > div.container-fluid > div.main-menu-scroll-container > div > div.main-menu-inner > ul > li:nth-child(4) > ul > li > div.col-xs-100.col-lg-40.submenu-right > section.hp-promo.marginb16 > div > div:nth-child(2)'
);

boysLink.insertAfter(girlsLink);

var hostname = window.location.hostname;

var allLinks = document.querySelectorAll(
    '#mask > div.container-fluid > div.main-menu-scroll-container > div > div.main-menu-inner > ul > li '
);

$('a[href$="/index.php?route=product/category&path=719"]').parent().addClass('sport-link');

var url = window.location.pathname;
if (window.location.pathname == '/index.php') {
    url = window.location.pathname + window.location.search;
}
$(
    '#mask > div.container-fluid > div.main-menu-scroll-container > div > div.main-menu-inner > ul > li'
).each(function () {
    if ($('a', this).attr('href') == url) {
        if (!$(this).hasClass('sport-link')) {
            $(this).addClass('nav-displayed');
        }
    }
});
console.log(url);

document
    .querySelectorAll('li.menu-img .col-xs-100.col-lg-60.submenu-left .col-lg-33')
    .forEach(function (item) {
        item.classList.remove('col-lg-33');
    });

document
    .querySelectorAll('li.sport-link .col-xs-100.col-lg-60.submenu-left > div')
    .forEach(function (item) {
        item.classList.add('col-lg-33');
    });

document.querySelectorAll('.menu li ul.submenu a.submenu-title + ul').forEach(function (item) {
    var newMenu = document.createElement('div');
    newMenu.setAttribute('class', 'meniu-dropdown');
    item.parentNode.querySelector('a').append(newMenu);
    item.parentNode.querySelector('a div.meniu-dropdown').append(item);
});

allLinks.forEach(function (item) {
    if (
        item.classList.contains('menu-secondary') ||
        item.classList.contains('menu-home') ||
        item.classList.contains('mobile-menu-separator') ||
        item.classList.contains('sport-link')
    ) {
        return;
    }
    var firstPromoBox = item.querySelector(
        'ul > li > div.col-xs-100.col-lg-40.submenu-right > section > div > .hp-promo-box:nth-child(1)'
    );
    var secondPromoBox = item.querySelector(
        'ul > li > div.col-xs-100.col-lg-40.submenu-right > section > div > .hp-promo-box:nth-child(2)'
    );
    var thirdPromoBox = item.querySelector(
        'ul > li > div.col-xs-100.col-lg-40.submenu-right > section.hp-slider'
    );

    if (firstPromoBox !== null) {
        firstPromoBox.setAttribute('class', 'meniu-dropdown-banner');
    }
    if (secondPromoBox !== null) {
        secondPromoBox.setAttribute('class', 'meniu-dropdown-banner');
    }
    if (thirdPromoBox !== null) {
        thirdPromoBox.setAttribute('class', 'meniu-dropdown-banner');
    }

    var firstMenuItem = item.querySelectorAll('.submenu-title div.meniu-dropdown')[0];
    var secondMenuItem = item.querySelectorAll('.submenu-title div.meniu-dropdown')[1];
    var thirdMenuItem = item.querySelectorAll('.submenu-title div.meniu-dropdown')[2];

    if (item.querySelectorAll('.submenu-title div.meniu-dropdown')[3] !== undefined) {
        var menuItem4 = item.querySelectorAll('.submenu-title div.meniu-dropdown')[3];
    }
    if (item.querySelectorAll('.submenu-title div.meniu-dropdown')[4] !== undefined) {
        var menuItem5 = item.querySelectorAll('.submenu-title div.meniu-dropdown')[4];
    }
    if (item.querySelectorAll('.submenu-title div.meniu-dropdown')[5] !== undefined) {
        var menuItem6 = item.querySelectorAll('.submenu-title div.meniu-dropdown')[5];
    }
    if (item.querySelectorAll('.submenu-title div.meniu-dropdown')[6] !== undefined) {
        var menuItem7 = item.querySelectorAll('.submenu-title div.meniu-dropdown')[6];
    }
    if (item.querySelectorAll('.submenu-title div.meniu-dropdown')[7] !== undefined) {
        var menuItem8 = item.querySelectorAll('.submenu-title div.meniu-dropdown')[7];
    }
    $(firstMenuItem).append(firstPromoBox);
    $(secondMenuItem).append(secondPromoBox);
    $(thirdMenuItem).append(thirdPromoBox);
    $(menuItem4).append(thirdPromoBox.cloneNode(true));
    $(menuItem5).append(thirdPromoBox.cloneNode(true));
    $(menuItem6).append(thirdPromoBox.cloneNode(true));
    $(menuItem7).append(thirdPromoBox.cloneNode(true));
    $(menuItem8).append(thirdPromoBox.cloneNode(true));
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

            if (event.target.classList.contains('sport-link')) {
                return;
            }

            event.target.classList.add('nav-displayed');
        },
        false
    );
});

var sportImage = document.querySelector(
    '.sport-link .submenu-right > section.hp-promo.marginb16 > div > div:nth-child(1) > div.hp-promo-box-img'
);
var newContainer = document.createElement('div');
newContainer.setAttribute('class', 'col-lg-33 new-container-for-image');
var sportList = document.querySelector('.sport-link .submenu-left');

$(sportList).append(newContainer);
$('.new-container-for-image').append(sportImage);
document.querySelector('.sport-link .submenu-right').remove();

var bannerLink1 =
    hostname === 'lt.factcool.com'
        ? 'https://lt.factcool.com/aksesuarai/aksesuarai-1?manufacturer%5B%5D=139639&sort=top&_=1606139319502'
        : hostname === 'bg.factcool.com'
        ? 'https://cs.factcool.com/doplnky/bizuterie?manufacturer%5B%5D=139639&sort=top&_=1606139363544'
        : hostname === 'cs.factcool.com'
        ? 'https://bg.factcool.com/aksesoari/bizhuta?manufacturer%5B%5D=139639&sort=top&_=1606139385663'
        : '';

var bannerLink2 =
    hostname === 'lt.factcool.com'
        ? 'https://lt.factcool.com/aksesuarai/aksesuarai-1?manufacturer%5B%5D=141710&sort=top&_=1606139319504'
        : hostname === 'bg.factcool.com'
        ? 'https://cs.factcool.com/doplnky/bizuterie?manufacturer%5B%5D=141710&sort=top&_=1606139363546'
        : hostname === 'cs.factcool.com'
        ? 'https://bg.factcool.com/aksesoari/bizhuta?manufacturer%5B%5D=141710&sort=top&_=1606139532018'
        : '';

var bannerSrc1 = 'https://semexit.s3-eu-west-1.amazonaws.com/Factcool/Group.png';
var bannerSrc2 = 'https://semexit.s3-eu-west-1.amazonaws.com/Factcool/Group+2.png';

var banner1 = document.createElement('div');
banner1.setAttribute('class', 'hp-slider-inner');
banner1.innerHTML =
    '<a class=' +
    bannerLink1 +
    ' title=""></a> <img class=" obanner-desktop" src=' +
    bannerSrc1 +
    ' alt="">';

var banner2 = document.createElement('div');
banner2.setAttribute('class', 'hp-slider-inner');
banner2.innerHTML =
    '<a class=' +
    bannerLink2 +
    ' title=""></a> <img class=" obanner-desktop" src=' +
    bannerSrc2 +
    ' alt="">';

var bannerPlace = document.querySelector(
    '#mask > div.container-fluid > div.main-menu-scroll-container > div > div.main-menu-inner > ul > li:nth-child(5) > ul > li > div.col-xs-100.col-lg-60.submenu-left > div:nth-child(2) > a > div > div'
);

bannerPlace.append(banner1);
bannerPlace.append(banner2);
bannerPlace.parentNode.classList.add('wider-container');
$(
    '#mask > div.container-fluid > div.main-menu-scroll-container > div > div.main-menu-inner > ul > li:nth-child(5) > ul > li > div.col-xs-100.col-lg-60.submenu-left > div:nth-child(2) > a > div > div > div.hp-promo-box-img'
).remove();

var other =
    hostname === 'lt.factcool.com'
        ? 'Kita'
        : hostname === 'bg.factcool.com'
        ? 'Други'
        : hostname === 'cs.factcool.com'
        ? 'Ostatní'
        : '';

var newMenuItem = document.createElement('div');
newMenuItem.setAttribute('class', 'new-menu-item');
newMenuItem.innerHTML =
    '<a href="/aksesuarai/zygiui-gamtoje" class="submenu-title">' +
    other +
    '<div class="meniu-dropdown menu-dropdown-other"><ul></ul></div></a>';

var submenuJuosta = $(
    '#mask > div.container-fluid > div.main-menu-scroll-container > div > div.main-menu-inner > ul > li:nth-child(5) > ul > li > div.col-xs-100.col-lg-60.submenu-left'
);
submenuJuosta.append(newMenuItem);
$(
    '#mask > div.container-fluid > div.main-menu-scroll-container > div > div.main-menu-inner > ul > li.menu-img.nav-displayed > ul > li > div.col-xs-100.col-lg-60.submenu-left > div:nth-child(4) > a > div > section'
).appendTo('.menu-dropdown-other');

var nature = $(
    '#mask > div.container-fluid > div.main-menu-scroll-container > div > div.main-menu-inner > ul > li:nth-child(5) > ul > li > div.col-xs-100.col-lg-60.submenu-left > div:nth-child(3) > a'
);
var more = $(
    '#mask > div.container-fluid > div.main-menu-scroll-container > div > div.main-menu-inner > ul > li:nth-child(5) > ul > li > div.col-xs-100.col-lg-60.submenu-left > div:nth-child(4) > a'
);
var home = $(
    '#mask > div.container-fluid > div.main-menu-scroll-container > div > div.main-menu-inner > ul > li:nth-child(5) > ul > li > div.col-xs-100.col-lg-60.submenu-left > div:nth-child(5) > a'
);

nature.appendTo('.new-menu-item > a > .meniu-dropdown > ul');
more.appendTo('.new-menu-item > a > .meniu-dropdown > ul');
home.appendTo('.new-menu-item > a > .meniu-dropdown > ul');
