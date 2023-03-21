import axios from "axios";
import { AuthResponse } from "./apis/auth/types";
let _this;
const fetch = axios;
export abstract class Base {
  private baseUrl = BaseUrl.DEV;
  protected apiKey: string;
  protected merchantCode: string;
  protected consumerSecret: string;
  protected env?: string = BaseUrl.UAT;
  protected privateKeyPath: string;
  private enableLogging?: boolean = false;
  private token: string = null;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.merchantCode = config.merchantCode;
    this.consumerSecret = config.consumerSecret;
    this.env = config.env;
    this.privateKeyPath = config.privateKeyPath;
    this.enableLogging = config.enableLogging;
    if (this.env) {
      this.baseUrl = BaseUrl[config.env];
    }
    _this = this;
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
      console.log(url);
      // console.log({ url, config });
    }
    return axios(url, config);
  }
  protected authenticate(cb) {
    console.log(1234);
    fetch(`${this.baseUrl}/authentication/api/v3/authenticate/merchant`, {
      method: "POST",
      headers: { "Api-Key": this.apiKey },
      data: {
        merchantCode: this.merchantCode,
        consumerSecret: this.consumerSecret,
      },
    })
      .then((res: any) => {
        this.token = res.data.accessToken;
        console.log({ token: this.token });
        // config.headers.Authorization = `Bearer ${this.token}`;
        cb();
      })
      .catch((error) => {
        return Promise.reject(error);
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
