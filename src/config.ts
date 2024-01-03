const isProduction = process.env.NODE_ENV === 'production';
export const API_URL = isProduction
  ? process.env.REACT_APP_API_URL_PROD || 'notSetUrlProd'
  : process.env.REACT_APP_API_URL_DEV || 'notSetUrlDev';
