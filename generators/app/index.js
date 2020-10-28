const Generator = require('yeoman-generator');

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);

		this.option('babel', { description: 'Transform to babel', alias: 'b', type: String, required: true });
	}

	initializing() {
		this.composeWith(require.resolve('../turbo'));
		this.composeWith(require.resolve('../electric'));
	}

	async prompting() {
		this.answers = await this.prompt([
			{
				type: 'input',
				name: 'name',
				message: 'Your project name',
				default: this.appname,
			},
			{
				type: 'confirm',
				name: 'crud',
				message: 'Would you like to enable LSG CRUD?',
				default: false,
			}
		]);
	}

	writing() {
		this.log(this.answers);
	}

	hello() {
		this.log("hello are you there?");
	}

	morning() {
		return new Promise((res, error) => {
			setTimeout(() => {
				this.log("good morning!");

				res();
			}, 4500);
		});
	}

	bye() {
		this.log("good bye sir!");
	}
};


