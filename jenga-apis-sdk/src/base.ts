import fetch from "isomorphic-unfetch";

export abstract class Base {
  private baseUrl = BaseUrl.DEV;
  protected apiKey: string;
  protected merchantCode: string;
  protected consumerSecret: string;
  protected env?: string = BaseUrl.DEV;
  protected privateKeyPath: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.merchantCode = config.merchantCode;
    this.consumerSecret = config.consumerSecret;
    this.env = config.env;
    this.privateKeyPath = config.privateKeyPath;
    if (this.env) {
      this.baseUrl = BaseUrl[config.env];
    }
  }

  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
    };
    const config = {
      ...options,
      headers,
    };

    return fetch(url, config).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
  }
}
type Config = {
  apiKey: string;
  merchantCode: string;
  consumerSecret: string;
  env?: string;
  privateKeyPath: string;
};
enum BaseUrl {
  DEV = "https://api-finserve-dev.azure-api.net",
  UAT = "https://uat.finserve.africa",
  PROD = "https://api.finserve.africa",
}
