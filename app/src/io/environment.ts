// urls
export const getEnv = () => process.env.NODE_ENV || 'development';
export const getEnvironment = () => process.env.ENVIRONMENT || 'development';
export const getIsProd = () => process.env.ENVIRONMENT === 'PRODUCTION';
export const getApiUrl = () => process.env.API_URL || '';
export const getSentryDns = () => process.env.SENTRY_DNS || '';
