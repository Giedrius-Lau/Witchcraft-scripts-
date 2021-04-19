// var selector = {
//     idejos: document.querySelectorAll('.headerMenuProducts__menu--item')[2],
//     naujienos: document.querySelectorAll('.headerMenuProducts__menu--item')[4],
//     katalogas: document.querySelectorAll('.headerMenuProducts__menu--item')[5],
//     balduPlanavimas: document.querySelectorAll('.headerMenuProducts__menu--item')[6],
// };

// var menuHTML =
//     '<a class="nav-link dropdown-toggle outstanding" href="#" id="newMenuDropdown" role="button" data-toggle="dropdown"aria-haspopup="true" aria-expanded="false"><span>Įkvėpimui</span></a><div class="dropdown-menu custom-menu" aria-labelledby="newMenuDropdown"><div class="container"><div class="rooms-custom"><div class="dropdown-item__image1"><a href="https://publications.ikea.lt/IKEA_Catalogue" class="dropdown-item__a">IKEA katalogas</a></div><div class="dropdown-item__image2"><a href="/lt/page/inspirations" class="dropdown-item__a">Idėjos</a></div><div class="dropdown-item__image3"><a href="/lt/page/newitems" class="dropdown-item__a">Naujienos</a></div><div class="dropdown-item__image3"><a href="/lt/planavimo-programos" class="dropdown-item__a">Baldų planavimas</a></div></div></div></div></div>';
// var newMenuElement = document.createElement('li');
// newMenuElement.setAttribute('class', 'headerMenuProducts__menu--item nav-item dropdown servicesMenu customMenu');
// newMenuElement.innerHTML = menuHTML;

// $('.headerMenuProducts__menu').append(newMenuElement);
// $('.customMenu').insertBefore(selector.idejos);

// if (selector.idejos) {
//     selector.idejos.remove();
// }
// if (selector.naujienos) {
//     selector.naujienos.remove();
// }
// if (selector.katalogas) {
//     selector.katalogas.remove();
// }
// if (selector.balduPlanavimas) {
//     selector.balduPlanavimas.remove();
// }
// document.querySelector('.dropdown-item__image1').addEventListener('click', function () {
//     window.location = '//publications.ikea.lt/IKEA_Catalogue';
// });

// document.querySelector('.dropdown-item__image2').addEventListener('click', function () {
//     window.location = '/page/inspirations';
// });

// document.querySelector('.dropdown-item__image3').addEventListener('click', function () {
//     window.location = '/page/newitems';
// });

// document.querySelector('.dropdown-item__image3').addEventListener('click', function () {
//     window.location = '/lt/planavimo-programos';
// });

// if (!$('.scrolled').length) {
//     $('.headerMain .breadcrumbContainer').addClass('scrolled');
// }
// var lastScrollTop = 0;

// $(window).scroll(function () {
//     var scrollTop = $(this).scrollTop();

//     if (scrollTop > lastScrollTop) {
//         if ($('.container-show')) {
//             $('#header_searcher_mobile_input_container').addClass('container-show');
//             $('.headerMain .breadcrumbContainer').removeClass('scrolled');
//         }
//     } else {
//         $('#header_searcher_mobile_input_container').removeClass('container-show');
//         $('.headerMain .breadcrumbContainer').addClass('scrolled');
//     }

//     lastScrollTop = scrollTop;
// });
