// function insertAfter(el, referenceNode) {
//     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
// }

// var intervalLeasing = window.setInterval(function () {
//     var leasingBlock = document.querySelector('.MokiWidgets-leasingContainer-2Xd');

//     if (leasingBlock) {
//         var inBank = document.querySelector('.MokiWidgets-mokiLizingasWidget-V8o');
//         var atsiskaitymai = document.querySelector('.MokiWidgets-mokiTrysWidget-1U0');

//         var leasingBlocks = document.createElement('div');
//         leasingBlocks.setAttribute('class', 'leasing-blocks');
//         leasingBlocks.innerHTML =
//             '<div class="leasing-buttons"><div class="mokiLizingas"></div><div class="moki3"></div></div><div class="leasing-containers"><div class="mokiLizingasContainer"></div><div class="moki3Container"></div></div>';

//         leasingBlock.append(leasingBlocks);

//         var mokiLizingas = document.querySelector('.mokiLizingas');
//         var moki3 = document.querySelector('.moki3');
//         var mokiLizingasContainer = document.querySelector('.mokiLizingasContainer');
//         var moki3Container = document.querySelector('.moki3Container');

//         if (mokiLizingasContainer && inBank) {
//             mokiLizingasContainer.append(inBank);
//         }

//         if (atsiskaitymai && moki3Container) {
//             moki3Container.append(atsiskaitymai);
//         }

//         mokiLizingas.addEventListener('click', function () {
//             document.querySelector('._2sz5AL ._2e3AwE').click();
//         });

//         moki3.addEventListener('click', function () {
//             document.querySelector('.AafFJk').click();
//         });

//         var lizingoFakeBlock = document.createElement('div');
//         lizingoFakeBlock.setAttribute('class', 'sOuqeB _2gNfp6');
//         mokiLizingas.append(lizingoFakeBlock);

//         var newInterval = setInterval(function () {
//             var mokiLizingasPicture = document.querySelector('.sOuqeB._30YrLK ._1X1AIX, .sOuqeB._2gNfp6 ._1X1AIX, .sOuqeB.TR40G8 ._1X1AIX');
//             var moki3Picture = document.querySelector('.eua7Zq._3t3890');

//             if (mokiLizingasPicture && moki3Picture) {
//                 document.querySelector('.sOuqeB').append(mokiLizingasPicture);
//                 moki3.append(moki3Picture);

//                 clearInterval(newInterval);
//             }
//         }, 300);

//         clearInterval(intervalLeasing);
//     }
// }, 1000);
