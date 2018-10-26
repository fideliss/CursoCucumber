package steps;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.File;
import java.io.IOException;

public class InserirContasSteps {

    private WebDriver driver;

    @Dado("^que desejo adicionar uma conta$")
    public void queDesejoAdicionarUmaConta() throws Throwable {
        //Configuração
        System.setProperty("webdriver.chrome.driver", "C:\\cucumber\\drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://srbarriga.herokuapp.com/");

        //Loga
        driver.findElement(By.id("email")).sendKeys("t@t");
        driver.findElement(By.name("senha")).sendKeys("123456");
        driver.findElement(By.tagName("button")).click();

        //Navega para a tela de cadastro
        driver.findElement(By.linkText("Contas")).click();
        driver.findElement(By.linkText("Adicionar")).click();
    }

    @Quando("^adiciono a conta \"([^\"]*)\"$")
    public void adicionoAConta(String arg1) throws Throwable {
        //Preenche o nome da conta
        driver.findElement(By.id("nome")).sendKeys(arg1);

        //Salva
        driver.findElement(By.tagName("button")).click();
    }

    /*@Dado("^que estou acessando a aplicacao$")
    public void queEstouAcessandoAAplicacao() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "C:\\cucumber\\drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://srbarriga.herokuapp.com/");
    }

    @Quando("^informo o usuário \"([^\"]*)\"$")
    public void informoOUsuário(String arg1) throws Throwable {
        driver.findElement(By.id("email")).sendKeys(arg1);
    }

    @Quando("^a senha \"([^\"]*)\"$")
    public void aSenha(String arg1) throws Throwable {
        driver.findElement(By.name("senha")).sendKeys(arg1);
    }

    @Quando("^seleciono entrar$")
    public void selecionoEntrar() throws Throwable {
        driver.findElement(By.tagName("button")).click();
    }

    @Entao("^visualizo a pagina inicial$")
    public void visualizoAPaginaInicial() throws Throwable {
        String texto = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
        Assert.assertEquals("Bem vindo, Teste!", texto);
    }

    @Quando("^seleciono Contas$")
    public void selecionoContas() throws Throwable {
        driver.findElement(By.linkText("Contas")).click();
    }

    @Quando("^seleciono Adicionar$")
    public void selecionoAdicionar() throws Throwable {
        driver.findElement(By.linkText("Adicionar")).click();
    }

    @Quando("^informo a conta \"([^\"]*)\"$")
    public void informoAConta(String arg1) throws Throwable {
        driver.findElement(By.id("nome")).sendKeys(arg1);
    }

    @Quando("^seleciono Salvar$")
    public void selecionoSalvar() throws Throwable {
        driver.findElement(By.tagName("button")).click();
    }*/

    @Entao("^recebo a mensagem \"([^\"]*)\"$")
    public void receboAMensagem(String arg1) throws Throwable {
        String texto = driver.findElement(By.xpath("//div[starts-with(@class, 'alert alert-')]")).getText();
        Assert.assertEquals(arg1, texto);
    }

    @After(order = 1, value = "@funcionais")
    public void screenshot(Scenario cenario) {
        File file = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(file, new File("target/screenshot/" + cenario.getId() + ".jpg"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @After(order = 0, value = "@funcionais")
    public void fecharBrowser() {
        driver.quit();
    }

}
