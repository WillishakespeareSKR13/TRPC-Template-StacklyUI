import { type CreateNextContextOptions } from "@trpc/server/adapters/next";

type CreateContextOptions = Record<string, never>;

const createInnerTRPCContext = (_opts: CreateContextOptions) => {
  return {};
};

export const context = async (_opts: CreateNextContextOptions) => {
  await connectMongo();
  return createInnerTRPCContext({});
};

import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import connectMongo from "./database";

const t = initTRPC.context<typeof context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const router = t.router;

export const procedure = t.procedure;
