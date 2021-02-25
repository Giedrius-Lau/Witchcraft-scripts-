  if(($('.header__segment-switch-menu .header__item > a').text().trim()=="Privatiems") || (window.location.href.indexOf("/privatiems") > -1)) return 'B2C';
    else if(($('.header__segment-switch-menu .header__item > a').text().trim()=="Verslui") || (window.location.href.indexOf("verslui") > -1))  return 'B2B';
    else if(($("#p_p_id_ooppwmegamenuportlet_WAR_ooppwmaininfoportlet_ > div > div > nav.oop-root-menu > div > ul.oop-header-nav > li:nth-child(3) > a").hasClass('oop-active')) || (window.location.href.indexOf("/extra") > -1)) return 'Extra';
  	else if(window.location.href.indexOf("/eng") > -1) return 'English';
  	else if(window.location.href.indexOf("/rus") > -1) return 'Russian';
  	else if(window.location.href.indexOf("/mano/") > -1) return 'SS';
