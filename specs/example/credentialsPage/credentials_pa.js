const CredentialsPage = require('./credentials_po');
const page = new CredentialsPage();

class CredentialsActions {

    enterUsername(value) {
        page.usernameInput.waitForDisplayed(5000);
        page.usernameInput.clearValue();
        page.usernameInput.setValue(value);
    }

    enterPassword(value) {
        page.passwordInput.waitForDisplayed(5000);
        page.passwordInput.clearValue();
        page.passwordInput.setValue(value);
    }

    submitCredentials() {
        page.commit.waitForClickable(5000);
        page.commit.click();
    }

    enterCredentials(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.submitCredentials();
    }

    // signInGithub(username) {
    //     browser.waitUntil(
    //         () => page.signInGithubButton.isDisplayed(),
    //         {
    //             timeout: 20000,
    //             timeoutMsg: "signInGithubButton has not displayed"
    //         }
    //     );
    //     page.signInGithubButton.click();

    //     // browser.switchWindow("Sign in to GitHub · GitHub - Google Chrome");
        
    // }
    
}

module.exports = CredentialsActions;