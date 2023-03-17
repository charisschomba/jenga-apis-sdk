import { Base } from "../../base";
import { AuthResponse } from "../auth/types";
import { generateSignature } from "../../utils/signature";

export class Account extends Base {
  accountBalance(options: Options): Promise<any> {
    const { countryCode, accountId } = options.params;
    const signature = generateSignature(
      countryCode + accountId,
      this.privateKeyPath
    );
    const config = { ...options, headers: { ...options.headers, signature } };
    return this.request(
      "/account-api/v3-apis/account-api/v3.0/accounts/balances/",
      {
        method: "GET",
        ...config,
      }
    );
  }
}
type Options = {
  headers?: any;
  data?: any;
  params?: any;
};
