package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features/",
        glue = "steps",
        tags = {"@funcionais"},
        plugin = {"pretty", "html:target/reports/report-html", "json:target/reports/report.json"},
        snippets = SnippetType.CAMELCASE,
        dryRun = false,
        strict = false
        )
public class RunnerFuncionalTest {

    @BeforeClass
    public static void reset() {
        System.setProperty("webdriver.chrome.driver", "C:\\cucumber\\drivers\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.get("https://srbarriga.herokuapp.com/");
        driver.findElement(By.id("email")).sendKeys("t@t");
        driver.findElement(By.name("senha")).sendKeys("123456");
        driver.findElement(By.tagName("button")).click();
        driver.findElement(By.linkText("reset")).click();
        driver.quit();
    }

}
