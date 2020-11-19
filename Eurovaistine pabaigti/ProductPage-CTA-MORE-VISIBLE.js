console.log("prasideda");
setTimeout(() => {
  var discountContainer = "<div class='discount-container'></div>"
  var discountIcon = document.createElement("div");
  discountIcon.setAttribute("class", "header-image");
  discountIcon.innerHTML = "<img src='https://svgshare.com/i/PGv.svg' title='' />";

  s = {
    prices: document.querySelector('.product-prices'),
    discount: document.querySelector('.product-discount'),
    content: document.querySelector('.product-content'),
    offerButton: document.querySelector('.nav .offer')
  }

  s.content.insertBefore(s.prices, s.discount)
  s.prices.insertAdjacentHTML( 'beforeend', discountContainer );
  document.querySelector('.discount-container').appendChild(s.discount)
  s.offerButton.prepend(discountIcon)

}, 1000);

/* .nav .offer {
  background: rgb(0 109 53);
  border-left: 1px solid rgb(0 109 53);
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.nav .offer:hover {
  background: rgb(0 109 53);
  border-left: 1px solid rgb(0 109 53);
}

.offer .list-unstyled {
  background: rgb(0 109 53);
}

.offer .list-unstyled li {
  border-bottom: 1px solid #ffffff;
}

.offer .list-unstyled li:before {
  text-shadow: none;
}

.offer .list-unstyled li a {
  text-shadow: none;
}

.product-prices {
  display: flex;
  flex-wrap: wrap;
  max-width: 180px;
  margin-top: 30px;
}

.product-price-default {
  order: 3;
  font-size: 37px;
  font-weight: 700;
  color: rgb(64 64 64);
}

.product-price-old {
  order: 1;
  color: rgb(191 191 191);
  font-size: 15px;
  text-decoration: line-through;
}

.discount-container {
  transform: skew(-40deg);
  background: #ec1c23;
  padding: 1px 10px;
  height: 17px;
  margin-left: 17px;
  margin-top: 1px;
  order: 2;
}
.discount-container .product-discount {
  transform: rotate(120deg);
  margin: 0;
  -webkit-transform: skewX(40deg) skewY(0deg);
  transform: skewX(40deg) skewY(0deg);
  color: #ffffff;
  font-size: 10px;
}

.product .product-cart {
  background: transparent;
  margin: 10px 0 30px;
}

.product .product-cart .col-md-10 > form .product-form {
  margin: 0;
}

.product .product-cart .wish_list {
  margin: 0;
}

.product .product-cart .col-md-10 > form .product-form .product-btn {
  min-width: 100%;
}

.product .product-cart .col-md-10 > form .product-form .product-btn button {
  width: 100%;
}

.product .product-cart .col-md-10 > form .product-form .product-input {
  padding-left: 0;
} */
