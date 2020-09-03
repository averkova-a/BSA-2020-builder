const DashboardPage = require('./Dashboard_po.js');
const page = new DashboardPage();

class DashboardActions {

    openNewProjectModal() {
        page.newProjectButton.waitForDisplayed(5000);
        page.newProjectButton.click();
    };

}

module.exports = DashboardActions;