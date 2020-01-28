const { isAndroidPlatform, getEnvironment } = require('../helpers/utils');
const { app, appPackage } = require(`../${getEnvironment()}.env`);

module.exports.getCaps = () => isAndroidPlatform() ? androidCaps : iosCaps;

const androidCaps = {
  platformName: 'Android',
  automationName: 'UiAutomator2',
  deviceName: 'My Android Device',
  platformVersion: null,
  appActivity: 'com.engage.SplashActivity',
  appPackage,
  app,
};

const iosCaps = {
  platformName: 'ios',
};

module.exports.serverConfig = {
    host: 'localhost',
    port: 4444
  };
