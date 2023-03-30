const { JengaApiSdk } = require("jenga-apis-sdk");

const config = {
  apiKey: "your api key",
  merchantCode: "your merchant code",
  consumerSecret: "your consumer secret",
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIIEowIBAAKCAQEArrkgh8oXZFGFvkRFb5/8E13qylVfpqFcRNal9p2rFfgSLwBM
  woscFCz2mrsWlt796UpRj0IbdAz4GHiG1Uznt3BPEtgUpXEjba2cjHo6p2ViDQMb
  aEZ15Sq0UPUyarKK8n7PlFSpQ0QbWU7H13affPIx3Fk5IW9occiKzwTkT9wMxnHn
  qoduQSYzk03aM99uwuDx4+YqHPcncdBEbUadwoVzJ6IkcSz8MjNWSLN8m+g7p2nW
  lQQH3Rau8RgkgSnBtkRQbPxOiDsQ3bDejLd3j/H3b2gpbHnsQ6kB+BWRN954r03H
  4wc1cqWzjW+WVGMtRa/loeXY3bELtKw8J1Du4QIDAQABAoIBAG/1qtW4dvLOlmAM
  iV3062dRmCEdQdSZs3FdBi4YbEgAlU5O5+EFmPGIumD+H4R/0b6K4+ZjmwnrQZMU
  sHm/9P+D1PejRN+atvQR+q29qRYZDhJ+ejKAbA10JuV1qV/bltO61LMc6PV0j/3T
  UJVNqvc6jx6+gbBeHlRDCEeNv+s3bE1/z0DFOruXgrqB/Sd9Dd2Z+N0RU38Eef9b
  fh60f3btbfj2c+MDwZ6m+2nG1noyDiMozK7x9pPwCOdVraskpJ6g4RCS6BUD/8Yk
  N5aXI1Y255+eWZusWigmObW5klvaKFXsLY7i7eQ32h+TkzpqTe/u1KrrCAX947ZT
  5jEAOwECgYEA2IAcpSf+T2RBsU11r+Zcgl4UVDVEb8/tkaZBE23mo0NfanW+IBge
  gMjKUzv82ozRjf/Av9KlPIca+E31esRrRVtN6TQ5yb5c+HxSfsJF0NYTCxNCczTs
  6nY29jK9zEE6qGNZPpl03EKUMzL6qq/QHVgRkaJBwaNvMyuM3vtXRbECgYEAzpnD
  ADgHHv3xhZU0EF+tFkf9oXk9/P0Z6oeyMpZf0Bi+PRTJ/PZ7HUgPxc+i7Fmp0hhk
  v32yAEFq9zpS7ky3dvPgcPqFLVeowDBuKIUV8zv+Z2EgvHDaZXZeUG+k4gCEr7/2
  4Vr6kPu0oiWR6gDMC45SWbfYNJqXnivq569UGDECgYBTju5/V7YxUhKAqdK4NwKR
  VlomPgDR3sBkLHSFWS9g58nVvufIX0a2kch043wtpZfjZEgyQMyBVeu01fHelhyI
  wjqJvRxons4nIWR9g+GKPnVPGvnUmSKvQzznPKJASRSolN+G55dQw2mLcSuJ4R1D
  lhAB00vpvnhWmYJfNUZzoQKBgHuurYC6CflRyX9RHUQYIwTNwFckwCluVE+FQPbr
  8xwfU/Q5N9sKrBWRiG/BqCWaYAH4vIeu9hsVDrZG4lLq9oJt6ZV5RLUqX0n/NFNp
  qQRejCTTjseBQB2xyTCaRblO2iBk6aVr08lsBm1z1HCkXYMlhsNTPknvqoj0fcKJ
  wexhAoGBAKh/J9yTWBA69RK8w2r8trchyJGCopxn2XpxwySJXepQf8gCcxlTzII3
  bdWB3Vdrsudl6z6/YDb48HJm3I8e+jOGFix/rL28XZ6bwLg6q6vtqpe0I+V5I4NO
  UzwhwBVEKPCX/Bl9NVxu/8mDVlqQqlz4g4gI3qn6iJHB1pyuThol
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
