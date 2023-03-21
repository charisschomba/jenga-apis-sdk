import { Base } from "../../base";
import { generateSignature } from "../../utils/signature";

export class Account extends Base {
  /*This web service enables an application or service retrieve the current and available balance of an account*/
  accountBalance<T>(options: Options): Promise<T> {
    const { countryCode, accountId } = options.params;
    const signature = generateSignature(
      countryCode + accountId,
      this.privateKeyPath
    );
    delete options.params;
    const config = { ...options, headers: { ...options.headers, signature } };
    // this.authenticate(() =>
    //   this.request(
    //     `/v3-apis/account-api/v3.0/accounts/balances/${countryCode}/${accountId}`,
    //     {
    //       method: "GET",
    //       ...config,
    //     }
    //   )
    // );
    return this.request(
      `/v3-apis/account-api/v3.0/accounts/balances/${countryCode}/${accountId}`,
      {
        method: "GET",
        ...config,
      }
    );
  }
  /*This service will return the last (10) ten transactions of a given account number.*/
  accountMiniStatement(options: Options): Promise<any> {
    const { countryCode, accountNumber } = options.params;
    const signature = generateSignature(
      countryCode + accountNumber,
      this.privateKeyPath
    );
    delete options.params;
    const config = { ...options, headers: { ...options.headers, signature } };
    return this.request(
      `/v3-apis/account-api/v3.0/accounts/miniStatement/${countryCode}/${accountNumber}`,
      {
        method: "GET",
        ...config,
      }
    );
  }
  /*his web service enables the Jengi to retrieve the full set of transactions on a particular account based on a specified date range.*/
  accountFullStatement(options: Options): Promise<any> {
    const { countryCode, accountNumber, toDate } = options.data;
    const signature = generateSignature(
      accountNumber + countryCode + toDate,
      this.privateKeyPath
    );
    const config = { ...options, headers: { ...options.headers, signature } };
    return this.request(`/v3-apis/account-api/v3.0/accounts/fullStatement`, {
      method: "POST",
      ...config,
    });
  }
  /*This web service enables an application or service retrieve the opening and closing balance of an account for a given date*/
  openingClosingAccountBalance(options: Options): Promise<any> {
    const { countryCode, accountId, date } = options.data;
    const signature = generateSignature(
      accountId + countryCode + date,
      this.privateKeyPath
    );
    const config = { ...options, headers: { ...options.headers, signature } };
    return this.request(
      `/v3-apis/account-api/v3.0/accounts/accountBalance/query`,
      {
        method: "POST",
        ...config,
      }
    );
  }
  /*Get account details*/
  accountInquiry(options: Options): Promise<any> {
    const { countryCode, accountNumber } = options.params;
    const signature = generateSignature(
      countryCode + accountNumber,
      this.privateKeyPath
    );
    delete options.params;
    const config = { ...options, headers: { ...options.headers, signature } };
    return this.request(
      `/v3-apis/account-api/v3.0/accounts/search/${countryCode}/${accountNumber}`,
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
