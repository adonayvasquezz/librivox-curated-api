-- CreateTable
CREATE TABLE "audiobook" (
    "audiobook_id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "url_text_source" VARCHAR NOT NULL,
    "language" VARCHAR,
    "copyright_year" VARCHAR,
    "num_sections" VARCHAR,
    "url_rss" VARCHAR,
    "url_zip_file" VARCHAR,
    "url_project" VARCHAR,
    "url_librivox" VARCHAR,
    "url_other" VARCHAR,
    "totaltime" VARCHAR,
    "totaltimesecs" VARCHAR,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMPTZ,

    CONSTRAINT "audiobook_pkey" PRIMARY KEY ("audiobook_id")
);

-- CreateTable
CREATE TABLE "author" (
    "author_id" SERIAL NOT NULL,
    "first_name" VARCHAR,
    "last_name" VARCHAR NOT NULL,
    "audiobook_id" INTEGER,
    "dob" VARCHAR,
    "dod" VARCHAR,
    "country" VARCHAR,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMPTZ,

    CONSTRAINT "author_pkey" PRIMARY KEY ("author_id")
);

-- AddForeignKey
ALTER TABLE "author" ADD CONSTRAINT "author_audiobook_id_fkey" FOREIGN KEY ("audiobook_id") REFERENCES "audiobook"("audiobook_id") ON DELETE SET NULL ON UPDATE CASCADE;
