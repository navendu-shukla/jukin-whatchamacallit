package JukinMedia.automation.action;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.Reporter;

import Utils.GetPage;

public class LoginPageAction extends GetPage {

	public By userName = By.id("username");
	public By password = By.id("creds.password");
	public By loginButton = By.id("loginButton");
	public By forgotPasswordLink = By.xpath("//a[text()=' Forgot Password? ']");
	public By registerLink = By.xpath("//a[text()=' Register ']");
	public By h3Header = By.cssSelector("h3");
	public By incorrectEmailPassordTxt = By.xpath("//div[contains(text(),'Incorrect email/password combination')]");
	public By invalidPassword = By.id("invalidPassword");

	public LoginPageAction(WebDriver driver) {
		super(driver);
	}

	public void launchLoginPage() {
		getUrl("http://localhost:8080/WhatChaMaCallIt/login");
		Reporter.log("User launched login URL", true);
	}

	public void enterUserName(String username) {
		getWebElement(userName).click();
		getWebElement(userName).clear();
		getWebElement(userName).sendKeys(username);
		Reporter.log("User enters the user name " + username, true);
	}

	public void enterPassword(String Password) {
		getWebElement(password).click();
		getWebElement(password).clear();
		getWebElement(password).sendKeys(Password);
		Reporter.log("User enters the user name " + Password, true);
	}

	public void enterValidUsernameAndPassword() {
		getWebElement(userName).click();
		getWebElement(userName).clear();
		getWebElement(userName).sendKeys("quality@jukinmedia.com");
		getWebElement(password).click();
		getWebElement(password).clear();
		getWebElement(password).sendKeys("Test1ng");
		Reporter.log("User enters valid username and password", true);
	}

	public void userClicksOnLoginButton() {
		getWebElement(loginButton).click();
		Reporter.log("User clicks on login button", true);
	}

	public void verifyUserIsOnSuccessPage() {
		Assert.assertTrue(driver.getTitle().contains("Login Success"),
				"[Assertion Failed] : User is not able to login successfully");
		Reporter.log("[Assertion Passed]: User is able to login successfully", true);
	}

	public void userClicksOnForgotPasswordLink() {
		getWebElement(forgotPasswordLink).click();
		Reporter.log("User clicks on Forgot Password link", true);
	}

	public void userClicksOnRegisterLink() {
		getWebElement(registerLink).click();
		Reporter.log("User clicks on Register link", true);
	}

	public void verifyUserLandsOnForgotPasswordPage() {
		Assert.assertTrue(driver.getTitle().equals("Forgot Password"),
				"[Assertion Failed]: User is not directed to Forgot Password page");
		Reporter.log("[Assertion Passed]: User is directed to Forgot Password page");
	}

	public void verifyUserLandsOnRegisterPage() {
		Assert.assertTrue(driver.getTitle().equals("Registration"),
				"[Assertion Failed]: User is not directed to Registration page");
		Reporter.log("[Assertion Passed]: User is directed to Registration page");
	}

	public void verifyIncorrectEmailPasswordCombinationTextIsDisplayed() {
		Assert.assertTrue(getWebElement(incorrectEmailPassordTxt).isDisplayed(),
				"[Assertion Failed]: User is not able to see Incorrect email/password combination text");
		Reporter.log("[Assertion Passed]: User is able to see Incorrect email/password combination text", true);
		Reporter.log("[Assertion Passed]: User is not able to login", true);
	}
	
	public void verifyIncorrectEmailPasswordCombinationTextIsDisplayedForInvalidMailID() {
		Assert.assertTrue(getWebElement(incorrectEmailPassordTxt).getText().contains("Incorrect email/password combination"),
				"[Assertion Failed]: User is not able to see Incorrect email/password combination text");
		Reporter.log("[Assertion Passed]: User is able to see Incorrect email/password combination text", true);
	}

	public void verifyFormHeading(String heading) {
		Assert.assertTrue(getWebElement(h3Header).getText().contains(heading),
				"[Assertion Failed]: Correct heading is not displayed");
		Reporter.log("[Assertion Passed]: Login form heading \"" + heading + "\" is displayed", true);

	}

	public void verifyUserNameField() {
		Assert.assertTrue(getWebElement(userName).isDisplayed(),
				"[Assertion Failed]: Username text field is not displayed");
		Reporter.log("[Assertion Passed]: Username field is displayed", true);
	}

	public void verifyPasswordTextField() {
		Assert.assertTrue(getWebElement(password).isDisplayed(),
				"[Assertion Failed]: Password tect field is not displayed");
		Reporter.log("[Assertion Passed]: Password field is displayed", true);
	}

	public void verifyForgotPasswordLinkIsDisplayed() {
		Assert.assertTrue(getWebElement(forgotPasswordLink).isDisplayed(),
				"[Assertion Failed]: Forgot Password link is not displayed");
		Reporter.log("[Assertion Passed]: Forgot Password link is displayed", true);
	}

	public void verifyRegisterLinkIsDisplayed() {
		Assert.assertTrue(getWebElement(registerLink).isDisplayed(),
				"[Assertion Failed]: Register link is not displayed");
		Reporter.log("[Assertion Passed]: Register link is displayed", true);
	}

	public void verifyloginButtonIsDisplayed() {
		Assert.assertTrue(getWebElement(loginButton).isDisplayed(),
				"[Assertion Failed]: Login button is not displayed");
		Reporter.log("[Assertion Passed]: Login Button is displayed", true);
	}

	public void verifyLoginButtonIsDisabled() {
		Assert.assertTrue(!getWebElement(loginButton).isEnabled(),
				"[Assertion Failed]: Login button is not disabled");
		Reporter.log("[Assertion Passed]: Login button is disabled" , true);
	}

	public void verifyLoginButtonIsEnabled() {
		Assert.assertTrue(getWebElement(loginButton).isEnabled() , "[Assertion Failed]: Login button is disabled");
		Reporter.log("[Assertion Passed]: Login Button is enabled" , true);
		
	}

	public void verifyCursorIsEnabledWhenUserHoverOverLoginButton() {
		hoverOver(getWebElement(loginButton));
		Reporter.log("User hover over login Button" ,true);
		String cursorStyle = getWebElement(loginButton).getCssValue("cursor");
		Reporter.log("Found cursor style: "+cursorStyle , true);
		Assert.assertTrue(!cursorStyle.equals("not-allowed") , "[Assertion Failed]: Cursor is not enabled");
		Reporter.log("[Assertion Passed]: Cursor is endbled");
	}
	
	public void verifyIncorrectPasswordMessageIsDisplayed() {
		Assert.assertTrue(getWebElement(invalidPassword).getText().contains("Incorrect password")  ,"[Assertion Failed]: Incorrect password is not displayed");
		Reporter.log("[Assertion Passed]: Incorrect password text is displayed");
	}

}
