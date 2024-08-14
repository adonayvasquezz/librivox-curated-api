import { Router } from "express";
import { TodoRoutes } from "./todos/routes";
import { AudiobookRoutes } from "./audiobook/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/todos", TodoRoutes.routes);
    router.use("/api/audiobooks", AudiobookRoutes.routes);

    return router;
  }
}
