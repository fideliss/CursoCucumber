package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features/",
        glue = "steps",
        tags = {"@unitarios"},
        plugin = {"pretty", "html:target/reports/report-html", "json:target/reports/report.json"},
        snippets = SnippetType.CAMELCASE,
        dryRun = false,
        strict = false
        )
public class RunnerTest {

}
