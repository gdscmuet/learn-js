import express from "express"; // import express

import { DBConnect } from "./config/database/connection"; // import database connection function

import { MONGODB_URI, PORT } from "./utils/secrets"; // import secrets
import { defaultErrorHandler, cors } from "./utils/apiHelpers"; // import helper functions

import { userRouter } from "./routers/user/user"; // import router

export const app = express(); // create app/server, store it in app - export
export default app; // default export

DBConnect(MONGODB_URI); // connect database ( call DBConnect and pass mongo uri)

app.use(cors); // enable cors

app.set("port", PORT || 3000); // set server port
app.use(express.json()); // parse json

app.use("/api/v1/user", userRouter); // initialize router here

app.use(defaultErrorHandler); // handle errors at one place
