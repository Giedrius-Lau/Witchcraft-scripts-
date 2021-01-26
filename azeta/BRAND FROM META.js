function getMeta(metaName) {
    var metas = document.getElementsByTagName('meta');

    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('property') === metaName) {
            return metas[i].getAttribute('content');
        }
    }

    return '';
}

console.log(getMeta('product:brand'));
