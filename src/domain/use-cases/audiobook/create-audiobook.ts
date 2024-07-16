import { CreateAudiobookDto } from "../../dtos";
import { AudiobookEntity } from "../../entities/audiobook.entity";
import { AudiobookRepository } from "../../repositories/audiobook.repository";

export interface CreateAudiobookUseCase {
  execute(dto: CreateAudiobookDto): Promise<AudiobookEntity>;
}

export class CreateAudiobook implements CreateAudiobookUseCase {
  constructor(private readonly repository: AudiobookRepository) {}

  execute(dto: CreateAudiobookDto): Promise<AudiobookEntity> {
    return this.repository.create(dto);
  }
}
