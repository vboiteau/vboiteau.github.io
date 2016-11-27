var Section = function (name, data, template) {
    this.name = name;
    this.data = data;
    this.template = template;
};

Section.prototype.load = function () {
    return this.template(this.data);
};

module.exports = Section;
