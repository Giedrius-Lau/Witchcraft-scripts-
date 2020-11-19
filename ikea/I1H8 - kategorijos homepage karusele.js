var $ = jQuery;
var categories = [
    {
        name: "Žaislai vaikams",
        href: "/lt/products/vaiku-ikea/3-7-metu-vaikams/zaislai-maziems-vaikams",
        src:
            "https://i.ibb.co/xLRCWJ4/link-to-the-kids-toys-and-play-category-page-b9ef184607a551e45325b07411e96226.webp",
    },
    { name: "Patalynė", href: "/lt/rooms/miegamasis/patalyne", src: "https://i.ibb.co/bvfmVky/bedding.webp" },
    {
        name: "Lauko baldų komplektai",
        href: "/lt/products/sodas-balkonas-terasa/lauko-baldu-komplektai",
        src: "https://i.ibb.co/qJq2QwT/outdoor.webp",
    },
    {
        name: "Komodos",
        href: "/lt/products/miegamasis/komodos-ir-kiti-baldai/komodos",
        src: "https://i.ibb.co/pPqGdS8/dressers.webp",
    },
    {
        name: "Dekoravimas",
        href: "/lt/products/dekoravimas",
        src: "https://i.ibb.co/TYHCD2G/home-decor.webp",
    },
    { name: "Virtuvė", href: "/lt/rooms/virtuve", src: "https://i.ibb.co/8nwXTRQ/kitchens.webp" },
    {
        name: "Svetainės daiktų laikymas",
        href: "/lt/rooms/svetaine/daiktu-laikymo-sistemos-svetaineje",
        src: "https://i.ibb.co/r2jXTSD/livingroom.webp",
    },
    {
        name: "Sofos",
        href: "/lt/products/svetaine/sofos-ir-foteliai",
        src: "https://i.ibb.co/N3xvDDT/sofas.webp",
    },
    {
        name: "Lovos ir sofos-lovos",
        href: "/lt/products/miegamasis/lovos-ir-sofos-lovos",
        src: "https://i.ibb.co/cDVDPrh/beds.webp",
    },
    {
        name: "Biuro stalai",
        href: "/lt/products/namu-biuras/biuro-stalai",
        src: "https://i.ibb.co/C6jQSRd/desks.webp",
    },
];

var showMore = document.createElement("a");
showMore.setAttribute("href", "https://www.ikea.lt/lt/page/inspirations");
showMore.setAttribute("class", "new-promo-link");
showMore.innerHTML = "<span>Daugiau įdėjų įkvėpimui</span>";
$(".card-deck").append(showMore);

var carouselBlock = document.createElement("div");
carouselBlock.setAttribute("class", "carousel-block container");
carouselBlock.innerHTML =
    "<h2 class='display-6 text-center'>Populiarios kategorijos</h2><div class='carousel-block__inner'></div>";
$(".homepage").append(carouselBlock);
$(".carousel-block").insertBefore(".newIdeasBlock");

categories.reverse().forEach(function (categorie) {
    var slideHTML =
        '<a href="' +
        categorie.href +
        '"  class="carousel-image" style="background-image: url(' +
        categorie.src +
        ')"><span>' +
        categorie.name +
        "</span></a>";
    var slide = document.createElement("div");
    slide.setAttribute("class", "carousel-card");
    slide.innerHTML = slideHTML;
    $(".carousel-block__inner").append(slide);
});

$(".carousel-block__inner").slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerMode: true,
    centerPadding: "30px",
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


// .bestDealsContainer .card-text {
//     display: none;
// }

// .carousel-block {
//     border-bottom: 1px solid #e5e5e5;
//     padding-bottom: 40px;
//     margin-bottom: 50px;
// }

// .carousel-image {
//     position: relative;
//     height: 300px;
//     background-size: cover;
//     margin-left: 1rem !important;
//     margin-right: 1rem !important;
//     display: block;
// }

// .carousel-image span {
//     position: absolute;
//     bottom: 30px;
//     left: 50%;
//     transform: translate(-50%);
//     background: #fff;
//     font-size: 11px;
//     line-height: 12px;
//     font-weight: 700;
//     color: #000;
//     padding: 0px 20px;
//     border-radius: 50px;
//     height: 35px;
//     min-width: 120px;
//     display: flex;
//     align-items: center;
//     text-align: center;
//     justify-content: center;
//     transition: 0.3s ease-in-out;
// }

// .carousel-image span:hover {
//     background: #eeeeee;
// }

// @media (max-width: 767px) {
//     .bestDealsContainer .dealBlock:nth-child(2),
//     .bestDealsContainer .dealBlock:nth-child(3),
//     .bestDealsContainer .dealBlock:nth-child(4) {
//         display: none;
//     }
    
// }

// @media (max-width: 575px) {
//     .new-promo-link {
//         margin-top: -37px;
//     }
// }