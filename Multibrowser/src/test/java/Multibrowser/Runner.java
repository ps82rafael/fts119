package Multibrowser;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		dryRun     = false,
		monochrome = true,
		features   = {"src/test/resources/"},
		glue       = {"Multibrowser/"},
		plugin     = {
						"pretty",
						"html:target/cucumber-htmlreport",
						"json:target/cucumber-report.json",
						"com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport.html"
					 }	
)
public class Runner {

}
