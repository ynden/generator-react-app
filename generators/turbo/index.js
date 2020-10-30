const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('projectLanguage', { type: String, description: 'language for the project: js or ts' });
  }

  async prompting() {
    this.log(`You choose ${this.options.projectLanguage}`);

    this.answers = await this.prompt([
      {
        type: 'confirm',
        name: 'turbo',
        message: 'Would you like to enable turbo?',
        default: true
      },
      {
        when: (answers) => answers.turbo,
        type: 'list',
        name: 'model',
        message: 'What type of turbo do you want?',
        choices: ['V12', 'V8', 'V6', 'None'],
        default: 'None'
      }
    ]);
  }

  writing() {
    this.log('turbo is now writing to files');

    const pkgJson = {
      devDependencies: {
        eslint: '^3.15.0'
      },
      dependencies: {
        react: '^16.2.0'
      }
    };
  }

  install() {
    // this.npmInstall();
  }

  turbo() {
    this.log('turbo processing');
  }
};