document.querySelectorAll('a, .o-button').forEach(function (button) {
    if (
        (button.textContent.trim().includes('Shop Now') || button.textContent.trim().includes('Shop now')) &&
        button.href != 'https://www.tortugabackpacks.com/products/outbreaker-laptop-backpack'
    ) {
        button.href = 'https://www.tortugabackpacks.com/collections/travel-backpacks/products/outbreaker-travel-backpack?variant=26900597257';
    }
});
