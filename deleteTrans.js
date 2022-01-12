const wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until;
const deleteTrans = async (driver) => {

    const  pressDelete = await driver.wait(until.elementLocated(By.xpath(`//android.widget.ViewGroup[@resource-id="delete"]`)));
    pressDelete.click();
    const confDelete = await driver.wait(until.elementLocated(By.xpath(`//android.widget.TextView[@text="Delete"]`)));
    confDelete.click();

}
module.exports.deleteTrans = deleteTrans;