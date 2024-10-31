package appObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class CriarAutorApp {

    private final WebDriver driver;

    public CriarAutorApp(WebDriver driver) {
        this.driver = driver;
    }

    public WebElement getNomeCampo() {
        return driver.findElement(By.cssSelector(".MuiInputBase-input.MuiOutlinedInput-input.css-1jk99ih-MuiInputBase-input-MuiOutlinedInput-input"));
    }

    public WebElement getDataNascimentoCampo() {
        return driver.findElement(By.cssSelector(".MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd"));
    }

    public WebElement getButtonRadioMasculino() {
        return driver.findElement(By.cssSelector("#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.css-1dcc5fd-MuiContainer-root > form > div.MuiFormControl-root.css-1nrlq1o-MuiFormControl-root > div > label:nth-child(1) > span.MuiButtonBase-root.MuiRadio-root.MuiRadio-colorPrimary.PrivateSwitchBase-root.MuiRadio-root.MuiRadio-colorPrimary.MuiRadio-root.MuiRadio-colorPrimary.css-3or0iz-MuiButtonBase-root-MuiRadio-root"));
    }

    public WebElement getButtonSalvar() {
        return driver.findElement(By.cssSelector("#root > div > div.MuiContainer-root.MuiContainer-maxWidthLg.css-1dcc5fd-MuiContainer-root > form > div._divBotoes_1nwd3_1 > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-colorPrimary.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-colorPrimary._botao_10jo6_1.css-1d0fqwc-MuiButtonBase-root-MuiButton-root"));
    }

}