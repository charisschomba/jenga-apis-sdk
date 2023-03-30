const { JengaApiSdk } = require("jenga-apis-sdk");

const config = {
  apiKey: "your api key",
  merchantCode: "your merchant code",
  consumerSecret: "your consumer secret",
  privateKeyPath: "path to your private key",
  verbose: true, //Optional defaults to false
  enableLogging: true, //Optional defaults to false
  env: "UAT or PROD", //Optional defaults to UAT
  enableAuthorization: false, //Optional defaults to true
  // set to false if you want to handle setting 
  // the Authorization header yourself
};

const sdk = new JengaApiSdk(config);

// const sdk: JengaApiSdk = new JengaApiSdk(config);  // Typescript

// Get request exapmple
  sdk
    .accountBalance({
      params: { countryCode: "KE", accountId: "1100194977404" },
    })
    .then((r) =>  console.log(r.data))
    .catch((r) => console.log(r.response.data));

// Generate a token
sdk
  .generateToken()
  .then((r) => console.log(r.data))
  .catch((r) => console.log(r.response.data));

// Call the api with data object required (POST Request)
sdk
  .openingClosingAccountBalance({
    // you should set the Authorization header yourself if you set enableAuthorization to false
    headers: { Authorization: `Bearer ${accessToken}` },
    data: {
      countryCode: "KE",
      accountId: "0011547896523",
      date: "2017-09-29",
    },
  })
  .then((r) => console.log(r.data))
  .catch((r) => console.log(r.response.data));

/**
 * Update the config object
 * @param {Object} newConfigs
 * @param {Function} callback optional
 * @returns {Object} new config
 * callback is called with the new config
 */

const newConfigs = sdk.updateConfig(
  // all the configs are optional
  {
    apiKey:
      "sadexcafdfgbg",
    merchantCode: "4641458453492",
    consumerSecret: "2KR0Mgj6Ri26X29hayKfClQ6c2Mt0V",
    privateKeyPath: "/JengaSdk/test.pem",
    env: "PROD",
    enableLogging: true,
    verbose: false,
    enableAuthorization: true,
  },
  () =>
    sdk
      .accountBalance({
        params: { countryCode: "KE", accountId: "1100194977404" },
      })
      .then((r) => console.log(r.data))
      .catch((r) => console.log(r.response.data))
);

// Get the current config
const currentConfig = sdk.getConfig();
