import { Base } from "../../base";
import { AuthResponse } from "./types";
import { generateSignature } from "../../utils/signature";

export class Auth extends Base {
  authenticate(): Promise<AuthResponse> {
    const signature = generateSignature("test", this.privateKeyPath);
    console.log(signature);
    return this.request("/authentication/api/v3/authenticate/merchant", {
      method: "POST",
      headers: { "Api-Key": this.apiKey },
      body: JSON.stringify({
        merchantCode: this.merchantCode,
        consumerSecret: this.consumerSecret,
      }),
    });
  }
}
