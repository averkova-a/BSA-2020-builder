class CredentialsPage {

    get usernameInput() {return $("#login_field")};
    get passwordInput() {return $("#password")};
    get commit() {return $("input[name='commit']")};

}

module.exports = CredentialsPage;