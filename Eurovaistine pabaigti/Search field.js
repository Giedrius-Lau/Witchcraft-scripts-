console.log("prasideda");
setTimeout(() => {
  var selector = {
    topHeader: document.querySelectorAll(".top")[0],
    header: document.querySelectorAll(".header")[0],
    navbarCollapse: document.querySelectorAll(".navbar-collapse")[0],
    login: document.querySelector(".loggin-hdr"),
    searchBlock: document.querySelector("#search-block"),
  };

  selector.login.addEventListener(
    "click",
    function () {
      location.href = "/login";
    },
    false
  );

  selector.login.classList.remove("fal");
  selector.login.classList.add("fa");

  var prevScrollpos = window.pageYOffset;
  document.body.onscroll = function () {
    console.log('Testing scroll')
    console.log('prevScrollpos ', prevScrollpos)
    console.log('window.pageYOffset ', window.pageYOffset)
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      if (selector.searchBlock.classList.contains("in")) {
        selector.searchBlock.classList.remove("in");
      }
    } else {
      if (!!selector.searchBlock.classList.contains("in")) {
        selector.searchBlock.classList.add("in");
      }
    }
    prevScrollpos = currentScrollPos;
  };


}, 1000);

/* .header .loggin-hdr a {
  display: none !important;
}

.header .loggin-hdr {
  cursor: pointer;
}

.header .cart-link {
  display: none;
}

.header .header-wrapper {
  margin: 15px 0;
  justify-content: space-between;
}

.header .header-logo {
  margin: 0 auto 0 0;
}

div#user-block {
  width: 70px;
  margin-right: 20px;
}

.header .header-mid {
  max-width: 560px;
  width: 100%;
}

.header .header-mid .btn {
  background: rgb(247 181 0);
  border-radius: 5px;
  color: #000000;
  border: 0;
  width: 39px;
}

.header-mid .search-form .input-group {
  position: relative;
}

.header-mid .search-form .input-group .input-group-btn {
  position: relative;
  right: 36px;
  z-index: 1000;
}

.header-mid .search-form .input-group .glyphicon {
  font-size: 12px;
}

.header-mid .form-control {
  border: 1px solid #d6d6d6;
  box-shadow: inset 0 0 4px rgb(0 0 0 / 10%);
  border-radius: 5px !important;
}

.top-links li:nth-child(1), .top-links li:nth-child(3),
.top-links li:nth-child(1) a, .top-links li:nth-child(3) a{
  background: #e3e3e3 !important;
  color: #a3a3a3;
}

::-webkit-input-placeholder {
  font-style: normal !important;
}
:-moz-placeholder {
  font-style: normal !important;  
}
::-moz-placeholder {
  font-style: normal !important;  
}
:-ms-input-placeholder {  
  font-style: normal !important; 
}

@media (max-width: 767px) {
  #search-block .input-group {
    display: block;
  }

  .header-mid .search-form .input-group .input-group-btn {
    position: absolute;
    right: 36px;
    top: 0;
  }

  
} */