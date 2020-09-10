const MainPage = require('./main_po');
const page = new MainPage();

class MainActions {

    signIn() {
        browser.waitUntil(
            () => page.signInButton.isDisplayed(),
            {
                timeout: 20000,
                timeoutMsg: "signInButton has not displayed"
            }
        );
        page.signInButton.click();
    }
    
}

module.exports = MainActions;