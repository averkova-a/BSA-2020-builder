const usersettings = require ('../usersettings/usersettings_po.js');
const page = newusersettings ();

class usersettingsActions {

    
    clickmenudropdown() {
        page.menudropdown.waitforDisplayed(2000);
        page.menudropdown.click();
    };

    clicksettings() {
        page.settings.waitfordisplayed(2000);
        page.settings.click();

    }   
       
    enterfirstName(value) {
        page.firstNameInput.clearValue();
        page.firstNameInput.setValue(value);
    };

    enterlastName(value) {
        page.lastNameInput.clearValue();
        page.lastNameInput.setValue(value);
    };

    enterusername(value) {
        page.usernameInput.clearValue();
        page.usernameInput.setValue(value);
    };

    enteremail(value) {
        page.emailInput.clearValue();
        page.emailInput.setValue(value);
    };

    enterbio(value) {
        page.bioInput.clearValue();
        page.bioInput.setValue(value);
    };

    savechanges() {
        page.savebtn.waitforDisplayed(2000);
        page.savebtn.click();

    }
}

module.exports = usersettingsActions;
