setTimeout(() => {
    var $ = jQuery;

    if ($('.filters-top').length) {
        var screenWidth = $(window).width();

        function stickyFilters() {
            var scrollTop = $(this).scrollTop();

            if (screenWidth < 768) {
                if (scrollTop > 250) {
                    $('.filters-top').addClass('scrolled');
                } else if (scrollTop < 250) {
                    $('.filters-top').removeClass('scrolled');
                }
            } else if (screenWidth > 1199) {
                if (scrollTop > 420) {
                    $('.filters-top').addClass('scrolled');
                } else if (scrollTop < 420) {
                    $('.filters-top').removeClass('scrolled');
                }
            } else if (screenWidth > 767 && screenWidth < 1198) {
                if (scrollTop > 330) {
                    $('.filters-wrapper').addClass('scrolled');
                } else if (scrollTop < 330) {
                    $('.filters-wrapper').removeClass('scrolled');
                }
            }
        }

        stickyFilters();

        $(window).scroll(function () {
            stickyFilters();
        });
    }
}, 100);

// @media (min-width: 1980px) {
//     .filters-top.scrolled {
//         padding-left: 555px;
//     }
// }

// h1.logo {
//     padding-left: 26px;
// }

// .filters-wrapper.scrolled {
//     position: fixed;
//     top: 102px;
//     left: 0;
//     z-index: 0;
//     background: #ffffff;
//     right: 0;
//     padding: 10px 15px 0px;
//     box-shadow: 0 0px 20px 0 #00000069;
// }

// .filters-wrapper.scrolled .filter-order-button,
// .filters-wrapper.scrolled .filters-wrapper-inner {
//     border: 0;
// }

// .filters-top.scrolled {
//     position: fixed;
//     top: 45px;
//     left: 0;
//     z-index: 0;
//     background: #ffffff;
//     right: 0;
//     padding: 5px 10px;
//     padding-left: 4%;
//     padding-right: 4%;
//     box-shadow: 0 0px 20px 0 #00000069;
// }

// @media screen and (max-width: 1199px) and (min-width: 320px) {
//     .container-fluid {
//         overflow: hidden;
//     }
// }

// @media (min-width: 1199px) {
//     .filters-top.scrolled {
//         position: fixed;
//         top: 50px;
//         left: 0;
//         z-index: 0;
//         background: #ffffff;
//         right: 0;
//         margin: 0 56px;
//         padding: 5px 0;
//         padding-left: 19%;
//         box-shadow: 0 0px 20px 0 #00000069;
//     }

//     .filters-top.scrolled::before {
//         content: '';
//         height: 50px;
//         position: absolute;
//         top: -1px;
//         bottom: 0;
//         width: 200vw;
//         left: -50vw;
//         right: 0;
//         margin: 0 auto;
//         background: #ffffff;
//         box-shadow: 0 0px 20px 0 #00000069;
//     }
// }

// @media (min-width: 1199px) and (max-width: 1410px) {
//     .filters-top.scrolled .filter-title {
//         font-size: 11px;
//         margin-right: 0;
//     }

//     .scrolled .filter-new-product label,
//     .scrolled .filter-in-stock label {
//         font-size: 11px;
//     }

//     .scrolled .products-order-button select {
//         font-size: 11px;
//     }
// }

// .scrolled .checkbox input + span {
//     position: relative;
//     top: 3px;
// }

// .filters-mobile.scrolled {
//     position: fixed;
//     top: 50px;
//     left: 0;
//     z-index: 0;
//     background: #ffffff;
//     right: 0;
//     margin: 0 56px;
//     padding: 5px 0;
//     padding-left: 19%;
//     box-shadow: 0 0px 20px 0 #00000069;
// }

// .main-menu-scroll-container.nav-scrolled {
//     border-bottom: 1px solid #0000001a;
// }

// select.product-list-sort.resizeselect {
//     cursor: pointer;
// }

// .category .col-lg-25 {
//     z-index: -1;
// }

// @media (min-width: 1200px) {
//     .main-menu {
//         border-bottom: 1px solid #b5b3b34d;
//     }

//     .main-menu-scroll-container::before {
//         content: '';
//         position: absolute;
//         top: 0;
//         bottom: 0;
//         width: 200vw;
//         left: -50vw;
//         right: 0;
//         margin: 0 auto;
//         background: #ffffff;
//     }
// }
