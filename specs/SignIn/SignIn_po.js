class SignInPage {

    get signInWithGithubBtn () {return $('.content :nth-child(3)')};
    get githubLoginField () {return $('#login_field')};
    get githubPasswordField () {return $('#password')}; 
    get githubSubmitBtn () {return $('.btn-primary')};
}

module.exports = SignInPage;