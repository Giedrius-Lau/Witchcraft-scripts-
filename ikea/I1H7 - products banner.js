var $ = jQuery;


      var promoBlock = document.createElement("div");
      promoBlock.setAttribute("class", "product-promo container");
      promoBlock.innerHTML =
        '<div class="promo-image"><a href="https://publications.ikea.lt/IKEA_Catalogue" class="promo-image__button">Daugiau idėjų IKEA kataloge</a><h2 class="show-mobile">Pakelkite savo namų biurą į kitą lygį</h2></div><div class="carousel-block"><h2>Pakelkite savo namų biurą į kitą lygį</h2><div class="carousel-products"><a href="/lt/products/namu-biuras/sedimieji-biuro-baldai/biuro-kedes-namams/kullaberg-sukamoji-kede-juoda-art-10320341" class="carousel-product"><img src="https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/246/0724693_PE734575_S3.jpg"><p class="product-description">Sukamoji kėdė</p><p class="product-title">KULLABERG</p><p class="product-price">49.99 €</p></a><a href="/lt/products/namu-biuras/sedimieji-biuro-baldai/biuro-kedes-namams/kullaberg-taburete-juoda-art-10363651" class="carousel-product"><img src="https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/273/0727388_PE735640_S3.jpg"><p class="product-description">Taburetė</p><p class="product-title">KULLABERG</p><p class="product-price">29.99 €</p></a><a href="/lt/products/namu-biuras/biuro-stalai/rasomieji-stalai-namams/kullaberg-rasomasis-stalas-juoda-spr-69162599" class="carousel-product"><img src="https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/365/0736574_PE740628_S3.jpg"><p class="product-description">Rašomasis stalas</p><p class="product-title">KULLABERG</p><p class="product-price">119.99 €</p></a></div><a href="https://publications.ikea.lt/IKEA_Catalogue" class="promo-image__button--blue">Daugiau idėjų IKEA kataloge</a></div>';

      document.querySelector(".homepage").appendChild(promoBlock);

      $('.product-promo').insertBefore(".bestDealsContainer");

      $(".carousel-products").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
          {
            breakpoint: 797,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      });
      


    //   .product-promo{width:100%;display:flex;margin:10px auto 80px}.promo-image{width:38%;padding-top:38%;background:url("https://i.ibb.co/0h6KS1y/page-en-lt-1598440877-0-20.png");position:relative;background-size:cover}.promo-image__button{position:absolute;bottom:30px;left:50%;transform:translate(-50%);white-space:nowrap;background:#fff;font-weight:700;color:#000;padding:10px 20px;border-radius:4px}.promo-image__button--blue{display:none}.promo-image .show-mobile{display:none}.carousel-block{padding:40px 20px 20px;width:62%;text-align:center}.carousel-products{margin-top:50px}.carousel-product{align-items:center;display:flex!important;flex-flow:column;color:#000!important}.carousel-product img{width:200px;height:200px}.carousel-products .product-description,.carousel-products .product-price,.carousel-products .product-title{margin-bottom:0}.carousel-products .product-price,.carousel-products .product-title{font-weight:700}@media (max-width:767px){.product-promo{display:block;margin:10px auto 40px}.promo-image{width:100%;padding-top:100%;box-shadow:inset 0 -100px 30px rgb(0 0 0 / 62%)}.carousel-block{width:100%;position:relative;padding:20px}.promo-image__button{display:none}.carousel-block h2{display:none}.promo-image .show-mobile{display:block;position:absolute;width:100%;bottom:30px;color:#fff;text-align:center;padding:0 20px}.carousel-products{margin-top:0}.promo-image__button--blue{display:block;margin-top:40px;white-space:nowrap;background:#0059aa;font-weight:700;color:#fff;padding:10px 20px;border-radius:4px}}