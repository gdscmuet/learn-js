import mongoose from "mongoose";

const { Schema, model } = mongoose;

const schemaFields = {
  email: { type: String, required: true, unique: true },
  name: { type: String, required: false },
  age: { type: Number, required: false },
};

const schema = new Schema(schemaFields, { timestamps: true });

export const UserModel = model("User", schema);
