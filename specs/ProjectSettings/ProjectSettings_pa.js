const ProjectSettingsPage = require('./ProjectSettings_po.js');
const page = new ProjectSettingsPage();

class ProjectSettingsActions {

    goToBuildsteps() {
        page.buildstepsTab.waitForDisplayed(5000);
        page.buildstepsTab.click();
    };

    addNewBuildstep() {
        page.stepsSelectorBtn.waitForDisplayed(5000);
        page.stepsSelectorBtn.click();
        page.buildStep.waitForDisplayed(5000);
        page.buildStep.click();
        page.saveBuildstepBtn.waitForDisplayed(5000);
        page.saveBuildstepBtn.click();
    };

    triggerBuild() {
        page.triggerBtn.waitForDisplayed(5000);
        page.triggerBtn.click();
    };

    selectBranch(branch) {
        page.branchSelector.waitForDisplayed(5000);
        page.branchSelector.selectByVisibleText(branch);
        page.saveBranchBtn.waitForDisplayed(5000);
        page.saveBranchBtn.click();
    };

    goToTerminalTab() {
        page.terminalTab.waitForDisplayed(5000);
        page.terminalTab.click();
    }

    getBuildBranch() {
        page.buildBranch.waitForDisplayed(5000);
        page.buildBranch.getText();
        page.buildBranch.getText().split(" ")[1];
    }

    getBuildStatus() {
        page.buildStatus.waitForDisplayed(5000);
        page.buildStatus.getText()
    }

    goToDashboard() {
        page.dashboardLink.waitForDisplayed(5000);
        page.dashboardLink.click();
    }
}

module.exports = ProjectSettingsActions;