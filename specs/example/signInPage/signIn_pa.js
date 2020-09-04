const SignInPage = require('./signIn_po');
const page = new SignInPage();

class SignInActions {

    signInGithub(username) {
        browser.waitUntil(
            () => page.signInGithubButton.isDisplayed(),
            {
                timeout: 20000,
                timeoutMsg: "signInGithubButton has not displayed"
            }
        );
        page.signInGithubButton.click();

        // browser.switchWindow("Sign in to GitHub · GitHub - Google Chrome");

        // browser.waitUntil(
        //     () => page.usernameInput.isDisplayed(),
        //     {
        //         timeout: 20000,
        //         timeoutMsg: "usernameInput has not displayed"
        //     }
        // );
        // page.usernameInput.clearValue();
        // page.repositoryUrlInput.setValue(username);

        // browser.wait(5000);
        
    }
    
}

module.exports = SignInActions;