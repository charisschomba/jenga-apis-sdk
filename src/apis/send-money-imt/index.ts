import { Base } from "../../base";
import { generateSignature } from "src/utils/signature";

export class SendMoneyImtService extends Base {
  /**
   * IMT Within Equity Bank
   *
   * https://developer.jengaapi.io/reference/imt-within-equity-bank
   *
   * @param options
   *
   * Move Funds Within Equity Bank Across Kenya, Uganda, Tanzania, Rwanda & South Sudan.
   *
   * Kindly note in order to get a response you will need to test this in production.
   */
  imtSendMoneyWithinEquity<T>(options: {
    headers?: any;
    data: SendMoneyWithinEquityImtData;
  }): Promise<T> {
    const { source, transfer } = options.data;
    const signature = generateSignature(
      source.accountNumber +
        transfer.amount +
        transfer.currencyCode +
        transfer.reference,
      this.privateKeyPath
    );
    const config = {
      ...options,
      headers: { ...options.headers, signature },
      method: "POST",
    };
    const url = `/v3-apis/transaction-api/v3.0/remittance/internalBankTransfer/imt`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
  /**
     * IMT to Mobile Wallets
     *
     * https://developer.jengaapi.io/reference/imt-to-mobile-wallets
     *
     * This enables your application to send money to telco  wallets across Kenya, Uganda, Tanzania & Rwanda.

     *   Kindly note in order to get a response you will need to test this in production.
     *
     * @param options
     */
  imtSendMoneyToMobileWallet<T>(options: {
    headers?: any;
    data: SendMoneyToMobileWalletImtData;
  }): Promise<T> {
    const { source, transfer, destination } = options.data;
    let rawText = "";
    const airtelMpesa =
      transfer.amount +
      transfer.currencyCode +
      transfer.reference +
      source.accountNumber;
    const airtel =
      source.accountNumber +
      transfer.amount +
      transfer.currencyCode +
      transfer.reference;
    rawText =
      destination.walletName === "Mpesa" || destination.walletName === "Airtel"
        ? airtelMpesa
        : airtel;
    const signature = generateSignature(rawText, this.privateKeyPath);
    const config = {
      ...options,
      headers: { ...options.headers, signature },
      method: "POST",
    };
    const url = `/v3-apis/transaction-api/v3.0/remittance/sendmobile/imt`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
  /**
   * IMT Pesalink - To Bank Account
   *
   * https://developer.jengaapi.io/reference/imt-pesalink-to-bank-account
   *
   * This web service enables an application to send money to a PesaLink participating bank. It is restricted to Kenya.
   *
   * @param options
   */
  imtSendMoneyPesalinkToBankAccount<T>(options: {
    headers?: any;
    data: SendMoneyPesalinkToBankAccountImtData;
  }): Promise<T> {
    const { source, transfer, destination } = options.data;
    const signature = generateSignature(
      transfer.amount +
        transfer.currencyCode +
        transfer.reference +
        destination.name +
        source.accountNumber,
      this.privateKeyPath
    );
    const config = {
      ...options,
      headers: { ...options.headers, signature },
      method: "POST",
    };
    const url = `/v3-apis/transaction-api/v3.0/remittance/pesalinkacc/imt`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
  /**
   * IMT Pesalink - To Bank Mobile
   *
   * https://developer.jengaapi.io/reference/imt-pesalink-to-bank-mobile
   *
   * This web service enables an application to send money to mobile.
   *
   * @param options
   *
   */
  imtSendMoneyPesalinkToMobile<T>(options: {
    headers?: any;
    data: SendMoneyPesalinkToMobileImtData;
  }): Promise<T> {
    const { source, transfer, destination } = options.data;
    const signature = generateSignature(
      transfer.amount +
        transfer.currencyCode +
        transfer.reference +
        destination.name +
        source.accountNumber,
      this.privateKeyPath
    );
    const config = {
      ...options,
      headers: { ...options.headers, signature },
      method: "POST",
    };
    const url = `/v3-apis/transaction-api/v3.0/remittance/pesalinkMobile/imt`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
}

type SendMoneyWithinEquityImtData = {
  source: {
    countryCode: string;
    name: string;
    accountNumber: string;
  };
  sender: {
    name?: string;
    documentType?: string;
    documentNumber?: string;
    countryCode?: string;
    mobileNumber?: string;
    email: string;
    address: string;
  };
  destination: {
    type: string;
    countryCode: string;
    name: string;
    bankCode: string;
    accountNumber: string;
    mobileNumber: string;
    documentType: string;
    documentNumber: string;
    email?: string;
    address?: string;
  };
  transfer: {
    type: string;
    amount: string;
    currencyCode: string;
    reference: string;
    date: string;
    description: string;
  };
};
type SendMoneyToMobileWalletImtData = {
  source: {
    countryCode: string;
    name: string;
    accountNumber: string;
  };
  sender: {
    name?: string;
    documentType?: string;
    documentNumber?: string;
    countryCode?: string;
    mobileNumber?: string;
    email: string;
    address: string;
  };
  destination: {
    type: string;
    countryCode: string;
    name: string;
    mobileNumber: string;
    walletName: string;
    documentType: string;
    documentNumber: string;
  };
  transfer: {
    type: string;
    amount: string;
    currencyCode: string;
    reference: string;
    date: string;
    description: string;
    callbackUrl?: string;
  };
};
type SendMoneyPesalinkToBankAccountImtData = {
  source: {
    countryCode: string;
    name: string;
    accountNumber: string;
  };
  sender: {
    name: string;
    documentType: string;
    documentNumber: string;
    countryCode: string;
    mobileNumber: string;
    email?: string;
    address?: string;
  };
  destination: {
    type: string;
    countryCode: string;
    name: string;
    bankCode: string;
    accountNumber: string;
    mobileNumber: string;
    documentType: string;
    documentNumber: string;
    email?: string;
    address: string;
  };
  transfer: {
    type: string;
    amount: string;
    currencyCode: string;
    reference: string;
    date: string;
    description: string;
  };
};
type SendMoneyPesalinkToMobileImtData = {
  source: {
    countryCode: string;
    name: string;
    accountNumber: string;
  };
  sender: {
    name: string;
    documentType: string;
    documentNumber: string;
    countryCode: string;
    mobileNumber: string;
    email?: string;
    address?: string;
  };
  destination: {
    type: string;
    countryCode: string;
    name: string;
    bankCode: string;
    email?: string;
    address: string;
    accountNumber: string;
    mobileNumber: string;
    documentType: string;
    documentNumber: string;
    
  };
  transfer: {
    type: string;
    amount: string;
    currencyCode: string;
    reference: string;
    date: string;
    description: string;
  };
};
