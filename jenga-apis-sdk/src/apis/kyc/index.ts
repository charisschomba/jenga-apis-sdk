import { Base } from "../../base";
import { generateSignature } from "../../utils/signature";

export class KycService extends Base {
  /**
   * ID Search & Verification
   *
   * https://developer.jengaapi.io/reference/identity-verification
   *
   * This web service enables your application to query the various registrar of persons in the various countries in East Africa. Currently available for Kenya and Rwanda only.
   * @param options
   */
  validateIdentity(options: Options): Promise<any> {
    const { countryCode, documentNumber } = options.data.identity;
    const signature = generateSignature(
      countryCode + countryCode,
      this.privateKeyPath
    );
    const config = {
      ...options,
      headers: { ...options.headers, signature },
      method: "POST",
    };
    const url = `/v3-apis/v3.0/validate/identity`;
    if (this.enableAuthorization) {
      return this.withAuth(config, url);
    }
    return this.request(url, config);
  }
}
type Options = {
  headers?: any;
  data: { identity: Kyc };
  params?: any;
};

type Kyc = {
  documentType: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  documentNumber: string;
  countryCode: string;
};
