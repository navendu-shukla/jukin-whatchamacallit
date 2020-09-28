package Utils;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.testng.Reporter;

import JukinMedia.automation.action.ForgotPasswordPageAction;
import JukinMedia.automation.action.LoginPageAction;
import JukinMedia.automation.action.RegisterPageAction;
import JukinMedia.automation.stepdefs.LoginPageStepDef;

public class TestSessionInitiator {

	protected WebDriver driver;
	protected SeleniumWait wait;
	private final WebDriverFactory wd;
	String driverpath = System.getProperty("user.dir") + File.separator + "src" + File.separator + "test"
			+ File.separator + "resources" + File.separator + "drivers" + File.separator;

	public LoginPageAction loginPage;
	public ForgotPasswordPageAction forgotPasswordPage;
	public RegisterPageAction registerPage;

	public TestSessionInitiator() {
		wd = new WebDriverFactory();
		testInitiator();
	}

	private void testInitiator() {
		configureBrowser();
		initPage();

	}

	private void initPage() {
		loginPage = new LoginPageAction(driver);
		forgotPasswordPage = new ForgotPasswordPageAction(driver);
		registerPage =  new RegisterPageAction(driver);
	}


	public void configureBrowser() {
		System.out.println("Driver called");
		driver = wd.getChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
	}

	public void tearDown() {
		Reporter.log("Test over", true);
		driver.quit();
	}

}
