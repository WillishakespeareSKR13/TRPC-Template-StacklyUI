import mongoose from "mongoose";
import CONFIG from "@/config";

const connectMongo = async () => {
  if (!CONFIG?.MONGODB_URI) throw new Error("MONGODB_URI is not defined");
  await mongoose.connect(CONFIG.MONGODB_URI);
};

connectMongo().catch((err) => console.error(err));

export default connectMongo;
