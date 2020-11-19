setTimeout(() => {
    var $ = jQuery;
    var filtersAside = $('body > div.site-wrapper > section > div:nth-child(2) > aside.col-lg-20');

    if (filtersAside.length) {
        function stickyFilters() {
            var scrollTop = $(this).scrollTop();

            if (scrollTop > 390) {
                filtersAside.addClass('c-scrolled');
            } else if (scrollTop < 390) {
                filtersAside.removeClass('c-scrolled');
            }
        }

        stickyFilters();

        $(window).scroll(function () {
            stickyFilters();
        });
    }
}, 100);

/* .c-scrolled .categories-inner {
    position: fixed;
    top: 60px;
}

.c-scrolled ul.category-list > li.current > a {
    display: none;
}

.c-scrolled ul.expanded li,
.c-scrolled ul.category-list > li {
    display: none;
}

.c-scrolled ul.expanded li.current,
.c-scrolled ul.expanded li.current ul li,
.c-scrolled ul.category-list > li.current {
    display: block;
} */
