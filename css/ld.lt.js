var radioGroup = document.querySelector(
    '#content > div > div.content > div.block-ecom.block-skin-sand > div:nth-child(3) > div.ecom-section.ecom-form.col-5.last.col-8 > form > div:nth-child(5) > div'
);
var firstRadio = document.querySelector(
    '#content > div > div.content > div.block-ecom.block-skin-sand > div:nth-child(3) > div.ecom-section.ecom-form.col-5.last.col-8 > form > div:nth-child(5) > div > span:nth-child(3)'
);
var secondRadio = document.querySelector(
    '#content > div > div.content > div.block-ecom.block-skin-sand > div:nth-child(3) > div.ecom-section.ecom-form.col-5.last.col-8 > form > div:nth-child(5) > div > span:nth-child(4)'
);
var newDivElement = document.createElement('div');
newDivElement.setAttribute('class', 'new-div-element');
newDivElement.innerHTML = '<div class="first-choice"></div><div class="second-choice"></div>';

radioGroup.appendChild(newDivElement);

var firstRadioContent = document.createElement('div');
firstRadioContent.setAttribute('class', 'firstRadioContent user-styled');
firstRadioContent.innerHTML =
    '<strong>STANDARTINIS transporto priemonės (TP) naudojimas eisme:</strong><ul><li>Jeigu TP naudojama kita kelio puse nei numatyta pagal vairo padėtį, privalo būti įrengta speciali vairuotojo matomumą gerinanti įranga.</li><li>Jeigu ketinama TP naudoti kitoje ES šalyje ilgiau nei 6 mėn., ji toje šalyje turi būti nedelsiant perregistruota.</li></ul>';

var secondRadioContent = document.createElement('div');
secondRadioContent.setAttribute('class', 'secondRadioContent user-styled');
secondRadioContent.innerHTML =
    '<strong>IŠPLĖSTINIS transporto priemonės (TP) naudojimas eisme:</strong><ul><li>Standartiniame variante išvardinti apribojimai netaikomi.</li></ul>';

document.querySelector('.first-choice').appendChild(firstRadio);
document.querySelector('.second-choice').appendChild(secondRadio);

document.querySelector('.first-choice').appendChild(firstRadioContent);
document.querySelector('.second-choice').appendChild(secondRadioContent);

document.querySelector('.form-title-hint').remove();

function checkBackground() {
    if (document.getElementById('usageAbroad1').checked === true) {
        document.querySelector('.first-choice').classList.add('selected-radio');
        if (document.querySelector('.second-choice.selected-radio') && document.querySelector('.second-choice.selected-radio')) {
            document.querySelector('.second-choice.selected-radio').classList.remove('selected-radio');
        }
    }

    if (document.getElementById('usageAbroad2').checked === true) {
        document.querySelector('.second-choice').classList.add('selected-radio');
        if (document.querySelector('.first-choice.selected-radio') && document.querySelector('.first-choice.selected-radio')) {
            document.querySelector('.first-choice.selected-radio').classList.remove('selected-radio');
        }
    }
}

checkBackground();

var radioButtons = document.querySelectorAll('.first-choice span.radio-item.newline, .second-choice span.radio-item.newline');
radioButtons.forEach(function (item, idx) {
    item.addEventListener('click', function () {
        checkBackground();
    });
});
