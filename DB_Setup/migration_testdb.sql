USE strolle_test;
CREATE USER 'strolle_app_test'@'localhost' IDENTIFIED BY 'walk';
GRANT ALL PRIVILEGES ON *.* TO 'strolle_app_test'@'localhost' WITH GRANT OPTION;
ALTER TABLE paths ADD userID INT;
ALTER TABLE paths ADD dt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
CREATE TABLE users (ID int NOT NULL AUTO_INCREMENT,
  first TEXT, last TEXT, blurb TEXT,
  photo TEXT, email TEXT, pass TEXT,
  primary key (ID)
);
