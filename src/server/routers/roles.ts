import { z } from "zod";
import { router, procedure } from "../trpc";
import roleModel from "../models/roles";

export const rolesRouter = router({
  createrole: procedure
    .input(
      z.object({
        name: z.string(),
        label: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const newRole = await roleModel().create(input);
      return newRole;
    }),
  getroles: procedure.query(async () => {
    const roles = await roleModel().find();
    return roles;
  }),
});
