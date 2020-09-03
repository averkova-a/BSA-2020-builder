class usersettings {

   
    get firstNameInput () {return $('.group :nth-child(2) input')};
    get lastNameInput () {return $('.group :nth-child(4) input')};
    get usernameInput () {return $('.group :nth-child(8) input')};
    get emailInput () {return $('.group :nth-child(10) input')};
    get bioInput () {return $("[formcontrolname='bio']")};
    get savebtn () {return $('button.btn.btn-success')};

}

module.exports = usersettings;

