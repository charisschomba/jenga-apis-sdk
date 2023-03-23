import { Base } from "src/base";
import { generateSignature } from "src/utils/signature";

export class SendMoneyImtService extends Base {
    sendMoneyWithinEquityImt(options: {}): Promise<any> { }
    sendMoneyToMobileWalletImt(options: {}): Promise<any> { }
    sendMoneyPesalinkToBankAccountImt(options: {}): Promise<any> { }
    sendMoneyPesalinkToMobileImt(options: {}): Promise<any> { }
}