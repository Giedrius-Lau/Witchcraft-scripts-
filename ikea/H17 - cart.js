/*------ Params of test ----------*/
var testName = "AB test IKEAI1H17TDM - Decluttered bottom part of cart page";
var testID = "IKEAI1H17TDM";
var variationPercent = 51;
// 101 - MAX only less (100%)
// 1 - MIN more or equals (0%)
// 51 - 50/50 (50%)
/*--------------------------------*/

AbTestRun(testID, testName, variationPercent);

if (((xcookie("AB tests").indexOf("[" + testID + " : " + ABtestVariation + "]") != -1) || (variationPercent == 101)) && (xcookie("AB tests").indexOf("false") == -1)) {
  /* ------------ Variation UI/UX changes ----------------- */
  (function () {
    /* ------------ Style changes ----------------- */
    var head = document.head || document.getElementsByTagName("head")[0],
        style = document.createElement("style"),
        css = '';
    css += 'body{overflow-x:hidden}.security-texts{position:relative;display:flex;justify-content:space-between;background:#f5f5f5;padding:40px 0;margin-top:140px}.security-texts::before{position:absolute;content:'';top:0;left:-50vw;width:200vw;background:#f5f5f5;height:100%;z-index:-1}.security-texts .d-flex{width:23%}.security-texts .iconSize{font-size:36px;margin-right:20px}.security-texts h3{font-size:1.2rem;margin-top:14px;margin-bottom:12px}.order-header{width:100%;margin:100px 0 50px}#processOrder{padding:0!important}#processOrder .custom-control-label{display:flex;align-items:center;padding:10px 0 10px 10px!important}#processOrder .process-icon{position:relative!important;top:-4px!important;left:0!important;transform:none!important}#processOrder .text-container{margin-left:30px;width:100%}#processOrder .text-container p,#processOrder .text-container strong{width:100%}#processOrder .popovers>.col:not(#input_clickcollect)>.container{max-width:370px!important;margin-left:120px;margin-bottom:20px;left:30%!important;top:0}#processOrder .popovers>#input_delivery.col::before{top:-40px!important}#processOrder .custom-control-label p{margin:0!important;font-size:13px}#processOrder .process-icon:before{font-size:4rem!important}#processOrder .custom-control-label:before{top:50%;transform:translateY(-50%)}#processOrder .custom-control-input{top:50%!important;transform:translateY(-50%)!important}#processOrder .custom-radio .custom-control-input:checked~.custom-control-label:after{top:50%;transform:translateY(-65%)}#clickcollect-tab,#delivery-tab,#savelist-tab{border-top:1px solid rgba(0,0,0,.1)}#savelist-tab{border-bottom:1px solid rgba(0,0,0,.1)}';
    css += '#processOrder #savelist-tab .popovers>.col:not(#input_clickcollect)>.container{left:0!important;padding:15px 10px 0}#savelist_action_email{margin-bottom:0!important}#processOrder #savelist-tab .form-inline div.form-row{width:100%;max-width:300px}#processOrder #savelist-tab .popovers>.col:not(#input_clickcollect)::before{top:-30px;left:50%;transform:translate(-50%)}#processOrder .popovers>#input_savelist .savedlist-actions{border:0!important;margin-left:100px;margin-top:0!important;padding-top:20px!important;padding-bottom:30px!important}#processOrder .popovers>#input_savelist .savedlist-actions .iconWrapper .iconSize.picto-last-purchase:before{font-size:3.5rem!important}#processOrder .popovers>#input_savelist .savedlist-actions .iconWrapper .iconSize:before{font-size:2.5rem!important}#clickcollect_select{max-width:520px!important;margin:0 0 0 auto!important}.itemSelector .content>.selected-box .value{display:flex!important;white-space:nowrap}.itemSelector .content>.selected-box .value div{width:100%;font-weight:400;text-align:center}.itemSelector .content>.selected-box .value div span{margin-right:20px}.ikea-info_details{display:none}#input_clickcollect{margin-top:0!important}.ikea-info__map.col-12.col-sm-8{max-width:460px!important;margin:0 0 0 auto!important}.ikea-info__map.hideit{display:none}.alertMultiline{margin-bottom:20px}.custom-tabs{margin-bottom:50px}@media (min-width:1200px){#processOrder .popovers>.col:not(#input_clickcollect)>.container{transform:none!important;left:0!important}#processOrder #savelist-tab .popovers>.col:not(#input_clickcollect)>.container{max-width:520px!important}.ikea-info__map.col-12.col-sm-8{max-width:540px!important}}';
    
    style.type = "text/css";
    if (style.styleSheet) {
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
    /* ------------ End of style changes ----------------- */
    /* ------------ Code changes ----------------- */
    var container = document.querySelector('.cartNostock'),
        securityTexts = document.querySelector('.secure-text.col-12.col-lg-5.order-lg-1.order-2'),
        tabsWrapper = document.querySelector('#processOrder'),
        headerText = document.querySelector('#processOrder h2'),
        paymentContainer = document.querySelector('#payment');

    container.appendChild(securityTexts);
    securityTexts.setAttribute('class', 'security-texts');
    headerText.setAttribute('class', 'text-center order-header');

    paymentContainer.insertBefore(headerText, document.querySelector('.secure-box.col-12.col-lg-5.offset-lg-2.order-lg-2.order-1'));
    paymentContainer.insertBefore(tabsWrapper, document.querySelector('.secure-box.col-12.col-lg-5.offset-lg-2.order-lg-2.order-1'));
    document.querySelector('#processOrder').setAttribute('class', 'col-md-6');
    document.querySelector('#payment .tabs-wrapper').setAttribute('class', 'custom-tabs');
    document.querySelector('.secure-box.col-12.col-lg-5.offset-lg-2.order-lg-2.order-1').setAttribute('class', 'col-md-5 offset-lg-1 secure-box');

    document.querySelector('.custom-tabs').insertBefore(document.querySelector('#delivery-tab'), document.querySelector('#clickcollect-tab'));
    document.querySelector('#totalDelivery .my-4').setAttribute('class', 'custom-my-4');
    document.querySelector('#totalDelivery h4').innerHTML = '<strong>Pristatymo kaina</strong>';

    document.querySelectorAll('#processOrder .custom-control-label').forEach(function (element) {
      var div = document.createElement('div');
      div.setAttribute('class', 'text-container');
      element.appendChild(div);

      var strong = element.getElementsByTagName('strong')[0];
      var p = element.getElementsByTagName('p')[0];
      var newDiv = element.getElementsByClassName('text-container')[0];
      newDiv.appendChild(strong);
      newDiv.appendChild(p);
    });
    document.querySelector('#savelist-tab .text-container > p').innerText = 'Išsaugoti pirkinių krepšelį kaip sąrašą patogesniam apsipirkimui parduotuvėje.';

    var dropdownText1 = document.createElement('div');
    dropdownText1.innerHTML = '<span>Jonavos g. 60</span><a href="tel:+37052500055">+370 5 250 00 55</a>';
    if (document.querySelector('.selected-box strong').innerText == 'IKEA Kaunas') {
      document.querySelector('.selected-box strong').append(dropdownText1);
    }

    function setText() {
      var dropdownText1 = document.createElement('div');

      if (document.querySelector('.selected-box strong').innerText == 'IKEA Kaunas') {
        dropdownText1.innerHTML = '<span>Jonavos g. 60</span><a href="tel:+37052500055">+370 5 250 00 55</a>';
        document.querySelector('.selected-box strong').append(dropdownText1);
      } else if (document.querySelector('.selected-box strong').innerText == 'IKEA Vilnius') {
        dropdownText1.innerHTML = '<span>Vikingų g. 1</span><a href="tel:+37052500055">+370 5 250 00 55</a>';
        document.querySelector('.selected-box strong').append(dropdownText1);
      } else if (document.querySelector('.selected-box strong').innerText == 'IKEA Klaipėda') {
        dropdownText1.innerHTML = '<span>Šilutės pl. 29</span><a href="tel:+37052500055">+370 5 250 00 55</a>';
        document.querySelector('.selected-box strong').append(dropdownText1);
      }

      if (!document.querySelectorAll('.itemSelector--alert .alertMultiline.warning.d-none').length) {
        document.querySelector('.ikea-info__map').classList.add('hideit');
      } else {
        document.querySelector('.ikea-info__map').classList.remove('hideit');
      }
    }

    setTimeout(function () {
      setText();
    }, 1000);
    document.querySelector('#clickcollect_select').addEventListener('click', function () {
      setText();
    });
    setTimeout(function () {
      document.querySelector('iframe').setAttribute('width', '100');
      document.querySelector('iframe').setAttribute('height', '100');
    }, 3000);



    /* ------------ End of code changes ----------------- */
    hj('trigger', 'ab_test_' + testID + '_var1');
  })();
  /* ------------------------------------------------------ */
} else {
  hj('trigger', 'ab_test_' + testID + '_orig');
}