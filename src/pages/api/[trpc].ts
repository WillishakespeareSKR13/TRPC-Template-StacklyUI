import { createNextApiHandler } from "@trpc/server/adapters/next";

import CONFIG from "../../config";
import { appRouter } from "../../server/root";
import { context } from "../../server/trpc";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: context,
  onError:
    CONFIG.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
