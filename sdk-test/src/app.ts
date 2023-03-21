import JengaApisSdk from "jenga-apis-sdk";
const config = {
  apiKey:
    "B/xDKDWPMX5acekuX5QZF/8JIozvr40Xd+2RABniIRfwsO7gs4UuhwPJxthWpi14Y3JfSi+8JlkRO9xuL6DuVg==",
  merchantCode: "4611458492",
  consumerSecret: "2KR0Mgj6Ri26X29hayKfClQ6c2Mt0V",
  privateKeyPath: "/home/chariss/dev/personal/javascript/JengaSdk/uat.pem",
  env: "UAT",
  enableLogging: true,
  enableAuthorization: true,
};

const accessToken =
  "eyJhbGciOiJSUzUxMiJ9.eyJ0b2tlblR5cGUiOiJNRVJDSEFOVCIsImVudiI6IlVBVCIsImV4cCI6MTY3OTQwOTA0NSwiaWF0IjoxNjc5NDA4MTQ1LCJhY2NvdW50IjoiMjlFQ0EwMkRDRDQ1MUQxMzZGODE5QTExOUUwNTIyOENFRUVBNDM0QTYyOEI1QjlBNEVDNjM4OEYwNzFCNTZFODkxNjY4QTIyNUY3RUVBNjhBODU2Mjc1NTBDRENDNUI1L3U2bjA3UFJ4KzNOVkdwcXJxeUZDSnEwQW03OC9EZ1g1YVZxM3VZTi9WREFaK2RSRGtVVTFIOFlCb1gzcXFCeE9ad2o1aWFZQXVHUzB6QzIvSUNncGszZWwydkNCRGJnQVZZMUx5WTgvYy9Pb0k3blp2RDVSUzdxdjZwNzlkeDF0SUN3b2lEM0sxT1daL0FEZ1J1WXk0R05sNzBvNE85a2NOcDIzZEUwZnl6VS9kdDUzeThGS1Vzc1UvS3Y4VjI2NWRlVVRyVkoyOXFDbExpbytuQ0NSMzAyMG5CNGRnQWZnK0hKV0Q0KytyVXZPRC92OFJoV0NQLy9MRG5CRkl3SUUxUnNuVXZnUFFpdVBwckVSQml2VE1jcEJ0Smg3Tlk3dTQwK2ZmcTZyNHc5QStOK3RCUE80eDlQdE1pYXA0cjBtNGcyQWF0V09kdkx0NGFPZmRZTXpPNm5EV2xCZmdZTGtELzUwMjFNVU5NYkMvQ3d4bkpYNnY5Vno0aGIweHVTczFWUXBkSHE2b1lZdGs4T2ZTaUJLT3dKNjQ2MUpHdkxFdEp6REE5M0dkTT0ifQ.EnMQXrwkZ9YWW4A5GSR6XKXFWIJEQ1jWQ11C6UGNEBKwZ9PVCK2om_iCO9dIqftgJYgUZnV7hZz1mb7Mx5jooh36nm4V7Ih-UpYL8MKbVXhPIqSYjBTim79w1eM4I6tYtm7uMyeI0dCrRl67BO8X0hhCHQiLYYdnk6PgK5JNu9i-D4Or98LKWHAt1Pc1WbTMhB3kEdIfVA9Ft7i_U4NoXaS0xH_omw5YRiMBaLzvOydTExCieMcUFhXeTSKhQiI09L-tUKtSvoc7OxBHxVEcNd5xv0Sqybqs34WS7OFKhGhqFBAUDH2JyQul_YNhQg_6MiviEEI5ujWkRsfWTuwW6A";
const sdk: JengaApisSdk = new JengaApisSdk(config);

const express = require("express");
const app = express();
const port = 3000;
app.get("/balance", (req, res) => {
  sdk
    .accountBalance({
      params: { countryCode: "KE", accountId: "1100194977404" },
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((r: any) => {
      res.send(r.data);
    })
    .catch((r: any) => {
      res.send(r.response.data);
    });
});
app.get("/token", (req, res) => {
  sdk
    .generateToken()
    .then((r: any) => res.send(r.data))
    .catch((r) => res.send(r.response.data));
});
app.get("/enquiry", (req, res) => {
  sdk
    .accountInquiry({
      params: { countryCode: "KE", accountNumber: "0020100014605" },
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((r) => res.send(r.data))
    .catch((r) => r.send(r.response.data));
});
app.post("/openingBalance", (req, res) => {
  sdk
    .openingClosingAccountBalance({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        countryCode: "KE",
        accountId: "0011547896523",
        date: "2017-09-29",
      },
    })
    .then((r) => r.send(r.data))
    .catch((r) => r.send(r.response.data));
});
app.get("/ministatement", (req, res) => {
  sdk
    .accountMiniStatement({
      params: { countryCode: "KE", accountNumber: "0020100014605" },
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((r) => res.send(r.data))
    .catch((r) => res.send(r.response.data));
});
app.post("/fullStatement", (req, res) => {
  sdk
    .accountFullStatement({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        countryCode: "KE",
        accountNumber: "0020100014605",
        fromDate: "2018-01-18",
        toDate: "2018-04-19",
        limit: 3,
      },
    })
    .then((r) => res.send(r.data))
    .catch((r) => res.send(r.response.data));
});

app.listen(port, () => {
  console.log(`Jenga SDK Test App listening on port: ${port}`);
});
