import { Base } from "src/base";
import { generateSignature } from "src/utils/signature";

export class SendMoneyService extends Base {
    /*
     * https://developer.jengaapi.io/reference/within-equity-bank
     * 
     * Move Funds Within Equity Bank Across Kenya, Uganda, Tanzania, Rwanda & South Sudan.
     */
    sendMoneyWithinEquity(options: {
        headers: any;
        data: SendMoneyWithinEquityData
    }): Promise<any> {
        const { source, transfer } = options.data;
        const signature = generateSignature(
            source.accountNumber + transfer.amount + transfer.currencyCode + transfer.reference,
            this.privateKeyPath
        );
        const config = {
            ...options,
            headers: { ...options.headers, signature },
            method: "POST",
        };
        const url = `/v3-apis/transaction-api/v3.0/remittance/internalBankTransfer
        `;
        if (this.enableAuthorization) {
            return this.withAuth(config, url);
        }
        return this.request(url, config);
    }
    /**
     * https://developer.jengaapi.io/reference/remittance
     * @param options 
        This enables your application to send money to telco :iphone: wallets across Kenya, Uganda, Tanzania & Rwanda.
        kindly note in order to get a response you will need to test this in production.
    */
    sendMoneyToMobileWallet(options: {
        headers: any;
        data: sendMoneyToMobileWalletData
    }): Promise<any> {
        const { source, transfer, destination } = options.data;
        let rawText = "";
        const airtelMpesa = transfer.amount + transfer.currencyCode + transfer.reference + source.accountNumber;
        const equitel = source.accountNumber + transfer.amount + transfer.currencyCode + transfer.reference;
        (destination.walletName === "Mpesa" || destination.walletName === "Airtel") ? rawText = airtelMpesa : rawText = equitel;
        const signature = generateSignature(
            rawText,
            this.privateKeyPath
        );
        const config = {
            ...options,
            headers: { ...options.headers, signature },
            method: "POST",
        };
        const url = `/v3-apis/transaction-api/v3.0/remittance/sendmobile`;
        if (this.enableAuthorization) {
            return this.withAuth(config, url);
        }
        return this.request(url, config);

    }
    /**
     * https://developer.jengaapi.io/reference/rtgs
     * 
     * The Real Time Gross Settlement (RTGS) web-service enables an application to send money intra-country to other bank accounts.
     * @param options 
     * @returns 
     */
    sendMoneyRtgs(options: {
        headers: any;
        data: sendMoneyToRtgsData
    }): Promise<any> {
        const { source, transfer, destination } = options.data;
        const signature = generateSignature(
            transfer.reference + transfer.date + source.accountNumber + destination.accountNumber + transfer.amount,
            this.privateKeyPath
        );
        const config = {
            ...options,
            headers: { ...options.headers, signature },
            method: "POST",
        };
        const url = `/v3-apis/transaction-api/v3.0/remittance/swift`;
        if (this.enableAuthorization) {
            return this.withAuth(config, url);
        }
        return this.request(url, config);
    }
    /**
     * https://developer.jengaapi.io/reference/swift
     * 
     * The swift web-service enables your application to send cross-border remittances 
     * 
     * @param options 
   
     */
    sendMoneySwift(options: {
        headers: any;
        data: sendMoneyToSwiftData
    }): Promise<any> {
        const { source, transfer, destination } = options.data;
        const signature = generateSignature(
            transfer.reference + transfer.date + source.accountNumber + destination.accountNumber + transfer.amount,
            this.privateKeyPath
        );
        const config = {
            ...options,
            headers: { ...options.headers, signature },
            method: "POST",
        };
        const url = `/v3-apis/transaction-api/v3.0/remittance/swift`;
        if (this.enableAuthorization) {
            return this.withAuth(config, url);
        }
        return this.request(url, config);
    }
    /**
     * https://developer.jengaapi.io/reference/pesalink2bank
     * 
     * @param options 
     * 
     * This web service enables an application to send money to a PesaLink participating bank. It is restricted to Kenya.
    */
    sendMoneyPesaLinkToBank(options: {
        headers: any;
        data: sendMoneyPesaLinkToBankData
    }): Promise<any> {
        const { source, transfer, destination } = options.data;
        const signature = generateSignature(
            transfer.amount + transfer.currencyCode + transfer.reference + destination.name + source.accountNumber,
            this.privateKeyPath
        );
        const config = {
            ...options,
            headers: { ...options.headers, signature },
            method: "POST",
        };
        const url = `/v3-apis/transaction-api/v3.0/remittance/pesalinkacc`;
        if (this.enableAuthorization) {
            return this.withAuth(config, url);
        }
        return this.request(url, config);
    }
    /**
     * 
     * 
     * This web service enables an application to send money to mobile.
     * 
     * @param options
     * 
    */
    sendMoneyPesaLinkToMobileNumber(options: {
        headers: any;
        data: sendMoneyPesaLinkToMobileData
    }): Promise<any> {
        const { source, transfer, destination } = options.data;
        const signature = generateSignature(
            transfer.amount + transfer.currencyCode + transfer.reference + destination.name + source.accountNumber,
            this.privateKeyPath
        );
        const config = {
            ...options,
            headers: { ...options.headers, signature },
            method: "POST",
        };
        const url = `/v3-apis/transaction-api/v3.0/remittance/pesalinkMobile`;
        if (this.enableAuthorization) {
            return this.withAuth(config, url);
        }
        return this.request(url, config);
    }
}

