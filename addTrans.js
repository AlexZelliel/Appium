const rub = require('/Appium/MainTest');


const wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until;
const addTrans = async (driver) => {

    const  pressAdd = await driver.wait(until.elementLocated(By.xpath(`//android.widget.TextView[@text="ADD"]`)));
    pressAdd.click();

    const inpName = await driver.wait(until.elementLocated(By.xpath(`//android.widget.EditText[@content-desc="client"]`)));
    inpName.sendKeys('AutoTest');

    const selectCurrency = await driver.wait(until.elementLocated(By.xpath(`//android.widget.EditText[@content-desc="currency"]`)));
    selectCurrency.click();
    const selectUAH = await driver.wait(until.elementLocated(By.xpath(`//android.widget.TextView[@text="UAH"]`)));
    selectUAH.click();

    const inpAmount = await driver.wait(until.elementLocated(By.xpath(`//android.widget.EditText[@content-desc="amount"]`)));
    inpAmount.sendKeys('123456');

    const selectCategory = await driver.wait(until.elementLocated(By.xpath(`//android.widget.EditText[@content-desc="category"]`)));
    selectCategory.click();
    const selectOffice = await driver.wait(until.elementLocated(By.xpath(`//android.widget.TextView[@text="Office"]`)));
    selectOffice.click();

    const inpDescription = await driver.wait(until.elementLocated(By.xpath(`//android.widget.EditText[@content-desc="description"]`)));
    console.log(rub.rub);
    inpDescription.sendKeys(rub.rub);

    const addTrans = await driver.wait(until.elementLocated(By.xpath(`//android.widget.TextView[@text="ADD"]`)));
    addTrans.click();

    /* const search = await driver.wait(until.elementLocated(By.xpath(`//android.widget.EditText[@content-desc="search"]`)));
     search.sendKeys("test");*/

}
module.exports.addTrans = addTrans;