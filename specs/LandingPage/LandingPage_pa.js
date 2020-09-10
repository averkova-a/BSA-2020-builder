const LandingPage = require('./LandingPage_po.js');
const page = new LandingPage();

class LandingPageActions {

    goToSignIn() {
        page.signInButton.click();
    }
}

module.exports = LandingPageActions;