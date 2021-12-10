import { config } from "dotenv";
config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  /**
   * Port the app should run on
   */
  port: parseInt(process.env.PORT) || 5050,

  /**
   * Base urls
   */
  baseUrl: process.env.APP_BASE_URL,
  clientUrl: process.env.CLIENT_URL,

  /**
   * Database the app should connect to
   */
  databaseURL: process.env.MONGODB_URI,

  /**
   * The secret sauce to validate JWT
   */
  accessToken: process.env.ACCESS_TOKEN_SECRET,
  refreshToken: process.env.REFRESH_TOKEN_SECRET,
  activationToken: process.env.ACTIVATION_TOKEN_SECRET,

  /**
   * Used by Winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },

  /**
   * API configs
   */
  api: {
    prefix: "/api",
  },
  /**
   * google
   */
  googleClientId: process.env.AUTH_SERVICE_CLIENT_ID,
  mailingClientId: process.env.MAILING_SERVICE_CLIENT_ID,
  mailingSecret: process.env.MAILING_SERVICE_CLIENT_SECRET,
  googleSecret: process.env.GOOGLE_SECRET,
};
