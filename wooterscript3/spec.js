'use strict';


describe('Create a League', () => {
  const EC = protractor.ExpectedConditions;

  // Elements from Homepage and from Sign In Page
  const singInBtn = element(by.linkText('SIGN IN'));
  const userEmail = element(by.id('in_identifier'));
  const userPassword = element(by.id('in_pass'));
  const logInBtn = element(by.id('login-button'));

  // Elements from Dashboard Leagues Page
  const createLigueBtn = element(by.css('button[aria-label="add_circle_outlineCreate a league"]'));
  const h1League = element(by.css('p.md-title'));

  // Elements from Create Your League Form
  const leagueName = element(by.css('input[ng-model="model.league.name"]'));
  const leagueUrl = element(by.css('input[ng-model="model.league.slug"]'));
  const selectSeasonBtn = element(by.buttonText('Create Season'));
  const addBtn = element(by.css('button[aria-label="Add"]'));
  const seasonAdded = element(by.css('p.md-title'));
  const saveBtn = element(by.buttonText('Save'));
  const title = element(by.css('p.md-subtitle.ng-binding'));


  it('Should Navigate to Homepage', () => {
    browser.ignoreSynchronization = true;
    browser.get(browser.params.baseUrl);

    expect(browser.getCurrentUrl()).toBe(browser.params.baseUrl);
  });


  it('Should Authenticate', () => {
    singInBtn.click()
      .then(() => {
        userEmail.click().clear().sendKeys(browser.params.user.email);
        userPassword.click().clear().sendKeys(browser.params.user.password);
        logInBtn.click();
      })
      .then(() => {
        browser.wait(EC.elementToBeClickable(createLigueBtn));
      });

    expect(browser.getCurrentUrl()).toBe('https://wooter.co/dashboard/leagues');
  });


  it('Should Access Create Your League Route', () => {
    createLigueBtn.click().then(() => {
      browser.wait(EC.presenceOf(h1League));
    });

    expect(browser.getCurrentUrl()).toBe('https://wooter.co/dashboard/leagues/create');
  });


  it('Should Fill the Create Your League Form', () => {
    leagueName.click().clear().sendKeys('Winners League');
    leagueUrl.click().clear().sendKeys('winners-league4');

    selectSeasonBtn.click().then(() => {
      browser.wait(EC.elementToBeClickable(addBtn));
    }).then(() => {
      addBtn.click();
    }).then(() => {
      browser.wait(EC.elementToBeClickable(saveBtn));
    });

    expect(seasonAdded.isDisplayed()).toBe(true);
  });


  it('Should Submit the Create Your League Form', () => {
    saveBtn.click().then(() => {
      browser.wait(EC.elementToBeClickable(createLigueBtn));
    });

    expect(browser.getCurrentUrl()).toBe('https://wooter.co/dashboard/leagues');
    expect(title.getText()).toEqual('Winners League Season');
  });

});
