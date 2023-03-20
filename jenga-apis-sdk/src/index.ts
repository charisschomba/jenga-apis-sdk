import { Base } from "./base";
import { applyMixins } from "./utils/applyMixing";
import { Auth } from "./apis/auth";
import { Account } from "./apis/account-service";
import { Airtime } from "./apis/airtime";

class JengaApisSdk extends Base {}
interface JengaApisSdk extends Auth {}
interface JengaApisSdk extends Account {}
interface JengaApisSdk extends Airtime {}

applyMixins(JengaApisSdk, [Auth, Airtime, Account]);
// export  const Airtime
export default JengaApisSdk;
