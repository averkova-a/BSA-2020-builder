const assert = require('assert');

const LandingPageActions = require('./landingpage/landingpage_pa.js');
const landingSteps = new LandingPageActions();

const SignInActions = require('./signin/signin_pa.js');
const signInSteps = new SignInActions();

const menuActions = require('./menu/menu_pa.js');
const menuSteps = new menuActions();

const usersettingsActions = require('./usersettings/usersettings_pa.js');
const usersettingsSteps = new usersettingsActions();


const credentials = require('F:/BuildeR/testData2.json');

const notificationEI = require('./common/notification/notification.js');

        
describe('User_flow_update_usersettings', () => {
    
    beforeEach(() => {
        browser.maximizeWindow();
        browser.url(credentials.appUrl);
    });
    
    
    it('update usersettings', () => {
        
        landingSteps.goToSignIn();
        signInSteps.signInWithGithub();
        browser.pause(3000);
        browser.switchWindow('Sign in to GitHub · GitHub');
        signInSteps.sigInIntoGithub(credentials.login, credentials.password);
        signInSteps.submitCredentials();
        browser.switchWindow(credentials.appUrl);
        browser.pause(3000);

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
})

