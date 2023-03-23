import { Base } from "./base";
import { applyMixins } from "./utils/applyMixing";
import { AuthService } from "./apis/auth";
import { AccountService } from "./apis/account-service";
import { AirtimeService } from "./apis/airtime";
import { ForexService } from "./apis/forex";
import { KycService } from "./apis/kyc";
import { ReceiveMoneyQueryService } from "./apis/receive-money-query";
import { ReceiveMoneyService } from "./apis/receive-money";
import { SendMoneyService } from "./apis/send-money";
import { SendMoneyImtService } from "./apis/send-money-imt";
import { MpgsDirectIntegrationService } from "./apis/mpgs-direct-integration";

class JengaApiSdk extends Base {}
interface JengaApiSdk extends AuthService {}
interface JengaApiSdk extends AccountService {}
interface JengaApiSdk extends AirtimeService {}
interface JengaApiSdk extends ForexService {}
interface JengaApiSdk extends KycService {}
interface JengaApiSdk extends ReceiveMoneyQueryService {}
interface JengaApiSdk extends ReceiveMoneyService {}
interface JengaApiSdk extends SendMoneyService {}
interface JengaApiSdk extends SendMoneyImtService {}
interface JengaApiSdk extends MpgsDirectIntegrationService {}

applyMixins(JengaApiSdk, [
  AuthService,
  AccountService,
  AirtimeService,
  ForexService,
  KycService,
  ReceiveMoneyQueryService,
  ReceiveMoneyService,
  SendMoneyService,
  SendMoneyImtService,
  MpgsDirectIntegrationService,
]);
export {
  AuthService,
  AccountService,
  AirtimeService,
  ForexService,
  KycService,
  ReceiveMoneyQueryService,
  ReceiveMoneyService,
  SendMoneyService,
  SendMoneyImtService,
  MpgsDirectIntegrationService,
  JengaApiSdk,
};
