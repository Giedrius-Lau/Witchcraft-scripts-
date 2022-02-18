// var newBanner = {
//     title: 'Jewellery favourites',
//     subtitle: 'Discover the world of fine contemporary Scandinavian jewellery through favourites',
//     firstProduct: {
//         imageDesktop: 'https://semexit.s3.eu-west-1.amazonaws.com/Georg+Jensen/desktop+1.png',
//         imageMobile: 'https://semexit.s3.eu-west-1.amazonaws.com/Georg+Jensen/mobile+1.png',
//         link: 'https://www.georgjensen.com/en-au/jewellery/earrings/moonlight-grapes-earrings/10012462.html',
//         title: 'MOONLIGHT Grapes Ear Cuffs',
//         subtitle: '18 kt. Gold',
//         price: 'A$1,550.00',
//         seeProduct: 'SEE PRODUCT ﹥',
//         footerTitle: 'Earrings',
//         footerCTA: 'Explore all earrings',
//         footerLink: 'https://www.georgjensen.com/en-au/jewellery/earrings',
//     },
//     secondProduct: {
//         imageDesktop: 'https://semexit.s3.eu-west-1.amazonaws.com/Georg+Jensen/desktop+2.png',
//         imageMobile: 'https://semexit.s3.eu-west-1.amazonaws.com/Georg+Jensen/mobile+2.png',
//         link: 'https://www.georgjensen.com/en-au/jewellery/necklaces-and-pendants/magic-necklace-with-charm-pendant/10015097.html',
//         title: 'MAGIC Necklace with Charm Pendant',
//         subtitle: '18 kt. Gold and diamonds',
//         price: 'A$2,750.00',
//         seeProduct: 'SEE PRODUCT ﹥',
//         footerTitle: 'Rings',
//         footerCTA: 'Explore all rings',
//         footerLink: 'https://www.georgjensen.com/en-au/jewellery/rings',
//     },
//     thirdProduct: {
//         imageDesktop: 'https://semexit.s3.eu-west-1.amazonaws.com/Georg+Jensen/desktop+3.png',
//         imageMobile: 'https://semexit.s3.eu-west-1.amazonaws.com/Georg+Jensen/mobile+3.png',
//         link: 'https://www.georgjensen.com/en-au/jewellery/rings/offspring-ring/20000135.html#q=20000135',
//         title: 'OFFSPRING Ring',
//         subtitle: 'Sterling silver with diamonds',
//         price: 'A$1,325.00',
//         seeProduct: 'SEE PRODUCT ﹥',
//         footerTitle: 'Necklaces and pendants',
//         footerCTA: 'Explore all',
//         footerLink: 'https://www.georgjensen.com/en-au/jewellery/necklaces-and-pendants',
//     },
// };

// var bannerInterval = window.setInterval(function () {
//     var firstProduct = document.querySelector('#main > div.stories > div > div.stories_container > div:nth-child(1)');
//     var secondProduct = document.querySelector('#main > div.stories > div > div.stories_container > div:nth-child(2)');
//     var thirdProduct = document.querySelector('#main > div.stories > div > div.stories_container > div:nth-child(3)');
//     var existanceCheck = document.querySelector('.story_subheadline');

//     if (firstProduct && secondProduct && thirdProduct && existanceCheck) {
//         clearInterval(bannerInterval);
//         var FP = newBanner.firstProduct;
//         var SP = newBanner.secondProduct;
//         var TP = newBanner.thirdProduct;

//         //First product
//         firstProduct.querySelector('.story_image').innerHTML =
//             '<img class="image-desktop" src="' +
//             FP.imageDesktop +
//             '" alt="' +
//             FP.title +
//             '"></img><img class="image-mobile" src="' +
//             FP.imageMobile +
//             '" alt="' +
//             FP.title +
//             '"></img>';
//         firstProduct.querySelector('.story_image').innerHTML +=
//             '<a href="' +
//             FP.link +
//             '"><div class="product-information"><div class="product-title">' +
//             FP.title +
//             '</div><div class="product-subtitle">' +
//             FP.subtitle +
//             '</div><div class="product-price">' +
//             FP.price +
//             '</div><div class="see-product">' +
//             FP.seeProduct +
//             '</div></div></a>';
//         firstProduct.querySelector('.story_subheadline').remove();
//         firstProduct.querySelector('.story_headline > h3').textContent = FP.footerTitle;
//         firstProduct.querySelector('.story_content_body').remove();
//         firstProduct.querySelector('.story_content_button').addEventListener('click', function () {
//             window.open(FP.footerLink, '_self');
//         });
//         firstProduct.querySelector('a').href = 'javascript:void(0)';
//         firstProduct.querySelector('.story_content_button > div').textContent = FP.footerCTA;

//         //Second product
//         secondProduct.querySelector('.story_image').innerHTML =
//             '<img class="image-desktop" src="' +
//             SP.imageDesktop +
//             '" alt="' +
//             SP.title +
//             '"></img><img class="image-mobile" src="' +
//             SP.imageMobile +
//             '" alt="' +
//             SP.title +
//             '"></img>';
//         secondProduct.querySelector('.story_image').innerHTML +=
//             '<a href="' +
//             SP.link +
//             '"><div class="product-information"><div class="product-title">' +
//             SP.title +
//             '</div><div class="product-subtitle">' +
//             SP.subtitle +
//             '</div><div class="product-price">' +
//             SP.price +
//             '</div><div class="see-product">' +
//             SP.seeProduct +
//             '</div></div></a>';
//         secondProduct.querySelector('.story_subheadline').remove();
//         secondProduct.querySelector('.story_headline > h3').textContent = SP.footerTitle;
//         secondProduct.querySelector('.story_content_body').remove();
//         secondProduct.querySelector('.story_content_button').addEventListener('click', function () {
//             window.open(SP.footerLink, '_self');
//         });
//         secondProduct.querySelector('a').href = 'javascript:void(0)';
//         secondProduct.querySelector('.story_content_button > div').textContent = SP.footerCTA;

//         //Third product
//         thirdProduct.querySelector('.story_image').innerHTML =
//             '<img class="image-desktop" src="' +
//             TP.imageDesktop +
//             '" alt="' +
//             TP.title +
//             '"></img><img class="image-mobile" src="' +
//             TP.imageMobile +
//             '" alt="' +
//             TP.title +
//             '"></img>';
//         thirdProduct.querySelector('.story_image').innerHTML +=
//             '<a href="' +
//             TP.link +
//             '"><div class="product-information"><div class="product-title">' +
//             TP.title +
//             '</div><div class="product-subtitle">' +
//             TP.subtitle +
//             '</div><div class="product-price">' +
//             TP.price +
//             '</div><div class="see-product">' +
//             TP.seeProduct +
//             '</div></div></a>';
//         thirdProduct.querySelector('.story_subheadline').remove();
//         thirdProduct.querySelector('.story_headline > h1').textContent = TP.footerTitle;
//         thirdProduct.querySelector('.story_content_body').remove();
//         thirdProduct.querySelector('.story_content_button').addEventListener('click', function () {
//             window.open(TP.footerLink, '_self');
//         });
//         thirdProduct.querySelector('a').href = 'javascript:void(0)';
//         thirdProduct.querySelector('.story_content_button > div').textContent = TP.footerCTA;

//         //Title and subtitle
//         document.querySelector('#main > div.stories > div > div.stories_header.alignment > h1').textContent = newBanner.title;
//         document.querySelector('#main > div.stories > div > div.stories_header.alignment > div > p:nth-child(1)').textContent = newBanner.subtitle;
//     }
// }, 250);
