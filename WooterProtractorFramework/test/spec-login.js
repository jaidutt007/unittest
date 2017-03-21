var util = require ('util')

describe ("Protractor login page", function(){
				
    var LoginPage = require('../page/login-page.js');
    var data = require('../data/data.js'); 
	
    it('should able to login', function(){
		browser.ignoreSynchronization = true;			 
        data.projectUrl();
		browser.sleep(2000)
        LoginPage.clickMenuButton();
		browser.sleep(3000)
		LoginPage.clickLoginOption();
		LoginPage.typeEmail();
		LoginPage.typePassword();
		LoginPage.clickLoginButton();
		browser.sleep(4000);
		expect(LoginPage.createLeague()).toBe('Create a league');
    });
});