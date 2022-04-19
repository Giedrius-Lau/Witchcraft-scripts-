// (function ($) {
//     // add class to body for variation
//     // 50 * 200 = 10 secs
//     var croTVGTime = 50;
//     var croTVGInterval = setInterval(function () {
//         var croBody = document.getElementsByTagName('body')[0];
//         if ($ && croBody) {
//             croBody.classList.add('cro-10033207-100326320-1');
//             clearInterval(croTVGInterval);

//             var intervalTimer = 50;

//             var greenSparkBannerInterval = window.setInterval(function () {
//                 var headerBanner = document.querySelector('.js-free-shipping-header');
//                 var productList = document.querySelector('.ProductIcons-list') || document.querySelector('.PDPContent-icons-list');
//                 var feauturedProductList = document.querySelector('div.FeaturedProductVideoInfo-info > div > .FeaturedProductVideoInfo-list');
//                 var productDescriptionBulletList = document.querySelector('.PDPForm-description ul') || document.querySelector('.PDPContent-description ul');

//                 if (headerBanner && (!document.querySelector('.new-header-banner') || !document.querySelector('.new-banner'))) {

//                     if (productDescriptionBulletList && !document.querySelector('.added-new-bulletpoint')) {
//                         var li = document.createElement('li');
//                         li.setAttribute('class', 'added-new-bulletpoint');
//                         li.innerHTML = '<span style="font-size: 1.4em;">A tree planted for every product purchased</span>';
//                         productDescriptionBulletList.append(li);
//                     }

//                     if (productList && !document.querySelector('.ProductIcons-item-ab')) {
//                         var newIcon = document.createElement('li');
//                         newIcon.setAttribute('class', 'ProductIcons-item ProductIcons-item-ab');
//                         newIcon.innerHTML =
//                             '<img alt="" class="ProductIcons-image lazyloaded" data-src="https://get-mads.fra1.cdn.digitaloceanspaces.com/widget-round-dark.svg" src="https://get-mads.fra1.cdn.digitaloceanspaces.com/widget-round-dark.svg">';
//                         productList.append(newIcon);
//                     }

//                     if (document.querySelector('.new-banner')) {
//                         return;
//                     }

//                     if (feauturedProductList && !document.querySelector('.FeaturedProductVideoInfo-item-ab')) {
//                         var newBanner = document.createElement('div');
//                         newBanner.setAttribute('class', 'new-banner');
//                         newBanner.innerHTML =
//                             '<a><img style="max-width:100%;" src="https://get-mads.fra1.digitaloceanspaces.com/tree_green/wandering-bear-coffee45" alt="Greenspark | Plastic & Carbon Offset" /></a>';
//                         feauturedProductList.append(newBanner);
//                     }

                    
                

//                     // if (productPageBuy) {
//                     //     var newBanner = document.createElement('div');
//                     //     newBanner.setAttribute('class', 'new-banner');
//                     //     newBanner.innerHTML =
//                     //         '<a><img style="max-width:100%;" src="https://get-mads.fra1.digitaloceanspaces.com/tree_green/wandering-bear-coffee45" alt="Greenspark | Plastic & Carbon Offset" /></a>';
//                     //     productPageBuy.append(newBanner);
//                     // }

//                     // if (bundlePageBuy) {
//                     //     var newBannerBundle = document.createElement('div');
//                     //     newBannerBundle.setAttribute('class', 'new-banner');
//                     //     newBannerBundle.innerHTML =
//                     //         '<a><img style="max-width:100%;" src="https://get-mads.fra1.digitaloceanspaces.com/tree_green/wandering-bear-coffee45" alt="Greenspark | Plastic & Carbon Offset" /></a>';
//                     //     bundlePageBuy.append(newBannerBundle);
//                     // }

//                     // if (bundlePageBuyMobile) {
//                     //     var newBannerBundleMobile = document.createElement('div');
//                     //     newBannerBundleMobile.setAttribute('class', 'new-banner');
//                     //     newBannerBundleMobile.innerHTML =
//                     //         '<a><img style="max-width:100%;" src="https://get-mads.fra1.digitaloceanspaces.com/tree_green/wandering-bear-coffee45" alt="Greenspark | Plastic & Carbon Offset" /></a>';
//                     //     bundlePageBuyMobile.append(newBannerBundleMobile);
//                     // }
//                     // Clear after 10s.
//                     intervalTimer--;
//                     if (intervalTimer < 0) {
//                         clearInterval(greenSparkBannerInterval);
//                     }
//                 }
//             }, 200);
//         }
//         // clear interval after 10 secs. if element not found
//         croTVGTime--;
//         if (croTVGTime < 0) {
//             clearInterval(croTVGInterval);
//         }
//     }, 200);
// })(jQuery);

