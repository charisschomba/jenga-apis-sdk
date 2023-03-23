import { Base } from "src/base";
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
    */
    sendMoneyWithinEquityImt(options: {}): Promise<any> { }
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
    sendMoneyToMobileWalletImt(options: {}): Promise<any> { }
    /**
     * IMT Pesalink - To Bank Account
     * 
     * https://developer.jengaapi.io/reference/imt-pesalink-to-bank-account
     * 
     * This web service enables an application to send money to a PesaLink participating bank. It is restricted to Kenya.
     * 
     * @param options
    */
    sendMoneyPesalinkToBankAccountImt(options: {}): Promise<any> { }
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
    sendMoneyPesalinkToMobileImt(options: {}): Promise<any> { }
}