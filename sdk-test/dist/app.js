"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jenga_apis_sdk_1 = __importDefault(require("jenga-apis-sdk"));
const sdk = new jenga_apis_sdk_1.default({
    apiKey: "eN8OFJ8+lQNNZQPcpJ/ma87ct7OCJVPSACt0gBY25KMJDDr1CsrjQoZlWk9w/RPEOGoYsXmKWyjLigFofYTCwA==",
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
