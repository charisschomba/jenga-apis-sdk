export const updateSdkInstance = (instance, config, callback) => {
  if (config.apiKey) {
    instance.apiKey = config.apiKey;
  }
  if (config.merchantCode) {
    instance.merchantCode = config.merchantCode;
  }
  if (config.consumerSecret) {
    instance.consumerSecret = config.consumerSecret;
  }
  if (config.privateKeyPath) {
    instance.privateKeyPath = config.privateKeyPath;
  }
  if (config.env) {
    instance.env = config.env;
  }
  if (config.enableLogging) {
    instance.enableLogging = config.enableLogging;
  }
  if (config.enableAuthorization) {
    instance.enableAuthorization = config.enableAuthorization;
  }
  if (config.enableAuthorization) {
    instance.enableAuthorization = config.enableAuthorization;
  }
  if (config.env) {
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
