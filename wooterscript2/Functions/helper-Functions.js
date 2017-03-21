var common = require('../Conf/common.json');

var helperFunctions = function(){
var EC = protractor.ExpectedConditions;
var browser_wait = common.browser_wait;

	this.clickByCSS = function(locator){
		browser.wait(EC.presenceOf(element(by.css(locator))), browser_wait);
		browser.wait(EC.visibilityOf(element(by.css(locator))), browser_wait);
		browser.wait(EC.elementToBeClickable(element(by.css(locator))), browser_wait);
		browser.sleep(common.browser_waitExp);
		element(by.css(locator)).click();
	};

	this.clickByID = function(locator){
		browser.wait(EC.presenceOf(element(by.id(locator))), browser_wait);
		browser.wait(EC.visibilityOf(element(by.id(locator))), browser_wait);
		browser.wait(EC.elementToBeClickable(element(by.id(locator))), browser_wait);
		browser.sleep(common.browser_waitExp);
		element(by.id(locator)).click();
	};

	this.clickByXpath = function(locator){
		browser.wait(EC.presenceOf(element(by.xpath(locator))), browser_wait);
		browser.wait(EC.visibilityOf(element(by.xpath(locator))), browser_wait);
		browser.wait(EC.elementToBeClickable(element(by.xpath(locator))), browser_wait);
		browser.sleep(common.browser_waitExp);
		element(by.xpath(locator)).click();
	};

	this.navigateToPage = function(url){
		browser.get(url);
	};

	this.sendKeysByID = function (locator, argument) {
		browser.wait(EC.presenceOf(element(by.id(locator))), browser_wait);
		browser.wait(EC.visibilityOf(element(by.id(locator))), browser_wait);
		browser.wait(EC.elementToBeClickable(element(by.id(locator))), browser_wait);
		browser.sleep(common.browser_waitExp/2);
		element(by.id(locator)).sendKeys(argument);
	};

	this.sendKeysByXpath = function (locator, argument) {
		browser.wait(EC.presenceOf(element(by.xpath(locator))), browser_wait);
		browser.wait(EC.visibilityOf(element(by.xpath(locator))), browser_wait);
		browser.wait(EC.elementToBeClickable(element(by.xpath(locator))), browser_wait);
		browser.sleep(common.browser_waitExp/2);
		element(by.xpath(locator)).sendKeys(argument);
	};

	this.sendKeysByCSS = function (locator, argument) {
		browser.wait(EC.presenceOf(element(by.css(locator))), browser_wait);
		browser.wait(EC.visibilityOf(element(by.css(locator))), browser_wait);
		browser.wait(EC.elementToBeClickable(element(by.css(locator))), browser_wait);
		browser.sleep(common.browser_waitExp/2);
		element(by.css(locator)).sendKeys(argument);
	};

	this.sendKeysByMODEL = function (locator, argument) {
		browser.wait(EC.presenceOf(element(by.model(locator))), browser_wait);
		browser.wait(EC.visibilityOf(element(by.model(locator))), browser_wait);
		browser.wait(EC.elementToBeClickable(element(by.model(locator))), browser_wait);
		browser.sleep(common.browser_waitExp/2);
		element(by.model(locator)).sendKeys(argument);
	};

	this.sendKeysByName = function (locator, argument) {
		browser.wait(EC.presenceOf(element(by.name(locator))), browser_wait);
		browser.wait(EC.visibilityOf(element(by.name(locator))), browser_wait);
		browser.wait(EC.elementToBeClickable(element(by.name(locator))), browser_wait);
		browser.sleep(common.browser_waitExp/2);
		element(by.name(locator)).sendKeys(argument);
	};

	this.sendKeysByCssContainingText = function (locator, text, argument) {
		browser.wait(EC.presenceOf(element(by.cssContainingText(locator, text))), browser_wait);
		browser.wait(EC.visibilityOf(element(by.cssContainingText(locator, text))), browser_wait);
		browser.wait(EC.elementToBeClickable(element(by.cssContainingText(locator, text))), browser_wait);
		browser.sleep(common.browser_waitExp/2);
		element(by.cssContainingText(locator, text)).sendKeys(argument);
	};

	this.click_by_cssContainingText = function(css, text) {
		browser.sleep(common.browser_waitExp);
		browser.wait(EC.presenceOf(element(by.cssContainingText(css, text))), browser_wait);
		browser.wait(EC.visibilityOf(element(by.cssContainingText(css, text))), browser_wait);
		browser.wait(EC.elementToBeClickable(element(by.cssContainingText(css, text))), browser_wait);
		browser.sleep(common.browser_waitExp/2);
		element(by.cssContainingText(css, text)).click();
	};

	this.verify_by_cssContainingText = function(css, text){
		browser.wait(EC.presenceOf(element(by.cssContainingText(css, text))), browser_wait);
		browser.wait(EC.visibilityOf(element(by.cssContainingText(css, text))), browser_wait);
		browser.wait(EC.elementToBeClickable(element(by.cssContainingText(css, text))), browser_wait);
		return element(by.cssContainingText(css, text)).isDisplayed();
	};

	this.wait_for_element_to_become_visible = function(element_css){
		var ele = element(by.css(element_css));
		var isClickable = EC.elementToBeClickable(ele);
		browser.wait(isClickable, browser_wait); //wait for an element to become clickable
		browser.sleep(common.browser_waitExp/2);
		ele.click();
	};

	this.clearByID = function(locator){
		browser.wait(EC.presenceOf(element(by.id(locator))), browser_wait);
		browser.wait(EC.visibilityOf(element(by.id(locator))), browser_wait);
		browser.wait(EC.elementToBeClickable(element(by.id(locator))), browser_wait);
		browser.sleep(common.browser_waitExp/2);
		element(by.id(locator)).clear();
	};

	this.clearByCSS = function(locator){
		browser.wait(EC.presenceOf(element(by.css(locator))), browser_wait);
		browser.wait(EC.visibilityOf(element(by.css(locator))), browser_wait);
		browser.wait(EC.elementToBeClickable(element(by.css(locator))), browser_wait);
		browser.sleep(common.browser_waitExp/2);
		element(by.css(locator)).clear();
	};

	this.mouseMove = function(css){
		browser.actions().mouseMove($(css)).perform();
	};

	this.executeScriptClickByCSS = function(locator){
		browser.sleep(common.browser_waitExp);
		browser.wait(EC.presenceOf(element(by.css(locator))), browser_wait);
		browser.sleep(common.browser_waitExp/2);
		browser.executeScript('arguments[0].click()', element(by.css(locator)));
	};

	this.executeScriptClickByCSSContainingText = function(locator, txt){
		browser.sleep(common.browser_waitExp);
		browser.executeScript('arguments[0].click()',element(By.cssContainingText(locator, txt)));
	};

	this.executeScriptClick = function(ele){
		browser.wait(EC.presenceOf(ele), browser_wait);
		browser.sleep(common.browser_waitExp/2);
		browser.executeScript('arguments[0].click()', ele);
	};

	this.scrollIntoView = function (ele) {
		browser.executeScript("arguments[0].scrollIntoView();", ele.getWebElement());
	};

	this.sendkeysByActions = function (ele, text) {
		browser.actions().mouseMove(ele);
		browser.actions().click();
		browser.actions().sendKeys(text);
		browser.actions().perform();
	};
};
module.exports = helperFunctions;
