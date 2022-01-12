const wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until;
const editTrans = async (driver) => {

    const  pressEdit = await driver.wait(until.elementLocated(By.xpath(`//android.widget.TextView[@text="Edit"]`)));
    pressEdit.click();

    const inpName = await driver.wait(until.elementLocated(By.xpath(`//android.widget.EditText[@content-desc="client"]`)));
    inpName.sendKeys('AutoEdit');

    const selectCurrency = await driver.wait(until.elementLocated(By.xpath(`//android.widget.EditText[@content-desc="currency"]`)));
    selectCurrency.click();
    const selectUAH = await driver.wait(until.elementLocated(By.xpath(`//android.widget.TextView[@text="USD"]`)));
    selectUAH.click();

    const inpAmount = await driver.wait(until.elementLocated(By.xpath(`//android.widget.EditText[@content-desc="amount"]`)));
    inpAmount.sendKeys('-999999');

    const selectCategory = await driver.wait(until.elementLocated(By.xpath(`//android.widget.EditText[@content-desc="category"]`)));
    selectCategory.click();
    const selectOffice = await driver.wait(until.elementLocated(By.xpath(`//android.widget.TextView[@text="Internet"]`)));
    selectOffice.click();

    const inpDescription = await driver.wait(until.elementLocated(By.xpath(`//android.widget.EditText[@content-desc="description"]`)));
    console.log("AutoEdit");
    inpDescription.sendKeys("AutoEdit");

    const editTrans = await driver.wait(until.elementLocated(By.xpath(`//android.widget.TextView[@text="EDIT"]`)));
    editTrans.click();
}
module.exports.editTrans = editTrans;