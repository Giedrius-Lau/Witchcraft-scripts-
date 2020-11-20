document
    .querySelectorAll('li.current')
    [document.querySelectorAll('li.current').length - 1].querySelectorAll('ul').length &&
document.querySelectorAll('ul.expanded li.current > ul').length
    ? 'true'
    : 'false';

document.querySelector('ul.expanded li.current > ul') ? 'true' : 'false';
