<script>
  /* ------------ Variation UI/UX changes ----------------- */
  (function () {
    var css =
        '.header.header-scrolled .header-logo img{width:auto;max-height:39px}.header.header-scrolled .header-wrapper{margin:15px 0}.header.header-scrolled .header-cart{padding-top:0;width:145px}.header.header-scrolled .header-cart:before{margin-left:0;margin-top:4px}.header.header-scrolled .header-cart .cart-amount{float:none}.header.header-scrolled .header-user>.row .icon_heart-header{font-size:18px;margin-top:2px}.header.header-scrolled .header-user>.menu-profile-wrapper{margin-right:0;padding-right:0}.header.header-scrolled .header-user{margin-top:5px}@media (max-width:992px) and (min-width:768px){.header.header-scrolled .header-user>.row{margin-right:0}}.header.header-scrolled a.cart-top-link{display:flex;justify-content:flex-end}.header.header-scrolled .cart-link{display:none}.header.header-scrolled .loggin-hdr a{display:none!important}.header.header-scrolled .loggin-hdr{cursor:pointer}.content{margin-top:18px}.breadcrumb{margin-top:18px}',
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

    setTimeout(function () {
      function css(el, styles) {
        for (var property in styles) el.style[property] = styles[property];
      }

      var tablet = window.matchMedia('(max-width: 992px)');
      var smallDesktop = window.matchMedia('(max-width: 1200px)');
      var selector = {
        topHeader: document.querySelector('.top'),
        header: document.querySelector('.header'),
        navbarCollapse: document.querySelector('.navbar-collapse'),
        login: document.querySelector('.loggin-hdr'),
      };

      if (selector.login) {
        selector.login.addEventListener(
          'click',
          function () {
            location.href = '/login';
          },
          false
        );
      }

      var topHeaderMarginBottom = function () {
        if (tablet.matches) {
          return '110px';
        } else if (smallDesktop.matches) {
          return '110px';
        }

        return '140px';
      };

      var headerInitialTop = function () {
        if (tablet.matches) {
          return '54px';
        } else if (smallDesktop.matches) {
          return '69px';
        }

        return '39px';
      };

      var navInitialPositionTop = function () {
        if (tablet.matches) {
          return '143px';
        } else if (smallDesktop.matches) {
          return '187px';
        }

        return '144px';
      };

      css(selector.topHeader, {
        'margin-bottom': topHeaderMarginBottom(),
      });

      selector.header.classList.add('sticky-main-navigation');

      css(selector.header, {
        position: 'fixed',
        'z-index': '999',
        width: '100%',
        transition: 'top 0.2s ease-in-out',
        background: '#ffffff',
        top: headerInitialTop(),
      });

      css(selector.navbarCollapse, {
        position: 'fixed',
        'z-index': '998',
        width: '100%',
        transition: 'top 0.2s ease-in-out',
        top: navInitialPositionTop(),
        'box-shadow': '0 4px 10px rgb(0 0 0 / 0.15)',
      });

      var prevScrollpos = window.pageYOffset;

      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;

        var headerTop = function () {
          if (tablet.matches) {
            return '54px';
          } else if (smallDesktop.matches) {
            return '69px';
          }

          return '39px';
        };

        var headerScrolled = function () {
          if (tablet.matches) {
            return '-15px';
          } else if (smallDesktop.matches) {
            return '0';
          }
          return '0';
        };

        var navTop = function () {
          if (tablet.matches) {
            return '143px';
          } else if (smallDesktop.matches) {
            return '184px';
          }

          return '144px';
        };

        var navScrolled = function () {
          if (tablet.matches) {
            return '69px';
          } else if (smallDesktop.matches) {
            return '69px';
          }

          return '69px';
        };

        var navHidden = function () {
          if (tablet.matches) {
            return '16px';
          } else if (smallDesktop.matches) {
          }

          return '16px';
        };

        if (currentScrollPos < 10) {
          selector.header.style.top = headerTop();
          selector.header.classList.remove('header-scrolled');
          if (document.querySelectorAll('.loggin-hdr').length) {
            selector.login.classList.remove('fa');
            selector.login.classList.add('fal');
          }
        } else {
          selector.header.style.top = headerScrolled();
          selector.header.classList.add('header-scrolled');
          if (document.querySelectorAll('.loggin-hdr').length) {
            selector.login.classList.remove('fal');
            selector.login.classList.add('fa');
          }
        }
        if (currentScrollPos < 10) {
          selector.navbarCollapse.style.top = navTop();
        }

        if (prevScrollpos > currentScrollPos) {
          if (currentScrollPos < 10) {
            selector.navbarCollapse.style.top = navTop();
          } else {
            selector.navbarCollapse.style.top = navScrolled();
          }
        } else {
          if (currentScrollPos < 10) {
            selector.navbarCollapse.style.top = navTop();
          } else {
            selector.navbarCollapse.style.top = navHidden();
          }
        }
        prevScrollpos = currentScrollPos;
      };

      if (document.querySelector('#user-block > div.menu-profile-wrapper > div.logged-hdr > a').text !== '.') {
        var emailText = document.querySelector('#user-block > div.menu-profile-wrapper > div.logged-hdr > a')
        .text;
        document.querySelector('#user-block > div.menu-profile-wrapper > div.logged-hdr > a').innerHTML =
          '<span>.</span>';
        document.querySelector('#user-block > div.menu-profile-wrapper > div.logged-hdr > a span').style.color =
          'transparent';
        var naujasTekstas = document.createElement('div');
        naujasTekstas.innerHTML = '<strong style="white-space:nowrap">' + emailText + '</strong>';

        document
          .querySelector('.profile-dropdown')
          .insertBefore(
          naujasTekstas,
          document.querySelector(
            '#user-block > div.menu-profile-wrapper > div.profile-dropdown > div.col-md-6.col-sm-12.col-xs-12.first'
          )
        );

        document.querySelector('.header .header-user>.menu-profile-wrapper .profile-dropdown').style.width =
          'auto';
      }
    }, 2000);

    document.querySelector('.loggin-hdr').addEventListener('click', function () {
      this.getElementsByTagName('a')[0].click()
    })
  })();
  /* ------------ Variation UI/UX changes ----------------- */

</script>


/* .header.header-scrolled .header-logo img {
  width: auto;
  max-height: 39px;
}

.header.header-scrolled .header-wrapper {
  margin: 15px 0;
}

.header.header-scrolled .header-cart {
  padding-top: 0;
  width: 125px;
}

.header.header-scrolled .header-cart:before {
  margin-left: 0;
  margin-top: 4px;
}

.header.header-scrolled .header-cart .cart-amount {
  float: none;
}

.header.header-scrolled .header-user > .row .icon_heart-header {
  font-size: 18px;
  margin-top: 2px;
}

.header.header-scrolled .header-user > .menu-profile-wrapper {
  margin-right: 0;
  padding-right: 0;
}

.header.header-scrolled .header-user {
  margin-top: 5px;
}

@media (max-width: 992px) and (min-width: 768px) {
  .header.header-scrolled .header-user > .row {
    margin-right: 0;
  }
}

.header.header-scrolled a.cart-top-link {
  display: flex;
  justify-content: flex-end;
}

.header.header-scrolled .cart-link {
  display: none;
}

.header.header-scrolled .loggin-hdr a {
  display: none !important;
}

.header.header-scrolled .loggin-hdr {
  cursor: pointer;
}

.content {
  margin-top: 18px;
}

.breadcrumb {
  margin-top: 18px;
} */