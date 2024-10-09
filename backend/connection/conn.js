import mongoose from "mongoose";
import { DBName } from "../utils/constants.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${DBName}`
    );
    console.log(`Database connected: `, connection.connection.host);
  } catch (error) {
    console.log(`Mongodb connection failed `, error);
    process.exit(1);
  }
};
export default connectDB;
