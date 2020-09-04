const DashboardPage = require('./dashboard_po');
const page = new DashboardPage();

class DashboardActions {

    createNewProject() {
        browser.waitUntil(
            () => page.createNewButton.isDisplayed(),
            {
                timeout: 20000,
                timeoutMsg: "createNewButton has not displayed"
            }
        );
        page.createNewButton.click();
    }

    selectCreateWithUrl() {
        browser.waitUntil(
            () => page.withUrlOption.isDisplayed(),
            {
                timeout: 20000,
                timeoutMsg: "withUrlOption has not displayed"
            }
        );
        page.withUrlOption.click();
    }

    enterRepositoryUrl(value) {
        page.repositoryUrlInput.waitForDisplayed(5000);
        page.repositoryUrlInput.clearValue();
        page.repositoryUrlInput.setValue(value);
    }

    enterProjectName(value) {
        page.projectNameInput.waitForDisplayed(5000);
        page.projectNameInput.clearValue();
        page.projectNameInput.setValue(value);
    }

    enterProjectDescription(value) {
        page.projectDescriptionInput.waitForDisplayed(5000);
        page.projectDescriptionInput.clearValue();
        page.projectDescriptionInput.setValue(value);
    }

    selectPrivateOption() {
        page.privateOption.waitForDisplayed(5000);
        page.privateOption.click();
    }

    create() {
        page.createButton.waitForClickable(5000);
        page.createButton.click();
    }

    createProjectWithUrl(repoUrl, name, description) {
        this.createNewProject();
        this.selectCreateWithUrl();
        this.enterRepositoryUrl(repoUrl);
        this.enterProjectName(name);
        this.enterProjectDescription(description);
        this.selectPrivateOption();
        this.create();
    }

    getSuccessMessage() {
        browser.waitUntil(
            () => page.successMessage.isDisplayed(),
            {
                timeout: 20000,
                timeoutMsg: "successMessage has not displayed"
            }
        );
    }
    
    openProjectDetails() {
        browser.waitUntil(
            () => page.createdProject.isDisplayed(),
            {
                timeout: 20000,
                timeoutMsg: "createdProject has not displayed"
            }
        );
        page.createdProject.click();
    }

}

module.exports = DashboardActions;