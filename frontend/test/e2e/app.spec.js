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
