import { router } from "./trpc";
import { rolesRouter } from "./routers/roles";
import { exampleRouter } from "./routers/example";

export const appRouter = router({
  example: exampleRouter,
  roles: rolesRouter,
});

export type AppRouter = typeof appRouter;
