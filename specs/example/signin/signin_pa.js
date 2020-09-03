const SignInPage = require('./SignIn_po.js');
const page = new SignInPage();

class SignInPageActions {

    signInWithGithub() {
        page.signInWithGithubBtn.waitForDisplayed(5000);
        page.signInWithGithubBtn.click();
    };

    sigInIntoGithub(login, password) {
        page.githubLoginField.waitForDisplayed(5000);
        page.githubLoginField.setValue(login);
        page.githubPasswordField.setValue(password);
    }
}

module.exports = SignInPageActions;