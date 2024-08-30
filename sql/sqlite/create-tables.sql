-- sqlite_sequence ------------------------------------------------------------

-- DROP TABLE sqlite_sequence;

CREATE TABLE
  sqlite_sequence (name, seq)

-- code_snippets --------------------------------------------------------------

--  DROP TABLE code_snippets;

CREATE TABLE
  `code_snippets` (
    `id` integer not null primary key autoincrement,
    `title` varchar(255) not null,
    `description` varchar(1000) null,
    `body` text null,
    `language` varchar(50) null,
    `published_at` datetime null,
    `tags` varchar(255) null,
    `created_at` datetime not null default CURRENT_TIMESTAMP,
    `updated_at` datetime null,
    unique (`id`)
  )

-- events ---------------------------------------------------------------------

-- DROP TABLE events;

CREATE TABLE
  `events` (
    `id` integer not null primary key autoincrement,
    `title` varchar(255) not null,
    `description` varchar(1000) null,
    `start_at` datetime null,
    `end_at` datetime null,
    `created_at` datetime not null default CURRENT_TIMESTAMP,
    `updated_at` datetime null,
    unique (`id`)
  )

-- links ----------------------------------------------------------------------

-- DROP TABLE links;

CREATE TABLE
  `links` (
    `id` integer not null primary key autoincrement,
    `url` varchar(1000) not null,
    `title` varchar(255) not null,
    `description` varchar(1000) null,
    `tags` varchar(255) null,
    `created_at` datetime not null default CURRENT_TIMESTAMP,
    `updated_at` datetime null,
    unique (`id`)
  )

-- notes ----------------------------------------------------------------------

-- DROP TABLE notes;

CREATE TABLE
  `notes` (
    `id` integer not null primary key autoincrement,
    `title` varchar(255) not null,
    `slug` varchar(255) not null,
    `body` text null,
    `significance` smallint not null default 0,
    `published_at` datetime null,
    `tags` varchar(255) null,
    `created_at` datetime not null default CURRENT_TIMESTAMP,
    `updated_at` datetime null,
    unique (`id`)
  )

-- posts ----------------------------------------------------------------------

-- DROP TABLE posts;

CREATE TABLE
  `posts` (
    `id` integer not null primary key autoincrement,
    `title` varchar(255) not null,
    `slug` varchar(255) not null,
    `abstract` text null,
    `body` text null,
    `significance` smallint not null default 0,
    `published_at` datetime null,
    `tags` varchar(255) null,
    `created_at` datetime not null default CURRENT_TIMESTAMP,
    `updated_at` datetime null,
    unique (`id`)
  )

-- tasks_projects -------------------------------------------------------------

-- DROP TABLE tasks_projects;

CREATE TABLE
  `tasks_projects` (
    `id` integer not null primary key autoincrement,
    `name` varchar(255) not null,
    `description` varchar(1000) null,
    `color` varchar(50) null,
    `is_archived` boolean not null default false,
    `is_deleted` boolean not null default false,
    `is_pinned` boolean not null default false,
    `tags` varchar(255) null,
    `created_at` datetime not null default CURRENT_TIMESTAMP,
    `updated_at` datetime null,
    unique (`id`)
  )

CREATE TABLE
  `tasks` (
    `id` integer not null primary key autoincrement,
    `project_id` INT8 null,
    `task_id` INT8 null,
    `title` varchar(255) not null,
    `description` varchar(1000) null,
    `start_at` datetime null,
    `end_at` datetime null,
    `tags` varchar(255) null,
    `is_pinned` boolean not null default false,
    `priority` TINYINT not null default 0,
    `created_at` datetime not null default CURRENT_TIMESTAMP,
    `updated_at` datetime null,
    unique (`id`)
  )
