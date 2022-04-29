// (function () {
//     var oldPushState = history.pushState;
//     history.pushState = function pushState() {
//       var ret = oldPushState.apply(this, arguments);
//       window.dispatchEvent(new Event('pushstate'));
//       window.dispatchEvent(new Event('locationchange'));
//       return ret;
//     };

//     var oldReplaceState = history.replaceState;
//     history.replaceState = function replaceState() {
//       var ret = oldReplaceState.apply(this, arguments);
//       window.dispatchEvent(new Event('replacestate'));
//       window.dispatchEvent(new Event('locationchange'));
//       return ret;
//     };

//     window.addEventListener('popstate', function () {
//       window.dispatchEvent(new Event('locationchange'));
//     });
//   })();


//   var setTest = function () {
//     var interval = window.setInterval(function () {
//       var buttons = document.querySelectorAll('.Filters-filterGroupContainer-1Wl .Filters-filterTitle-1AA')
//       if (buttons.length > 0 && !document.querySelector('.ab-closed-filters')) {
//         document.querySelector('.Filters-filterGroupContainer-1Wl').classList.add('ab-closed-filters')

//         buttons.forEach(function (button) {
//           button.click();
//         })
//         clearInterval(interval);
//       }
//     }, 300);
//   }

//   setTest();


//   window.addEventListener('locationchange', function () {
//     setTest();
//   });