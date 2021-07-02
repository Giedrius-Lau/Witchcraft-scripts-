function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

var intervalas = window.setInterval(function () {
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

    if (kaina && rodytiTikPrekes) {
        insertAfter(kaina.parentNode, rodytiTikPrekes.parentNode.nextSibling.nextSibling);
        clearInterval(intervalas);
    }
}, 1000);
