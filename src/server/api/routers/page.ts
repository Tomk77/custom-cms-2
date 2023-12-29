import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const pageRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ title: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.page.create({
        data: {
          title: input.title,
        },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.page.findMany();
  }),
});
