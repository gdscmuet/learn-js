import dotenv from "dotenv";
dotenv.config();

const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production";
export const MONGODB_URI = prod
  ? process.env["MONGODB_URI"]
  : process.env["MONGODB_LOCAL_URI"];

export const PORT = process.env.PORT;

if (!MONGODB_URI) {
  if (prod) {
    throw new Error(
      "No mongo connection string. Set MONGODB_URI environment variable."
    );
  } else {
    throw new Error(
      "No mongo connection string. Set MONGODB_URI_LOCAL environment variable."
    );
  }
}
