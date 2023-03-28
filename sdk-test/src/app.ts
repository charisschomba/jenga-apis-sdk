import { AccountService, JengaApiSdk } from "jenga-apis-sdk";
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
const accessToken = "";
const sdk: JengaApiSdk = new JengaApiSdk(config);
const express = require("express");
const app = express();
const port = 4000;
app.get("/balance", (req, res) => {
  sdk
    .accountBalance({
      params: { countryCode: "KE", accountId: "1100194977404" },
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
    .catch((r: any) => res.send(r.response.data));
});
app.get("/enquiry", (req, res) => {
  sdk
    .accountInquiry({
      params: { countryCode: "KE", accountNumber: "0020100014605" },
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
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
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.get("/ministatement", (req, res) => {
  sdk
    .accountMiniStatement({
      params: { countryCode: "KE", accountNumber: "0020100014605" },
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
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
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/airtime", (req, res) => {
  sdk
    .airtimePurchase({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        customer: {
          countryCode: "KE",
          mobileNumber: "0765555131",
        },
        airtime: {
          amount: "100",
          reference: "692194625798",
          telco: "Equitel",
        },
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/forex", (req, res) => {
  sdk
    .getForexRates({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        countryCode: "KE",
        currencyCode: "USD",
        amount: 344,
        toCurrency: "GBP",
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/identity", (req, res) => {
  sdk
    .validateIdentity({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        identity: {
          documentType: "ALIENID",
          firstName: "John",
          lastName: "Doe",
          dateOfBirth: "1970-01-30",
          documentNumber: "123456",
          countryCode: "KE",
        },
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/receivePaymentsBMerchantPayments", (req, res) => {
  sdk
    .receivePaymentsBMerchantPayments({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        merchant: {
          till: "0766112112",
        },
        payment: {
          ref: "123456789123",
          amount: "1000.00",
          currency: "KES",
        },
        partner: {
          id: "0011547896523",
          ref: "987654321",
        },
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/receivePaymentsBillPayments", (req, res) => {
  sdk
    .receivePaymentsBillPayments({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        biller: {
          billerCode: "320320",
          countryCode: "KE",
        },
        bill: {
          reference: "101704",
          amount: "111.00",
          currency: "KES",
        },
        payer: {
          name: "A. N Other",
          account: "101704",
          reference: "123456729123",
          mobileNumber: "0764555320",
        },
        partnerId: "0011547896523",
        remarks: "These are just some remarks",
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/billValidations", (req, res) => {
  sdk
    .billValidations({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        billerCode: "320320",
        customerRefNumber: "28055948",
        amount: "1000.00",
        amountCurrency: "KES",
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.get("/getAllEazzyPayMerchants", (req, res) => {
  sdk
    .getAllEazzyPayMerchants({
      params: { page: "1", per_page: "1" },
    })
    .then((r: any) => {
      res.send(r.data);
    })
    .catch((r: any) => {
      res.send(r.response.data);
    });
});
app.get("/queryTransactionDetails", (req, res) => {
  sdk
    .queryTransactionDetails({
      params: { ref: "689632147856" },
    })
    .then((r: any) => {
      res.send(r.data);
    })
    .catch((r: any) => {
      res.send(r.response.data);
    });
});
app.get("/getAllBillers", (req, res) => {
  sdk
    .getAllBillers({
      params: { page: "1", per_page: "1" },
    })
    .then((r: any) => {
      res.send(r.data);
    })
    .catch((r: any) => {
      res.send(r.response.data);
    });
});
app.post("/imtSendMoneyWithinEquity", (req, res) => {
  sdk
    .imtSendMoneyWithinEquity({
      data: {
        source: {
          countryCode: "KE",
          name: "Merchant name",
          accountNumber: "0011547896523",
        },
        sender: {
          name: "Sender Name",
          documentType: "NationalId",
          documentNumber: "12345",
          countryCode: "KE",
          mobileNumber: "0763000000",
          email: "sender.name@example.com",
          address: "Sender Address",
        },
        destination: {
          type: "bank",
          countryCode: "KE",
          name: "A N.Other",
          bankCode: "03",
          accountNumber: "101080530003",
          mobileNumber: "0763123456",
          documentType: "NationalId",
          documentNumber: "123456",
        },
        transfer: {
          type: "InternalFundsTransfer",
          amount: "1000",
          reference: "123456789123",
          currencyCode: "KES",
          date: "2018-08-18",
          description: "some remarks here",
        },
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/imtSendMoneyToMobileWallet", (req, res) => {
  sdk
    .imtSendMoneyToMobileWallet({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        source: {
          countryCode: "KE",
          name: "John Doe",
          accountNumber: "0011547896523",
        },
        sender: {
          name: "Sender Name",
          documentType: "NationalId",
          documentNumber: "12345",
          countryCode: "KE",
          mobileNumber: "0763000000",
          email: "sender.name@example.com",
        },
        destination: {
          type: "mobile",
          countryCode: "KE",
          name: "A N.Other",
          mobileNumber: "0763123456",
          walletName: "Mpesa",
          documentType: "NationalId",
          documentNumber: "123456",
        },
        transfer: {
          type: "MobileWallet",
          amount: "1000",
          currencyCode: "KES",
          reference: "123456789123",
          date: "2018-08-18",
          description: "some remarks here",
          callbackUrl:
            "https://webhook.site/561cb941-bf59-414d-880f-aa7ff169382a%22",
        },
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/imtSendMoneyPesalinkToBankAccount", (req, res) => {
  sdk
    .imtSendMoneyPesalinkToBankAccount({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        source: {
          countryCode: "KE",
          name: "John Doe",
          accountNumber: "0011547896523",
        },
        sender: {
          name: "Sender Name",
          documentType: "NationalId",
          documentNumber: "12345",
          countryCode: "KE",
          mobileNumber: "0763000000",
          email: "sender.name@example.com",
        },
        destination: {
          type: "bank",
          countryCode: "KE",
          name: "A N.Other",
          bankCode: "03",
          accountNumber: "101080530003",
          mobileNumber: "0763123456",
          documentType: "NationalId",
          documentNumber: "123456",
        },
        transfer: {
          type: "Pesalink",
          amount: "1000",
          reference: "123456789123",
          currencyCode: "KES",
          date: "2018-08-18",
          description: "some remarks here",
        },
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/imtSendMoneyPesalinkToMobile", (req, res) => {
  sdk
    .imtSendMoneyPesalinkToMobile({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        source: {
          countryCode: "KE",
          name: "John Doe",
          accountNumber: "0011547896523",
        },
        sender: {
          name: "Sender Name",
          documentType: "NationalId",
          documentNumber: "12345",
          countryCode: "KE",
          mobileNumber: "0763000000",
          email: "sender.name@example.com",
        },
        destination: {
          type: "mobile",
          countryCode: "KE",
          name: "A N.Other",
          bankCode: "03",
          accountNumber: "101080530003",
          mobileNumber: "0763123456",
          documentType: "NationalId",
          documentNumber: "123456",
        },
        transfer: {
          type: "Pesalink",
          amount: "1000",
          reference: "123456789123",
          currencyCode: "KES",
          date: "2022-12-15",
          description: "some remarks here",
        },
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/sendMoneyWithinEquity", (req, res) => {
  sdk
    .sendMoneyWithinEquity({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        source: {
          countryCode: "KE",
          name: "A N.Other",
          accountNumber: "0011547896523",
        },
        destination: {
          type: "bank",
          countryCode: "KE",
          name: "John Doe",
          accountNumber: "0022547896523",
        },
        transfer: {
          type: "InternalFundsTransfer",
          amount: "1000.00",
          currencyCode: "KES",
          reference: "692194625798",
          date: "2018-08-18",
          description: "some remarks here",
        },
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/sendMoneyRtgs", (req, res) => {
  sdk
    .sendMoneyRtgs({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        source: {
          countryCode: "KES",
          name: "John Doe",
          accountNumber: "0011547896523",
        },
        destination: {
          type: "bank",
          countryCode: "KE",
          name: "A N.Other",
          bankCode: "01",
          accountNumber: "2564785123",
        },
        transfer: {
          type: "RTGS",
          amount: "1000.00",
          currencyCode: "KES",
          reference: "692194625798",
          date: "2018-08-16",
          description: "some remarks here",
        },
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/sendMoneyToMobileWallet", (req, res) => {
  sdk
    .sendMoneyToMobileWallet({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        source: {
          countryCode: "KE",
          name: "John Doe",
          accountNumber: "0011547896523",
        },
        destination: {
          type: "mobile",
          countryCode: "KE",
          name: "A N.Other",
          mobileNumber: "0763123456",
          walletName: "Mpesa",
        },
        transfer: {
          type: "MobileWallet",
          amount: "1000",
          currencyCode: "KES",
          reference: "692194625798",
          date: "2018-08-18",
          description: "some remarks here",
        },
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/sendMoneySwift", (req, res) => {
  sdk
    .sendMoneySwift({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        source: {
          countryCode: "KE",
          name: "John Doe",
          accountNumber: "0011547896523",
        },
        destination: {
          type: "bank",
          countryCode: "KE",
          name: "A N.Other",
          bankBic: "BOTKJPJTXXX",
          accountNumber: "12365489",
          addressline1: "Post Box 56",
        },
        transfer: {
          type: "SWIFT",
          amount: "10000.00",
          currencyCode: "USD",
          reference: "692194625798",
          date: "2018-08-16",
          description: "some description here",
          chargeOption: "SELF",
        },
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/sendMoneyPesaLinkToBank", (req, res) => {
  sdk
    .sendMoneyPesaLinkToBank({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        source: {
          countryCode: "KE",
          name: "John Doe",
          accountNumber: "0011547896523",
        },
        destination: {
          type: "bank",
          countryCode: "KE",
          name: "Tom Doe",
          bankCode: "63",
          accountNumber: "0090207635001",
        },
        transfer: {
          type: "PesaLink",
          amount: "2000",
          currencyCode: "KE",
          reference: "692194625798",
          date: "2018-08-18",
          description: "some description",
        },
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/sendMoneyPesaLinkToMobileNumber", (req, res) => {
  sdk
    .sendMoneyPesaLinkToMobileNumber({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        source: {
          countryCode: "KE",
          name: "John Doe",
          accountNumber: "0011547896523",
        },
        destination: {
          type: "mobile",
          countryCode: "KE",
          name: "A N.Other",
          bankCode: "01",
          mobileNumber: "0722000000",
        },
        transfer: {
          type: "PesaLink",
          amount: "1000",
          currencyCode: "KES",
          description: "kskksskks",
          reference: "692194625798",
          date: "2018-08-19",
        },
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/mpgsAuthenticatePayment", (req, res) => {
  sdk
    .mpgsAuthenticatePayment({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        transactionReference: "NCJASSOPK101004",
        sourceOfFunds: {
          cardNumber:
            "22d5fd8f8df08ba34a1dcbf84011ae783c326e9fcefd08501e40722c7aeeb946abb6255714b7289eef562748920b873be2aHMpN/qcSMMeh12GL5pxWLo9Y7fDn2lqUou0ICcBs=",
          cardSecurity:
            "1fd3b576cb487da80b30551c0e66ee2768a5cb5c99c121d91e4721947914c01ee919ab8943475ca5847bf796241da2448EILoGUe8QuoJsNg4Vp7JQ==",
          cardExpiryYear: "34",
          cardExpiryMonth: "10",
        },
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/mpgsAuthorizePayment", (req, res) => {
  sdk
    .mpgsAuthorizePayment({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        transactionReference: "NCJASSOPK101004",
        customer: {
          email: "john@yopmail.com",
          firstName: "John",
          cardFirstName: "John",
          cardLastName: "Doe",
          lastName: "Smith",
          mobilePhone: "0763000000",
        },
        order: {
          amount: 258.75,
          reference: "OR1649092214608",
          currency: "KES",
          description: "Card payment for order OR1649092214608",
          subMerchant: {
            address: {
              city: "Kisumu",
              company: "Kilimall",
              postalZip: "01001",
              stateProvince: "Kisumu",
              street: "Kilimani",
            },
            email: "john@yopmail.com",
            tradingName: "Kilimall",
            phone: "254763000000",
            identifier: "2179103820",
          },
        },
        sourceOfFunds: {
          cardNumber:
            "22d5fd8f8df08ba34a1dcbf84011ae783c326e9fcefd08501e40722c7aeeb946abb6255714b7289eef562748920b873be2aHMpN/qcSMMeh12GL5pxWLo9Y7fDn2lqUou0ICcBs=",
          cardSecurity:
            "1fd3b576cb487da80b30551c0e66ee2768a5cb5c99c121d91e4721947914c01ee919ab8943475ca5847bf796241da2448EILoGUe8QuoJsNg4Vp7JQ==",
          cardExpiryYear: "34",
          cardExpiryMonth: "10",
        },
        transaction: {
          source: "INTERNET",
          sourceOwner: "FINSERVE",
        },
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/mpgsQueryPayment", (req, res) => {
  sdk
    .mpgsQueryPayment({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        transactionReference: "NCJASSOPK101004",
        orderReference: null,
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});
app.post("/mpgsValidatePayment", (req, res) => {
  sdk
    .mpgsValidatePayment({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        transactionReference: "NCJASSOPK101004",
        merchantMID: "TESTJENGA_MISC",
        responseUrl:
          "https://webhook.site/3af0e78a-e4e9-40d9-b88e-1c3d60ea5302",
        order: {
          reference: "OR8289289282900002",
          amount: 258.75,
          currency: "KES",
        },
        customer: {
          cardFirstName: "John",
          cardLastName: "Doe",
        },
        sourceOfFunds: {
          cardNumber:
            "22d5fd8f8df08ba34a1dcbf84011ae783c326e9fcefd08501e40722c7aeeb946abb6255714b7289eef562748920b873be2aHMpN/qcSMMeh12GL5pxWLo9Y7fDn2lqUou0ICcBs=",
          cardSecurity:
            "1fd3b576cb487da80b30551c0e66ee2768a5cb5c99c121d91e4721947914c01ee919ab8943475ca5847bf796241da2448EILoGUe8QuoJsNg4Vp7JQ==",
          cardExpiryYear: "34",
          cardExpiryMonth: "10",
        },
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r));
});
app.post("/mpgsRefundPayment", (req, res) => {
  sdk
    .mpgsRefundPayment({
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        transactionReference: "NCJASSOPK101004",
        amount: 50,
        merchantNote: "2179103820",
      },
    })
    .then((r: any) => res.send(r.data))
    .catch((r: any) => res.send(r.response.data));
});

app.get("/updateConfig", (req, res) => {
  const newConfigs = sdk.updateConfig(
    {
      apiKey:
        "B/xDKDWPMX5acekuX5QZF/8JIozvr40Xd+2RABniIRfwsO7gs4UuhwPJxthWpi14Y3JfSi+8JlkRO9xuL6DuVg==",
      merchantCode: "4611458492",
      consumerSecret: "2KR0Mgj6Ri26X29hayKfClQ6c2Mt0V",
      privateKeyPath: "/home/chariss/dev/personal/javascript/JengaSdk/uat.pem",
      env: "UAT",
      enableLogging: true,
      enableAuthorization: true,
    }
    // () =>
    //   sdk
    //     .accountBalance({
    //       params: { countryCode: "KE", accountId: "1100194977404" },
    //     })
    //     .then((r: any) => console.log(r.data))
    //     .catch((r: any) => console.log(r.response.data))
  );
  res.send({ newConfigs });
});
app.get("/getConfig", (req, res) => {
  const config = sdk.getConfig();
  res.send(config);
});
app.listen(port, () => {
  console.log(`Jenga SDK Test App listening on port: ${port}`);
});
