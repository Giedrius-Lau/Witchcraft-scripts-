var $ = jQuery;

var itemInfoText = $('body').find('.itemFacts')[1].innerText.trim();

var selectedBox = $('.selected-box')[0];

selectedBox.innerHTML = "<label for>Dydis</label><strong class='value' data-value=''>" + itemInfoText + '</strong>';

$('.options-box .item').each(function () {
    var that = $(this);
    var data = $(this).attr('data-value');
    var text;

    $.get('https://www.ikea.lt' + data, function (data) {
        text = $(data).find('.itemFacts')[1].innerText.trim();

        that.text('');
        that.append('<div>' + text + '</div>');
    });
});

var $ = jQuery;

var itemInfoText = $('body').find('.itemFacts')[1].innerText.trim();
var extractedInfoText = itemInfoText.substr(itemInfoText.lastIndexOf('/') + 1);
var extractedInfoNumber = itemInfoText.match(/\d+/) + ' cm ';

var selectedBox = $('.selected-box')[0];

var extractedInfoDiv = document.createElement('div');
extractedInfoDiv.setAttribute('class', 'inserted-text');
extractedInfoDiv.innerHTML = '';

selectedBox.innerHTML =
    "<label for>Dydis</label><strong class='value' data-value=''>" +
    extractedInfoNumber +
    " <span class='upper-case'>" +
    extractedInfoText +
    '</span></strong>';

$('.options-box .item').each(function () {
    var that = $(this);
    var data = $(this).attr('data-value');
    var text;
    $.get('https://www.ikea.lt' + data, function (data) {
        text = $(data).find('.itemFacts')[1].innerText.trim();
        var extractedNumber = text.match(/\d+/) + ' cm ';

        if (!!text.match(new RegExp('/'))) {
            var extractedText = text.substr(text.lastIndexOf('/') + 1);
            that.text('');
            that.append('<span>' + extractedNumber + '</span><span>' + extractedText + '</span>');
        } else {
            var extractedText = text.match(/\w+$/)[0];

            that.text('');
            that.append('<span>' + extractedNumber + '</span><span>' + extractedText + '</span>');
        }
    });
});
