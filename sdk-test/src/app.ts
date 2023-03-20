import JengaApisSdk from "jenga-apis-sdk";

const accessToken =
  "eyJhbGciOiJSUzUxMiJ9.eyJ0b2tlblR5cGUiOiJNRVJDSEFOVCIsImVudiI6IlVBVCIsImV4cCI6MTY3OTMxNTUyMiwiaWF0IjoxNjc5MzE0NjIyLCJhY2NvdW50IjoiMEM1QUZFMThEOURCRkZEOTU5ODIyNjU2RjY1MUVDMDczN0FGNzE2RDdCQ0Y0MzlDRTg4RDEzMDU4RkQzQjFEQTAxNUM5NTk3Q0I4RDEyQTA1MjE4QTVCQjkwNTRFQUVCcERsRjFiRlY5eWhhbHA2SXByV3dzRjNBd2dCVEkrV1BKYjh3UUxtUmtXd0Z6NHRYblFaTFg1dkYyNDlyZTVCNlV3NnF1TEZmbVhUbHR6QzBKLzlsN3FvS0ZHV1NYRW5RWUluZUVSTHNrMlo1R0VGNVhqQWo5OFhHR0RkeXg1aVVWbHFWTmNvRis4Nld6T2VuNTNqMmlhc01tQ0g3RnU1TVdmZmd3Q1Zub20xaU5yM3UwZnN3NmlBMnkvM3pXamZjMStpMFhIeG1ObmtaSUYzZHNtRnhRcDJQNVoyNE5wdmJkc1A2YXVhczNGdVRUenQ2c3kvSWIrOTlVWmFjME1lMVdtRTdoQkZFY3Z3dGtRWVJpL2ovM3NNVFFYeE93M0x2Ulo1cXRkeko2TG9XNnhvTXZObW15VXlrakx2Zk9oMkluMG1Leld5ZnptZGdyUUREaUpyN2ExVjlTdlB0YmZGM1A4alBqcnZndGJrdHBXaWZFSjZOeWFIZFdiYWZxQkc4b2Y1RUwvRjBVZGFBV201NGEyRUpXZTBTRWN5aHVFTmVoTUFrcWpwa3lCOD0ifQ.m7xyTlTGPD78wISOJKGtpd0kJeO5Z7jP1_HEEgli7600T5hVVsPj4X8QZTIp4Aii2pieCQQTZbYINjfa_GSHCZx6a6kreHv360zjj7my8tQ-le_ChEZKaH7bWFPmK-aYKAbP375x6NG-9Mu8fdGHp5slxrlCSj7W26vbeNEhg1folZoIgOamMJBj46rAkcyLDOh8TashxSiY-AYdyBKOGRPBj-rlnIJVVTbZYK6QaRLJ1t_m35SATIQ__HX5JgGoddgBOMIksQc3hT9cgQuUY6k6xaPY3nCQbC2ez1nt9auE4OZ0cbfIY8AnT2A7a4mt5VZRBeZ-lsb592p6io2VCg";
const sdk: JengaApisSdk = new JengaApisSdk({
  apiKey:
    "B/xDKDWPMX5acekuX5QZF/8JIozvr40Xd+2RABniIRfwsO7gs4UuhwPJxthWpi14Y3JfSi+8JlkRO9xuL6DuVg==",
  merchantCode: "4611458492",
  consumerSecret: "2KR0Mgj6Ri26X29hayKfClQ6c2Mt0V",
  privateKeyPath: "/home/chariss/dev/personal/javascript/JengaSdk/uat.pem",
  env: "UAT",
  enableLogging: true,
});
// sdk
//   .generateToken()
//   .then((r: any) => console.log(r.data))
//   .catch((r) => {
//     console.log("auth");
//     console.log(r.response.data);
//   });
// sdk
//   .accountBalance({
//     params: { countryCode: "KE", accountId: "1100194977404" },
//     headers: { Authorization: `Bearer ${accessToken}` },
//   })
//   .then((r) => console.log(r.data))
//   .catch((r) => console.log(r.response.data));

sdk
  .accountMiniStatement({
    params: { countryCode: "KE", accountNumber: "0020100014605" },
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  .then((r) => console.log(r.data))
  .catch((r) => console.log(r.response.data));
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
  .then((r) => console.log(r.data))
  .catch((r) => console.log(r.response.data));
sdk
  .openingClosingAccountBalance({
    headers: { Authorization: `Bearer ${accessToken}` },
    data: {
      countryCode: "KE",
      accountId: "0011547896523",
      date: "2017-09-29",
    },
  })
  .then((r) => console.log(r.data))
  .catch((r) => console.log(r.response.data));
sdk
  .accountInquiry({
    params: { countryCode: "KE", accountNumber: "0020100014605" },
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  .then((r) => console.log(r.data))
  .catch((r) => console.log(r.response.data));
