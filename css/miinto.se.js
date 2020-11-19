var categoriesTitle = 'Populära kategorier';
var categoriesData = [
    {
        categoryTitle: 'Jackor',
        categoryLink: 'https://www.miinto.se/dam-jackor',
        categoryImage:
            'https://semexit.s3-eu-west-1.amazonaws.com/Miinto/CategoryTest_winterJackets1.jpg',
    },
    {
        categoryTitle: 'Kappor',
        categoryLink: 'https://www.miinto.se/dam-kappor',
        categoryImage: 'https://semexit.s3-eu-west-1.amazonaws.com/Miinto/CategoryTest_Coats1.jpg',
    },
    {
        categoryTitle: 'Boots & Vinterskor',
        categoryLink:
            'https://miinto.se/all?categories[]=dam-stovlar&categories[]=dam-boots&categories[]=dam-gummistovlar&categories[]=dam-vinterskor',
        categoryImage: 'https://semexit.s3-eu-west-1.amazonaws.com/Miinto/CategoryTest_boots1.jpg',
    },
    {
        categoryTitle: 'Sneakers',
        categoryLink: 'https://www.miinto.se/dam-sneakers',
        categoryImage:
            'https://semexit.s3-eu-west-1.amazonaws.com/Miinto/CategoryTest_Sneakers1.jpg',
    },
    {
        categoryTitle: 'Väskor',
        categoryLink: 'https://www.miinto.se/dam-vaskor',
        categoryImage: 'https://semexit.s3-eu-west-1.amazonaws.com/Miinto/CategoryTest_Bags1.jpg',
    },
    {
        categoryTitle: 'Blusar och Skjortor',
        categoryLink: 'https://www.miinto.se/dam-blusar-skjortor',
        categoryImage:
            'https://semexit.s3-eu-west-1.amazonaws.com/Miinto/CategoryTest_Blouses1.jpg',
    },
    {
        categoryTitle: 'Klänningar',
        categoryLink: 'https://www.miinto.se/dam-klanningar',
        categoryImage:
            'https://semexit.s3-eu-west-1.amazonaws.com/Miinto/CategoryTest_Dresses1.jpg',
    },
    {
        categoryTitle: 'Tröjor & Koftor',
        categoryLink: 'https://www.miinto.se/dam-koftor',
        categoryImage:
            'https://semexit.s3-eu-west-1.amazonaws.com/Miinto/CategoryTest_Knitwear1.jpg',
    },
];

var uspHTML =
    '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="15" height="15" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0" transform="scale(0.00195312)"/></pattern><image id="image0" width="512" height="512" xlink:href="data:image/png;base64,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"/></defs></svg><p>FRI FRAKT VID KÖP ÖVER 499 SEK</p><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="15" height="15" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0" transform="scale(0.00195312)"/></pattern><image id="image0" width="512" height="512" xlink:href="data:image/png;base64,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"/></defs></svg><p>FRIA RETURER INOM 14 DAGAR</p>';
var usp = document.createElement('div');
usp.setAttribute('class', 'new-ups');
usp.innerHTML = uspHTML;

document.querySelector('.p-listing-breadcrumbs').appendChild(usp);

var carouselBlock = document.createElement('div');
carouselBlock.setAttribute('class', 'new-banner');
carouselBlock.innerHTML =
    '<h2 class="new-category-title"><span>' +
    categoriesTitle +
    '</span></h2><div class="new-banner__inner"></div>';
document.querySelector('.p-listing__head').append(carouselBlock);

categoriesData.forEach(function (categorie) {
    var slideHTML =
        '<a href="' +
        categorie.categoryLink +
        '"  class="carousel-image" style="background-image: url(' +
        categorie.categoryImage +
        ')"><div>' +
        categorie.categoryTitle +
        '</div></a>';
    var slide = document.createElement('div');
    slide.setAttribute('class', 'carousel-card');
    slide.innerHTML = slideHTML;
    document.querySelector('.new-banner__inner').append(slide);
});

