package Utils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.Reporter;



public class GetPage {
	
	public WebDriver driver;
	protected SeleniumWait wait;
	
	public GetPage(WebDriver driver) {
		this.driver = driver;
		this.wait= new SeleniumWait(driver, 70);
	}
	
	public void tearDown() {
		Reporter.log("Test over" , true);
		driver.quit();
	}
	
	public void getUrl(String url) {
		driver.get(url);
	}
	
	
	public WebElement getWebElement(By locator) {
		return driver.findElement(locator);
	}
	
	public void hoverOver(WebElement element) {
		Actions hoverOver = new Actions(driver);
		hoverOver.moveToElement(element).build().perform();
	}

}
