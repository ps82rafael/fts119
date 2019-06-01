package Multibrowser;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class BuscaGoogle {
	String url = "http://www.google.com.br";
	WebDriver driver;

	@After
	public void Finalizar() {
		driver.quit();
		

	}


@Given("^Acesso o site do Google no \"([^\"]*)\" e digite  \"([^\"]*)\"$")
public void acesso_o_site_do_Google_no_e_digite(String browser, String termo) throws Throwable {

		switch (browser) {
		case "chrome":
			System.setProperty("webdriver.chrome.driver",
					"C:\\Users\\Rafael\\fts-workspace-119\\Multibrowser\\Drives\\Chrome\\74\\chromedriver_win32\\chromedriver.exe");
			
			driver = new ChromeDriver();
			driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
			break;

		case "firefox":
			
			FirefoxOptions ffOptions = new FirefoxOptions();
			ffOptions.setBinary("C:\\Users\\Rafael\\fts-workspace-119\\Multibrowser\\Drives\\firefox\\0.12.0\\geckodriver.exe");
			System.setProperty("webdriver.gecko.driver",
					"C:\\Users\\Rafael\\fts-workspace-119\\Multibrowser\\Drives\\firefox\\0.12.0\\geckodriver.exe");
			driver = new FirefoxDriver(ffOptions);
			driver.manage().timeouts().implicitlyWait(400, TimeUnit.SECONDS);
			break;

		case "ie":
			
			System.setProperty("webdriver.ie.driver",
					"C:\\Users\\Rafael\\fts-workspace-119\\Multibrowser\\Drives\\ie\\32\\IEDriverServer.exe");	
			driver = new InternetExplorerDriver();
			driver.manage().timeouts().implicitlyWait(400, TimeUnit.SECONDS);
			
			break;
		}

		
		
		driver.manage().window().maximize();

		driver.get(url);
		driver.findElement(By.name("q")).clear();
		driver.findElement(By.name("q")).sendKeys(termo);

	}

	@Given("^Pressione Enter$")
	public void pressione_Enter() throws Throwable {
		driver.findElement(By.name("q")).sendKeys(Keys.ENTER);
		Thread.sleep(3000);

	}

	@Then("^Exibe a pagina com o titulo \"([^\"]*)\"$")
	public void exibe_a_pagina_com_o_titulo(String resultado) throws Throwable {
		assertEquals(resultado, driver.getTitle());
		
		

	}

}
