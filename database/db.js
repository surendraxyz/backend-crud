import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("database connected");
  } catch (error) {
    console.log("database error", error);
  }
};

export default db;
