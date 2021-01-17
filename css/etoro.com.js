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

// let today = new Date();
// const dd = String(today.getDate()).padStart(2, '0');
// const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// const yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;

// var checkIfExists = true;
// const data = {
//     date: today,
//     data: [],
// };

// setInterval(() => {
//     if (document.querySelectorAll('.e-loader-ph').length > 1 && checkIfExists) {
//         checkIfExists = false;

//         setTimeout(() => {
//             var list = document.querySelectorAll('portfolio-list-view > div > ui-table > ui-table-body > div');
//             list.forEach(function (listItem) {
//                 const name = listItem.querySelector('.table-first-name').textContent.trim();
//                 const profitMoney = listItem.querySelector(' a > ui-table-body-slot > ui-table-cell:nth-child(4)').textContent.trim();
//                 const profitPercentage = listItem.querySelector(' a > ui-table-body-slot > ui-table-cell:nth-child(5)').textContent.trim();
//                 data.data.push({ name, profitMoney, profitPercentage });
//             });
//             console.log(data);
//         }, 3000);
//     }
// }, 1000);
