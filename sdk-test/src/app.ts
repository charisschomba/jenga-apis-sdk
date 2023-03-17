import JengaApisSdk from "jenga-apis-sdk";

const sdk: JengaApisSdk = new JengaApisSdk({
  apiKey:
    "eN8OFJ8+lQNNZQPcpJ/ma87ct7OCJVPSACt0gBY25KMJDDr1CsrjQoZlWk9w/RPEOGoYsXmKWyjLigFofYTCwA==",
  merchantCode: "2179103820",
  consumerSecret: "T30Mim1UA3v7QnFKtn24Qt7bUnl76T",
  privateKeyPath: "absolute path to your private key",
  env: "DEV",
});
sdk
  .authenticate()
  .then((r) => console.log(r))
  .catch((r) => console.log("auth"));
sdk
  .airtimePurchase()
  .then((r) => console.log(r))
  .catch((r) => console.log("airtime"));
sdk
  .accountBalance()
  .then((r) => console.log(r))
  .catch((r) => console.log("balance", r));
