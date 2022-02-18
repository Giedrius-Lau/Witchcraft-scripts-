// function insertAfter(el, referenceNode) {
//     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
// }

// var linksInterval = window.setInterval(function () {
//     var links = document.querySelector('.AlgoliaFilters-wrapper > div > div.AlgoliaFilters-container > div.AlgoliaFilters-desktop');
//     var collectionHeader = document.querySelector('.Algolia-collectionHeader');
//     var buttonSort = document.querySelector('.AlgoliaFilterHeader-btnSort.desktop');

//     if (links && collectionHeader && buttonSort) {
//         insertAfter(links, collectionHeader);
//         var movedLinks = document.querySelector('.Algolia > div.AlgoliaFilters-desktop');
//         movedLinks.append(buttonSort);
//         clearInterval(linksInterval);
//     }
// }, 500);
