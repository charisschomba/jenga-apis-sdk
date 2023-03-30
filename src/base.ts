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
  protected privateKey: string;
  protected enableLogging?: boolean;
  protected enableAuthorization?: boolean;
  private token: Token = { accessToken: null, expiresIn: null };
  private verbose?: boolean;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.merchantCode = config.merchantCode;
    this.consumerSecret = config.consumerSecret;
    this.env = config.env;
    this.privateKey = config.privateKey;
    this.enableLogging = false;
    this.enableAuthorization = true;
    this.verbose = false;
    if ('enableAuthorization' in config) {
      this.enableAuthorization = config.enableAuthorization;
    }
    if ('enableLogging' in config) {
      this.enableLogging = config.enableLogging;
    }
    if ('env' in config) {
      this.baseUrl = BaseUrl[config.env];
    }
    if ('verbose' in config) {
      this.verbose = config.verbose;
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
      if (this.verbose) {
        console.info({
          url,
          body: config.data || {},
          params: config.params || {},
          headers: config.headers || {},
        });
      } else { console.info(url); }

    }
    return axios(url, config);
  }
  protected withAuth<T>(config, url): Promise<T> {
    if (this.token.expiresIn && !isTokenExpired(this.token.expiresIn)) {
      return this.request(url, {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${this.token.accessToken}`,
        },
      });
    }
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
      privateKey?: string;
      enableLogging?: boolean;
      enableAuthorization?: boolean;
      verbose?: boolean;
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
  /**
   * Updates the current configuration of the SDK
   */
  updateConfig(config: UpdateConfig, callback: Function = null) {
    this.updateConfigs(config, callback);
    return {
      apiKey: this.apiKey,
      merchantCode: this.merchantCode,
      consumerSecret: this.consumerSecret,
      env: this.env,
      verbose: this.verbose,
      privateKey: this.privateKey,
      enableLogging: this.enableLogging,
      enableAuthorization: this.enableAuthorization,
    };
  }
  /**
   * Gets the current configuration of the SDK
   */
  getConfig() {
    return {
      apiKey: this.apiKey,
      merchantCode: this.merchantCode,
      consumerSecret: this.consumerSecret,
      env: this.env,
      verbose: this.verbose,
      privateKey: this.privateKey,
      enableLogging: this.enableLogging,
      enableAuthorization: this.enableAuthorization,
    };
  }
}
type Config = {
  apiKey: string;
  merchantCode: string;
  consumerSecret: string;
  privateKey: string;
  env?: string;
  enableLogging?: boolean;
  enableAuthorization?: boolean;
  verbose?: boolean;
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
  privateKey?: string;
  enableLogging?: boolean;
  enableAuthorization?: boolean;
  verbose?: boolean;
};
export declare interface AuthResponse {
  accessToken: string;
  refreshToken?: string;
  expiresIn?: string;
  issuedAt?: string;
  tokenType?: string;
}
