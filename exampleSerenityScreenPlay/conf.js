exports.config = {
	directConnect: true,
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['features/*.feature'],
	framework: 'custom',
	frameworkPath: require.resolve('serenity-js'),

	cucumberOpts: {
		require: ['features/**/*.ts'],
		format: 'pretty',
		compiler: 'ts:ts-node/register'
	},

	onPrepare: () => {
		browser.manage().window().maximize();
		browser.manage().timeouts().implicitlyWait(15000);
	},

	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
			args: [
				'--disable-infobars',
				'--disable-extensions',
				'verbose',
				'log-path=/tmp/chromedriver.log'
			],
			prefs: {
				'profile.password_manager_enabled': false,
				'credentials_enable_service': false,
				'password_manager_enabled': false
			}
		}
	}
}