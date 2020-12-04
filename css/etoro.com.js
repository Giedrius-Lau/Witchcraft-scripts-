setInterval(() => {
    document.querySelectorAll('.ui-table-row').forEach(function (item) {
        var invested = Number(
            item
                .querySelector('span[data-etoro-automation-id="portfolio-overview-table-body-cell-total-amount"]')
                .textContent.match(/\d+(?:\.\d+)?/g)
                .join('')
        );
        var profit = Number(
            item
                .querySelector('span[data-etoro-automation-id="portfolio-overview-table-body-cell-profit"]')
                .textContent.match(/\d+(?:\.\d+)?/g)
                .join('')
        );

        var itemToReplaceContent = item.querySelector('span[data-etoro-automation-id="portfolio-overview-table-body-cell-gain"]');

        var percentage = ((profit / invested) * 100).toFixed(2);
        itemToReplaceContent.textContent = percentage + '%';
    });
}, 3000);
