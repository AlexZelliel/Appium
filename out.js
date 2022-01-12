const wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until;
const out = async (driver) => {

    const  pressOut = await driver.wait(until.elementLocated(By.xpath(`//android.widget.TextView[@text="LOGOUT"]`)));
    pressOut.click();

}
module.exports.out = out;