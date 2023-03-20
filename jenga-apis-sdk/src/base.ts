import axios from "axios";

export abstract class Base {
  private baseUrl = BaseUrl.DEV;
  protected apiKey: string;
  protected merchantCode: string;
  protected consumerSecret: string;
  protected env?: string = BaseUrl.UAT;
  protected privateKeyPath: string;
  private enableLogging?: boolean = false;

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
