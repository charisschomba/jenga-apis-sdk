import { Base } from "../../base";
import { generateSignature } from "../../utils/signature";

export class AccountService extends Base {
  /**
   * Account Balance
   *
   * https://developer.jengaapi.io/reference/get-account-balance
   *
   * This web service enables an application or service retrieve the current and available balance of an account\
   *
   * @param options
   * */
  accountBalance<T>(options: Options): Promise<T> {
    const { countryCode, accountId } = options.params;
    const signature = generateSignature(
      countryCode + accountId,
      this.privateKey
    );
    delete options.params;
    const config = {
      ...options,
      headers: {
        ...options.headers,
        signature,
      },
    };
    const url = `/v3-apis/account-api/v3.0/accounts/balances/${countryCode}/${accountId}`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, {
      method: "GET",
      ...config,
    });
  }
  /**
   * Account MINI Statement
   *
   * https://developer.jengaapi.io/reference/get-account-statement-mini
   *
   * This service will return the last (10) ten transactions of a given account number.
   *
   * @param options
   *
   * */
  accountMiniStatement<T>(options: Options): Promise<T> {
    const { countryCode, accountNumber } = options.params;
    const signature = generateSignature(
      countryCode + accountNumber,
      this.privateKey
    );
    delete options.params;
    const config = {
      ...options,
      headers: { ...options.headers, signature },
      method: "GET",
    };
    const url = `/v3-apis/account-api/v3.0/accounts/miniStatement/${countryCode}/${accountNumber}`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
  /**
   * Account Full Statement
   *
   * https://developer.jengaapi.io/reference/get-account-statement-full
   *
   * This web service enables the Jengi to retrieve the full set of transactions on a particular account based on a specified date range.
   *
   * @param options
   *
   * */
  accountFullStatement<T>(options: Options): Promise<T> {
    const { countryCode, accountNumber, toDate } = options.data;
    const signature = generateSignature(
      accountNumber + countryCode + toDate,
      this.privateKey
    );
    const config = {
      ...options,
      headers: { ...options.headers, signature },
      method: "POST",
    };
    const url = `/v3-apis/account-api/v3.0/accounts/fullStatement`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
  /**
   * Opening and Closing Account Balance
   *
   * https://developer.jengaapi.io/reference/opening-and-closing-balance
   *
   * This web service enables an application or service retrieve the opening and closing balance of an account for a given date
   *
   * @param options
   * */
  openingClosingAccountBalance<T>(options: Options): Promise<T> {
    const { countryCode, accountId, date } = options.data;
    const signature = generateSignature(
      accountId + countryCode + date,
      this.privateKey
    );
    const config = {
      ...options,
      headers: { ...options.headers, signature },
      method: "POST",
    };
    const url = `/v3-apis/account-api/v3.0/accounts/accountBalance/query`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
  /**
   * Account Inquiry - Bank Accounts
   *
   * https://developer.jengaapi.io/reference/account-inquiry
   *
   * Get account details
   *
   * @param options
   */
  accountInquiry<T>(options: Options): Promise<T> {
    const { countryCode, accountNumber } = options.params;
    const signature = generateSignature(
      countryCode + accountNumber,
      this.privateKey
    );
    delete options.params;
    const config = {
      ...options,
      headers: { ...options.headers, signature },
      method: "GET",
    };
    const url = `/v3-apis/account-api/v3.0/accounts/search/${countryCode}/${accountNumber}`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
}
type Options = {
  headers?: any;
  data?: any;
  params?: any;
};
