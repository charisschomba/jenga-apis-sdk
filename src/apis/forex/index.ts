import { Base } from "../../base";

export class ForexService extends Base {
  /**
   * Get Forex Rates
   *
   * https://developer.jengaapi.io/reference/get-forex-rates
   *
   * The Foreign Exchange Rates API Provides Easy Access To The Equity Bank Daily Currency Conversion Rate For Major Currencies
   *
   * @param options
   */
  getForexRates<T>(options: Options): Promise<T> {
    const config = {
      ...options,
      headers: { ...options.headers },
      method: "POST",
    };
    const url = `/v3-apis/transaction-api/v3.0/foreignExchangeRates`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
}
type Options = {
  headers?: any;
  data: Forex;
  params?: any;
};

type Forex = {
  countryCode: string;
  currencyCode: string;
  amount: number;
  toCurrency: string;
  accountNumber: string;
};
