package JukinMedia.automation.stepdefs;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static JukinMedia.automation.BaseTest.test;

public class ForgotPasswordStepDef {
	
	@Then("Verify email field is displayed on forgot password page")
	public void verifyEmailFieldIsDisplayed() {
		test.forgotPasswordPage.verifyEmailFieldIsDisplayed();
	}
	
	@Then("Verify Submit button is dispalyed on forgot password page")
	public void verifySubmitButtonIsDisplayed() {
		test.forgotPasswordPage.verifySubmitButtonIsDisplayed();
	}
	
	@Then("Verify back to login link is displayed on forgot password page")
	public void verifyBackToLoginLinkIsDisplayed() {
		test.forgotPasswordPage.verifyBackToLoginLinkIsDisplayed();
	}
	
	@Then("Verify flash message is displayed when user clicks on submit button with email field blank")
	public void verifyFlashMessageIsDisplayed() {
		test.forgotPasswordPage.verifyFlashMessageIsDisplayed();
	}
	
	@When("User enters email \"(.*)\" on forgot password page")
	public void enterEmail(String emailId) {
		test.forgotPasswordPage.enterEmail(emailId);
	}
	
	@When("User clicks submit button on forgot password page")
	public void clickOnSubmitButton() {
		test.forgotPasswordPage.clickOnSubmitButton();
	}

	@When("User clicks on Back to Login Link")
	public void clickOnBackToLoginLink() {
		test.forgotPasswordPage.clickOnBackToLoginLink();
	}
	
	@Then("Verify password reset successfull modal is diaplayed")
	public void verifyPasswordResetModal() {
		test.forgotPasswordPage.verifyPasswordResetModal();
	}
	
	@And("User clicks on Ok button of Password reset successfull modal")
	public void clickOkButtonOnModal() {
		test.forgotPasswordPage.clickOkButtonOnModal();
	}
	
	@And("User hits on enter button")
	public void hitEnterAfterGivingEmailTextInput() {
		test.forgotPasswordPage.hitEnterAfterGivingEmailTextInput();
	}
	
	
}
