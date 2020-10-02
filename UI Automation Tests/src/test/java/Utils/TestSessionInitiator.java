package Utils;

import java.io.File;
import java.io.IOException;
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
	private final RunApp runApp;
	String driverpath = System.getProperty("user.dir") + File.separator + "src" + File.separator + "test"
			+ File.separator + "resources" + File.separator + "drivers" + File.separator;

	public LoginPageAction loginPage;
	public ForgotPasswordPageAction forgotPasswordPage;
	public RegisterPageAction registerPage;

	public TestSessionInitiator() {
		wd = new WebDriverFactory();
		runApp  = new RunApp();
		testInitiator();
	}

	private void testInitiator() {
		try {
			runApp.runApp();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		configureBrowser();
		initPage();

	}

	private void initPage() {
		loginPage = new LoginPageAction(driver);
		forgotPasswordPage = new ForgotPasswordPageAction(driver);
		registerPage =  new RegisterPageAction(driver);
	}


	public void configureBrowser() {
		driver = wd.getLocalDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
	}

	public void tearDown() {
		Reporter.log("Test over", true);
		runApp.closeApp();
		driver.quit();
	}

}
