DROP TABLE IF EXISTS restaurants;

DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS rants;

DROP TABLE IF EXISTS sessions;


CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  cuisine VARCHAR(255) NOT NULL
);


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE "sessions" (
  "sid" varchar NOT NULL PRIMARY KEY,
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
);

CREATE TABLE rants (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  restaurant_id INTEGER,
  title VARCHAR(240),
  body TEXT
);


-- TODO: Add schema for rants table here
