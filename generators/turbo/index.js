const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'confirm',
        name: 'turbo',
        message: 'Would you like to enable turbo?',
        default: true
      }
    ]);
  }

  writing() {
    this.log('turbo is now writing to files');
  }

  turbo() {
    this.log('turbo processing');
  }
};