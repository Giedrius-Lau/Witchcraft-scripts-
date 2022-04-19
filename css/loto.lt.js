function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}

var onlineInterval = window.setInterval(function () {
    var ticketRight = document.querySelector('.n-buy-tickets-top-desk > div.n-buy-tickets-right');
    var ticketRightTimer = ticketRight.querySelector('.n-buy-tickets-time-left');
    var ticketsSummary = document.querySelector('.n-buy-tickets-summary');

    if (ticketRight && ticketRightTimer && ticketsSummary && !document.querySelector('.new-lotteries-block')) {
        insertBefore(ticketRightTimer, ticketsSummary);

        var newBlock = document.createElement('div');
        newBlock.setAttribute('class', 'new-lotteries-block');
        newBlock.innerHTML =
            '<div class="banner-content-item banner-content-item-1"> <p>Šios savaitės prizai</p> <div class="banner-content-text-w-image"> <img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/eur.png" /> <div class="bold-text">950 000 €</div> </div> </div> <div class="banner-content-item banner-content-item-2"> <div class="banner-content-text-w-image"> <img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/keys.png" /> <div class="bold-text">Butas Palangoje</div> </div> </div> <div class="banner-content-item banner-content-item-3"> <img src="https://semexit.s3.eu-west-1.amazonaws.com/Loto.lt/car.png" /> <div class="banner-content-text-w-text"> <p>Automobilis</p> <div class="bold-text">Toyota Corolla</div> </div> </div>';

        ticketRight.append(newBlock);
        clearInterval(onlineInterval);
    }
}, 1000);
