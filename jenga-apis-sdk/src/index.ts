import { Base } from "./base";
import { applyMixins } from "./utils/applyMixing";
import { AuthService } from "./apis/auth";
import { AccountService } from "./apis/account-service";

class JengaApiSdk extends Base {}
interface JengaApiSdk extends AuthService {}
interface JengaApiSdk extends AccountService {}

applyMixins(JengaApiSdk, [AuthService, AccountService]);
export { AuthService, AccountService, JengaApiSdk };
