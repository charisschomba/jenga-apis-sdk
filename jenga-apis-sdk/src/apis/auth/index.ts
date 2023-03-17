import { Base } from "../../base";
import { AuthResponse } from "./types";

export class Auth extends Base {
  generateToken(): Promise<AuthResponse> {
    return this.request("/authentication/api/v3/authenticate/merchant", {
      method: "POST",
      headers: { "Api-Key": this.apiKey },
      // body: JSON.stringify({
      //   merchantCode: this.merchantCode,
      //   consumerSecret: this.consumerSecret,
      // }),
      data: {
        merchantCode: this.merchantCode,
        consumerSecret: this.consumerSecret,
      },
    });
  }
}
