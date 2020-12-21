document.querySelectorAll('.modal-content p').forEach(function (p) {
    if (p.textContent !== undefined || p.textContent !== null) {
        if (p.textContent === 'Tapdami Telia klientu gaunate 200 € nuolaida telefonui ir nešiojamąjį internetą.') {
            $(p).remove();
        }
    }
});
