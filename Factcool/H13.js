setTimeout(() => {
    var body = $('body');
    var fcSelect = $('#form-950973 > div:nth-child(2) > div:nth-child(2) > .fc-select');
    var dropdown = document.createElement('div');
    dropdown.innerHTML =
        '<ul class="custom-dropdown"><li class="init">[Select size]</li> <li><span>S</span><strong style="background-color:hsl(214,100%, 70% )"> 24H </strong></li> <li><span>M</span><strong style="background-color:hsl(214,100%, 70% )"> 24H </strong></li> <li><span>L</span><strong style="background-color:hsl(214,100%, 95% )"> 3 - 7 Dienos </strong></li> <li><span>XL</span><strong style="background-color:hsl(214,100%, 95% )"> 3 - 7 Dienos </strong></li></ul>';
    body.append(dropdown);
    $('.custom-dropdown').insertAfter(fcSelect);

    $('ul.custom-dropdown').on('click', '.init', function () {
        $(this).closest('ul.custom-dropdown').children('li:not(.init)').toggle();
    });

    var allOptions = $('ul').children('li:not(.init)');
    $('ul.custom-dropdown').on('click', 'li:not(.init)', function () {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $('ul.custom-dropdown').children('.init').html($(this).html());
        allOptions.toggle();
    });
}, 100);

var sizes = [];

$('.product-availability-list li').each(function (li) {
    console.log($(this).html());
});

$('body > div.sweet-alert.showSweetAlert.visible > p > p > label:nth-child(3)').click();
$('#options > option:nth-child(3)').click();

// ul.custom-dropdown {
//     height: 30px;
//     border: 1px #000 solid;
//     width: 100%;
// }
// ul.custom-dropdown li {
//     padding: 5px 10px;
//     z-index: 2;
// }
// ul.custom-dropdown li:not(.init) {
//     float: left;
//     width: 100%;
//     display: none;
//     background: #ddd;
// }
// ul.custom-dropdown li:not(.init):hover,
// ul li.selected:not(.init) {
//     background: #09f;
// }
// ul.custom-dropdown li.init {
//     cursor: pointer;
// }

// ul.custom-dropdown li strong {
//     float: right;
// }
