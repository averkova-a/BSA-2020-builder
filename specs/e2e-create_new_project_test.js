const assert = require('assert');

const LandingPageActions = require('./LandingPage/LandingPage_pa.js');
const landingSteps = new LandingPageActions();

const SignInActions = require('./SignIn/SignIn_pa.js');
const signInSteps = new SignInActions();


const credentials = require('./testData.json');

describe('Create project user flow', () => {

    beforeEach(() => {
        browser.maximizeWindow();
        browser.url(credentials.appUrl);
    });


    it('New project from Github', () => {
        landingSteps.goToSignIn();
        signInSteps.signInWithGithub();
        browser.pause(3000);
        browser.switchWindow('Sign in to GitHub · GitHub');
        signInSteps.sigInIntoGithub(credentials.login, credentials.password);
        browser.switchWindow('buildeR');
        browser.pause(20000);
    })
})