import { Request, Response } from "express";
import { CreateAudiobookDto } from "../../domain/dtos";
import {
  CreateAudiobook,
  GetAudiobooks,
  AudiobookRepository,
} from "../../domain";

export class AudiobookController {
  constructor(private readonly audiobookRepository: AudiobookRepository) {}

  public getAudiobooks = (req: Request, res: Response) => {
    new GetAudiobooks(this.audiobookRepository)
      .execute()
      .then((audiobooks) => res.json(audiobooks))
      .catch((error) => res.status(400).json({ error }));
  };

  /*  public getAudiobookById = (req: Request, res: Response) => {
    const id = +req.params.id;

    new GetTodo(this.todoRepository)
      .execute(id)
      .then((todo) => res.json(todo))
      .catch((error) => res.status(400).json({ error }));
  }; */

  public createAudiobook = (req: Request, res: Response) => {
    const [error, createAudiobookDto] = CreateAudiobookDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateAudiobook(this.audiobookRepository)
      .execute(createAudiobookDto!)
      .then((todo) => res.json(todo))
      .catch((error) => res.status(400).json({ error }));
  };

  /* public updateTodo = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    new UpdateTodo(this.todoRepository)
      .execute(updateTodoDto!)
      .then((todo) => res.json(todo))
      .catch((error) => res.status(400).json({ error }));
  }; */

  /* public deleteTodo = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteTodo(this.todoRepository)
      .execute(id)
      .then((todo) => res.json(todo))
      .catch((error) => res.status(400).json({ error }));
  }; */
}
