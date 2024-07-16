import { CreateAudiobookDto } from "../dtos";
import { AudiobookEntity } from "../entities/audiobook.entity";

export abstract class AudiobookRepository {
  abstract create(
    createAudiobookDto: CreateAudiobookDto
  ): Promise<AudiobookEntity>;

  //todo: paginación
  abstract getAll(): Promise<AudiobookEntity[]>;
  abstract findById(id: number): Promise<AudiobookEntity>;
  /* abstract updateById(updateTodoDto: UpdateTodoDto): Promise<AudiobookEntity>; */
  abstract deleteById(id: number): Promise<AudiobookEntity>;
}
