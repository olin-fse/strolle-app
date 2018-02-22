CREATE DATABASE strolle_db;
USE strolle_db;
CREATE TABLE paths (ID int NOT NULL AUTO_INCREMENT,
  title VARCHAR(255),location_name VARCHAR(255),
  description TEXT,
  latitude FLOAT(50,25),
  longitude FLOAT(50,25),
  primary key (ID)
);
