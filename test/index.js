const wd = require('wd');
const { getCaps, serverConfig } = require('./helpers/config');

const emailScreen = require('./auth/auth.test');

describe('Basic Android interactions', function () {
  let driver;
  let allPassed = true;

  before(async function () {
    // Connect to Appium server
    driver = await wd.promiseChainRemote(serverConfig);

    // merge all the capabilities
    const caps = getCaps();

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

  // Verify email screen
  it('Should enter email address', () => emailScreen.enterEmail(driver));
  it('Should clear email', () => emailScreen.clearText(driver));
  it('Should re-enter email', () => emailScreen.enterEmail(driver));
  it('Should click next button', () => emailScreen.clickNext(driver));

  // Verify Password and Forgot Password Screen
  it('Should click backArrow button', () => emailScreen.clickBackArrow(driver));
  it('Should click next button', () => emailScreen.clickNext(driver));
  it('Should click on forgot password button', () => emailScreen.clickForgotPassword(driver));
  it('Should click on forgot password back arrow button', () => emailScreen.clickForgotPasswordBackArrow(driver));

});


