

var signUpPage = function () {
};

signUpPage.prototype = Object.create(signUpPage, {
	singUpButton:{get:function() {return element(by.xpath(".//*[contains(text(),'SIGN UP')]"));}},
	emailField:{get:function() {return element(by.model("form.model.email"));}},
	passwordField:{get:function() {return element(by.model("form.model.password"));}},
	firstNameField:{get:function() {return element(by.model("form.model.first_name"));}},
	lastNameField:{get:function() {return element(by.model("form.model.last_name"));}},
	numberField:{get:function() {return element(by.model("form.model.phone"));}},
	submitButton:{get:function() {return element(by.xpath("//button[@type='submit']"));}},


	createNewUser:{value:function(){
	this.singUpButton.click();
	this.emailField.click();
	this.emailField.sendKeys("wootertests@gmail.com");
	this.passwordField.click();
	this.passwordField.sendKeys("123456");
	this.firstNameField.sendKeys("fname");
	this.lastNameField.sendKeys("lnames");
	this.numberField.sendKeys("0007777789");
	this.submitButton.click();

}}


});
module.exports = signUpPage;

