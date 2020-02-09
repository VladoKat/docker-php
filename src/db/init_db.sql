create database if not exists mydb;
use mydb;

CREATE TABLE if not exists testtab
(
id INTEGER AUTO_INCREMENT,
name TEXT,
PRIMARY KEY (id)
);

CREATE TABLE if not exists images
(
id INTEGER AUTO_INCREMENT,
file_name TEXT,
uploaded_on DATE,

PRIMARY KEY (id)
);