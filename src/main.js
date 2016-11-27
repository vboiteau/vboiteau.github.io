var bulk = require ('bulk-require');
var Section = require ('./section');
window.app = (function () {
    var templates = bulk(__dirname, ['../templates/**/*.handlebars'])['..']['templates'];
    var data = bulk(__dirname, ['./../data/**/*.json'])['..']['data'];
    var main_container = document.getElementById('main_content');
    var sections = {};
    function addSection (name, data, template) {
        sections[name] = new Section(name, data, template);
    };
    addSection('projects', data.projects, templates.projects);
    addSection('blog', data.blog, templates.blog);
    
    function changeSection (name) {
        if(sections[name]===undefined) return;
        main_container.innerHTML = sections[name].load();
        window.scrollTo(0,0);
        if (window.location.hash!='#'+name) {
           window.location.hash = '#'+name; 
        }
    }
    function loadFromHash () {
        if (window.location.hash[0]==='#') {
            changeSection(window.location.hash.substr(1));
        } else {
            changeSection('projects');
        }
    };
    loadFromHash();
    window.onhashchange = loadFromHash;
    var navHTML = templates.nav({sections:Object.keys(sections)});
    var nav = document.createElement('div');
    nav.innerHTML=navHTML;
    main_container.parentElement.insertBefore(nav.querySelector('.nav'), main_container);
    return {changeSection:changeSection};
})();
