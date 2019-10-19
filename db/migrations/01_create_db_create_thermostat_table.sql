CREATE DATABASE bowlingscore;
 \c bowlingscore
CREATE TABLE scores (id SERIAL PRIMARY KEY, firstroll INT, secondroll INT, plus VARCHAR(10), total INT);
