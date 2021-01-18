// document.querySelectorAll('#content > form > table:nth-child(6) > tbody > tr').forEach(function (item) {
//     var link = item.querySelector('td:nth-child(2) > a:nth-child(1)').href;
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == XMLHttpRequest.DONE) {
//             var doc = document.createDocumentFragment();
//             var div = document.createElement('div');
//             div.innerHTML = xhr.responseText;
//             doc.appendChild(div);

//             if (doc.querySelector('#content > table:nth-child(8) > tbody > tr:nth-child(3) > td.descr_text > img:nth-child(1)')) {
//                 var imageSrc = doc.querySelector('#content > table:nth-child(8) > tbody > tr:nth-child(3) > td.descr_text > img:nth-child(1)').src;
//                 item.querySelector('td:nth-child(1) > a > img').src = imageSrc;
//             }
//         }
//     };
//     xhr.open('GET', link, true);
//     xhr.send(null);
// });
