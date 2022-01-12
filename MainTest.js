const wd = require("selenium-webdriver"),
    By = wd.By,
    until = wd.until,
    Key = wd.Key;
const {login} = require("./loginApp");
const {addTrans} = require("./addTrans");
const {editTrans} = require("./editTrans");
const {deleteTrans} = require("./deleteTrans");
const {out} = require("./out");



const opts = {
    platformName: "Android",
    platformVersion: "9",
    deviceName: "Android Emulator",
    appPackage:"com.serveyko.werdevscrmmobile",
    appActivity: "host.exp.exponent.MainActivity",
    automationName: "UiAutomator2",
    appWaitForLaunch: false

};
let driver = new wd.Builder().usingServer("http://0.0.0.0:4723/wd/hub").withCapabilities(opts).forBrowser('').build();
const rub = Math.random().toString(36).substring(7);
module.exports.rub = rub;
async function MainTest () {

}
const asyncWrapper = async () => {
    await login(driver);
    await addTrans(driver);
    await editTrans(driver);
    await deleteTrans(driver);
    await out(driver);
};
asyncWrapper();
