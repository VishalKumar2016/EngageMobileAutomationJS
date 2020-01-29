
const chai = require('chai');
const { assert } = chai;
const { isAndroidPlatform } = require('../helpers/utils');

const isAndroid = isAndroidPlatform()

const getEnterEmail = (driver) => isAndroid ? 
   driver.elementByXPath("//android.widget.EditText[@text='Email Address']") :
   driver.elementByXPath("(//*/XCUIElementTypeOther)[26]");

const getClearText = (driver) => isAndroid ? 
   driver.elementByXPath("//android.widget.ImageView") :
   driver.elementByXPath("(//*/XCUIElementTypeOther)[28]");

const getEnterPassword = (driver) => isAndroid ? 
   driver.elementByXPath("(//android.widget.EditText)[1]") :
   driver.elementByXPath("(//XCUIElementTypeOther[@name=\"Password\"])[4]/XCUIElementTypeSecureTextField");

const getNextButton = (driver) => isAndroid ? 
   driver.elementByXPath("//android.widget.TextView[@text='Next']") :
   driver.elementByXPath("(//*/XCUIElementTypeOther)[18]");

const getPasswordVerificationText = (driver) => isAndroid ?
driver.elementByXPath("(//android.widget.ImageView)[1]") :
driver.elementByXPath("(//*/XCUIElementTypeOther)[18]");

const getBackArrow = (driver) => isAndroid ?
driver.elementByXPath("(//android.widget.ImageView)[1]") :
driver.elementByXPath("(//*/XCUIElementTypeOther)[18]");

const getForgotPasswordButton = (driver) => isAndroid ?
driver.elementByXPath("//android.widget.TextView[@text='Forgot Password']") :
driver.elementByXPath("(//*/XCUIElementTypeOther)[18]");

const getForgotPasswordBackArrow = (driver) => isAndroid ?
driver.elementByXPath("(//android.widget.ImageView)[1]") :
driver.elementByXPath("(//*/XCUIElementTypeOther)[18]");

const forgotPassText = 'Instructions for the Password Reset will be sent to this email account.';
const getForgotPasswordTextVerification = (driver) => isAndroid ? 
   driver.elementByXPath(`//android.widget.TextView[@text='${forgotPassText}']`) :
   driver.elementByXPath("");

const enterEmail = async (driver) => {
  await driver.setImplicitWaitTimeout(5000);
  const enterEmail = await getEnterEmail(driver);
  if (enterEmail.isDisplayed()) {
    await enterEmail.click();
    await enterEmail.sendKeys('vkumar@gaggleamp.com');
  }
  const enterEmailValue = await enterEmail.text();
  return assert.equal(enterEmailValue, 'vkumar@gaggleamp.com');
}

const clearText = async (driver) => {
  const clearText = await getClearText(driver);
  if (clearText.isDisplayed()) {
    await clearText.click();
  }
  const enterEmail = await getEnterEmail(driver);
  const enterEmailValue = await enterEmail.text();
  return assert.equal(enterEmailValue, 'Email Address');
}

const clickNext = async (driver) => {
  const next = await getNextButton(driver);
  if (next.isDisplayed()) {
    await next.click();
  }
  const enterPasswordText = await getEnterPassword(driver).text();
  return assert.equal(enterPasswordText, 'Password');
}

const clickBackArrow = async (driver) => {
  const backArrow = await getBackArrow(driver);
  if (backArrow.isDisplayed()) {
    await backArrow.click();
  }
  const next = await getNextButton(driver);
  return next.isDisplayed();
}

const clickForgotPassword = async (driver) => {
  const forgotPassword = await getForgotPasswordButton(driver);
  if (forgotPassword.isDisplayed()) {
    await forgotPassword.click();
  }
  const forgotPasswordText = await getForgotPasswordTextVerification(driver);
  return forgotPasswordText.isDisplayed();
}

const clickForgotPasswordBackArrow = async (driver) => {
  const forgotPasswordBackArrow = await getForgotPasswordBackArrow(driver);
  if (forgotPasswordBackArrow.isDisplayed()) {
    await forgotPasswordBackArrow.click();
  }
  const forgotPassword = await getForgotPasswordButton(driver);
  return forgotPassword.isDisplayed();
}

module.exports = {
  enterEmail,
  clearText,
  clickNext,
  clickBackArrow,
  clickForgotPassword,
  clickForgotPasswordBackArrow,
}