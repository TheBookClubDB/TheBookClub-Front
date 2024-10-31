package framework.supports;

import framework.tools.Report;
import framework.webDrivers.DriverFactory;
import framework.webDrivers.DriverManager;
import framework.webDrivers.Drivers;
import com.aventstack.extentreports.Status;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;

import static framework.tools.Report.extentTest;

public class BaseTest extends DriverFactory {

    @BeforeAll
    public static void setUp() {
        Report.configurarExtentReport();
        Report.createTest("The Book Club");
        DriverManager.setDriver(getBrowser(Drivers.CHROME));
        DriverManager.getDriver().get("http://localhost:5173/criar-autor");
        extentTest.log(Status.INFO, "Acessou navegador");
    }

    @AfterAll
    public static void tearDown() {
        Report.closeReport();
        DriverManager.quit();
    }
}