import { Router } from "express";
import { AudiobookController } from "./controller";
import { AudiobookDatasourceImpl } from "../../infrastructure/datasource/audiobook.datasource.impl";
import { AudioRepositoryImpl } from "../../infrastructure/repositories/audiobook.repository.impl";

export class AudiobookRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new AudiobookDatasourceImpl();
    const audiobookRepository = new AudioRepositoryImpl(datasource);
    const audiobookController = new AudiobookController(audiobookRepository);

    router.get("/", audiobookController.getAudiobooks);
    // router.get("/:id", audiobookController.getTodoById);

    router.post("/", audiobookController.createAudiobook);
    // router.put("/:id", audiobookController.updateTodo);
    // router.delete("/:id", audiobookController.deleteTodo);

    return router;
  }
}
