import JengaApisSdk from "jenga-apis-sdk";
const accessToken =
  "eyJhbGciOiJSUzUxMiJ9.eyJ0b2tlblR5cGUiOiJNRVJDSEFOVCIsImVudiI6IkRFViIsImV4cCI6MTY3OTE3MjA0MCwiaWF0IjoxNjc5MDg1NjQwLCJhY2NvdW50IjoiOUQ0RjYwMDQwRTFGNjVCOUM0RTE0MjNGNjExREU0ODhFNjdENEY2M0MxNkRGRURFOThGRjlBNzg5QUNENzU4MEMxMDFDRTE3MzA4MEIxNjUxOTNFQUFFRkYwNkJBOURGRHhyaFAzdlo0UkhkMjJvSXJ5K21HeFJ6eDFoMWlzNDQzaGVHYjZpbS9XVzJGN3EwTmthU1AzVjZxalJ6dkNwb0ZHcEUxWVJYQk56cHFPTzFFWnZ2aCtuVjZ1SXVFZmdmR0ovbUpiOUUwK0F2T1ZjdTZjSnNnRTF0eFpmbFFUcGp0aXgvaWxaSjIrOXd4ZmhNTmNycm9qR3RFV2NpQWlwVDh4THRDbWFtNEd2emp3SEhGR0hXTmwrWkVHV0NmSnF4YjNXbmtaODhCa3duN0o3YWhEZkpYQXRLTlg4cnliY3A0K1Y4LzR3U2h2UHpNRDl2Z0s4R1Y0MG5tK1Y4MjlydGN6aGE1dW9hZU1KbExWcUV6Y3hQZkRCVjc5ckQ1aUR5cWc3TjJ5VlY3czZOOEE3UnVqSTRqY1ZVNDNGb3VGYjRTTjYzQ0FXOTkxbEh2YnlwTUZGNVJsamZFamhxUnUrOWQ2U2JFU2Q1a2lxZyswZHc5c3pMMmdjT3RUQkNaeGlWZVliQ2RTY3BmRU01cVh0QlZqaG5TRnJIRUQ3anNSOWFhdEt1clkyWGhUTT0ifQ.EqmB-RjEf7rr5Mfh_OkgKmF9s7vzfhWJCbxialUJ2W1ZGmlz0-So2VVVD4Med1oTMo6NnZEgdrA7yGPzfVdv-ssi4xkfL7sH0FRvCI6Sx-Voauh38dxI27Fpgp2m8S41q3sfo4mTQLfigyP0WHEn9sT6BoCyKObk_T-uvZU9xFrCFWdR2cs6nt0VTdCvVzPCcjPzT-IfAYnnc1FJ5isy5pM8tuGVVJfP9JcqQrOL8XgDMdg4mZIXRF63t5-YhQ_Ll0XGj0XixD3xM-bacpOr8YjtAjQHikSLmNEMQXB0bryz1AWDL0ZMpzAaYVT_HMatHLBAI9-I-PSJiPCDtqXZyA";
const sdk: JengaApisSdk = new JengaApisSdk({
  apiKey:
    "xBWk5Wsl9IFfciEQxkt2MeLHWLLeiDhdwtLW5Lqe9WI68MBO7C7DSwtNcMuMhIVIgV45E4K3krW3XN+quhg9pw==",
  merchantCode: "2179103820",
  consumerSecret: "RIl1IHN1xktI2wjAGE5Js5zm3s7052",
  privateKeyPath:
    "/home/chariss/dev/personal/javascript/JengaSdk/privateKey.pem",
  env: "DEV",
});
// sdk
//   .generateToken()
//   .then((r: any) => console.log(r.data))
//   .catch((r) => {
//     console.log("auth");
//     console.log(r.response.data);
//   });
// sdk
//   .airtimePurchase()
//   .then((r) => console.log(r))
//   .catch((r) => console.log("airtime"));
sdk
  .accountBalance({
    params: { countryCode: "KE", accountId: "0020100014605" },
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  .then((r) => console.log(r.data))
  .catch((r) => console.log("balance", r.response.data));
