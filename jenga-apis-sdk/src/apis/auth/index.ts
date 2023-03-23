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

  updateConfig(config: Config, callback: Function = null) {
    super.updateConfigs(config, callback);
    return {
      apiKey: this.apiKey,
      merchantCode: this.merchantCode,
      consumerSecret: this.consumerSecret,
      env: this.env,
      privateKeyPath: this.privateKeyPath,
      enableLogging: this.enableLogging,
      enableAuthorization: this.enableAuthorization,
    };
  }
  getConfig() {
    return {
      apiKey: this.apiKey,
      merchantCode: this.merchantCode,
      consumerSecret: this.consumerSecret,
      env: this.env,
      privateKeyPath: this.privateKeyPath,
      enableLogging: this.enableLogging,
      enableAuthorization: this.enableAuthorization,
    };
  }
}
type Config = {
  apiKey?: string;
  merchantCode?: string;
  consumerSecret?: string;
  env?: string;
  privateKeyPath?: string;
  enableLogging?: boolean;
  enableAuthorization?: boolean;
};
