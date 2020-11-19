setTimeout(() => {
    var heading = 'brands';
    var heading =
        window.location.hostname === 'lt.factcool.com'
            ? 'POPULIARIAUSI PREKIŲ ŽENKLAI'
            : window.location.hostname === 'bg.factcool.com'
            ? 'ТОП МАРКИ'
            : window.location.hostname === 'cs.factcool.com'
            ? 'TOP ZNAČKY'
            : 'See all brands';

    var brands = [
        {
            href: '/adidas',
            src:
                'https://semexit.s3-eu-west-1.amazonaws.com/Factcool/1-q-87-bph-htyb-5-y-xl-4-u-4-fze-2-g%402x.png',
        },
        {
            href: '/lee-cooper',
            src: 'https://semexit.s3-eu-west-1.amazonaws.com/Factcool/lee-cooper%402x.png',
        },

        {
            href: '/trendyol',
            src:
                'https://semexit.s3-eu-west-1.amazonaws.com/Factcool/4-a-6397987-a-4-d-783792-b-0-b-9-bccbb-67-edd%402x.png',
        },
        {
            href: '/ombre',
            src:
                'https://semexit.s3-eu-west-1.amazonaws.com/Factcool/20201015085645-ombre%402x.png',
        },
        {
            href: '/pierre-cardin',
            src:
                'https://semexit.s3-eu-west-1.amazonaws.com/Factcool/csm-logo-pierre-cardin-9-ab-65-b-45-fb%402x.png',
        },
        {
            href: '/nike',
            src:
                'https://semexit.s3-eu-west-1.amazonaws.com/Factcool/33-e-63-d-5-adb-0-da-6-b-303-a-83901-c-8-e-8463-a%402x.png',
        },
        {
            href: '/calvin-klein',
            src: 'https://semexit.s3-eu-west-1.amazonaws.com/Factcool/Calvin-Klein.png',
        },
        {
            href: '/puma',
            src: 'https://semexit.s3-eu-west-1.amazonaws.com/Factcool/Puma.png',
        },
        {
            href: '/vans',
            src: 'https://semexit.s3-eu-west-1.amazonaws.com/Factcool/Vans.png',
        },
        {
            href: '/guess',
            src: 'https://semexit.s3-eu-west-1.amazonaws.com/Factcool/guess.png',
        },
        {
            href: '/karrimor',
            src: 'https://semexit.s3-eu-west-1.amazonaws.com/Factcool/karrimor.png',
        },
    ];

    var promoBanner = document.querySelector(
        'body > div.site-wrapper > section > section.hp-promo.margint16'
    );

    var brandsList = document.createElement('div');
    brandsList.setAttribute('class', 'container-fluid');
    brandsList.innerHTML =
        '<div class="brandlist-inner"><h2>' +
        heading +
        '</h2><div class="brandlist-inner-images"></div></div>';

    promoBanner.parentNode.insertBefore(brandsList, promoBanner);

    brands.forEach(function (brand) {
        var link = document.createElement('div');
        link.setAttribute('class', 'brand-card');
        link.innerHTML =
            '<a href=' +
            brand.href +
            '><div style="background-image:url(' +
            brand.src +
            ');"></div></a>';
        document.querySelector('.brandlist-inner-images').appendChild(link);
    });

    setTimeout(() => {
        jQuery('.brandlist-inner-images').slick({
            dots: false,
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 2,
            arrows: true,
            responsive: [
                {
                    breakpoint: 797,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                    },
                },
            ],
        });
    }, 300);
}, 300);

/* .brandlist-inner h2 {
    font-size: 15px;
    font-weight: bold;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    margin-top: 30px;
    margin-bottom: 50px;
}

.brand-card {
    height: 50px;
    margin: 20px 0px;
    padding: 0;
    border-radius: 3px;
    background-color: #ffffff;
}

.brand-card a {
    margin-right: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.brand-card a div {
    background-size: contain;
    background-repeat: no-repeat;
    height: 25px;
    width: 73px;
    background-position: center;
}

.slick-prev::before {
    content: 'prev';
    font-family: swiper-icons;
    font-size: var(--swiper-navigation-size);
    text-transform: none !important;
    letter-spacing: 0;
    text-transform: none;
    font-variant: initial;
    line-height: 1;
    font-weight: 700;
    color: #bdbdbd;
}
.slick-next::before {
    content: 'next';
    font-family: swiper-icons;
    font-size: var(--swiper-navigation-size);
    text-transform: none !important;
    letter-spacing: 0;
    text-transform: none;
    font-variant: initial;
    line-height: 1;
    font-weight: 700;
    color: #bdbdbd;
}

@media screen and (max-width: 767px) {
    .slick-slide img {
        vertical-align: inherit;
        width: inherit;
        height: inherit;
        max-height: inherit;
        max-width: inherit;
        object-fit: inherit;
        display: inherit;
        margin: inherit;
    }

    .brandlist-inner h2 {
        margin-bottom: 50px;
    }
    .brand-card a {
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 3px;
    }
}

@media screen and (min-width: 768px) {
    .brandlist-inner-images {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 50px 30px;
    }

    .brand-card a div {
        width: 100px;
        height: 35px;
    }
} */
