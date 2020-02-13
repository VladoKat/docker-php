create database if not exists mydb;
use mydb;

CREATE TABLE if not exists images
(
id INTEGER AUTO_INCREMENT,
file_name TEXT,
file_group_name TEXT,
uploaded_on DATE,

PRIMARY KEY (id)
);

CREATE TABLE if not exists images_annotations
(
id INTEGER AUTO_INCREMENT,
file_group_name_fk TEXT,
annotation_text TEXT,
x_coord FLOAT,
y_coord FLOAT,
z_coord FLOAT,

PRIMARY KEY (id)
);