const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'confirm',
        name: 'tension',
        message: 'Would you like to use voltage?',
        default: true,
      },
      {
        type: 'input',
        name: 'electric',
        message: 'Name of you electric module',
      }
    ]);
  }

  writing() {
    this.log('electrical writing to files');
  }

  wire() {
    this.log('wiring');
  }
};
