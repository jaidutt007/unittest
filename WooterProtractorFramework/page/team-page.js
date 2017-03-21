var TeamPage = function(){
	
	
	this.clickHeaderTabs = function(){
		element(by.xpath('.//*[@id="leagueDashboardHeader"]/nav/div/ul[1]/li[3]/button"]')).click();
	};
	
	this.clickAddTeamButton = function(){
		element(by.css('button[ng-click="addTeam($event)"]')).click();
	};
	
	this.typeTeamName = function(teamName){
		element(by.model('teamName"]')).sendKeys(teamName);
	};
	
	this.clickAddTeamButton = function(){
		element(by.css('button[aria-label="Add Team"]')).click();
	};
	
	this.newTeamName = function(){
		return element(by.css('.md-body-1.img-near-name.limit-on-xs.ng-binding.ng-isolate-scope.limited-text')).getText();
	};
	
};
module.exports = new TeamPage();