const DashboardPage = require('./Dashboard_po.js');
const page = new DashboardPage();

class DashboardActions {

    openNewProjectModal() {
        page.newProjectButton.waitForDisplayed(5000);
        page.newProjectButton.click();
    };

    chooseGithubOption(repo) {
        page.githubRadioButton.waitForDisplayed(5000);
        page.githubRadioButton.click();
        page.repositoryInput.waitForDisplayed(5000);
        page.repositoryInput.setValue(repo);
        page.repositoryOption.waitForExist({ timeout: 5000 });
        page.repositoryOption.click();

    }

    createNewProject(value) {
        page.projectNameInput.setValue(value);
        page.createProjectButton.waitForEnabled({ timeout: 5000 });
        page.createProjectButton.click()
    }

    getProjectNameInputValue() {
        page.projectNameInput.waitForDisplayed(5000);
        page.projectNameInput.getValue()
    }

    selectProjectByName() {
        page.projectName.waitForDisplayed(5000);
        page.projectName.click();
    }

    deleteProject() {
        page.projectMenuBtn.waitForDisplayed(5000);
        page.projectMenuBtn.click();
        page.deleteOption.waitForDisplayed(5000);
        page.deleteOption.click();
        page.accessDeleteBtn.waitForDisplayed(5000);
        page.accessDeleteBtn.click();
    }

}

module.exports = DashboardActions;