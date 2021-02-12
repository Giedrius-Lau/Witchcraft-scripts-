// var changeLayout = function () {
//     var screenWidth = $(window).width();

//     if (screenWidth > 767) {
//       var loginBlock = $('.LoginStep-loginStepContainer-3BE');

//       var newBlock = document.createElement('div');
//       newBlock.setAttribute('class', 'new-login-block');
//       loginBlock.prepend(newBlock);
//       var newLoginBlock = $('.new-login-block');
//       var block1 = $('#root > div.MainCheckout-checkoutContainer-TQF > main > div > div:nth-child(2)');
//       var block2 = $('#root > div.MainCheckout-checkoutContainer-TQF > main > div > div:nth-child(3)');

//       newLoginBlock.append(block1);
//       newLoginBlock.append(block2);
//     } else {
//       $('.AccountBenefits-container-2vp').insertAfter($('#root > div.MainCheckout-checkoutContainer-TQF > main > div > div:nth-child(1)'));
//     }
//   };

//   var interval = window.setInterval(function () {
//     if ($('.LoginStep-loginStepContainer-3BE').length) {
//       changeLayout();
//       clearInterval(interval);
//     }
//   }, 300);
