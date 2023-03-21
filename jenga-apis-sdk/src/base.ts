import axios from "axios";
import { isTokenExpired } from "./utils/checkTokenValidity";

const fetch = axios;
export abstract class Base {
  private baseUrl = BaseUrl.DEV;
  protected apiKey: string;
  protected merchantCode: string;
  protected consumerSecret: string;
  protected env?: string = BaseUrl.UAT;
  protected privateKeyPath: string;
  private enableLogging?: boolean = false;
  protected enableAuthorization = false;
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
      console.info({ url, headers: config.headers, body: config.data });
    }
    return axios(url, config);
  }
  protected withAuth<T>(config, url): Promise<T> {
    if (this.token.expiresIn && !isTokenExpired(this.token.expiresIn)) {
      if (this.enableLogging) {
        console.info("Setting Required Headers");
      }
      return this.request(url, {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${this.token.accessToken}`,
        },
      });
    }
    if (this.enableLogging) {
      console.info("Refreshing Access Token");
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
