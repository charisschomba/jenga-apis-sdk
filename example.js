const { JengaApiSdk } = require("jenga-apis-sdk");

const config = {
  apiKey: "your api key",
  merchantCode: "your merchant code",
  consumerSecret: "your consumer secret",
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIICWwIBAAKBgGh400bvJhgvo9KgpMtjy4FRP86oQmxZO9QwP8Hz+bnfBzzzF+GM
  E+BhC0v3dZO4JJzCsbbm14Ne5Zw4uhI5rtpUB689xVmGKm0whwMJakfANxO4IX0Y
  v/r5vH1xJ7hYqN2eryVcWiFNoSMRCsf9FE2b58aJc0CQS9D2oin7WsylAgMBAAEC
  gYA/abe0wsy4uZIS83eUDUslf4/ffLp00eVC8taAf/sBG6NlF5lTSpd2BvG4dshj
  lc6DaJo+jvgZwaxVmwk2rtS237TC8YecdBzXLtHkXm0+R8AMz8+uyt2xlXnqJhho
  ydDOETwvKXZfIj+34vJsRW7aN3QZjQ2OwMHbv03oEi0CAQJBAMOyW17H0jypItfh
  gxqWOdKOaGvx95OMwr9sO6+krDTn2Nd6W/BpaHKku1y8191ol87JJKG+jG3QLsuz
  RS3KNSECQQCIqieh3Qei7EbmKrEffsszJWjBqsFnkYIV8aIbSDWYU8xDIy1Qaab2
  BaHwuxZZ05yjCwLJ+ub1nIcoRWpMXGMFAkEAgzjQjdB9h9F+HLYJvEUphqeZG3DH
  qzfCyqrfptpL4rnoLCzPA3ka4WzWecvjD4L38F/t4UstTOFAz7Ro2dhyIQJAO3mZ
  f9a6IQwkmrxPkv5SHjMUkNvoCVOIwlYDD05wjJdDWKBxcwJXt8+htyskQflWvJnp
  H8+CPbdeFoeHCC5YpQJAP6FJtaXoWXPtbgAJNqrwMpxre0S+zWI/l3t2eZl7K2bJ
  ejwt8FT7cCeiwcI5Y2wPENaskMMDvCehAl2qK3x7EQ==
  -----END RSA PRIVATE KEY-----`,
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
    privateKey: "/JengaSdk/test.pem",
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
