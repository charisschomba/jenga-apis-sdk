import { Base } from "../../base";
import { generateSignature } from "../../utils/signature";

export class ReceiveMoneyService extends Base {
  /**
   * Receive Payments - Bill Payments
   *
   * https://developer.jengaapi.io/reference/bill-payment
   *
   * This API Provides Partners the Capability To Initiate Utility Bill Payments For Goods And Services
   *
   * @param options
   */
  receivePaymentsBillPayments<T>(options: {
    headers?: any;
    data: BillPayment;
  }): Promise<T> {
    const { biller, partnerId, payer, bill } = options.data;
    const signature = generateSignature(
      biller.billerCode + bill.amount + payer.reference + partnerId,
      this.privateKey
    );
    const config = {
      ...options,
      headers: { ...options.headers, signature },
      method: "POST",
    };
    const url = `/v3-apis/transaction-api/v3.0/bills/pay`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
  /**
   * Receive Payments - Merchant Payments
   *
   * https://developer.jengaapi.io/reference/merchant-payment
   *
   * This API Provides Partners the Capability To Make Payments For Goods And Services
   *
   * @param options
   */
  receivePaymentsBMerchantPayments<T>(options: {
    headers?: any;
    data: MerchantPayment;
  }): Promise<T> {
    const { merchant, partner, payment } = options.data;
    const signature = generateSignature(
      merchant.till +
        partner.id +
        payment.amount +
        payment.currency +
        payment.ref,
      this.privateKey
    );
    const config = {
      ...options,
      headers: { ...options.headers, signature },
      method: "POST",
    };
    const url = `/v3-apis/transaction-api/v3.0/tills/pay`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
  /**
   * Bill Validation
   * https://developer.jengaapi.io/reference/bill-validation-1
   *
   * This web service enables your application perform a bill validation.
   * This is typically before a payment is made for example before paying a
   * utility bill you would like the payment application to validate it
   * actually exists and its details are correct
   *
   * @param options
   * */
  billValidations<T>(options: {
    headers?: any;
    data: BillValidation;
  }): Promise<T> {
    const config = {
      ...options,
      headers: { ...options.headers },
      method: "POST",
    };
    const url = `/v3-apis/transaction-api/v3.0/bills/validation`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
}

type BillPayment = {
  biller: { billerCode: string; countryCode: string };
  bill: { reference: string; amount: string; currency: string };
  payer: {
    name: string;
    account?: string;
    reference: string;
    mobileNumber: string;
  };
  partnerId: string;
  remarks: string;
};
type MerchantPayment = {
  merchant: { till: string };
  payment: { ref: string; amount: string; currency: string };
  partner: { id: string; ref: string };
};
type BillValidation = {
  billerCode: string;
  customerRefNumber: string;
  amount: string;
  amountCurrency: string;
};
