# strolle-app

## Setup Database
1. Start mysql in terminal
..* try $ mysql -u root -p
2. Create user
..* mysql> CREATE USER 'strolle_app'@'localhost' IDENTIFIED BY 'walk';
..* mysql> GRANT ALL PRIVILEGES ON *.* TO 'strolle_app'@'localhost' WITH GRANT OPTION;
3. Exit mysql
..* mysql> exit;
4. Run setup_db.js
