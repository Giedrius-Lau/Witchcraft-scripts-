<script>
  (function () {
    /* ------------ Style changes ----------------- */
    var css = ".close-button{position:absolute;top:5px;right:5px;color:#000000;font-size:23px;cursor:pointer;background:#ffffff;width:30px;height:30px;padding:0;line-height:0;text-align:center;padding-top:12px;border-radius:20px;z-index:1}.new-popup{box-shadow:0 0 50px #00000059;position:fixed;bottom:0;right:0;left:0;top:0;width:100%;height:100%;max-height:500px;max-width:750px;margin:auto;z-index:1200}.new-popup img{width:100%;object-fit:contain}.close-btn{position:absolute;top:-35px;right:5px;filter:brightness(100%) invert(1);width:30px;height:30px;cursor:pointer}.close-btn img{width:100%}.desktop-image{display:block}.mobile-image{display:none}@media (max-width: 767px){.desktop-image{display:none}.mobile-image{display:block}}.close-btn{position:absolute;top:-10px;right:-10px}@media (max-width: 767px){.close-button{top:10px;right:10px}.new-popup{box-shadow:none}}.image-container-link{cursor: pointer;}",
        head = document.head || document.getElementsByTagName("head")[0],
        style = document.createElement("style");

    style.type = "text/css";
    if (style.styleSheet) {
      // This is required for IE8 and below.
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
    
    var mobileImage = "https://semexit.s3.eu-west-1.amazonaws.com/Trobos/wjEun94R.jpeg";
    var desktopImage = "https://semexit.s3.eu-west-1.amazonaws.com/Trobos/eJNAy2Z3.jpeg";
    var link = "https://trobos.lt/";

    var day1 = new Date();
    sessionStorage.setItem('banner-timeout', day1);

    var interval = setInterval(function () {
      var day2 = new Date();
      var difference = day2.getTime() - Date.parse(sessionStorage.getItem('banner-timeout'));

      if (difference / 1000 > 15) {
        if (sessionStorage.getItem('trobos-popup-2') !== 'true' && !document.querySelector('.new-popup')) {
          var body = document.querySelector('body');
          var popup = document.createElement('div');

          popup.setAttribute('class', 'new-popup');
          popup.innerHTML =
            '<div class="close-button">x</div><div class="image-container-link"><img class="mobile-image" src="'+mobileImage+'" alt="promo-banner" /><img class="desktop-image" src="'+desktopImage+'" alt="promo-banner" /></div>';

          body.append(popup);

          document.querySelector('.close-button').addEventListener('click', function () {
            sessionStorage.setItem('trobos-popup-2', 'true');
            document.querySelector('.new-popup').remove();
          });

          document.querySelector('.image-container-link').addEventListener('click', function () {
            sessionStorage.setItem('trobos-popup-2', 'true');
            var url = link;
            window.location = url;
            document.querySelector('.new-popup').remove();
          });
          clearInterval(interval);
        }
      }
    }, 1000);


  })();
</script>