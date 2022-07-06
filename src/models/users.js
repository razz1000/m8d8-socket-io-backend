import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UsersSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("User", UsersSchema);
