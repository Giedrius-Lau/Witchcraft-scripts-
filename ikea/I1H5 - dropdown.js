var $ = jQuery;

function findElementAndAddElement(element, searchText, addElement) {
    var elementArray = element;
    for (var i = 0; i < elementArray.length; i++) {
        if (elementArray[i].textContent.trim() == searchText) {
            found = elementArray[i];
            found.prepend(addElement);
            break;
        }
    }
}


$('.servicesMenu').insertBefore('.productsMenu')

var miegamasis = document.createElement("img");
miegamasis.setAttribute("src", "https://i.ibb.co/K02Qpyq/Miegamasis.png");
findElementAndAddElement(document.querySelectorAll(".dropdown-item"), "Miegamasis", miegamasis)

var svetaine = document.createElement("img");
svetaine.setAttribute("src", "https://i.ibb.co/3sfF8W3/Svetain.png");
findElementAndAddElement(document.querySelectorAll(".dropdown-item"), "Svetainė", svetaine)

var virtuve = document.createElement("img");
virtuve.setAttribute("src", "https://i.ibb.co/jLGG2fv/Virtuv.png");
findElementAndAddElement(document.querySelectorAll(".dropdown-item"), "Virtuvė", virtuve)

var valgomasis = document.createElement("img");
valgomasis.setAttribute("src", "https://i.ibb.co/RGnp87q/Valgomasis.png");
findElementAndAddElement(document.querySelectorAll(".dropdown-item"), "Valgomasis", valgomasis)

var vonia = document.createElement("img");
vonia.setAttribute("src", "https://i.ibb.co/C7j0hF1/Vonia.png");
findElementAndAddElement(document.querySelectorAll(".dropdown-item"), "Vonia", vonia)

var vaikuIkea = document.createElement("img");
vaikuIkea.setAttribute("src", "https://i.ibb.co/XY90h9c/Vaik-IKEA.png");
findElementAndAddElement(document.querySelectorAll(".dropdown-item"), "Vaikų IKEA", vaikuIkea)

var namuBiuras = document.createElement("img");
namuBiuras.setAttribute("src", "https://i.ibb.co/kG9mhtY/Nam-biuras.png");
findElementAndAddElement(document.querySelectorAll(".dropdown-item"), "Namų biuras", namuBiuras)

var prieskambaris = document.createElement("img");
prieskambaris.setAttribute("src", "https://i.ibb.co/mDxS7rV/Prie-kambaris.png");
findElementAndAddElement(document.querySelectorAll(".dropdown-item"), "Prieškambaris", prieskambaris)

var sodasBalkonasTerasa = document.createElement("img");
sodasBalkonasTerasa.setAttribute("src", "https://i.ibb.co/DYfBSZQ/Sodas-balkonas-terasa.png");
findElementAndAddElement(document.querySelectorAll(".dropdown-item"), "Sodas, balkonas, terasa", sodasBalkonasTerasa)

var ikeaVerslui = document.createElement("img");
ikeaVerslui.setAttribute("src", "https://i.ibb.co/hVfr2Rx/IKEA-Verslui.png");
findElementAndAddElement(document.querySelectorAll(".dropdown-item"), "IKEA verslui", ikeaVerslui)

var maistoPrekes = document.createElement("img");
maistoPrekes.setAttribute("src", "https://i.ibb.co/2Wvfmq5/Maisto-prek-s.png");
findElementAndAddElement(document.querySelectorAll(".dropdown-item"), "Maisto prekės", maistoPrekes)

var dekoravimas = document.createElement("img");
dekoravimas.setAttribute("src", "https://i.ibb.co/rH5fq7d/dekoravimas.png");
findElementAndAddElement(document.querySelectorAll(".dropdown-item"), "Dekoravimas", dekoravimas)

$('li.headerMenuProducts__menu--item.nav-item.dropdown.servicesMenu').clone().appendTo('header');



// .rooms {
//     display: flex;
//     padding: 20px 0 5px;
//     text-align: center;
//     background: #f5f5f5;
//     overflow-x: auto;
// }

// a.dropdown-item {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     white-space: initial !important;
//     min-width: 90px;
//     padding: 0 !important;
//     font-size: 11px !important;
//     color: #000000 !important;
// }

// a.dropdown-item img {
//     max-width: 70px;
//     min-width: 70px;
//     width: 70px;
//     margin-bottom: 10px;
// }

// li.headerMenuProducts__menu--item.nav-item.dropdown.servicesMenu.show .dropdown-menu {
//     background: #f5f5f5;
// }

// header > .servicesMenu {
//     display: none !important;
// }

// @media (max-width: 991px) {
//     header > .servicesMenu {
//         display: block !important;
//     }
//     header > .servicesMenu:last-child {
//         position: fixed;
//         top: 47px;
//         background: whitesmoke;
//         list-style: none;
//         width: 100%;
//     }

//     header > .servicesMenu:last-child .rooms {
//         padding: 10px 0 0;
//     }

//     header > .servicesMenu:last-child a.nav-link {
//         font-weight: bold;
//         color: #343a40;
//         width: 120px;
//     }

//     header > .servicesMenu:last-child .dropdown-menu {
//         font-size: 1.2rem;
//         padding-top: 0;
//         border: none;
//         border-bottom: 1px solid #dee2e6;
//         float: none;
//         margin: 0;
//         width: 101%;
//         box-shadow: 0 5px 6px #0000002b;
//         border-radius: 0;
//         transform: translate3d(0px, 35px, 0px) !important;
//         padding: 0;
//     }
//     header > .servicesMenu:last-child .dropdown-menu .container {
//         width: 100% !important;
//         margin: 0;
//         padding: 0 20px;
//         max-width: 100%;
//     }
//     header > .servicesMenu:last-child .dropdown-menu .container a.dropdown-item {
//         min-width: 80px;
//     }

//     header > .servicesMenu:last-child .dropdown-menu .container a.dropdown-item img {
//         max-width: 50px;
//         min-width: 50px;
//         width: 50px;
//         margin-bottom: 5px;
//     }
// }
