export interface IAudiobookEntity {
  audiobook_id: number;
  title: string;
  description: string;
  url_text_source: string;
  language?: string | null;
  copyright_year?: string | null;
  num_sections?: string | null;
  url_rss?: string | null;
  url_zip_file?: string | null;
  url_project?: string | null;
  url_librivox?: string | null;
  url_other?: string | null;
  totaltime?: string | null;
  totaltimesecs?: string | null;
  //authors?: AuthorEntity[]; // Assuming you have an AuthorEntity class
  created_at?: Date;
  updated_at?: Date | null;
  deleted_at?: Date | null;
}
