CREATE DATABASE strolle_db;
USE strolle_db;
CREATE TABLE paths (ID int NOT NULL AUTO_INCREMENT,
  title TEXT,location_name TEXT,
  description TEXT,
  latitude FLOAT(50,25),
  longitude FLOAT(50,25),
  primary key (ID)
);