jQuery('.new-banner__inner').slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
        {
            breakpoint: 797,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

document.querySelector('.slick-prev').innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.5 24.3" id="arrowup"><path d="M0 22.3l2.1 2L22.3 4.2l20.1 20.1 2.1-2L22.3 0z"></path></svg>';

document.querySelector('.slick-next').innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.5 24.3" id="arrowup"><path d="M0 22.3l2.1 2L22.3 4.2l20.1 20.1 2.1-2L22.3 0z"></path></svg>';

/* .new-category-title {
    text-align: center;
    position: relative;
}

.new-category-title span {
    background: #ffffff;
    position: relative;
    padding: 0 20px;
}

.new-category-title::before {
    content: '';
    position: absolute;
    left: 0;
    top: 20px;
    height: 1px;
    width: 100%;
    background: #000000;
}

.new-banner {
    margin-bottom: 20px;
}

.new-banner__inner.slick-initialized.slick-slider {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.slick-arrow {
    border: 0;
    background: transparent;
    height: 40px;
    outline: 0;
}
.slick-arrow svg {
    width: 30px;
}
.new-banner__inner {
    max-height: 215px;
    overflow: hidden;
}
.slick-prev svg {
    transform: rotate(-90deg);
}
.slick-next svg {
    transform: rotate(90deg);
}

.carousel-card {
    height: 215px;
    position: relative;
    padding: 0 5px;
    text-align: center;
    max-width: 200px;
}

a.carousel-image {
    background-size: cover;
    width: 100%;
    height: 170px;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: flex-end;
    text-decoration: none;
}

.carousel-card div {
    height: 42px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: 700;
    position: relative;
    background: #ffffff;
    bottom: -42px;
}

.new-ups {
    float: right;
    display: flex;
    align-items: center;
}

.new-ups p {
    margin: 0;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.63);
    letter-spacing: -1px;
}

.new-ups svg {
    margin: 0 5px 0 30px;
}

.c-listing-pagination__link,
.c-listing-pagination__separator,
.c-listing-pagination__link-disabled {
    border: 1px solid;
    margin-left: 15px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-weight: 400;
}

.p-listing__pagination-wrapper .c-listing-pagination__link--prev,
.p-listing__pagination-wrapper .c-listing-pagination__separator--prev,
.p-listing__pagination-wrapper .c-listing-pagination__link-disabled--prev,
.p-listing__pagination-wrapper .c-listing-pagination__link--next,
.p-listing__pagination-wrapper .c-listing-pagination__separator--next,
.p-listing__pagination-wrapper .c-listing-pagination__link-disabled--next {
    display: none !important;
}

.p-listing__pagination-wrapper.p-listing__pagination-wrapper--bottom .c-listing-pagination__link--prev,
.p-listing__pagination-wrapper.p-listing__pagination-wrapper--bottom .c-listing-pagination__separator--prev,
.p-listing__pagination-wrapper.p-listing__pagination-wrapper--bottom
    .c-listing-pagination__link-disabled--prev,
.p-listing__pagination-wrapper.p-listing__pagination-wrapper--bottom .c-listing-pagination__link--next,
.p-listing__pagination-wrapper.p-listing__pagination-wrapper--bottom .c-listing-pagination__separator--next,
.p-listing__pagination-wrapper.p-listing__pagination-wrapper--bottom
    .c-listing-pagination__link-disabled--next {
    display: block !important;
    width: 124px;
    border: 0;
    background-color: #e5e5e5;
    padding: 0 15px;
}
a.c-listing-pagination__link.c-listing-pagination__link--prev {
    background-position: 10%;
    background-size: 7px;
    text-align: right;
    margin-right: 70px !important;
}
a.c-listing-pagination__link.c-listing-pagination__link--next {
    text-align: left;
    background-position: 90%;
    background-size: 8px;
    margin-left: 70px !important;
}

a.c-listing-pagination__link.c-listing-pagination__link--prev::before {
    content: 'Previous page';
    color: #000000;
    font-weight: 400;
}

a.c-listing-pagination__link.c-listing-pagination__link--next::before {
    content: 'Next page';
    color: #000000;
    font-weight: 400;
}

a.c-listing-pagination__link.c-listing-pagination__link--prev:hover,
a.c-listing-pagination__link.c-listing-pagination__link--next:hover {
    background-color: #c4c4c4;
    background-color: #c4c4c4;
    opacity: 1;
    border: 0;
}

.p-listing__pagination-wrapper--bottom {
    width: 100%;
}

.p-listing__pagination-wrapper--bottom .c-listing-pagination {
    justify-content: center;
} */
