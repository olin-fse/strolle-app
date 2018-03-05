import selenium from 'selenium-webdriver';
import getConfiug from '../../config';

const { By } = selenium;
const config = getConfig(process.env.NODE_ENV);

let driver;

beforeAll(() => {
    driver = new selenium.Builder()
        .withCapabilities(selenium.Capabilities.chrome())
        .build();
    driver.getWindowHandle();
});

afterAll(() => {
    driver.quit();
});

test('app', async() => {
    let found = await driver.findElement(By.className('App'));
    expect(found).toBeDefined();
});

test('create', async() => {
    driver.findElement(By.id("create_run")).click();
    driver.sleep(2000);
    let res = await driver.findElement(By.className('Card'));
    expect(res).toBeDefined();
});
