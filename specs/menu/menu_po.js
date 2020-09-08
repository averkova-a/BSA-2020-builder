class MenuPage {
    
    get dropdown () {return $('a#navbarDropdown2')};
    get settings () {return $('div.dropdown-menu a:nth-child(1)')};
 

};

module.exports = MenuPage;
