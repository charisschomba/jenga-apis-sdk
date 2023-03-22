import { Base } from "../../base";

export class ReceiveMoneyQueryService extends Base {
  /**
   * This webservice returns all EazzyPay merchants .
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
  /*
   * This webservice enables an application or service to query a transactions details and status
   * */
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
  /*
   * This web service returns a paginated list of all billers
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
