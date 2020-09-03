class SignInPage {

    get signInWithGithubBtn () {return $('.content :nth-child(3)')};
    get githubLoginField () {return $('#login_field')};
    get githubPasswordField () {return $('#password')};
}

module.exports = SignInPage;