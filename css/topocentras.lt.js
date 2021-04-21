// function insertAfter(el, referenceNode) {
//     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
// }

// function insertBefore(element, container, firstChild) {
//     container.insertBefore(element, firstChild);
// }

// var productInterval = window.setInterval(function () {
//     var searchIcon = document.querySelector('.HeaderContent-searchButton-1mR');
//     var searchInput = document.querySelector('.HeaderContent-searchInput-3Ks');
//     var akcijosLink = document.querySelector('.DesktopMenu-firstLevelMenuItem-3ve.firstLevelMenu-1 > a');

//     if (searchIcon && akcijosLink) {
//         var profileLink = document.querySelector(
//             '#root > header.header-desktopHeader-1gy.show-from-desktop > div.header-topBarWrapper-2bd > div.TopBar-topBarContainer-1E0 > div.TopBar-buttonContainer-3dd > a'
//         );
//         var container = document.querySelector('.TopBar-buttonContainer-3dd');
//         var tracking = document.querySelector('.HeaderContent-orderTracking-3gI');
//         var paslaugosLink = document.querySelector('.DesktopMenu-firstLevelMenuItem-3ve.firstLevelMenu-2 > a');
//         var appleLi = document.querySelector('.DesktopMenu-firstLevelMenuItem-3ve.firstLevelMenu-2');
//         var prekiniaiZenklai = document.querySelector('.DesktopMenu-firstLevelMenuItem-3ve.firstLevelMenu-4');
//         var kaipPirkti = document.querySelector('.DesktopMenu-firstLevelMenuItem-3ve.firstLevelMenu-6');
//         var parduotuvesAtidarytos = document.querySelector('.DesktopMenu-firstLevelMenuItem-3ve.firstLevelMenu-7');
//         var isparduotuve = document.querySelector('.DesktopMenu-firstLevelMenuItem-3ve.firstLevelMenu-5 > a');
//         var delivery = document.querySelector('.TopBar-delivery-3wI');
//         var wallet = document.querySelector('.TopBar-wallet-_8S');
//         var returns = document.querySelector('.TopBar-return-1Mz');
//         var freeDelivery = document.querySelector('.TopBar-free-3Ed');
//         var atsijungti = document.querySelector(
//             '#root > header.header-desktopHeader-1gy.show-from-desktop > div.header-topBarWrapper-2bd > div.TopBar-topBarContainer-1E0 > div.TopBar-buttonContainer-3dd > button'
//         );

//         searchIcon.textContent = '';
//         searchInput.placeholder = 'Ieškokite prekės, kategorijos...';
//         akcijosLink.textContent = 'Akcijos ir pasiūlymai';
//         paslaugosLink.textContent = 'Teikiame net 40 paslaugų';

//         //Removing items
//         if (prekiniaiZenklai) {
//             prekiniaiZenklai.remove();
//         }
//         if (kaipPirkti) {
//             kaipPirkti.remove();
//         }
//         if (parduotuvesAtidarytos) {
//             parduotuvesAtidarytos.remove();
//         }
//         if (delivery) {
//             delivery.remove();
//         }
//         if (wallet) {
//             wallet.remove();
//         }
//         if (returns) {
//             returns.remove();
//         }

//         if (profileLink) {
//             insertBefore(tracking, container, profileLink);
//         } else {
//             insertBefore(tracking, document.querySelector('.TopBar-topBarContainer-1E0'), document.querySelector('.TopBar-loginButton-1Xm'));
//         }

//         var mieleParduotuve = document.createElement('li');
//         mieleParduotuve.setAttribute('class', 'DesktopMenu-firstLevelMenuItem-3ve firstLevelMenu-3');
//         mieleParduotuve.innerHTML = '<a class="DesktopMenu-link-4C-" href="/miele?ref=meniu">Miele parduotuvė</a>';

//         var darboLaikas = document.createElement('div');
//         darboLaikas.setAttribute('class', 'darbo-laikas');
//         darboLaikas.innerHTML = '<span>I - V 08:00 - 20:00</span><span>VI - VII 09:00 -17:00</span>';

//         freeDelivery.textContent = '+370 660 00200';
//         freeDelivery.href = '';

//         if (atsijungti) {
//             atsijungti.innerHTML = '<img src="" />';
//         }

//         insertAfter(mieleParduotuve, appleLi);
//         insertAfter(darboLaikas, freeDelivery);

//         isparduotuve.innerHTML = '✂ ŠNAI PER KAINAS!';

//         clearInterval(productInterval);
//     }
// }, 500);