type SendMoneyWithinEquityData = {
    source: {
        countryCode: string,
        name: string,
        accountNumber: string
    },
    destination: {
        type: string
        countryCode: string
        name: string
        accountNumber: string
    },
    transfer: {
        type: string,
        amount: string,
        currencyCode: string,
        reference: string
        date: string,
        description: string
    }
};
type sendMoneyToMobileWalletData = {
    source: {
        name: string,
        accountNumber: string,
        countryCode: string,
    },
    destination: {
        type: string
        countryCode: string,
        name: string,
        mobileNumber: string,
        walletName: string
    },
    transfer: {
        type: string
        amount: string,
        reference: string,
        currencyCode: string,
        date: string,
        description: string
    }
}
type sendMoneyToRtgsData = {
    source: {
        name: string,
        accountNumber: string,
        countryCode: string,
    },
    destination: {
        type: string
        countryCode: string,
        name: string,
        bankCode: string,
        accountNumber: string
    },
    transfer: {
        type: string
        amount: string,
        reference: string,
        currencyCode: string,
        date: string,
        description: string
    }
}
type sendMoneyToSwiftData = {
    source: {
        name: string,
        accountNumber: string,
        countryCode: string,
    },
    destination: {
        type: string
        countryCode: string,
        name: string,
        bankBic: string,
        accountNumber: string
        addressline1: string
    },
    transfer: {
        type: string
        amount: string,
        reference: string,
        currencyCode: string,
        date: string,
        description: string,
        chargeOption: string
    }
}
type sendMoneyPesaLinkToBankData = {
    source: {
        name: string,
        accountNumber: string,
        countryCode: string,
    },
    destination: {
        type: string
        countryCode: string,
        name: string,
        bankCode: string,
        accountNumber: string
    },
    transfer: {
        type: string
        amount: string,
        reference: string,
        currencyCode: string,
        date: string,
        description: string,
    }
}
type sendMoneyPesaLinkToMobileData = {
    source: {
        name: string,
        accountNumber: string,
        countryCode: string,
    },
    destination: {
        type: string
        countryCode: string,
        name: string,
        bankCode: string,
        mobileNumber: string
    },
    transfer: {
        type: string
        amount: string,
        reference: string,
        currencyCode: string,
        date: string,
        description: string,
    }
}