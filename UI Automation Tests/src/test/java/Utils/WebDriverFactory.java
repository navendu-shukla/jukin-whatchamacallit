package Utils;

import java.io.File;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.safari.SafariDriver;

public class WebDriverFactory {

	String driverpath = System.getProperty("user.dir") + File.separator + "src" + File.separator + "test"
			+ File.separator + "resources" + File.separator + "drivers" + File.separator;
	String localMachineEnvironment = System.getProperty("os.name");

	public WebDriver getLocalDriver() {
		String browser = System.getProperty("browser");
		if(browser==null)
			return getChromeDriver();
		else {
		if (browser.toLowerCase().equals("chrome"))
			return getChromeDriver();
		else if(browser.toLowerCase().equals("firefox"))
			return getFirefoxDriver();
		else if(browser.toLowerCase().equals("edge"))
			return getEdgeDriver();
		else if(browser.toLowerCase().equals("ie"))
			return getIEdriver();
		else if(browser.toLowerCase().equals("safari"))
			return getSafariDriver();
		else 
			return getChromeDriver();
		}

	}
	

	public WebDriver getChromeDriver() {
		if (localMachineEnvironment.toLowerCase().trim().contains("mac")) {
			System.setProperty("webdriver.chrome.driver", driverpath + "chromedriverMac");
		} else if (localMachineEnvironment.toLowerCase().trim().contains("windows")) {
			System.setProperty("webdriver.chrome.driver", driverpath + "chromedriver.exe");
		} else if (localMachineEnvironment.contains("Linux")) {
			System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY, "true");
			System.setProperty("webdriver.chrome.driver", driverpath + "chromedriverLinux");
		} else {
			System.setProperty("webdriver.chrome.driver", driverpath + "chromedriver.exe");
		}

		return new ChromeDriver();
	}

	public WebDriver getFirefoxDriver() {

		if (localMachineEnvironment.toLowerCase().trim().contains("windows"))
			System.setProperty("webdriver.gecko.driver", driverpath + "geckodriver.exe");
		FirefoxOptions firefoxOptions = new FirefoxOptions();
		firefoxOptions.setCapability("marionette", true);
		return new FirefoxDriver(firefoxOptions);
	}

	public WebDriver getEdgeDriver() {
		System.setProperty("webdriver.edge.driver", driverpath + "MicrosoftWebDriver.exe");
		return new EdgeDriver();
	}

	public WebDriver getIEdriver() {
		System.setProperty("webdriver.ie.driver", driverpath + "IEDriverServer.exe");
		return new InternetExplorerDriver();
	}

	public WebDriver getSafariDriver() {
		return new SafariDriver();
	}

}
