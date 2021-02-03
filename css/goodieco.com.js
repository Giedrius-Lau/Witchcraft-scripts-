// // window.addEventListener('DOMContentLoaded', (event) => {
// var mainContainer = document.querySelector('#main > div');
// var naujasKonteineris = document.createElement('ul');
// naujasKonteineris.setAttribute('class', 'accordion');
// naujasKonteineris.innerHTML = `
//     <li>
//         <a class="toggle" href="javascript:void(0);">
//             <img src="https://cdn.shopify.com/s/files/1/2302/5487/files/3.png?v=1611911350" alt="icon"><span>What's in your trio?</span></a>
//         <ul class="inner whatsInTrio"></ul>
//     </li>
//     <li>
//         <a class="toggle" href="javascript:void(0);">
//             <img src="https://cdn.shopify.com/s/files/1/2302/5487/files/2.png?v=1611911351" alt="icon"><span>Ingredients list</span></a>
//         <ul class="inner ingrediants"></ul>
//     </li>
//     <li>
//         <a class="toggle" href="javascript:void(0);">
//             <img src="https://cdn.shopify.com/s/files/1/2302/5487/files/1.png?v=1611911350" alt="icon"><span>How it works</span></a>
//         <ul class="inner howItWorks"></ul>
//     </li>
//     <li>
//         <a class="toggle" href="javascript:void(0);">
//             <img src="https://cdn.shopify.com/s/files/1/2302/5487/files/4.png?v=1611911351" alt="icon"><span>Before/after testimonials</span></a>
//         <ul class="inner testimonials"></ul>
//     </li>
//     <li>
//         <a class="toggle" href="javascript:void(0);">
//             <img src="https://cdn.shopify.com/s/files/1/2302/5487/files/5.png?v=1611911351" alt="icon"><span>Customer reviews</span></a>
//         <ul class="inner customerReviews"></ul>
//     </li>
//     <li>
//         <a class="toggle" href="javascript:void(0);">
//             <img src="https://cdn.shopify.com/s/files/1/2302/5487/files/6.png?v=1611911351" alt="icon"><span>Frequently Asked Questions</span></a>
//         <ul class="inner faq"></ul>
//     </li>
//     `.trim();
// mainContainer.append(naujasKonteineris);

// document.querySelector('#shopify-section-1596686912132').remove();
// document.querySelector('#shopify-section-1596611035439').remove();
// var whatsInTrio = document.querySelector('#shopify-section-1596611060091');
// var whatsInTrio2 = document.querySelector('#shopify-section-1596686026359');
// var ingrediants = document.querySelector('#shopify-section-1596611819370');
// var howItWorks = document.querySelector('#shopify-section-1596600013095');
// var howItWorks2 = document.querySelector('#shopify-section-1596599519118');
// var howItWorks3 = document.querySelector('#shopify-section-1596603549766');
// var testimonials = document.querySelector('#shopify-section-1596610520667');
// var testimonials2 = document.querySelector('#shopify-section-1596688372001');
// var customerReviews = document.querySelector('#judgeme_product_reviews');
// var faq = document.querySelector('#shopify-section-template--product--supercharged > div:nth-child(2)');

// var newCon = document.querySelector('.accordion');
// newCon.querySelector('.whatsInTrio').append(whatsInTrio);
// newCon.querySelector('.whatsInTrio').append(whatsInTrio2);
// newCon.querySelector('.ingrediants').append(ingrediants);
// newCon.querySelector('.howItWorks').append(howItWorks);
// newCon.querySelector('.howItWorks').append(howItWorks2);
// newCon.querySelector('.howItWorks').append(howItWorks3);
// newCon.querySelector('.testimonials').append(testimonials);
// newCon.querySelector('.testimonials').append(testimonials2);
// newCon.querySelector('.customerReviews').append(customerReviews);
// newCon.querySelector('.faq').append(faq);

// var interval = window.setInterval(function () {
//     $(document).ready(function () {
//         if (jQuery && !$('.toggle.click').length) {
//             $('.toggle').addClass('click');
//             $('.toggle').click(function (e) {
//                 e.preventDefault();
//                 var $this = $(this);
//                 console.log('click');
//                 $this.next().toggleClass('show');
//                 $this.toggleClass('show');
//                 $this.next().slideToggle(350);
//             });

//             clearInterval(interval);
//         }
//     });
// }, 300);
// // });
