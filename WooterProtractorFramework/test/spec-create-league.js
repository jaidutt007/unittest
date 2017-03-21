var util = require ('util')

describe ("Protractor login page", function(){
				
    var CreateLeaguePage = require('../page/league-page.js');
    var data = require('../data/data.js'); 
	
	var leagueName = "Test League-"+Math.floor(Date.now() / 1000)
	
    it('should create a league', function(){
		browser.ignoreSynchronization = true;			 
        CreateLeaguePage.clickCreateLeagueButton();
		browser.sleep(2000);
		CreateLeaguePage.typeLeagueName(leagueName);
		CreateLeaguePage.clickCreateSeason();
		browser.sleep(3000);
		browser.executeScript('window.scrollTo(0,200);').then(function() {
            browser.sleep(3000);
        });
		CreateLeaguePage.clickAddSeasonButton();
		browser.sleep(5000);
		CreateLeaguePage.clickSaveButton();
		browser.sleep(5000);
		expect(CreateLeaguePage.LeagueName()).toBe(leagueName);
    });
});