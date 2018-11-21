export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export const APP_CONFIG = {
  API_URL: process.env.API_URL,
  env: process.env.NODE_ENV,
};

export const isProduction: boolean = APP_CONFIG.env === Environment.PRODUCTION;
export const isDevelopment: boolean = APP_CONFIG.env === Environment.DEVELOPMENT;
