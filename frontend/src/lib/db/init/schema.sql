-- Adminer 5.3.0 PostgreSQL 16.9 dump

DROP TABLE IF EXISTS "trips";
DROP SEQUENCE IF EXISTS trips2_id_seq;
CREATE SEQUENCE trips2_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."trips" (
                                  "id" integer DEFAULT nextval('trips2_id_seq') NOT NULL,
                                  "title" character varying(255) NOT NULL,
                                  "description" character varying(255) DEFAULT 'Zažijte jedinečný výlet' NOT NULL,
                                  "imageUrl" character varying(255) DEFAULT '/images/beach.webp' NOT NULL,
                                  "text" text NOT NULL,
                                  CONSTRAINT "trips2_pkey" PRIMARY KEY ("id")
)
    WITH (oids = false);

DROP TABLE IF EXISTS "beaches";
DROP SEQUENCE IF EXISTS beaches_id_seq;
CREATE SEQUENCE beaches_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."beaches" (
                                    "id" integer DEFAULT nextval('beaches_id_seq') NOT NULL,
                                    "title" character varying(255) NOT NULL,
                                    "description" character varying(255) DEFAULT 'Nádherná unikátní pláž' NOT NULL,
                                    "imageUrl" character varying(255) DEFAULT '/images/beach.webp' NOT NULL,
                                    "text" text NOT NULL,
                                    "type" character varying(255) NOT NULL,
                                    CONSTRAINT "beaches_pkey" PRIMARY KEY ("id")
)
    WITH (oids = false);

