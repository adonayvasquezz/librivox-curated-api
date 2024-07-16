import { AudiobookEntity } from "../../entities/audiobook.entity";
import { AudiobookRepository } from "../../repositories/audiobook.repository";

export interface GetAudiobooksUseCase {
  execute(): Promise<AudiobookEntity[]>;
}

export class GetAudiobooks implements GetAudiobooksUseCase {
  constructor(private readonly repository: AudiobookRepository) {}

  execute(): Promise<AudiobookEntity[]> {
    return this.repository.getAll();
  }
}
