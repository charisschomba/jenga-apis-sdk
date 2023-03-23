import { Base } from "src/base";
import { generateSignature } from "src/utils/signature";

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
    mpgsValidatePayment(options: {}): Promise<any> { };
    /**
     * MPGS Authenticate Payment
     * 
     * https://developer.jengaapi.io/reference/mpgs-authenticate-payment
     * 
     * This API will be used to authenticate payments on MPGS.cardNumber and cardSecurity are encrypted using AES encryption then the cypher is base64 encoded.
     * 
     * @param options
    */
    mpgsAuthenticatePayment(options: {}): Promise<any> { };
    /**
     * MPGS Authorize Payment
     * 
     * https://developer.jengaapi.io/reference/mpgs-authorize-payment
     * 
     * This API will be initiated by the merchant and will authorize payment on Mastercard.cardNumber and cardSecurity are encrypted using AES encryption then the cypher is base64 encoded.
     * 
     * @param options
    */
    mpgsAuthorizePayment(options: {}): Promise<any> { };
    /**
     * MPGS Query Payment
     * 
     * https://developer.jengaapi.io/reference/payment-payment
     * 
     * This API will query the status of a transaction.
     * 
     * @param options
    */
    mpgsQueryPayment(options: {}): Promise<any> { };
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
    mpgsRefundPayment(options: {}): Promise<any> { };
}