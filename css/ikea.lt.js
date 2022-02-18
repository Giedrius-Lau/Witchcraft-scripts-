// function setCookie(name, value, days) {
//     var expires = '';
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//         expires = '; expires=' + date.toUTCString();
//     }
//     document.cookie = name + '=' + (value || '') + expires + '; path=/';
// }
// function getCookie(name) {
//     var nameEQ = name + '=';
//     var ca = document.cookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//     }
//     return null;
// }

// function TrackEventGA(Category, Action) {
//     'use strict';
//     if (typeof _gaq !== 'undefined') {
//         _gaq.push(['_trackEvent', Category, Action]);
//     } else if (typeof ga !== 'undefined') {
//         ga('send', 'event', Category, Action);
//     }
// }

// var sounds = {
//     blandaBlank: 'https://semexit.s3.eu-west-1.amazonaws.com/Ikea/IKEA+-+Sound+of+the+Product+-+BLANDA+BLANK.mp3',
//     oftast1: 'https://semexit.s3.eu-west-1.amazonaws.com/Ikea/IKEA+-+Sound+of+the+Product+-+OFTAST.mp3',
//     romantisk: 'https://semexit.s3.eu-west-1.amazonaws.com/Ikea/IKEA+-+Sound+of+the+Product+-+ROMANTISK.mp3',
//     storhet: 'https://semexit.s3.eu-west-1.amazonaws.com/Ikea/IKEA+-+Sound+of+the+Product+-+STORHET.mp3',
//     bekvam: 'https://semexit.s3.eu-west-1.amazonaws.com/Ikea/IKEA+-+Sound+of+the+Product+-+BEKV%C3%84M.mp3',
//     gladelig1: 'https://semexit.s3.eu-west-1.amazonaws.com/Ikea/IKEA+-+Sound+of+the+Product+-+GLADELIG.mp3',
//     risatorp: 'https://semexit.s3.eu-west-1.amazonaws.com/Ikea/IKEA+-+Sound+of+the+Product+-+RISATORP.mp3',
//     lack: 'https://semexit.s3.eu-west-1.amazonaws.com/Ikea/IKEA+-+Sound+of+the+Product+-+LACK.mp3',
//     marius: 'https://semexit.s3.eu-west-1.amazonaws.com/Ikea/IKEA+-+Sound+of+the+Product+-+MARIUS.mp3',
//     sallskaplig: 'https://semexit.s3.eu-west-1.amazonaws.com/Ikea/IKEA+-+Sound+of+the+Product+-+SA%CC%88LLSKAPLIG.mp3',
//     burvik: 'https://semexit.s3.eu-west-1.amazonaws.com/Ikea/IKEA+-+Sound+of+the+Product+-+BURVIK.mp3',
// };

// var product = {
//     burvik1: '60340389',
//     lack1: '60193736',
//     lack2: '20011408',
//     risatorp: '50495777',
//     bekvam: '40178888',
//     marius: '10135659',
//     gladelig1: '80457161',
//     gladelig2: '90457165',
//     blandaBlank1: '30081467',
//     blandaBlank2: '20057255',
//     oftast1: '00318942',
//     oftast2: '20439392',
//     oftast3: '80258915',
//     sallskaplig: '90472905',
//     storhet: '80342882',
//     romantisk: '80175675',
//     burvik2: '80513001',
//     lack3: '40431535',
//     lack4: '70319028',
//     lack5: '50319029',
//     lack6: '40349263',
//     lack7: '60349262',
//     lack8: '80449901',
//     lack9: '40104294',
//     lack10: '90449905',
//     lack11: '30449908',
//     lack12: '40103633',
//     lack13: '20498937',
//     lack14: '30498890',
//     lack15: '30498927',
//     lack16: '80104268',
//     risatorp2: '90281618',
//     bekvam2: '30240348',
//     risatorp3: '20281631',
//     blandaBlank3: '50057254',
// };

// var productSound;
// var href = window.location.href;

// if (href.indexOf(product.romantisk) != -1) {
//     productSound = sounds.romantisk;
// }
// if (href.indexOf(product.storhet) != -1) {
//     productSound = sounds.storhet;
// }
// if (href.indexOf(product.sallskaplig) != -1) {
//     productSound = sounds.sallskaplig;
// }
// if (href.indexOf(product.oftast1) != -1 || href.indexOf(product.oftast2) != -1 || href.indexOf(product.oftast3) != -1) {
//     productSound = sounds.oftast1;
// }
// if (href.indexOf(product.blandaBlank1) != -1 || href.indexOf(product.blandaBlank2) != -1 || href.indexOf(product.blandaBlank3) != -1) {
//     productSound = sounds.blandaBlank;
// }
// if (href.indexOf(product.gladelig1) != -1 || href.indexOf(product.gladelig2) != -1) {
//     productSound = sounds.gladelig1;
// }
// if (href.indexOf(product.marius) != -1) {
//     productSound = sounds.marius;
// }
// if (href.indexOf(product.bekvam) != -1 || href.indexOf(product.bekvam2) != -1) {
//     productSound = sounds.bekvam;
// }
// if (
//     href.indexOf(product.lack1) != -1 ||
//     href.indexOf(product.lack2) != -1 ||
//     href.indexOf(product.lack3) != -1 ||
//     href.indexOf(product.lack4) != -1 ||
//     href.indexOf(product.lack5) != -1 ||
//     href.indexOf(product.lack6) != -1 ||
//     href.indexOf(product.lack7) != -1 ||
//     href.indexOf(product.lack8) != -1 ||
//     href.indexOf(product.lack9) != -1 ||
//     href.indexOf(product.lack10) != -1 ||
//     href.indexOf(product.lack11) != -1 ||
//     href.indexOf(product.lack12) != -1 ||
//     href.indexOf(product.lack13) != -1 ||
//     href.indexOf(product.lack14) != -1 ||
//     href.indexOf(product.lack15) != -1 ||
//     href.indexOf(product.lack16) != -1
// ) {
//     productSound = sounds.lack;
// }
// if (href.indexOf(product.burvik1) != -1 || href.indexOf(product.burvik2) != -1) {
//     productSound = sounds.burvik;
// }
// if (href.indexOf(product.risatorp) != -1 || href.indexOf(product.risatorp2) != -1 || href.indexOf(product.risatorp3) != -1) {
//     productSound = sounds.risatorp;
// }

