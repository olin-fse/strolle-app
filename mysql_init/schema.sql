CREATE DATABASE strolle_test;
USE strolle_test;
CREATE TABLE paths (ID int NOT NULL AUTO_INCREMENT,
  title TEXT,location_name TEXT,
  description TEXT,
  latitude FLOAT(50,25),
  longitude FLOAT(50,25),
  userID INT,
  dt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  primary key (ID)
);
