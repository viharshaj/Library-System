import * as dotenv from "dotenv";
dotenv.config();

const ENV = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI,
  DB_NAME: process.env.DB_NAME,
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:4000",
};
export default ENV;
