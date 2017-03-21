var CreateLeaguePage = function(){
	
	
	this.clickCreateLeagueButton = function(){
		element(by.css('button[aria-label="add_circle_outlineCreate a league"]')).click();
	};
	
	this.typeLeagueName = function(leagueName){
		element(by.model('model.league.name')).sendKeys(leagueName);
	};
	
	this.clickCreateSeason = function(){
		element(by.css('button[ng-click="Season.create($event)"]')).click();
	};
	
	this.clickAddSeasonButton = function(){
		element(by.css('button[ng-click="Season.post()"]')).click();
	};
	
	this.clickSaveButton = function(){
		element(by.css('button[aria-label="Save"]')).click();
	};
	
	this.LeagueName = function(){
		return element(by.css('.md-title.ng-binding')).getText();
	};
	
	this.clickLeagueButton = function(){
		element(by.css('button[aria-label="Manage"]')).click();
	};
	
	this.clickLeagueMenuIcon = function(){
		element.all(by.css('button[ng-click="showMenu($mdOpenMenu, $event)"]')).get(1).click();
	};
	
	this.clickArchiveOption = function(){
		element(by.css('button[aria-label="Archive"]')).click();
	};
	
	
	
};
module.exports = new CreateLeaguePage();