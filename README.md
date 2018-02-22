# strolle-app

## Setup Database
1. Start mysql in command line
$ mysql -u root -p
2. Create strolle_app user
```{mysql}
CREATE USER 'strolle_app'@'localhost' IDENTIFIED BY 'walk';
```
3. Grant privileges to that user
```{mysql}
GRANT ALL PRIVILEGES ON *.* TO 'strolle_app'@'localhost' WITH GRANT OPTION;
```
4. Check that user exists
```{mysql}
SELECT User FROM mysql.user;
```
5. If you see 'strolle_app' then exit connection.
```{mysql}
exit;
```
6. In command line, run schema file
$ mysql -u root < schema.mysql
