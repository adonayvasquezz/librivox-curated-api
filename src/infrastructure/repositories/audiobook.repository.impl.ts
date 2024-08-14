import {
  AudiobookDatasource,
  AudiobookEntity,
  AudiobookRepository,
  CreateAudiobookDto,
} from "../../domain";

export class AudioRepositoryImpl implements AudiobookRepository {
  constructor(private readonly datasource: AudiobookDatasource) {}

  create(createAudiobookDto: CreateAudiobookDto): Promise<AudiobookEntity> {
    return this.datasource.create(createAudiobookDto);
  }

  getAll(): Promise<AudiobookEntity[]> {
    return this.datasource.getAll();
  }

  /* findById(id: number): Promise<AudiobookEntity> {
    return this.datasource.findById(id);
  } */

  // updateById(updateAudiobookDto: UpdateAudiobookDto): Promise<AudiobookEntity> {
  //   return this.datasource.updateById(updateAudiobookDto);
  // }

  /*  deleteById(id: number): Promise<AudiobookEntity> {
    return this.datasource.deleteById(id);
  } */
}
