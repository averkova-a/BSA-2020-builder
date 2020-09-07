class MenuPage {
    
    get menudropdown () {return $('a#navbarDropdown2.dropdown-toggle.nav-link')};
    get settings () {return $('body > app-root > app-work-space > nav > div > div.d-flex.order-lg-1.ml-auto.pr-2 > div.nav-item.show.dropdown > div > a:nth-child(1)')};
 

};

module.exports = MenuPage;
