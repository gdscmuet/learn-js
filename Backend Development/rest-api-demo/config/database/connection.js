import mongoose from "mongoose";
import bluebird from "bluebird";

export const DBConnect = async (mongoUrl) => {
  mongoose.Promise = bluebird;

  const connectionP = new Promise((res, rej) => {
    mongoose
      .connect(mongoUrl)
      .then((ins) => {
        console.log("Mongo connected!!!");
        console.log(
          `Using mongo host '${mongoose.connection.host}' and port '${mongoose.connection.port}'`
        );
        return res(ins);
      })
      .catch((err) => {
        console.log(
          `MongoDB connection error. Please make sure MongoDB is running. ${err}`
        );
        return rej(err);
      });
  });

  return connectionP;
};
