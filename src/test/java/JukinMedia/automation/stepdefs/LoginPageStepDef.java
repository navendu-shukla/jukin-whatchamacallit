package JukinMedia.automation.stepdefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static JukinMedia.automation.BaseTest.test;

public class LoginPageStepDef {

	@Given("User launches the Login Page")
	public void launchLoginPage() {
		test.loginPage.launchLoginPage();
	}

	@When("User enter user name \"(.*)\"")
	public void enterUserName(String username) {
		test.loginPage.enterUserName(username);
	}

	@When("User enter password \"(.*)\"")
	public void enterPassword(String Password) {
		test.loginPage.enterPassword(Password);
	}

	@When("User enters valid username and password")
	public void enterValidUsernameAndPassword() {
		test.loginPage.enterValidUsernameAndPassword();
	}

	@And("User clicks on login Button")
	public void userClicksOnLoginButton() {
		test.loginPage.userClicksOnLoginButton();
	}

	@Then("Verify that user is able to login successfully")
	public void verifyUserIsOnSuccessPage() {
		test.loginPage.verifyUserIsOnSuccessPage();
	}

	@When("User clicks on Forgot Password link")
	public void userClicksOnForgotPasswordLink() {
		test.loginPage.userClicksOnForgotPasswordLink();
	}

	@When("User clicks on Register link")
	public void userClicksOnRegisterLink() {
		test.loginPage.userClicksOnRegisterLink();
	}

	@Then("Verify user lands on Forgot Password page")
	public void verifyUserLandsOnForgotPasswordPage() {
		test.loginPage.verifyUserLandsOnForgotPasswordPage();
	}

	@Then("Verify user lands on Registration page")
	public void verifyUserLandsOnRegisterPage() {
		test.loginPage.verifyUserLandsOnRegisterPage();
	}

	@Then("Verify user is not able to login using invalid credentials")
	public void verifyUserIsNotAbleToLoginUsingInvalidCredentials() {
		test.loginPage.verifyIncorrectEmailPasswordCombinationTextIsDisplayed();
	}

	@Then("Verify form heading \"(.*)\" is displayed")
	public void verifyHeading(String heading) {
		test.loginPage.verifyFormHeading(heading);
	}

	@Then("Verify Username text field is displayed")
	public void verifyUserNameField() {
		test.loginPage.verifyUserNameField();
	}

	@Then("Verify Password text field is displayed")
	public void verifyPasswordTextField() {
		test.loginPage.verifyPasswordTextField();
	}

	@Then("Verify Forgot Password link is displayed")
	public void verifyForgotPasswordLinkIsDisplayed() {
		test.loginPage.verifyForgotPasswordLinkIsDisplayed();
	}

	@Then("Verify Register link is displayed")
	public void verifyRegisterLinkIsDisplayed() {
		test.loginPage.verifyRegisterLinkIsDisplayed();
	}

	@Then("Verify login button is displayed")
	public void verifyloginButtonIsDisplayed() {
		test.loginPage.verifyloginButtonIsDisplayed();
	}

	@Then("Verify login button is disabled")
	public void verifyLoginButtonIsDisabled() {
		test.loginPage.verifyLoginButtonIsDisabled();
	}
	
	@Then("Verify login button is enabled")
	public void verifyLoginButtonIsEnabled() {
		test.loginPage.verifyLoginButtonIsEnabled();
	}
	
	@Then("Verify cursor should be enabled when user hover over the login button")
	public void verifyCursorIsEnabledWhenUserHoverOverLoginButton() {
		test.loginPage.verifyCursorIsEnabledWhenUserHoverOverLoginButton();
	}
	
	

}
