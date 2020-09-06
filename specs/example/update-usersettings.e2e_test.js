const assert = require('assert');

const LandingPageActions = require('./landingpage/landingpage_pa.js');
const landingSteps = new LandingPageActions();

const SignInActions = require('./signin/signin_pa.js');
const signInSteps = new SignInActions();

const menuActions = require ('./menu/menu_pa.js');
const menuSteps = new menuActions();

const usersettingsActions = require ('./usersettings/usersettings_pa.js');
const usersettingsSteps = new usersettingsActions();


const credentials = require('BSA-2020-BUILDER/testData.json');

<<<<<<< HEAD:specs/example/update_usersettings.e2e_test.js
const notification = require('./common/notification/notification.js');

        

=======
>>>>>>> 6ee2693dc0301671473a9a6b6a14ba3dbf9dab09:specs/example/update-usersettings.e2e_test.js

describe('User_flow_update_usersettings'), () => {
    
    beforeEach(() => {
        browser.maximizeWindow();
        browser.url(credentials.appUrl);
    });
    
    
    it('update usersettings', () => {
        const notification = $('div.toast-bottom-right.toast-container');
        landingSteps.goToSignIn();
        signInSteps.signInWithGithub();
        signInSteps.sigInIntoGithub(credentials.login, credentials.password);
        menuSteps.navigateToSettings();
        usersettingsSteps.enterfirstName(credentials.firstName);
        usersettingsSteps.enterlasttName(credentials.lastName);
        usersettingsSteps.enterusername(credentials.username);
        usersettingsSteps.enteremail(credentials.email);
        usersettingsSteps.enterbio(credentials.bio);
        usersettingsSteps.savechanges();

        browser.refresh();

        assert.StrictEqual(notification.getText(), "Your profile was updated");
        waitForNotificationToDissapear();

    })
}

