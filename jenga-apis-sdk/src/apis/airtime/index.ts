import { Base } from "../../base";
import { generateSignature } from "../../utils/signature";

export class AirtimeService extends Base {
  /**
   * Purchase Airtime
   *
   * https://developer.jengaapi.io/reference/purchase-airtime
   *
   * This gives an application the ability to purchase airtime from any telco in East and Central Africa.
   *
   * @param options
   */
  airtimePurchase<T>(options: Options): Promise<T> {
    const { telco, amount, reference } = options.data.airtime;
    const signature = generateSignature(
      telco + amount + reference,
      this.privateKeyPath
    );
    const config = {
      ...options,
      headers: { ...options.headers, signature },
      method: "POST",
    };
    const url = `/v3-apis/airtime`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
}

type Options = {
  headers?: any;
  data: { customer: Customer; airtime: Airtime };
  params?: any;
};

type Customer = {
  countryCode: string;
  mobileNumber: string;
};
type Airtime = {
  amount: string;
  reference: string;
  telco: string;
};
