var onlineInterval = window.setInterval(function () {
    var button = document.querySelector('.frontpage-search__header-mobile-button > button');

    if (button) {
        button.click();
        clearInterval(onlineInterval);

        setTimeout(() => {
            window.requestAnimFrame = (function () {
                return (
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    }
                );
            })();

            function scrollToY(scrollTargetY, easing) {
                var scrollY = window.scrollY,
                    scrollTargetY = scrollTargetY || 0,
                    easing = easing || 'easeOutSine',
                    currentTime = 0;

                var time = 2;

                var PI_D2 = Math.PI / 2,
                    easingEquations = {
                        easeOutSine: function (pos) {
                            return Math.sin(pos * (Math.PI / 2));
                        },
                        easeInOutSine: function (pos) {
                            return -0.5 * (Math.cos(Math.PI * pos) - 1);
                        },
                        easeInOutQuint: function (pos) {
                            if ((pos /= 0.5) < 1) {
                                return 0.5 * Math.pow(pos, 5);
                            }
                            return 0.5 * (Math.pow(pos - 2, 5) + 2);
                        },
                    };

                function tick() {
                    currentTime += 1 / 60;

                    var p = currentTime / time;
                    var t = easingEquations[easing](p);

                    if (p < 1) {
                        requestAnimFrame(tick);

                        window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
                    } else {
                        console.log('scroll done');
                        window.scrollTo(0, scrollTargetY);
                    }
                }

                tick();
            }

            scrollToY(344, 'easeInOutQuint');
        }, 1000);
    }
}, 250);
