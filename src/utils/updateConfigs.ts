export const updateSdkInstance = (instance, config, callback) => {
  if ("apiKey" in config) {
    instance.apiKey = config.apiKey;
    instance.token = { accessToken: null, expiresIn: null };
  }
  if ("merchantCode" in config) {
    instance.merchantCode = config.merchantCode;
    instance.token = { accessToken: null, expiresIn: null };
  }
  if ("consumerSecret" in config) {
    instance.consumerSecret = config.consumerSecret;
    instance.token = { accessToken: null, expiresIn: null };
  }
  if ("privateKeyPath" in config) {
    instance.privateKeyPath = config.privateKeyPath;
  }
  if ("enableLogging" in config) {
    instance.enableLogging = config.enableLogging;
  }
  if ("verbose" in config) {
    instance.verbose = config.verbose;
  }
  if ("enableAuthorization" in config) {
    instance.enableAuthorization = config.enableAuthorization;
  }
  if ("env" in config) {
    instance.baseUrl = BaseUrl[config.env];
    instance.env = config.env;
    instance.token = { accessToken: null, expiresIn: null };
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
