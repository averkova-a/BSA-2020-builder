const assert = require('assert');

const LandingPageActions = require('./LandingPage/LandingPage_pa.js');
const landingSteps = new LandingPageActions();

const SignInActions = require('./SignIn/SignIn_pa.js');
const signInSteps = new SignInActions();

const DashboardActions = require('./Dasboard/Dashboard_pa.js');
const dashboardSteps = new DashboardActions;

const ProjectSettingsActions = require('./ProjectSettings/ProjectSettings_pa.js');
const projectSettingsSteps = new ProjectSettingsActions;

const credentials = require('./testData.json');

describe('Create project user flow', () => {

    beforeEach(() => {
        browser.maximizeWindow();
        browser.url(credentials.appUrl);
    });


    it('New project from Github', () => {
        landingSteps.goToSignIn();

        signInSteps.signInWithGithub();
        browser.pause(5000); // need upgrading
        browser.switchWindow('Sign in to GitHub · GitHub');
        signInSteps.sigInIntoGithub(credentials.login, credentials.password);
        browser.switchWindow('BuildeR');

        dashboardSteps.openNewProjectModal();
        browser.pause(3000);
        dashboardSteps.chooseGithubOption(credentials.repo);
        dashboardSteps.createNewProject(credentials.projectName);
        dashboardSteps.selectProjectByName();

        projectSettingsSteps.goToBuildsteps();
        projectSettingsSteps.addNewBuildstep();
        projectSettingsSteps.triggerBuild();
        projectSettingsSteps.selectBranch(credentials.buildBranch);
        projectSettingsSteps.goToTerminalTab();
        projectSettingsSteps.getBuildBranch();
        browser.pause(10000);

        assert.equal(projectSettingsSteps.getBuildBranch(), credentials.buildBranch);

        projectSettingsSteps.goToDashboard();
        dashboardSteps.deleteProject();


    })
})