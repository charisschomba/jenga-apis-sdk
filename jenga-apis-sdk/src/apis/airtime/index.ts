import { Base } from "../../base";
import { AuthResponse } from "../auth/types";

export class Airtime extends Base {
  airtimePurchase(): Promise<AuthResponse> {
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
