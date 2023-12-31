import axios from 'axios';

const BASE_URL_BACK = ' http://localhost:4200';
const BASE_URL = process.env.REACT_APP_BASE_URL || BASE_URL_BACK;

export class HttpService {
  baseUrl: string;

  fetchingService: any;

  apiVersion: string;

  constructor(baseUrl = BASE_URL, fetchingService = axios, apiVersion = 'api') {
    this.baseUrl = baseUrl;
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig() {
    return {
      Authorization: localStorage.getItem('token')
    };
  }

  private extractUrlAndDataFromConfig({
    data,
    url,
    ...configWithoutDataAndUrl
  }: {
    data: any;
    url: string;
  }) {
    return configWithoutDataAndUrl;
  }

  get(config: any, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.get(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  post(config: any, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    // console.log(config.data);
    return this.fetchingService.post(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  put(config: any, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.put(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  delete(config: any, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.delete(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }
}
