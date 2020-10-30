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
          AppTitle: 'hello',
        });
    }
  },

  default: {
    wire() {
      this.log('wiring');
    }
  }
});
