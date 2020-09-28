package Utils;

import java.io.File;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;

public class WebDriverFactory {

	String driverpath = System.getProperty("user.dir") + File.separator +  "src" + File.separator + "test" + File.separator + "resources" + File.separator + "drivers" + File.separator;
	
	public WebDriver getChromeDriver() {
		String localMachineEnvironment = System.getProperty("os.name");
		if (localMachineEnvironment.toLowerCase().trim().contains("windows")) {
			System.setProperty("webdriver.chrome.driver", driverpath + "chromedriver.exe");
		} else if (localMachineEnvironment.contains("Linux")) {
			System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY, "true");
			System.setProperty("webdriver.chrome.driver", driverpath + "chromedriverLinux");
		} else {
			System.setProperty("webdriver.chrome.driver", driverpath + "chromedriver.exe");
		}
		
		return new ChromeDriver();
	}
	
	
	
	public void tearDown() {
	}
}
