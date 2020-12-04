document.querySelectorAll('.jid_product_image').forEach(function (item) {
    item.addEventListener('click', function () {
        hj('trigger', 'acc_modal_heatmap');
    });
});
