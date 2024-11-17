import mongoose from "mongoose";

const userSchemma = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  className: {
    type: String,
  },
  address: {
    type: String,
  },
});

const user = mongoose.model("user", userSchemma);
export default user;
