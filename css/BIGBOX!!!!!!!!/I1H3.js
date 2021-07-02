var list = document
    .querySelector('#af_form > div.af_filter.m.clearfix.type-1.expandable > div.af_subtitle_heading > h5')
    .parentNode.parentNode.querySelectorAll('li:not(.no-matches)');

var count = 0;

list.forEach(function (item) {
    count += Number(item.textContent.match(/\d+/)[0]);
});

console.log(count);
