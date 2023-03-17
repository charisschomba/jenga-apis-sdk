import JengaApisSdk from "jenga-apis-sdk";

const sdk: JengaApisSdk = new JengaApisSdk({
  apiKey:
    "xBWk5Wsl9IFfciEQxkt2MeLHWLLeiDhdwtLW5Lqe9WI68MBO7C7DSwtNcMuMhIVIgV45E4K3krW3XN+quhg9pw==",
  merchantCode: "2179103820",
  consumerSecret: "RIl1IHN1xktI2wjAGE5Js5zm3s7052",
  privateKeyPath:
    "/home/chariss/dev/personal/javascript/JengaSdk/privateKey.pem",
  env: "DEV",
});
sdk
  .authenticate()
  .then((r: any) => console.log(r.data))
  .catch((r) => {
    console.log("auth");
    console.log(r.response.data);
  });
// sdk
//   .airtimePurchase()
//   .then((r) => console.log(r))
//   .catch((r) => console.log("airtime"));
// sdk
//   .accountBalance()
//   .then((r) => console.log(r))
//   .catch((r) => console.log("balance", r));
