
const isAndroidPlatform = () => {
  if (!process.env.PLATFORM) {
    process.env.PLATFORM = 'android';
  }
  return process.env.PLATFORM === 'android';
}
const getEnvironment = () => process.env.NODE_ENV || 'staging';

module.exports = {
  isAndroidPlatform,
  getEnvironment
}