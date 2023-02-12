// @ts-check
import { z } from "zod";

export const SCHEMA = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  MONGODB_URI: z.string(),
});

export const ENV = {
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI: process.env.MONGODB_URI,
};

const CONFIG = SCHEMA.safeParse(ENV);

if (!CONFIG.success) {
  console.error("❌ Invalid environment variables:\n", CONFIG.error.format());
  throw new Error("Invalid environment variables");
}

Object.keys(CONFIG.data)?.forEach((key) => {
  if (key.startsWith("NEXT_PUBLIC_")) {
    console.warn("❌ You are exposing a server-side env-variable:", key);
    throw new Error("You are exposing a server-side env-variable");
  }
});

export default CONFIG.data;
