'use strict';

const Generator = require('yeoman-generator');
const path = require('path');

module.exports = Generator.extend({
  constructor: function () {
    Generator.apply(this, arguments);

    this.sourceRoot(path.join(__dirname, 'templates/generic-app'));
  },

  initializing: {
  },

  prompting: {
    async confirmPlease() {
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
        },
        {
          when: answers => answers.tension,
          type: 'input',
          name: 'body',
          message: 'Body message',
          default: 'Welcome everybody!'
        }
      ]);
    }
  },

  writing: {
    doTheWriting() {
      this.log('electrical writing to files');
      this.destinationRoot('RootFolder');

      this.fs.copyTpl(this.templatePath('public/index.html'),
        this.destinationPath('public/index.html'),
        {
          AppTitle: this.answers.electric,
        });

      this.fs.copy(`${this.templatePath('src/')}`, this.destinationPath('src/'));
      this.fs.copyTpl(this.templatePath('src/App.js'), this.destinationPath('src/App.js'),
        {
          AppBody: this.answers.body
        });

      this.fs.copy(this.templatePath('package.json'), this.destinationPath('package.json'));
      this.fs.copy(this.templatePath('README.md'), this.destinationPath('README.md'));

      // Initialize git repository
      this.spawnCommandSync('git', ['init', this.destinationPath()]);
    }
  },

  installing() {
    this.yarnInstall();
  },

  default: {
    wire() {
      this.log('wiring');
    }
  }
});
