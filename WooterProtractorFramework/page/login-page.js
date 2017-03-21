var LoginPage = function(){
	
	this.clickMenuButton = function(){
		element(by.css('button[ng-click="toggleMobileMenu()"]')).click();
	};
	
	this.clickLoginOption = function(){
		element(by.xpath('//p[contains(text(), "Login")]')).click();
	};
	
	this.clickDashboardOption = function(){
		element(by.xpath('//p[contains(text(), "Dashboard")]')).click();
	};
	
	this.typeEmail = function(){
		element(by.css('#in_identifier')).sendKeys("jaityagi2k8@gmail.com");
	};
	
	this.typePassword = function(){
		element(by.css('#in_pass')).sendKeys("123456");
	};
	
	this.clickLoginButton = function(){
		element(by.css('#login-button')).click();
	};
	
	this.createLeague = function(){
		return element(by.css('button[aria-label="add_circle_outlineCreate a league"] p')).getText();
	};
	
	
};
module.exports = new LoginPage();
