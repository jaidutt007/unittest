var SignUpPage = require("./../pages/signUp.page.js");

describe("Sign Up", function () {
	var signUpPage;

	beforeAll(function() {
		signUpPage = new SignUpPage();
		});

	it("Check sign up with walid data", function(){	
		signUpPage.createNewUser();
		browser.sleep(5000);
		expect(browser.getCurrentUrl()).toEqual('https://wooter.co/dashboard/leagues')
		});
});