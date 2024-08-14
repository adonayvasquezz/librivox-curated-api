import { CreateAudiobookDto, UpdateTodoDto } from "../dtos";
import { AudiobookEntity } from "../entities/audiobook.entity";

export abstract class AudiobookDatasource {
  abstract create(
    createAudiobookDto: CreateAudiobookDto
  ): Promise<AudiobookEntity>;
  abstract getAll(): Promise<AudiobookEntity[]>;
  /* abstract findById(id: number): Promise<AudiobookEntity>;
  abstract updateById(updateTodoDto: UpdateTodoDto): Promise<AudiobookEntity>;
  abstract deleteById(id: number): Promise<AudiobookEntity>; */
}
