var genericfunctions = function()
{
	this.navigateToSite = function()
	{
		browser.ignoreSynchronization = true;
		helperfunctions.navigateToPage(common.server);
	};

	this.getCurDate = new Date();

	this.signUp = function () {
		helperfunctions.clickByCSS(object.CSS.signUpFreeBtn);
		helperfunctions.sendKeysByID(object.ID.email_signUp, testData.signUp.emailPrefix + this.getCurDate.getTime() + testData.signUp.emailSuffix);
		helperfunctions.sendKeysByID(object.ID.password, testData.signUp.password);
		helperfunctions.sendKeysByID(object.ID.firstName, testData.signUp.firstName);
		helperfunctions.sendKeysByID(object.ID.lastName, testData.signUp.lastName);
		helperfunctions.sendKeysByID(object.ID.phone, this.getCurDate.getTime());
		helperfunctions.clickByCSS(object.CSS.signUpFormSubmit);
		expect(helperfunctions.verify_by_cssContainingText(object.CSS.createLeague, object.CSS.createLeague1)).toBeTruthy();
	};

	this.createLeague =  function () {
		helperfunctions.click_by_cssContainingText(object.CSS.createLeague, object.CSS.createLeague1);
		helperfunctions.sendKeysByMODEL(object.MODEL.leagueName, testData.league.leagueName);
		helperfunctions.sendKeysByMODEL(object.MODEL.leagueUrl, testData.league.leagueName);
		helperfunctions.click_by_cssContainingText(object.CSS.createSeason, object.CSS.createSeason1);
		helperfunctions.executeScriptClickByCSSContainingText(object.CSS.createSeason, object.CSS.addSeason);
	};
};

module.exports = genericfunctions;
