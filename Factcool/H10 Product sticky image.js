setTimeout(() => {
    var $ = jQuery;
    var productInfo = $('.product-info');
    var productDetails = $('.pd-details');
    var productGallery = $('.product-gallery');
    var productGalleryStickers = $('.product-gallery .pd-stickers');
    var productGalleryRow = $('.product-gallery > .row');
    var galleryContainer = document.createElement('div');

    galleryContainer.setAttribute('class', 'gallery-container');
    productGallery.append(galleryContainer);

    var galleryContainerDom = $('.gallery-container');
    galleryContainerDom.append(productGalleryStickers);
    galleryContainerDom.append(productGalleryRow);

    productInfo.append(productDetails);

    var productInfoHeight = $('.product-info').height();

    function stickyFilters() {
        var scrollTop = $(this).scrollTop();

        containerTop = scrollTop - 315;
        var maxHeight = productInfoHeight - containerTop;

        console.log('productInfoHeight', productInfoHeight);
        console.log('maxHeight', maxHeight);
        console.log('galleryContainerDom.height()', galleryContainerDom.height());

        if (
            containerTop > 0 &&
            containerTop < maxHeight &&
            scrollTop + containerTop - 200 < productInfoHeight
        ) {
            if (containerTop < 40) {
                galleryContainerDom.css('top', '0px');
            } else {
                galleryContainerDom.css('top', containerTop + 20 + 'px');
            }
        }
    }

    stickyFilters();

    $(window).scroll(function () {
        stickyFilters();
    });
}, 100);

// .product-detail-wrapper .slick-list,
// .product-detail-wrapper .slick-slider {
//     max-height: 570px;
// }

// .pd-img-thumbs img {
//     object-fit: cover;
//     height: 180px;
// }
// .product-gallery {
//     position: relative;
// }
// .product-gallery .slick-next {
//     bottom: -15px;
// }

// .product-gallery .slick-arrow {
//     background-color: rgb(166 166 166);
//     max-width: 120px;
// }
// .col-xs-100.col-lg-50.jq-description {
//     width: 100%;
// }

// .gallery-container {
//     position: absolute;
// }
