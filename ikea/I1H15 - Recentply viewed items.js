var $ = jQuery;

if ($(".productBox")) {
    var products = {
        image: "",
        title: "",
        description1: "",
        description2: "",
        price: "",
        oldPrice: "",
        lowerPrice: "",
        lowerPriceTag: false,
        dataItem: "",
        href: "",
        moreVariations: false,
    };

    products.image = $(".slideImg img").attr("src");
    products.title = $(".productBox .itemInfo h6").text();
    products.description1 = document.querySelectorAll(".itemInfo .itemFacts")[0].textContent;
    products.description2 = document.querySelectorAll(".itemInfo .itemFacts")[1].textContent;
    products.dataItem = $(".addToCart").attr("data-item");
    products.href = window.location.pathname;
    if ($(".productBox .itemNormalPrice")) {
        products.price = $(".productBox .itemNormalPrice span").first().text();
    }
    if ($(".productBox .itemOldPrice")) {
        products.oldPrice = $(".productBox .itemOldPrice .oldValue").text();
    }
    if ($(".productBox .itemLowerPrice")) {
        products.lowerPrice = $(".productBox .itemLowerPrice").text();
    }
    if (!!$(".productBox #lowerPrices").length) {
        products.lowerPriceTag = true;
    }
    if (!!$(".versions").length) {
        products.moreVariations = true;
    }

    var oldItems = localStorage.getItem("recentProducts") || [];
    var myVariable = products.dataItem;
    var myReg = new RegExp(myVariable + ".*");

    if (oldItems.length > 0) {
        if (oldItems.match(myReg)) {
        } else {
            oldItems = JSON.parse(localStorage.getItem("recentProducts"));
            oldItems.push(products);
            localStorage.setItem("recentProducts", JSON.stringify(oldItems));
        }
    } else {
        oldItems.push(products);
        localStorage.setItem("recentProducts", JSON.stringify(oldItems));
    }

    var containerHTML =
        '<div class="row productList"><div class="col-12"><h2 id="productDetails" class="text-center display-6 mb-5">Neseniai peržiūrėtos prekės</h2></div><div class="col-12"><div class="productList-inner"></div></div></div>';
    var newContainer = document.createElement("div");
    newContainer.setAttribute("class", "newSlider");
    newContainer.innerHTML = containerHTML;

    $(".template_detail").append(newContainer);
    $(".newSlider").insertBefore(document.querySelectorAll("hr.divider.benefits"));

    var storedProducts = JSON.parse(localStorage.recentProducts).reverse();
    var storedProductsList = storedProducts.forEach(function (product) {
        var slideLowerPriceBadge, moreVariations, prices;
        if (product.lowerPriceTag) {
            slideLowerPriceBadge =
                '<div class="itemBadges"><div id="lowerPrices" class="badge-lower-price"><span>Nauja<br>žemesnė<br>kaina </span></div></div>';
        } else {
            slideLowerPriceBadge = '<div class="itemBadges"></div>';
        }

        if (product.moreVariations) {
            moreVariations = '<p class="itemMore pb-1">Yra daugiau variantų</p>';
        } else {
            moreVariations = "<span></span>";
        }

        if (product.price) {
            prices =
                '<div class="itemPriceBox"><div class="itemPrice-wrapper"><p class="itemNormalPrice display-6"><span data-price="' +
                product.price +
                '">' +
                product.price +
                "</p></div></div>";
        } else {
            prices =
                '<div class="itemPriceBox"><div class="d-flex flex-column"><p class="itemOldPrice mb-2"><span>Ankstesnė kaina </span><span class="oldValue">' +
                product.oldPrice +
                '</span></p><div class="itemPrice-wrapper"><p class="itemLowerPrice display-6"><span data-price="' +
                product.lowerPrice +
                '">' +
                product.lowerPrice +
                "</span></p></div></div></div>";
        }
        var slideHTML =
            '<div class="card border-0 "><div class="card-header"><a href="' +
            product.href +
            '">' +
            slideLowerPriceBadge +
            '<div class="productImg"><img class="card-img-top"src="' +
            product.image +
            '"></div></a></div><div class="card-body"><div class="itemInfo"><a href="' +
            product.href +
            '"class="itemName"><h6 class="display-7" data-title="">' +
            product.title +
            '</h6></a><p class="itemFacts">' +
            product.description1 +
            '</p><p class="itemFacts">' +
            product.description2 +
            "</p>" +
            prices +
            moreVariations +
            '</div></div><div class="card-footer"><button class="btn btn-outline-gray-medium mx-auto btn-icon sidenavItem btn-wrap text-center quickLook w-100"data-item="' +
            product.dataItem +
            '" data-action="sidenav"><span class="icon-quickview"></span><span>Greita peržiūra</span></button></div></div>';
        var slide = document.createElement("div");
        slide.setAttribute("class", "card-body");
        slide.innerHTML = slideHTML;
        $(".newSlider .productList-inner").append(slide);
    });

    $(".newSlider .productList-inner").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    });
}
