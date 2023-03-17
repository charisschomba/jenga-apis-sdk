"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jenga_apis_sdk_1 = __importDefault(require("jenga-apis-sdk"));
const sdk = new jenga_apis_sdk_1.default({
    apiKey: "xBWk5Wsl9IFfciEQxkt2MeLHWLLeiDhdwtLW5Lqe9WI68MBO7C7DSwtNcMuMhIVIgV45E4K3krW3XN+quhg9pw==",
    merchantCode: "2179103820",
    consumerSecret: "RIl1IHN1xktI2wjAGE5Js5zm3s7052",
    privateKeyPath: "/home/chariss/dev/personal/javascript/JengaSdk/privateKey.pem",
    env: "DEV",
});
sdk
    .authenticate()
    .then((r) => console.log(r.data))
    .catch((r) => {
    console.log("auth");
    console.log(r.response.data);
});
