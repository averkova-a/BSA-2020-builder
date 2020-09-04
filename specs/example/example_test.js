const MainActions = require('./mainPage/main_pa');
const SignInActions = require('./signInPage/signIn_pa');
const DashboardActions = require('./dashboardPage/dashboard_pa');
const CredentialsActions = require('./credentialsPage/credentials_pa');
const ProjectDetailsActions = require('./projectDetailsPage/projectDetails_pa');
const assert = require('assert');
const credentials = require('./testData.json');
const githubCredentials = require('./githubCredentials.json');

const mainSteps = new MainActions();
const signInSteps = new SignInActions();
const dashboardSteps = new DashboardActions();
const credentialsSteps = new CredentialsActions();
const projectDetailsSteps = new ProjectDetailsActions();

describe("User flows", () => {

    beforeEach(() => {
        browser.maximizeWindow();
        browser.url(credentials.mainPageURL);
    });

    afterEach(() => {
        browser.reloadSession();
    });

    it("Should log in with Github credentials", () => {
        // Sign in
        mainSteps.signIn();
        signInSteps.signInGithub();
        browser.pause(5000);
        browser.switchWindow('Sign in to GitHub · GitHub');
        credentialsSteps.enterCredentials(githubCredentials.username, githubCredentials.password);
        browser.switchWindow('BuildeR');
        browser.pause(5000);
        // Create project with URL
        dashboardSteps.createProjectWithUrl(credentials.repositoryUrl, credentials.projectName, credentials.projectDescription);
        dashboardSteps.getSuccessMessage();
        // Navigate to created project details
        dashboardSteps.openProjectDetails();
        // Add build step
        projectDetailsSteps.navigateToBuildStepsTab();
        projectDetailsSteps.addNodeJsInstallCommand();
        projectDetailsSteps.saveChanges();
        // Trigger a build
        projectDetailsSteps.triggerBuild();
        projectDetailsSteps.getSuccessMessage();

        browser.pause(5000);

    });

})
