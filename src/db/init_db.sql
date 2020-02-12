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

CREATE TABLE if not exists images_annotations
(
id INTEGER AUTO_INCREMENT,
img_id INTEGER,
annotation_text TEXT,
x_coord FLOAT,
y_coord FLOAT,
z_coord FLOAT

PRIMARY KEY (id)
);