// var sounInterval = window.setInterval(function () {
//     var itemInfo = document.querySelector('.itemInfo');

//     if (itemInfo) {
//         clearInterval(sounInterval);
//         var player = document.createElement('div');
//         player.setAttribute('class', 'sound-player');
//         player.innerHTML =
//             '<div class="audio-block"><div class="audio-image-block"> <img class="audio-image" src="https://semexit.s3.eu-west-1.amazonaws.com/Ikea/sound_big.png" alt="audio"> </div> <div class="audio-block-info"> <p><strong>Smalsu išgirsti mano balsą? </strong></p> <p>Paklausykite</p> <div class="audio-player"> <audio src="' +
//             productSound +
//             '"></audio> <div class="controls"> <button class="player-button"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000000"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /> </svg> </button> <input type="range" class="timeline" max="100" value="0"> <button class="sound-button"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000000"> <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" /> </svg> </button> </div> </div> </div> </div>';

//         itemInfo.append(player);

//         var audioImage = document.querySelector('.audio-image');

//         var playerButton = document.querySelector('.player-button'),
//             audio = document.querySelector('audio'),
//             timeline = document.querySelector('.timeline'),
//             soundButton = document.querySelector('.sound-button'),
//             playIcon =
//                 '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000000"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" /></svg>',
//             pauseIcon =
//                 '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000000"> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /> </svg>',
//             soundIcon =
//                 '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000000"> <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" /> </svg>',
//             muteIcon =
//                 '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000000"> <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd" /> </svg>';

//         var toggleAudio = function () {
//             TrackEventGA('Audio player', 'pressed play button');

//             if (audio.paused) {
//                 audio.play();
//                 playerButton.innerHTML = pauseIcon;
//                 audioImage.src = 'https://semexit.s3.eu-west-1.amazonaws.com/Ikea/Ikea_sound_icon_1.gif';
//             } else {
//                 audio.pause();
//                 playerButton.innerHTML = playIcon;
//                 audioImage.src = 'https://semexit.s3.eu-west-1.amazonaws.com/Ikea/sound_big.png';
//             }
//         };

//         audio.addEventListener('ended', function () {
//             audioImage.src = 'https://semexit.s3.eu-west-1.amazonaws.com/Ikea/sound_big.png';
//             TrackEventGA('Audio player', 'audio sound completed');
//         });

//         audio.addEventListener('play', function () {
//             TrackEventGA('Audio player', 'pressed play button');

//             setTimeout(function () {
//                 hj('event', 'audio-test-finished');
//             }, 15000);
//         });

//         audioImage.addEventListener('click', toggleAudio);
//         playerButton.addEventListener('click', toggleAudio);

//         var changeTimelinePosition = function () {
//             var percentagePosition = (100 * audio.currentTime) / audio.duration;
//             timeline.style.backgroundSize = percentagePosition + '% 100%';
//             timeline.value = percentagePosition;
//         };

//         audio.ontimeupdate = changeTimelinePosition;

//         var audioEnded = function () {
//             playerButton.innerHTML = playIcon;
//         };

//         audio.onended = audioEnded;

//         var changeSeek = function () {
//             var time = (timeline.value * audio.duration) / 100;
//             audio.currentTime = time;
//         };

//         timeline.addEventListener('change', changeSeek);

//         var toggleSound = function () {
//             audio.muted = !audio.muted;
//             soundButton.innerHTML = audio.muted ? muteIcon : soundIcon;
//         };

//         soundButton.addEventListener('click', toggleSound);
//     }

//     if (getCookie('audio-cookie-2') === null) {
//         var body = document.querySelector('body');
//         var overlay = document.createElement('div');
//         overlay.setAttribute('class', 'screen-overlay');
//         body.append(overlay);

//         var audioImageBlock = document.querySelector('.audio-image-block');
//         var audioPopup = document.createElement('div');
//         audioPopup.setAttribute('class', 'audio-popup');
//         audioPopup.innerHTML = '<p><strong>Išgirsk, ką nori pasakyti šis produktas.</strong></p><p>Gal tai kvietimas?</p>';
//         audioImageBlock.append(audioPopup);

//         var addedScreenOverlay = document.querySelector('.screen-overlay');
//         var addedAudioPopup = document.querySelector('.audio-popup');

//         addedScreenOverlay.addEventListener('click', function () {
//             addedScreenOverlay.remove();
//             addedAudioPopup.remove();
//         });

//         addedAudioPopup.addEventListener('click', function () {
//             addedScreenOverlay.remove();
//             addedAudioPopup.remove();
//         });

//         audioImage.addEventListener('click', function () {
//             addedScreenOverlay.remove();
//             addedAudioPopup.remove();
//         });

//         setCookie('audio-cookie-2', 1, 90);
//     }
// }, 250);
