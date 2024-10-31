package tasks;

import appObject.CriarAutorApp;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class CriarAutorTask {

    private final WebDriver driver;
    private final CriarAutorApp criarAutorApp;

    public CriarAutorTask(WebDriver driver) {
        this.driver = driver;
        criarAutorApp = new CriarAutorApp(driver);
    }

    public void preencherCriarAutor() {
        criarAutorApp.getNomeCampo().sendKeys("Jeferson Lopes Eugenio");
        criarAutorApp.getDataNascimentoCampo().click();
        criarAutorApp.getDataNascimentoCampo().sendKeys(Keys.ARROW_LEFT);
        criarAutorApp.getDataNascimentoCampo().sendKeys("03");
        criarAutorApp.getDataNascimentoCampo().sendKeys("11");
        criarAutorApp.getDataNascimentoCampo().sendKeys("1992");
        criarAutorApp.getButtonRadioMasculino().click();
        criarAutorApp.getButtonSalvar().click();
    }

}
