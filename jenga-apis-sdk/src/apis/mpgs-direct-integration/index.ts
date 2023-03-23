import { Base } from "src/base";
import { generateSignature } from "src/utils/signature";

export class MpgsDirectIntegrationService extends Base {
    mpgsValidatePayment(options: {}): Promise<any> { };
    mpgsAuthenticatePayment(options: {}): Promise<any> { };
    mpgsAuthorizePayment(options: {}): Promise<any> { };
    mpgsQueryPayment(options: {}): Promise<any> { };
    mpgsRefundPayment(options: {}): Promise<any> { };
}