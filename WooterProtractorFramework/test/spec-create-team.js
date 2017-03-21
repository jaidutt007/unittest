var util = require ('util')

describe ("Protractor team page", function(){
				
    var CreateLeaguePage = require('../page/league-page.js');
	var TeamPage = require('../page/team-page.js');
    var data = require('../data/data.js'); 
	
	var teamName = "Test Team-"+Math.floor(Date.now() / 1000)
	
    it('should create a team', function(){
		browser.ignoreSynchronization = true;
		browser.sleep(3000);
        CreateLeaguePage.clickLeagueButton(0);
		browser.sleep(3000);
		TeamPage.clickHeaderTabs();
		browser.sleep(2000);
		TeamPage.clickAddTeamButton();
		browser.sleep(2000);
		TeamPage.typeTeamName(teamName);
		TeamPage.clickAddTeamButton();
		browser.sleep(4000);
		expect(TeamPage.newTeamName()).toBe(teamName);
    });
});