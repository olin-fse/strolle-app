USE strolle_app;
ALTER TABLE paths ADD userID INT;
ALTER TABLE paths ADD dt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
CREATE TABLE users (ID int NOT NULL AUTO_INCREMENT,
  name TEXT, blurb TEXT,
  photo TEXT,
  primary key (ID)
);
