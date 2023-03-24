import axios from "axios";
import { isTokenExpired } from "./utils/checkTokenValidity";
import { updateSdkInstance } from "./utils/updateConfigs";

const fetch = axios;
export abstract class Base {
  private baseUrl = BaseUrl.DEV;
  protected apiKey: string;
  protected merchantCode: string;
  protected consumerSecret: string;
  protected env?: string = BaseUrl.UAT;
  protected privateKeyPath: string;
  protected enableLogging?: boolean = false;
  protected enableAuthorization?: boolean = true;
  private token: Token = { accessToken: null, expiresIn: null };

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.merchantCode = config.merchantCode;
    this.consumerSecret = config.consumerSecret;
    this.env = config.env;
    this.privateKeyPath = config.privateKeyPath;
    this.enableLogging = config.enableLogging;
    this.enableAuthorization = config.enableAuthorization;
    if (this.enableAuthorization) {
      this.enableAuthorization = config.enableAuthorization;
    }
    if (this.env) {
      this.baseUrl = BaseUrl[config.env];
    }
  }

  protected request<T>(
    endpoint: string,
    options?: RequestInit | Options
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",

      ...options.headers,
    };
    delete options.headers;
    const config: any = {
      ...options,
      headers,
    };
    if (this.enableLogging) {
      // console.info({
      //   url,
      //   body: config.data || {},
      //   params: config.params || {},
      // });
      console.info(url);
    }
    return axios(url, config);
  }
  protected withAuth<T>(config, url): Promise<T> {
    if (this.token.expiresIn && !isTokenExpired(this.token.expiresIn)) {
      // if (this.enableLogging) {
      //   console.info("Setting Required Headers");
      // }
      return this.request(url, {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${this.token.accessToken}`,
        },
      });
    }
    // if (this.enableLogging) {
    //   console.info("Refreshing Access Token");
    // }
    return fetch(
      `${this.baseUrl}/authentication/api/v3/authenticate/merchant`,
      {
        method: "POST",
        headers: { "Api-Key": this.apiKey },
        data: {
          merchantCode: this.merchantCode,
          consumerSecret: this.consumerSecret,
        },
      }
    ).then((res: any) => {
      this.token = res.data;
      return this.request(url, {
        method: "GET",
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${res.data.accessToken}`,
        },
      });
    });
  }

  protected updateConfigs<T>(
    config: {
      apiKey?: string;
      merchantCode?: string;
      consumerSecret?: string;
      env?: string;
      privateKeyPath?: string;
      enableLogging?: boolean;
      enableAuthorization?: boolean;
    },
    callback?: Function | null
  ): Promise<T> | void {
    updateSdkInstance(this, config, callback);
  }
  generateToken<AuthResponse>(): Promise<AuthResponse> {
    return this.request("/authentication/api/v3/authenticate/merchant", {
      method: "POST",
      headers: { "Api-Key": this.apiKey },
      data: {
        merchantCode: this.merchantCode,
        consumerSecret: this.consumerSecret,
      },
    });
  }

  updateConfig(config: UpdateConfig, callback: Function = null) {
    this.updateConfigs(config, callback);
    return {
      apiKey: this.apiKey,
      merchantCode: this.merchantCode,
      consumerSecret: this.consumerSecret,
      env: this.env,
      privateKeyPath: this.privateKeyPath,
      enableLogging: this.enableLogging,
      enableAuthorization: this.enableAuthorization,
    };
  }
  getConfig() {
    return {
      apiKey: this.apiKey,
      merchantCode: this.merchantCode,
      consumerSecret: this.consumerSecret,
      env: this.env,
      privateKeyPath: this.privateKeyPath,
      enableLogging: this.enableLogging,
      enableAuthorization: this.enableAuthorization,
    };
  }
}
type Config = {
  apiKey: string;
  merchantCode: string;
  consumerSecret: string;
  env?: string;
  privateKeyPath: string;
  enableLogging?: boolean;
  enableAuthorization?: boolean;
};
enum BaseUrl {
  DEV = "https://api-finserve-dev.azure-api.net",
  UAT = "https://uat.finserve.africa",
  PROD = "https://api.finserve.africa",
}
type Options = {
  headers?: any;
  data?: any;
  params?: any;
};
type Token = {
  accessToken: string | null;
  expiresIn: string | null;
  refreshToken?: string;
  tokenType?: string;
  issuedAt?: string;
};
type UpdateConfig = {
  apiKey?: string;
  merchantCode?: string;
  consumerSecret?: string;
  env?: string;
  privateKeyPath?: string;
  enableLogging?: boolean;
  enableAuthorization?: boolean;
};
export declare interface AuthResponse {
  accessToken: string;
  refreshToken?: string;
  expiresIn?: string;
  issuedAt?: string;
  tokenType?: string;
}
