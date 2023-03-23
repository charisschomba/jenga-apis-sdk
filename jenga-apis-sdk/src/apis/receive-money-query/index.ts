import { Base } from "../../base";

export class ReceiveMoneyQueryService extends Base {
  /**
   * Get All EazzyPay Merchants
   *
   * https://developer.jengaapi.io/reference/merchant-lookup
   *
   * This webservice returns all EazzyPay merchants.
   *
   * @param options
   */
  getAllEazzyPayMerchants(options: Options): Promise<any> {
    const config = {
      ...options,
      headers: { ...options.headers },
      method: "GET",
    };
    const url = `/v3-apis/transaction-api/v3.0/merchants`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
  /**
   * Query Transaction Details
   *
   * https://developer.jengaapi.io/reference/query-payment-details
   *
   * This webservice enables an application or service to query a transactions details and status
   *
   * @param options
   **/
  queryTransactionDetails(options: {
    headers?: any;
    params: { ref: string };
  }): Promise<any> {
    const { ref } = options.params;
    delete options.params;
    const config = {
      ...options,
      headers: { ...options.headers },
      method: "GET",
    };
    const url = `v3-apis/transaction-api/v3.0/payments/details/${ref}`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
  /**
   * Get All Billers
   *
   * https://developer.jengaapi.io/reference/biller-lookup
   *
   * This web service returns a paginated list of all billers.
   *
   * @param options
   */
  getAllBillers(options: Options): Promise<any> {
    const config = {
      ...options,
      headers: { ...options.headers },
      method: "GET",
    };
    const url = `/v3-apis/transaction-api/v3.0/billers`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
}
type Options = {
  headers?: any;
  params: { page: string; per_page: string; category?: string };
};
