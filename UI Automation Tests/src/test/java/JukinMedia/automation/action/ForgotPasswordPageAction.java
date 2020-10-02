package JukinMedia.automation.action;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.Reporter;

import Utils.GetPage;

public class ForgotPasswordPageAction extends GetPage{
	
	public ForgotPasswordPageAction(WebDriver driver) {
		super(driver);
	}

	public By email = By.id("fp.email");
	public By flashMessage = By.id("flashMsg");
	public By submitButton = By.id("forgotPasswordButton");
	public By backToLoginLink = By.xpath("//a[contains(text(),'Back to Login')]");
	public By modalTitle = By.id("fpSuccessModalLabel");
	public By modalBody = By.className("modal-body");
	public By okButtonModal = By.xpath("//button[contains(text(),'Ok')]");
	
	
	public void verifyEmailFieldIsDisplayed() {
		Assert.assertTrue(getWebElement(email).isDisplayed() , "[Assertion Failed]: Email field is not displayed");
		Reporter.log("[Assertion Passed]: Email field is displayed" , true);
	}
	
	public void verifySubmitButtonIsDisplayed() {
		Assert.assertTrue(getWebElement(submitButton).isDisplayed() , "[Assertion Failed]: Submit button is not displayed");
		Reporter.log("[Assertion Passed]: Submit button is displayed" , true);
	}
	
	public void verifyBackToLoginLinkIsDisplayed() {
		Assert.assertTrue(getWebElement(backToLoginLink).isDisplayed() , "[Assertion Failed]: Back to login link is not displayed");
		Reporter.log("[Assertion Passed]: Back to login link is displayed" , true);
	}
	
	public void verifyFlashMessageIsDisplayed() {
		WebElement flashmessage = getWebElement(flashMessage);
		wait.waitForPageToLoadCompletely();
		Assert.assertTrue(flashmessage.isDisplayed() , "[Assertion Failed]: flash Message is not displayed");
		Assert.assertTrue(flashmessage.getText().contains("Please enter a valid email") , "[Assertion Failed]: Correct flash message is not displayed :: expected: Please enter a valid email but was found: "+flashmessage.getText());
		Reporter.log("[Assertion Passed]: flash Message is displayed: Please enter a valid email" , true);
	}
	
	public void enterEmail(String emailId) {
		getWebElement(email).click();
		getWebElement(email).clear();
		getWebElement(email).sendKeys(emailId);
		Reporter.log("User enters mail id: "+emailId , true);
	}
	
	public void clickOnSubmitButton() {
		getWebElement(submitButton).click();
		Reporter.log("User clicks on submit button" , true);
	}
	
	public void clickOnBackToLoginLink() {
		getWebElement(backToLoginLink).click();
		Reporter.log("User clicks on back to login link" , true);
	}
	
	public void verifyPasswordResetModal() {
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
//		wait.waitForElementToBeVisible(modalTitle);
		Assert.assertTrue(getWebElement(modalTitle).isDisplayed(), "[Assertion Failed]: Password reset successful modal is not displayed");
		Reporter.log("[Assertion Passed]: Password reset successful modal is displayed" , true);
	}
	
	public void clickOkButtonOnModal() {
		getWebElement(okButtonModal).click();
		Reporter.log("User clicks on OK button of password reset successfull modal");
	}
	
	public void hitEnterAfterGivingEmailTextInput(){
		getWebElement(email).sendKeys(Keys.ENTER);
		Reporter.log("User hits on Enter button" , true);
		
	}
	
	
	
	
	
	
	
	
	

}
