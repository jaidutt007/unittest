browser.ignoreSynchronization = true;
describe('Wooter POC ', function() {
		var EC = protractor.ExpectedConditions;
		var d = new Date();
        var num = d.getMilliseconds();
        it('should register', function() {
			browser.get('http://wooter.co/');
			browser.driver.manage().window().setSize(1800, 1500);  
			expect(browser.getTitle()).toEqual('Wooter | Home');
			
			
			browser.wait(EC.elementToBeClickable(element(by.xpath("//a[contains(@class,'signup_button')]"))), 5000);
            element(by.xpath("//a[contains(@class,'signup_button')]")).click();
            expect(browser.getTitle()).toEqual('Register | Wooter');
           
			 
            element(by.model('form.model.email')).sendKeys('jaityagi2'+num+'k8@gmail.com');
            element(by.model('form.model.password')).sendKeys('Wooter');
            element(by.model('form.model.first_name')).sendKeys('FirstName');
			element(by.model('form.model.last_name')).sendKeys('LastName');
			element(by.model('form.model.phone')).sendKeys('212'+num+'12312'+num);
			element(by.xpath("//button[@aria-label='Sign Up']")).click();
			browser.wait(EC.elementToBeClickable(element(by.xpath("//md-icon[text()='add_circle_outline']"))), 5000);
            expect(browser.getTitle()).toEqual('Leagues List | Wooter');
		});
		it('should create league', function() {
       
            element(by.xpath("//md-icon[text()='add_circle_outline']")).click();
		    expect(browser.getTitle()).toEqual('Create League Page | Wooter');
		    element(by.model("model.league.name")).sendKeys("TestLeague"+num);
		    element(by.xpath("//span[text()='Create Season']")).click();
			browser.wait(EC.elementToBeClickable(element(by.xpath("//button[@ng-click='Season.post()']"))), 5000);
		    element(by.xpath("//button[@ng-click='Season.post()']")).click();
			browser.wait(EC.elementToBeClickable(element(by.xpath("//button[contains(@class,'save-league')]"))), 5000);
		    element(by.xpath("//button[contains(@class,'save-league')]")).click();
			browser.wait(EC.elementToBeClickable(element(by.xpath("//button[@aria-label='Manage']"))), 5000);
		    expect(browser.getTitle()).toEqual('Leagues List | Wooter');
		});
		
		it('should create team', function() {
	        element(by.xpath("//button[@aria-label='Manage']")).click();
			browser.wait(EC.elementToBeClickable(element(by.xpath("//li/button[@aria-label='Teams']/span[text()='Teams']"))), 5000);
		    element(by.xpath("//li/button[@aria-label='Teams']/span[text()='Teams']")).click();
		    element(by.xpath("//div[contains(@class,'title')]/div/dashboard-page-header-buttons/button[2]")).click();
		    element(by.model("teamName")).sendKeys("TeamTest"+num);
		    element(by.xpath("//button[@aria-label='Add Team']")).click();
        });
});