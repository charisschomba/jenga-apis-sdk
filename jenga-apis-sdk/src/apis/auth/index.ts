import { Base } from "../../base";
import { AuthResponse } from "./types";

export class AuthService extends Base {
  /** Generates access token*/
  generateToken<AuthResponse>(): Promise<AuthResponse> {
    return this.request("/authentication/api/v3/authenticate/merchant", {
      method: "POST",
      headers: { "Api-Key": this.apiKey },
      data: {
        merchantCode: this.merchantCode,
        consumerSecret: this.consumerSecret,
      },
    });
  }
}
