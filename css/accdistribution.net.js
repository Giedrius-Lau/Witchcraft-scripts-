function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

var titles = document.querySelectorAll('.filter > h4');
var kaina, rodytiTikPrekes;

titles.forEach(function (title) {
    var filter = title.childNodes[0].textContent.trim();
    if (filter == 'Kaina') {
        kaina = title;
    } else if (filter == 'Rodyti tik prekes') {
        rodytiTikPrekes = title;
    }
});


insertAfter(kaina.parentNode, rodytiTikPrekes.parentNode.nextSibling.nextSibling);
