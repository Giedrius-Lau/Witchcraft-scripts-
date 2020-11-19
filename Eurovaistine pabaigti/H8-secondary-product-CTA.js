console.log("prasideda");
setTimeout(() => {
  var productForm = document.querySelector(".product-form").cloneNode(true);
  var productImage = document.querySelector(".product-photo-image img").cloneNode(true);
  var productPrices = document.querySelector(".product-prices").cloneNode(true);

  var productTitle = document
    .querySelector("div.product-content>h1")
    .cloneNode(true);

  var containerContent = "<div class='image-block'></div><div class='description-prices'></div>"
  
  var secondaryCtaContainer = document.createElement("div");
  secondaryCtaContainer.setAttribute("class", "secondary-cta");
  secondaryCtaContainer.innerHTML = containerContent;
  
  document.querySelector(".tab-content").appendChild(secondaryCtaContainer);
  document.querySelector(".secondary-cta").appendChild(productForm);
  document.querySelector(".secondary-cta .image-block").appendChild(productImage);
  document.querySelector(".secondary-cta .description-prices").appendChild(productTitle);
  document.querySelector(".secondary-cta .description-prices").appendChild(productPrices);
  if (document.querySelectorAll(".product-variants-container +div.product-discount.product-offer-discount").length){
    var discountContainer = "<div class='discount-container'></div>"
    document.querySelector(".secondary-cta .product-prices").insertAdjacentHTML( 'beforeend', discountContainer );
    var productDiscrount = document.querySelector(".product-discount").cloneNode(true);
    document.querySelector(".secondary-cta .discount-container").appendChild(productDiscrount);
  }
}, 2000);

/* .secondary-cta {
  display: flex;
  align-items: center;
  background: #f0f0ec;
  padding: 10px 15px;
  border: 1px solid #e1e1d6;
  border-radius: 2px;
  min-height: 120px;
}

@media (min-width: 1200px) {
  .secondary-cta {
    padding: 10px 35px;
  }
}

@media (max-width: 566px) {
  .secondary-cta {
    flex-wrap: wrap;
  }
}

.secondary-cta img {
  width: 80px;
  border-radius: 2px;
  border: 1px solid #dcdcd6;
}

.secondary-cta h1 {
  font-size: 12px;
  width: 100%;
  max-width: 200px;
  min-width: 200px;
  color: #03853c;
  white-space: break-spaces;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  margin-top: 4px;
}

.secondary-cta .product-form {
  display: flex;
  margin: auto;
  align-self: center;
  justify-content: flex-end;
  flex: 1;
}

.secondary-cta .product-form .product-btn button {
  font-weight: 500;
  text-transform: uppercase;
}

.secondary-cta .product-form .product-input {
  margin-right: 30px;
  min-width: 50px;
  align-self: center;
}

@media (min-width: 1400px) {
  .secondary-cta .product-form .product-input {
    min-width: 100px;
  }
}

.secondary-cta .product-prices {
  display: flex;
  margin-top: 10px;
}

.secondary-cta .product-prices .product-price-default {
  font-size: 16px;
  font-weight: 700;
  color: #333333;
}

.secondary-cta .product-prices .product-price-old {
  text-decoration: line-through;
  color: #999999;
  font-size: 11px;
  margin-top: 5px;
  margin-left: 5px;
}

.secondary-cta .discount-container {
  transform: skew(-40deg);
  background: #ec1c23;
  padding: 0px 10px;
  height: 17px;
  margin-left: 22px;
  margin-top: 3px;
}

.secondary-cta .discount-container .product-discount {
  transform: rotate(120deg);
  margin: 0;
  -webkit-transform: skewX(40deg) skewY(0deg);
  transform: skewX(40deg) skewY(0deg);
  color: #ffffff;
  font-size: 12px;
}

.description-prices {
  margin-left: 10px;
  margin-right: 10px;
}

@media (max-width: 566px) {
  .secondary-cta .product-form {
    justify-content: flex-start;
    margin-top: 15px;
    flex: 1 1 100%;
    width: 100%;
  }

  .secondary-cta .product-form .product-input {
    min-width: 35% !important;
    margin-right: auto;
  }
  .secondary-cta .product-form .product-btn {
    min-width: 60%;
  }
  .secondary-cta .product-form .product-btn button {
    width: 100%;
    font-weight: 500;
    text-transform: uppercase;
  }
  .secondary-cta .description-prices {
    flex: 1;
  }
  .secondary-cta .image-block {
    flex: 0;
  }
  .secondary-cta .description-prices h1 {
    min-width: 160px;
  }
} */