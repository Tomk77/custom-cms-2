import { postRouter } from "~/server/api/routers/post";
import { pageRouter } from "~/server/api/routers/page";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  page: pageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
