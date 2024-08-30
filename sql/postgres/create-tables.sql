
-- public.code_snippets

-- DROP TABLE public.code_snippets;

CREATE TABLE
  public.code_snippets (
    id bigserial NOT NULL,
    title varchar(255) NOT NULL,
    description varchar(1000) NULL,
    body text NULL,
    language varchar(50) NULL,
    published_at timestamptz NULL,
    tags varchar[] NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NULL
  );

CREATE INDEX code_snippets_tags_idx on public.code_snippets USING GIN (tags);

ALTER TABLE
  public.code_snippets
ADD
  CONSTRAINT code_snippets_pkey PRIMARY KEY (id);


-- public.events

-- DROP TABLE public.events;

CREATE TABLE
  public.events (
    id bigserial NOT NULL,
    title varchar(255) NOT NULL,
    description varchar(1000) NOT NULL,
    start_at timestamptz NULL,
    end_at timestamptz NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NULL
  );

ALTER TABLE
  public.events
ADD
  CONSTRAINT events_pkey PRIMARY KEY (id);


-- public.links

-- DROP TABLE public.links;

CREATE TABLE
  public.links (
    id bigserial NOT NULL,
    url varchar(1000) NOT NULL,
    title varchar(255) NOT NULL,
    description varchar(1000) NULL,
    tags varchar[] NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NULL
  );
  
CREATE INDEX links_tags_idx on public.links USING GIN (tags);

ALTER TABLE
  public.links
ADD
  CONSTRAINT links_pkey PRIMARY KEY (id);


-- public.notes

-- DROP TABLE public.notes;

CREATE TABLE
  public.notes (
    id bigserial NOT NULL,
    title varchar(255) NOT NULL,
    slug varchar(255) NOT NULL,
    body text NULL,
    significance smallint NOT NULL DEFAULT 0,
    published_at timestamptz NULL,
    tags varchar[] NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NULL
  );
  
CREATE INDEX notes_tags_idx on public.notes USING GIN (tags);

ALTER TABLE
  public.notes
ADD
  CONSTRAINT notes_pkey PRIMARY KEY (id);



-- public.posts

-- DROP TABLE public.posts;

CREATE TABLE
  public.posts (
    id bigserial NOT NULL,
    title varchar(255) NOT NULL,
    slug varchar(255) NOT NULL,
    abstract varchar(1000) NULL,
    body text NULL,
    significance smallint NOT NULL DEFAULT 0,
    published_at timestamptz NULL,
    tags varchar[] NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NULL
  );
  
CREATE INDEX posts_tags_idx on public.posts USING GIN (tags);

ALTER TABLE
  public.posts
ADD
  CONSTRAINT posts_pkey PRIMARY KEY (id);


-- public.tasks_projects

-- DROP TABLE public.tasks_projects

CREATE TABLE
  public.tasks_projects (
    id bigserial NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(1000) NULL,
    color character varying(50) NULL,
    is_archived boolean NOT NULL DEFAULT false,
    is_deleted boolean NOT NULL DEFAULT false,
    is_pinned boolean NOT NULL DEFAULT false,
    tags varchar[] NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NULL
  );

CREATE INDEX tasks_projects_tags_idx on public.tasks_projects USING GIN (tags);

ALTER TABLE
  public.tasks_projects
ADD
  CONSTRAINT tasks_projects_pkey PRIMARY KEY (id)


-- public.tasks

-- DROP TABLE public.tasks;

CREATE TABLE
  public.tasks (
    id bigserial NOT NULL,
    project_id bigint NULL,
    task_id bigint NULL,
    title varchar(255) NOT NULL,
    description varchar(1000) NULL,
    start_at timestamptz NULL,
    end_at timestamptz NULL,
    tags varchar[] NULL,
    is_pinned boolean NOT NULL DEFAULT false,
    priority smallint NOT NULL DEFAULT 0,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NULL
  );
  
CREATE INDEX tasks_tags_idx on public.tasks USING GIN (tags);

ALTER TABLE
  public.tasks
ADD
  CONSTRAINT tasks_pkey PRIMARY KEY (id);

