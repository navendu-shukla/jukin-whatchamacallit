package JukinMedia.automation.action;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.Reporter;

import Utils.GetPage;

public class RegisterPageAction extends GetPage {

	public RegisterPageAction(WebDriver driver) {
		super(driver);
	}

	public By email = By.id("reg.email");
	public By password = By.id("reg.password");
	public By confPassword = By.id("reg.confirmPassword");
	public By toolTipImage = By.id("tooltipImg");
	public By toolTip = By.id("tooltipSpan");
	public By submitButton = By.cssSelector("input[value='Submit']");
	public By backToLoginButton = By.cssSelector("input[value='Back to Login']");
	public By failMessage = By.id("failedMessage");
	

	public void verifyEmailFieldIsDisplayed() {
		Assert.assertTrue(getWebElement(email).isDisplayed(), "[Assertion Failed]: Email field is not displayed");
		Reporter.log("[Assertion Passed]: Email field is displayed", true);
	}

	public void verifyPasswordFieldIsDisplayed() {
		Assert.assertTrue(getWebElement(password).isDisplayed(), "[Assertion Failed]: Password field is not displayed");
		Reporter.log("[Assertion Passed]: Password field is displayed", true);
	}

	public void verifyConfirmPasswordFieldIsDisplayed() {
		Assert.assertTrue(getWebElement(confPassword).isDisplayed(),
				"[Assertion Failed]: Confirm Password field is not displayed");
		Reporter.log("[Assertion Passed]: Confirm Password field is displayed", true);
	}

	public void verifySubmitButtonIsDisplayed() {
		Assert.assertTrue(getWebElement(submitButton).isDisplayed(),
				"[Assertion Failed]: Submit Button is not displayed");
		Reporter.log("[Assertion Passed]: Submit Button is displayed", true);
	}

	public void verifyBackToLoginButtonIsDisplayed() {
		Assert.assertTrue(getWebElement(backToLoginButton).isDisplayed(),
				"[Assertion Failed]: Back to Login Button is not displayed");
		Reporter.log("[Assertion Passed]: Back to login Button is displayed", true);
	}

	public void enterEmail(String emailId) {
		getWebElement(email).click();
		getWebElement(email).clear();
		getWebElement(email).sendKeys(emailId);
		Reporter.log("User enters the email " + emailId, true);
	}

	public void enterPassword(String Password) {
		getWebElement(password).click();
		getWebElement(password).clear();
		getWebElement(password).sendKeys(Password);
		Reporter.log("User enters the password " + Password, true);
	}

	public void enterConfirmPassword(String password) {
		getWebElement(confPassword).click();
		getWebElement(confPassword).clear();
		getWebElement(confPassword).sendKeys(password);
		Reporter.log("User enters the confirmation password " + password, true);
	}

	public void clickOnSubmitButton() {
		getWebElement(submitButton).click();
		Reporter.log("User clicks on submit button" , true);
	}
	
	public void clickOnBackToLoginButton() {
		getWebElement(backToLoginButton).click();
		Reporter.log("User clicks on Back to Login button" , true);
	}
	
	public void verifyOnHoveringOverToolTipImageToolTipTextIsDisplayed() {
		hoverOver(getWebElement(toolTipImage));
		Reporter.log("User hover over tool tip image");
		Assert.assertTrue(getWebElement(toolTip).isDisplayed(), "[Assrtion Failed]: Tool tip is not displayed on hovering too tip image");
		Reporter.log("[Assrtion Passed]: Tool tip is displayed on hovering too tip image" , true);
	}
	
	public void verifyRegistationSuccessfulPageIsDisplayed() {
		Assert.assertTrue(driver.getTitle().contains("Registration Successful") , "[Assertion Failed]: Registration Successful page is not displayed");
		Reporter.log("Registration successful page is displayed" , true);
	}
	
	public void verifyExceptionPageIsLaunched() {
		Assert.assertTrue(driver.getTitle().contains("Grails Runtime Exception") , "[Assertion Failed]: Exception page is not displayed");
		Reporter.log("Exception page is displayed" , true);
	}
	
	public void verifyFailMessageIsDisplayed(String failedMessage) {
		Assert.assertTrue(getWebElement(failMessage).getText().contains(failedMessage) , "[Assertion Failed]: Fail message is not displayed");
		Reporter.log("[Assertion Passed]: Fail Message is displayed: "+failedMessage , true);
	}
	
	public void verifyToolTipDisappears() {
		hoverOver(getWebElement(email));
		Reporter.log("User hover over email text field");
		Assert.assertFalse(getWebElement(toolTip).isDisplayed(), "[Assrtion Failed]: Tool tip is displayed");
		Reporter.log("[Assrtion Passed]: Tool tip is not displayed" , true);
	}
	
}
