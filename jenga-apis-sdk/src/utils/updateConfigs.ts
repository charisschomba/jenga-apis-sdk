export const updateSdkInstance = (instance, config, callback) => {
  if ("apiKey" in config) {
    instance.apiKey = config.apiKey;
  }
  if ("merchantCode" in config) {
    instance.merchantCode = config.merchantCode;
  }
  if ("consumerSecret" in config) {
    instance.consumerSecret = config.consumerSecret;
  }
  if ("privateKeyPath" in config) {
    instance.privateKeyPath = config.privateKeyPath;
  }
  if ("enableLogging" in config) {
    instance.enableLogging = config.enableLogging;
  }
  if ("enableAuthorization" in config) {
    instance.enableAuthorization = config.enableAuthorization;
  }
  if ("env" in config) {
    instance.baseUrl = BaseUrl[config.env];
  }
  if (callback) {
    callback();
  }
};
enum BaseUrl {
  DEV = "https://api-finserve-dev.azure-api.net",
  UAT = "https://uat.finserve.africa",
  PROD = "https://api.finserve.africa",
}
