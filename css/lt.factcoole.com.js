function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

var recommendedLocationChange = function () {
    var recommendedBlock, priceBlock;

    document.querySelectorAll('.Filters-filterContainer-3TR button').forEach(function (button) {
        if (button.textContent === 'Rekomenduojame') {
            recommendedBlock = button.parentNode;
        }
        if (button.textContent === 'Kaina') {
            priceBlock = button.parentNode;
        }
    });

    if (recommendedBlock !== 'undefined' && priceBlock !== 'undefined') {
        insertAfter(recommendedBlock, priceBlock);
    }
};

setTimeout(function () {
    recommendedLocationChange();
}, 300);

document.querySelector('button.CategoryPage-categoryFilterButton-2Ey').addEventListener('click', function () {
    setTimeout(function () {
        recommendedLocationChange();
    }, 300);
});
