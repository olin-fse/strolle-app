CREATE USER 'strolle_app'@'localhost' IDENTIFIED BY 'walk';
GRANT ALL PRIVILEGES ON *.* TO 'strolle_app'@'localhost' WITH GRANT OPTION;
CREATE DATABASE strolle_db;
USE strolle_db;
CREATE TABLE paths (ID int NOT NULL AUTO_INCREMENT,
  title TEXT,location_name TEXT,
  description TEXT,
  latitude FLOAT(50,25),
  longitude FLOAT(50,25),
  primary key (ID)
);
CREATE TABLE users (ID int NOT NULL AUTO_INCREMENT,
  first TEXT, last TEXT, blurb TEXT,
  photo TEXT, email TEXT, pass TEXT,
  primary key (ID)
);
