package JukinMedia.automation;

import org.testng.Reporter;

import Utils.TestSessionInitiator;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class BaseTest {
	
	public static TestSessionInitiator test;
	
	public void setup() {
		test = new TestSessionInitiator();
	}
	
	public void closeSession() {
		test.tearDown();
	}
	
	@Before
	public void printScenarioName(Scenario scenario) {
		System.out.println("******************************************************************");
		System.out.println("Test Started For Scenario: " + scenario.getName());
		System.out.println("******************************************************************\n");
	}

	@After
	public void screenShotAndConsoleLog(Scenario result) {
		Reporter.log("*************************************", true);
		Reporter.log("Feature Name> Scenario Name: " + result.getName(), true);
		Reporter.log("Scenario Result: " + result.getStatus().toUpperCase(), true);
		}

}
