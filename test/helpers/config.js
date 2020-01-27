

const DEFAULT_ANDROID_DEVICE_NAME = process.env.SAUCE_LABS ? 'Android GoogleAPI Emulator' : 'My Android Device';
const DEFAULT_ANDROID_PLATFORM_VERSION = process.env.SAUCE_LABS ? '7.1' : null;

module.exports.androidCaps = {
  platformName: 'Android',
  automationName: 'UiAutomator2',
  deviceName: 'My Android Device',
  platformVersion: null,
  appActivity: 'com.engage.SplashActivity',
  app: "/Users/mac/Documents/Atom/Json/ReactNative/appium/Engage_Mobile_Maven/app-staging-debug.apk"
};

module.exports.serverConfig = {
    host: 'localhost',
    port: 4444
  };
