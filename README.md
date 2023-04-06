## Jenga APIs SDK
Unlock the full potential of JengaAPI with JengaAPISDK - The gateway to seamless integration.
## Why jenga-apis-sdk?
A wrapper around Jenga APIs that simplifies the use of Jenga APIs for developers. It acts as an intermediary between the Jenga APIs and the developer, making it easier to access and use the APIs without needing to understand all the underlying details of the API implementation.
[Documentation](https://charisschomba.github.io/jenga-apis-sdk/A )
## Installation
```js
 npm install jenga-apis-sdk
```
```js
 yarn add jenga-apis-sdk
```

## In Node.js:

```js
const { JengaApiSdk } = require("jenga-apis-sdk");

const config = {
  apiKey: "your api key",
  merchantCode: "your merchant code",
  consumerSecret: "your consumer secret",
  privateKeyPath: `absoulte path to your private key`,
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

// Update the config object
const newConfigs = sdk.updateConfig(
  // all the configs are optional
  {
    apiKey:
      "sadexcafdfgbg",
    merchantCode: "4641458453492",
    consumerSecret: "2KR0Mgj6Ri26X29hayKfClQ6c2Mt0V",
    // absolute path of your private key
    privateKeyPath: "/JengaSdk/test.pem",
    env: "PROD",
    enableLogging: true,
    verbose: false,
    enableAuthorization: true,
  },
  // here callback is optional
  () => {}
);
// Get the current config
const currentConfig = sdk.getConfig();
```