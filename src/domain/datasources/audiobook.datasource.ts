import { CreateTodoDto, UpdateTodoDto } from "../dtos";
import { AudiobookEntity } from "../entities/audiobook.entity";

export abstract class AudiobookDatasource {
  abstract create(createTodoDto: CreateTodoDto): Promise<AudiobookEntity>;
  abstract getAll(): Promise<AudiobookEntity[]>;
  abstract findById(id: number): Promise<AudiobookEntity>;
  abstract updateById(updateTodoDto: UpdateTodoDto): Promise<AudiobookEntity>;
  abstract deleteById(id: number): Promise<AudiobookEntity>;
}
