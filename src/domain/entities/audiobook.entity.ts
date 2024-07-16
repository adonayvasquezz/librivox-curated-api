export class AudiobookEntity {
  constructor(
    public audiobook_id: number,
    public title: string,
    public description: string,
    public url_text_source: string,
    public language?: string | null,
    public copyright_year?: string | null,
    public num_sections?: string | null,
    public url_rss?: string | null,
    public url_zip_file?: string | null,
    public url_project?: string | null,
    public url_librivox?: string | null,
    public url_other?: string | null,
    public totaltime?: string | null,
    public totaltimesecs?: string | null
  ) {}

  public static fromObject(object: Partial<AudiobookEntity>): AudiobookEntity {
    const { audiobook_id, title, description, url_text_source } = object;
    if (!audiobook_id) throw "audiobook_id is required";
    if (!title) throw "title is required";
    if (!description) throw "description is required";
    if (!url_text_source) throw "url_text_source is required";

    return new AudiobookEntity(
      audiobook_id,
      title,
      description,
      url_text_source
    );
  }
}
