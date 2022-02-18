window.setInterval(function () {
    var badges = document.querySelectorAll('.badge__inline.plan-card__badge');

    if (window.location.search === '?24-men-sutartis') {
        badges.forEach(function (badge) {
            if (badge.classList.contains('hidden')) {
                badge.classList.remove('hidden');
            }
        });
    } else if (window.location.search === '?be-isipareigojimu') {
        badges.forEach(function (badge) {
            if (!badge.classList.contains('hidden')) {
                badge.classList.add('hidden');
            }
        });
    }
}, 250);
