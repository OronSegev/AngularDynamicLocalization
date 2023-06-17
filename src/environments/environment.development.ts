import { IEnvironment } from "./environment.interface";

export const environment: IEnvironment = {
  name: 'il-int',
  version: '1.0.0',
  production: false,
  apiUrl: 'https://myendpoint.com',
  locale: {
    localeId: 'en',
    language: 'en',
    currency: {
      code: 'USD',
      symbol: '$'
    },
    direction: 'ltr'
  }
};
