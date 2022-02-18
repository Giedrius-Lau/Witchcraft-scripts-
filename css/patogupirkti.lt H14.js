document.querySelectorAll('.product').forEach(function (product) {
    var regex = /\b\d{5}\b/g;
    var str = product.querySelector('script').textContent;
    var m;

    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        var firstFunction =
            "'https://www.patogupirkti.lt/checkout/cart/add/uenc/aHR0cHM6Ly93d3cucGF0b2d1cGlya3RpLmx0L2RhbHlraW5lLWxpdGVyYXR1cmEvcHJvdGFzLWt1bmFzLWlyLWR2YXNpYT9vcmRlcj10b3AmYW1wO2Rpcj1kZXNj/product/" +
            m[0] +
            "/form_key/GDJvkOYNCn1K2Ore/'";
        var secondFunction = 'product_tracking_data_' + m[0];

        var cta = document.createElement('div');
        cta.setAttribute('class', 'btn-wrapper');
        cta.innerHTML =
            '<a class="btn btn-primary line-height-40 mt10" href="javascript:setLocation(' +
            firstFunction +
            ');" onclick="trackProductAddCart(' +
            secondFunction +
            ')">Į krepšelį</a>';

        product.append(cta);
    }
});
