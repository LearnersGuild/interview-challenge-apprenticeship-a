DROP TABLE IF EXISTS restaurants;

DROP TABLE IF EXISTS users;

CREATE TABLE restaurants (
  id SERIAL,
  name VARCHAR(255) NOT NULL,
  cuisine VARCHAR(255) NOT NULL
);


CREATE TABLE users (
  id SERIAL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
