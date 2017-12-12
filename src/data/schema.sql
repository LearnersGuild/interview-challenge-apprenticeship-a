DROP TABLE IF EXISTS restaurants;

DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS rants;

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


-- TODO: Add schema for rants table here
