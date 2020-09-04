const credentials = require('./../testData.json');
class ProjectDetailsPage {

    get branch() {return $('//*[contains(text(), "' + credentials.branch + '")]')};
    // get period() {return $('//option[@value="' + credentials.period + '"]')};
    // get minutes() {return $('//*[@formcontrolname="minutes"]/option[@value="' + credentials.minutes + '"]')};

    get buildStepsTab() {return $(".list-group-item:nth-child(3) a")};
    get settingsTab() {return $(".list-group-item:nth-child(4) a")};
    get addBuildStepButton() {return $('#allEmptySteps')};
    get nodeJsInstallCommand() {return $('button.dropdown-item:nth-child(3)')};
    get saveChangesButton() {return $('//*[contains(text(), "Save changes")]')};
    get runOnScheduleSwitcher() {return $('label[for="runOnSchedule"]')};
    get branchSelection() {return $('.mr-2 select')};
    get periodSelection() {return $('#selectBase')};
    get minutesSelection() {return $('//*[@formcontrolname="minutes"]')};
    get triggerBuildButton() {return $('.fas.fa-play-circle')};
    get runBranchSelection() {return $('.input-area select')};
    get selectButton() {return $('//button[contains(text(), "Select")]')};
    get successMessage() {return $("div[aria-label='Success!']")};

}

module.exports = ProjectDetailsPage;