CREATE DATABASE strolle_test;
USE strolle_test;
CREATE TABLE paths (ID int NOT NULL AUTO_INCREMENT,
  title TEXT,location_name TEXT,
  description TEXT,
  latitude FLOAT(50,25),
  longitude FLOAT(50,25),
  primary key (ID)
);
CREATE USER 'strolle_app_test'@'localhost' IDENTIFIED BY 'walk';
GRANT ALL PRIVILEGES ON *.* TO 'strolle_app_test'@'localhost' WITH GRANT OPTION;
