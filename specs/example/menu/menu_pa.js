const MenuPage = require('../menu/menu_po.js');
const menu = new MenuPage();

class menuActions {

    _moveToMenu() {
        menu.dropdown.waitForDisplayed(10000);
        menu.dropdown.moveTo();
    };


    navigateToSettings() {
        this._moveToMenu();
        menu.settings.waitForDisplayed(2000);
        menu.settings.click();
    }
}

module.exports = menuActions;