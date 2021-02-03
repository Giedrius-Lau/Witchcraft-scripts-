setTimeout(() => {
    // document.querySelector('#button_6346').setAttribute('data-card-id', '6346');
    // document.querySelector('#button_6327').setAttribute('data-card-id', '6323');
    // document.querySelector('#button_6347').setAttribute('data-card-id', '6347');
    // document.querySelector('#button_6348').setAttribute('data-card-id', '6348');
    // document.querySelector('#button_6349').setAttribute('data-card-id', '6349');
    document.querySelectorAll('#tab__id6322 > div > div > div  .slick-slide > div.js-height_footer.plan__footer div > button').forEach(function (element) {
        element.setAttribute('data-card-id', '6323');

        element.addEventListener('click', function () {
            TC.leads.modal.show();
        });
    });
}, 500);

var TeliaLead = {
    stickyVertical: function () {
        $('.js-sticky-vertical').show();
    },
    stickyBottom: function () {
        $('.js-sticky-bottom').show();
    },
    modal: function () {},
};
window.setCookieDomain = 'telia.lt';
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag),
    $('document').ready(function () {
        $('[data-target="#modal-popup-telia-lead-popup"]').click(function () {
            setTimeout(function () {
                TC.leads.modal.show();
            }, 0);
        });
    });
