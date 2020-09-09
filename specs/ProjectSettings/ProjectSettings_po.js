class ProjectSettingsPage {

    get buildstepsTab () {return $('.project-main .list-group-item:nth-child(3) a')};
    get stepsSelectorBtn () {return $('#allEmptySteps')};
    get buildStep () {return $('.dropdown-menu div:nth-child(2) :first-child')};
    get saveBuildstepBtn () {return $('.btn-success:nth-child(2)')}; 
    get triggerBtn () {return $('.trigger-button')};
    get branchSelector () {return $('.branch-select')};
    get saveBranchBtn () {return $('.modal-content .btn-success')};
    get terminalTab () {return $('.list-group-item:nth-child(1) a')};
    get buildBranch () {return $('.branch')};
    get buildStatus () {return $('.status')};
    get dashboardLink () { return $('.navbar-nav li:first-child a')};
}

module.exports = ProjectSettingsPage;
