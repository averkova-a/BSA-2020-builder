const ProjectDetailsPage = require('./projectDetails_po');
const page = new ProjectDetailsPage();

class ProjectDetailsActions {

    navigateToBuildStepsTab() {
        page.buildStepsTab.waitForClickable(5000);
        page.buildStepsTab.click();
    }

    navigateToSettingsTab() {
        page.settingsTab.waitForClickable(5000);
        page.settingsTab.click();
    }

    addNodeJsInstallCommand() {
        page.addBuildStepButton.waitForClickable(5000);
        page.addBuildStepButton.click();
        page.nodeJsInstallCommand.waitForClickable(5000);
        page.nodeJsInstallCommand.click();
    }

    saveChanges() {
        page.saveChangesButton.waitForClickable(5000);
        page.saveChangesButton.click();
    }

    chooseBranchForRun() {
        page.runBranchSelection.waitForClickable(5000);
        page.runBranchSelection.click();
        browser.waitUntil(
            () => page.branch.isDisplayed(),
            {
                timeout: 20000,
                timeoutMsg: "branch has not displayed"
            }
        );
        page.branch.click();
    }
    
    confirmBranchForRun() {
        page.selectButton.waitForClickable(5000);
        page.selectButton.click();
    }

    triggerBuild() {
        page.triggerBuildButton.waitForClickable(5000);
        page.triggerBuildButton.click();
        this.chooseBranchForRun();
        this.confirmBranchForRun();
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





    
    // runOnSchedule() {
    //     page.runOnScheduleSwitcher.waitForDisplayed(5000);
    //     page.runOnScheduleSwitcher.click();
    // }
    
    // selectBranch() {
    //     page.branchSelection.waitForClickable(5000);
    //     page.branchSelection.click();
    //     browser.waitUntil(
    //         () => page.branch.isDisplayed(),
    //         {
    //             timeout: 20000,
    //             timeoutMsg: "branch has not displayed"
    //         }
    //     );
    //     page.branch.click();
    // }

    // selectPeriod() {
    //     page.periodSelection.waitForClickable(5000);
    //     page.periodSelection.click();
    //     browser.waitUntil(
    //         () => page.period.isDisplayed(),
    //         {
    //             timeout: 20000,
    //             timeoutMsg: "period has not displayed"
    //         }
    //     );
    //     page.period.click();
    // }

    // selectMinutes() {
    //     page.minutesSelection.waitForClickable(5000);
    //     page.minutesSelection.click();
    //     browser.waitUntil(
    //         () => page.minutes.isDisplayed(),
    //         {
    //             timeout: 20000,
    //             timeoutMsg: "minutes has not displayed"
    //         }
    //     );
    //     page.minutes.click();
    // }


}

module.exports = ProjectDetailsActions;