create database if not exists mydb;
use mydb;

CREATE TABLE if not exists testtab
(
id INTEGER AUTO_INCREMENT,
name TEXT,
PRIMARY KEY (id)
);