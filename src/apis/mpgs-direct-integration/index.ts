import { Base } from "src/base";

export class MpgsDirectIntegrationService extends Base {
  /**
     * MPGS Validate Payment
     *
     * https://developer.jengaapi.io/reference/mpgs-validate-payment
     *
     * This API will validate payment before card authorization. The API will do the following

     * Check if the merchant is subscribed to the Card APIs service

     * Check if they are subscribed to the MID they are using.

     * Fetch the relevant charges

     * cardNumber and cardSecurity are encrypted using AES encryption then the cypher is base64 encoded.

     * @param options
     */
  mpgsValidatePayment<T>(options: {
    headers?: any;
    data: mpgsValidatePaymentData;
  }): Promise<T> {
    const config = {
      ...options,
      headers: { ...options.headers },
      method: "POST",
    };
    const url = `/mpgs-direct-integration/api/v3.1/validatePayment`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
  /**
   * MPGS Authenticate Payment
   *
   * https://developer.jengaapi.io/reference/mpgs-authenticate-payment
   *
   * This API will be used to authenticate payments on MPGS.cardNumber and cardSecurity are encrypted using AES encryption then the cypher is base64 encoded.
   *
   * @param options
   */
  mpgsAuthenticatePayment<T>(options: {
    headers?: any;
    data: mpgsAuthenticatePaymentData;
  }): Promise<T> {
    const config = {
      ...options,
      headers: { ...options.headers },
      method: "POST",
    };
    const url = `/mpgs-direct-integration/api/v3.1/authenticatePayment`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
  /**
   * MPGS Authorize Payment
   *
   * https://developer.jengaapi.io/reference/mpgs-authorize-payment
   *
   * This API will be initiated by the merchant and will authorize payment on Mastercard.cardNumber and cardSecurity are encrypted using AES encryption then the cypher is base64 encoded.
   *
   * @param options
   */
  mpgsAuthorizePayment<T>(options: {
    headers?: any;
    data: mpgsAuthorizePaymentData;
  }): Promise<T> {
    const config = {
      ...options,
      headers: { ...options.headers },
      method: "POST",
    };
    const url = `/mpgs-direct-integration/api/v3.1/authorizePayment`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
  /**
   * MPGS Query Payment
   *
   * https://developer.jengaapi.io/reference/payment-payment
   *
   * This API will query the status of a transaction.
   *
   * @param options
   */
  mpgsQueryPayment<T>(options: {
    headers?: any;
    data: mpgsQueryPaymentData;
  }): Promise<T> {
    const config = {
      ...options,
      headers: { ...options.headers },
      method: "POST",
    };
    const url = `/mpgs-direct-integration/api/v3.1/transactionStatus`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
  /**
   * MPGS Refund Payment
   *
   * https://developer.jengaapi.io/reference/mpgs-refund-payment
   *
   * This API will refund a payment.
   *
   * @param options
   *
   */
  mpgsRefundPayment<T>(options: {
    headers?: any;
    data: mpgsRefundPaymentData;
  }): Promise<T> {
    const config = {
      ...options,
      headers: { ...options.headers },
      method: "POST",
    };
    const url = `/mpgs-direct-integration/api/v3.1/refundPayment`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
}

type mpgsValidatePaymentData = {
  transactionReference: string;
  merchantMID: string;
  responseUrl?: string;
  order: {
    reference: string;
    amount: number;
    currency: string;
  };
  customer: {
    cardFirstName: string;
    cardLastName: string;
  };
  sourceOfFunds: {
    cardNumber: string;
    cardSecurity: string;
    cardExpiryYear: string;
    cardExpiryMonth: string;
  };
};
type mpgsAuthenticatePaymentData = {
  transactionReference: string;
  sourceOfFunds: {
    cardNumber: string;
    cardSecurity: string;
    cardExpiryYear: string;
    cardExpiryMonth?: string;
  };
};
type mpgsAuthorizePaymentData = {
  transactionReference: string;
  customer: {
    email: string;
    firstName?: string;
    cardFirstName: string;
    cardLastName: string;
    lastName?: string;
    mobilePhone?: string;
  };
  order: {
    reference: string;
    amount: number;
    currency: string;
    description?: string;
    subMerchant: {
      address: {
        city?: string;
        company?: string;
        postalZip?: string;
        stateProvince?: string;
        street?: string;
      };
      email?: string;
      tradingName?: string;
      phone?: string;
      identifier?: string;
    };
  };
  sourceOfFunds: {
    cardNumber: string;
    cardSecurity: string;
    cardExpiryYear: string;
    cardExpiryMonth: string;
  };
  transaction: {
    source: string;
    sourceOwner: string;
  };
};
type mpgsQueryPaymentData = {
  transactionReference: string;
  orderReference: string;
};
type mpgsRefundPaymentData = {
  transactionReference: string;
  amount: number;
  merchantNote: string;
};
