import framework.supports.BaseTest;
import framework.webDrivers.DriverManager;
import tasks.CriarAutorTask;
import org.junit.jupiter.api.Test;

public class TheBookClubTest extends BaseTest {

    private final CriarAutorTask criarAutorTask = new CriarAutorTask(DriverManager.getDriver());

    @Test
    public void test() {
        criarAutorTask.preencherCriarAutor();
    }
}