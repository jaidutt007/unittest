var util = require ('util')

describe ("Protractor league", function(){
				
    var CreateLeaguePage = require('../page/league-page.js');
	var LoginPage = require('../page/login-page.js');
    var data = require('../data/data.js'); 
	
    it('should archive a league', function(){
		browser.ignoreSynchronization = true;			 
        LoginPage.clickMenuButton();
		browser.sleep(3000)
		LoginPage.clickDashboardOption();
		browser.sleep(5000)
		CreateLeaguePage.clickLeagueMenuIcon();
		browser.sleep(2000)
		CreateLeaguePage.clickArchiveOption()
		browser.sleep(2000);
    });
});