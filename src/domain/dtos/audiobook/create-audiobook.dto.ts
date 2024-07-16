import { AudiobookEntity } from "../../entities/audiobook.entity";

export class CreateAudiobookDto {
  private constructor(public readonly params: Partial<AudiobookEntity>) {}

  static create(
    props: Partial<AudiobookEntity>
  ): [string?, CreateAudiobookDto?] {
    const {
      audiobook_id,
      title,
      description,
      url_text_source,
      ...restAudiobook
    } = props;

    if (!title) return ["title property is required", undefined];
    if (!description) return ["description property is required", undefined];
    if (!url_text_source)
      return ["url_text_source property is required", undefined];

    const audiobookToSave = {
      title,
      description,
      url_text_source,
      ...restAudiobook,
    };
    return [undefined, new CreateAudiobookDto(audiobookToSave)];
  }
}
