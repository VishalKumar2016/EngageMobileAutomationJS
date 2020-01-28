
const wd = require('wd');
const chai = require('chai');
const { androidCaps, serverConfig } = require('../helpers/config');
const { assert } = chai;

const PACKAGE = 'com.gaggleamp.engage.mobile.enterprise.staging';

describe('Basic Android interactions', function () {
  let driver;
  let allPassed = true;

  before(async function () {
    // Connect to Appium server
    driver = await wd.promiseChainRemote(serverConfig);

    // merge all the capabilities
    const caps = {
      ...androidCaps,
      appPackage: PACKAGE,
    };

    // Start the session, merging all the caps
    await driver.init(caps);
    await driver.logTypes();
  });

  afterEach(function () {
    // keep track of whether all the tests have passed, since mocha does not do this
    allPassed = allPassed && (this.currentTest.state === 'passed');
  });

  after(async function () {
    await driver.quit();
  });

  it('should send keys to search box and then check the value', async function () {
    await driver.setImplicitWaitTimeout(5000);
    const enterEmail = await driver.elementByXPath("//android.widget.EditText[@text='Email Address']");
    if (enterEmail.isDisplayed()) {
      await enterEmail.click();
      await enterEmail.sendKeys('vkumar@gaggleamp.com');
    }
    const enterEmailValue = await enterEmail.text();
    assert.equal(enterEmailValue, 'vkumar@gaggleamp.com');
  });

});
