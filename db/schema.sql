-- create database and table schema here
USE heroku_27dc7e1957ed417;

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured boolean NOT NULL,
  PRIMARY KEY (id)
);