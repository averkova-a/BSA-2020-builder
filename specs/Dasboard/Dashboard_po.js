const credentials = require('../testData.json');

class DashboardPage {

    get newProjectButton () {return $('.container .btn-info')};
    get githubRadioButton () {return $('[name="githubRepoButton"]')};
    get repositoryInput () {return $('[formcontrolname="_repository"]')};
    get projectNameInput () {return $('[formcontrolname="name"]')};
    get createProjectButton () {return $('.btn-success')};
    get repositoryOption () {return $('ngb-typeahead-window button')};
    get projectName () {return $(".project-wr:last-child h5 a")};
    get projectMenuBtn () {return $(".project-wr:last-child .btn.bars")};
    get deleteOption () {return $(".btn-danger")};
    get accessDeleteBtn () {return $(".modal-content .btn-danger")};
}

module.exports = DashboardPage;