const credentials = require('./../testData.json');
class DashboardPage {

    get createNewButton() {return $('.btn.btn-info')};
    get withUrlOption() {return $('input[name=radioBasic]')};
    get repositoryUrlInput() {return $('input[formcontrolname=repositoryURL]')};
    get projectNameInput() {return $("[placeholder='Project name']")};
    get projectDescriptionInput() {return $("textarea")};
    get privateOption() {return $("#privateLevel")};
    get publicOption() {return $("#publicLevel")};
    get createButton() {return $(".btn.btn-success")};
    get successMessage() {return $("div[aria-label='Success!']")};
    get createdProject() {return $('//h5/a[contains(text(), "' + credentials.projectName + '")]')};
    
}

module.exports = DashboardPage;