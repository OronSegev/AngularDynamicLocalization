import { Locale } from "src/app/core/services/Locale.interface";

export interface IEnvironment {
  name: string;
  version: string;
  production: boolean;
  apiUrl: string;
  locale: Locale;
}
