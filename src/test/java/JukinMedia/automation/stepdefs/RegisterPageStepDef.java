package JukinMedia.automation.stepdefs;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static JukinMedia.automation.BaseTest.test;

public class RegisterPageStepDef {
	
	@Then("Verify email field is displayed on register page")
	public void verifyEmailFieldIsDisplayed() {
		test.registerPage.verifyEmailFieldIsDisplayed();
	}
	
	@Then("Verify password field is displayed on register page")
	public void verifyPasswordFieldIsDisplayed() {
		test.registerPage.verifyPasswordFieldIsDisplayed();
	}
	
	@Then("Verify confirm password field is displayed on register page")
	public void verifyConfirmPasswordFieldIsDisplayed() {
		test.registerPage.verifyConfirmPasswordFieldIsDisplayed();
	}
	
	@Then("Verify submit button is displayed on register page")
	public void verifySubmitButtonIsDisplayed() {
		test.registerPage.verifySubmitButtonIsDisplayed();
	}
	
	@Then("Verify Back to Login button is displayed on register page")
	public void verifyBackToLoginButtonIsDisplayed() {
		test.registerPage.verifyBackToLoginButtonIsDisplayed();
	}
	
	@When("On register page user enters email \"(.*)\"")
	public void enterEmail(String emailId) {
		test.registerPage.enterEmail(emailId);
	}
	
	@When("On register page user enters password \"(.*)\"")
	public void enterPassword(String emailId) {
		test.registerPage.enterPassword(emailId);
	}
	
	@And("On register page user enters confirmation password \"(.*)\"")
	public void enterConfirmationPassword(String emailId) {
		test.registerPage.enterConfirmPassword(emailId);
	}
	
	@And("User clicks on submit button of register page")
	public void clickOnSubmitButton() {
		test.registerPage.clickOnSubmitButton();
	}
	
	@When("User clicks on Back to Login Button")
	public void clickOnBackToLoginButton() {
		test.registerPage.clickOnBackToLoginButton();
	}
	
	@Then("Verify on hovering over tool tip image tool tip text is displayed")
	public void verifyOnHoveringOverToolTipImageToolTipTextIsDisplayed() {
		test.registerPage.verifyOnHoveringOverToolTipImageToolTipTextIsDisplayed();
	}
	
	@Then("Verify tool tip disappers when user stops hovering over tool tip image")
	public void verifyToolTipDisappears() {
		test.registerPage.verifyToolTipDisappears();
	}
	
	@Then("Verify Registration successful page is displayed")
	public void verifyRegistationSuccessfulPageIsDisplayed() {
		test.registerPage.verifyRegistationSuccessfulPageIsDisplayed();
	}
	
	@Then("Verify exception page is displayed")
	public void verifyExceptionPageIsLaunched() {
		test.registerPage.verifyExceptionPageIsLaunched();
	}
	
	@Then("Verify fail message \"(.*)\" is displayed")
	public void verifyFailMessageIsDisplayed(String failedMessage) {
		test.registerPage.verifyFailMessageIsDisplayed(failedMessage);
	}
	

}
