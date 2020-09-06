const LandingPage = require('./landingpage_po.js');
const page = new LandingPage();

class LandingPageActions {

    goToSignIn() {
        page.signInButton.click();
    }
}

module.exports = LandingPageActions;