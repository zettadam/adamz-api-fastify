
CREATE TABLE code_snippets (
  id integer not null primary key autoincrement,
  title varchar(255) not null,
  description varchar(1000) null,
  body text null,
  language varchar(50) null,
  published_at datetime null,
  tags varchar(255) null,
  created_at datetime not null default CURRENT_TIMESTAMP,
  updated_at datetime null,
  unique (id)
);


CREATE TABLE events (
  id integer not null primary key autoincrement,
  title varchar(255) not null,
  description varchar(1000) null,
  start_at datetime null,
  end_at datetime null,
  created_at datetime not null default CURRENT_TIMESTAMP,
  updated_at datetime null,
  unique (id)
);


CREATE TABLE links (
  id integer not null primary key autoincrement,
  url varchar(1000) not null,
  title varchar(255) not null,
  description varchar(1000) null,
  tags varchar(255) null,
  created_at datetime not null default CURRENT_TIMESTAMP,
  updated_at datetime null,
  unique (id)
);


CREATE TABLE notes (
  id integer not null primary key autoincrement,
  title varchar(255) not null,
  slug varchar(255) not null,
  body text null,
  significance smallint not null default 0,
  published_at datetime null,
  tags varchar(255) null,
  created_at datetime not null default CURRENT_TIMESTAMP,
  updated_at datetime null,
  unique (id)
);


CREATE TABLE posts (
  id integer not null primary key autoincrement,
  title varchar(255) not null,
  slug varchar(255) not null,
  abstract varchar(1000) null,
  body text null,
  significance smallint not null default 0,
  published_at datetime null,
  tags varchar(255) null,
  created_at datetime not null default CURRENT_TIMESTAMP,
  updated_at datetime null,
  unique (id)
);


CREATE TABLE tasks_projects (
  id integer not null primary key autoincrement,
  name varchar(255) not null,
  description varchar(1000) null,
  color varchar(50) null,
  is_archived boolean not null default false,
  is_deleted boolean not null default false,
  is_pinned boolean not null default false,
  tags varchar(255) null,
  created_at datetime not null default CURRENT_TIMESTAMP,
  updated_at datetime null,
  unique (id)
);


CREATE TABLE tasks (
  id integer not null primary key autoincrement,
  project_id integer null,
  task_id integer null,
  title varchar(255) not null,
  description varchar(1000) null,
  start_at datetime null,
  end_at datetime null,
  tags varchar(255) null,
  is_pinned boolean not null default false,
  priority smallint not null default 0,
  created_at datetime not null default CURRENT_TIMESTAMP,
  updated_at datetime null,
  unique (id)
);
