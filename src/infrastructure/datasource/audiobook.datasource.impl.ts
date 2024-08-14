import { prisma } from "../../data/postgres";
import {
  CreateAudiobookDto,
  AudiobookDatasource,
  AudiobookEntity,
  UpdateTodoDto,
} from "../../domain";

export class AudiobookDatasourceImpl implements AudiobookDatasource {
  async create(
    createAudiobookDto: CreateAudiobookDto
  ): Promise<AudiobookEntity> {
    const { title, description, url_text_source, ...audiobookProps } =
      createAudiobookDto.params;
    const audiobook = await prisma.audiobook.create({
      data: {
        title: title!,
        description: description!,
        url_text_source: url_text_source!,
        ...audiobookProps,
      },
    });

    return AudiobookEntity.fromObject(audiobook);
  }

  async getAll(): Promise<AudiobookEntity[]> {
    const audiobooks = await prisma.audiobook.findMany();
    return audiobooks.map((audiobook) => AudiobookEntity.fromObject(audiobook));
  }

  /* async findById(id: number): Promise<AudiobookEntity> {
    const todo = await prisma.todo.findFirst({
      where: { id },
    });

    if (!todo) throw `Todo with id ${id} not found`;
    return AudiobookEntity.fromObject(todo);
  } */

  /* async updateById(updateTodoDto: UpdateTodoDto): Promise<AudiobookEntity> {
    await this.findById(updateTodoDto.id);

    const updatedTodo = await prisma.todo.update({
      where: { id: updateTodoDto.id },
      data: updateTodoDto!.values,
    });

    return AudiobookEntity.fromObject(updatedTodo);
  } */

  /* async deleteById(id: number): Promise<AudiobookEntity> {
    await this.findById(id);
    const deleted = await prisma.todo.delete({
      where: { id },
    });

    return AudiobookEntity.fromObject(deleted);
  } */
}
