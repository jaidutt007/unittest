describe('Milestone1:', function()
{
	it('-Sign up and create a league and add a team', function()
	{
		genericfunctions.navigateToSite();
		genericfunctions.signUp();
		genericfunctions.createLeague();
		browser.sleep(5000);
	});
});
