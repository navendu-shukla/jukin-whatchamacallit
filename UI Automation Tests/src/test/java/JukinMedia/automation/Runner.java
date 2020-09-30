package JukinMedia.automation;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

import cucumber.api.CucumberOptions;
import cucumber.api.java.Before;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features = "src/test/resources/FeatureFiles/", glue = "JukinMedia.automation", tags = {
"@Login" }, plugin = { "pretty" , "json:target/cucumber-reports/CucumberTestReport.json" , "html:target/cucumber-reports/cucumber-pretty"})
public class Runner extends AbstractTestNGCucumberTests {
	
	BaseTest bst = new BaseTest();
	@BeforeClass
	public void setup() {
		System.out.println("Setup");
		bst.setup();
	}
	
	@AfterClass
	public void closeTestSession() {
		bst.closeSession();
	}
	

}
