import JengaApisSdk from "jenga-apis-sdk";

const accessToken =
  "eyJhbGciOiJSUzUxMiJ9.eyJ0b2tlblR5cGUiOiJNRVJDSEFOVCIsImVudiI6IlVBVCIsImV4cCI6MTY3OTM5NDgwMSwiaWF0IjoxNjc5MzkzOTAxLCJhY2NvdW50IjoiMzRCNjY0NTBEQjY0Q0EwOUE1NEQ0N0EwQkY4QzY1Q0E4NzA3RUU2REI4QzVFNjRCOTdGN0Q1Q0ZEQUNDQzdCQjFGMzhGRjJBNDBEOEZGODlDQkI4QzgxMDAxNjMyNjdDSXpBZlZZVWZPN1pxSS9sVDJoTzVRZkpWN2ZSaEFlYnlvVjFpY3NSYVBtZ1prY1NzUkQ5M3NhaU1RYTBZc0ZVeFFxcjRIRWFXTFJQNzJiNkx4MzFhSGRFUHQrSFd1SFVhd2I5Zll5ZVhmMlFEUDBCNlN6TVNmUm8rSFJMQzZvNWJXNTR1Zkx0WlFFek95NG11Q1BwaXNYa0dPUWwrN2lWNmFZemw1YnR5bjBYdVluTVNnemFGcFlIVW1icjNUKzNGZ1pXQ1ZnbEp2dXB4L0U5MW12KzUySnpQZ0h4L0kvbDF5Z1RCS1VyTzVOdU41b3VLb3YvRW1JaytsUjdNdGxDcFFrZXlZdXN2c0VzVFhnRTJCSktqZk9Cb09wdnk4QW8xMVpBUGFJSk5LTlJZb0xrUThNbTJ2cDBqakYxbTc0Rk9sUFh6N3ZPRVduMys3OStLWnFLU25QamdtVVdiV3VzbUsxU214SzZKTE13cE05UFdMQm4rTFJTSjZqSElIMUcxSnNGOUdmT0ZIOVNweVJvbnllTDNROU9iYjdwTWR1Z1BZRENvakNnVlQ3OD0ifQ.QYqswU6qQsa7ZMkOPpzyfIhtCI2UlGlXvmmd4heG9dXJLXIrNx2LLfcnMywcdyuR4DTai4UopFlDf-_ZG7Wx6veY50PStURbbCjrntDHyGditQXJ0ZGCg7tQvMiB3T_0HWahPmP4DZHH6Y085Lcy-Xiv5kZUlPNiQKTZG932-blZEoAKPc4LMoFVFlrcjfStoIumwg3u7CFnUhOpF6a3Cvu17G7orNY4m-e1ra51jcVcbE-vLXyxqg8iv3JCcurxhxsfPAVmPuwRQfDJEpKkCwxTyLBzhsSEMzGfp_PwTbUavHAaoMvftyRPB_xoyeBtRkelljvHsM8xv5Vzr5hvNw";
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
sdk
  .accountBalance({
    params: { countryCode: "KE", accountId: "1100194977404" },
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  .then((r: any) => console.log(r.data))
  .catch((r: any) => console.log(r.response.data));

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
