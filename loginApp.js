const wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until;

const login = async (driver) => {

   /* const clearEmail = await driver.wait(until.elementLocated(By.xpath(`//android.widget.EditText[@content-desc="email"]`)));
    clearEmail.clear();

    const inpEmail = await driver.wait(until.elementLocated(By.xpath(`//android.widget.EditText[@content-desc="email"]`)));
    inpEmail.sendKeys('alexgmirko@gmail.com');

    const clearPass = await driver.wait(until.elementLocated(By.xpath(`//android.widget.EditText[@content-desc="password"]`)));
    clearPass.clear();

    const inpPass = await driver.wait(until.elementLocated(By.xpath(`//android.widget.EditText[@content-desc="password"]`)));
    inpPass.sendKeys('mak63nil');*/

    const startApp = await driver.wait(until.elementLocated(By.xpath(`//android.widget.TextView[@text="Sign In"]`)));
    startApp.click();

   /* const search = await driver.wait(until.elementLocated(By.xpath(`//android.widget.EditText[@content-desc="search"]`)));
    search.sendKeys("test");*/

}
module.exports.login = login;