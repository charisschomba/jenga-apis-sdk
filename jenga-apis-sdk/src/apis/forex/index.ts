import { Base } from "../../base";
import { generateSignature } from "../../utils/signature";

export class ForexService extends Base {
  /**The Foreign Exchange Rates API Provides Easy Access To The Equity Bank Daily Currency Conversion Rate For Major Currencies*/
  getForexRates(options: Options): Promise<any> {
    const config = {
      ...options,
      headers: { ...options.headers },
      method: "POST",
    };
    const url = `/v3-apis/transaction-api/v3.0/foreignexchangerates`;
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
};
