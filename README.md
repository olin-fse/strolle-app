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
$ mysql -u root < schema.sql

7. Also run the test schema file
$ mysql -u root < test_schema.sql

## Local Test Database Migration
Run the following code in command line:
$ myslql -u root < migration_testdb.sql

## Building and Running the App
### Installs
Make sure you have all the installs by installing both the backend and front end requirements.
```
/$ npm install
/frontend$ npm install
```
### Building
From the root directory, start the backend server. It uses nodemon, so it will restart the app whenever changes are made.
```
/$ npm run start
```
From the frontend directory, the `bundle.js` is built using webpack. In test mode, the watch flag is set, so the bundle will recompile when changes are made.
```
/frontend$ npm run watch
```
### Using
Once the frontend has been made and the backend is running, navigate to `localhost:3000` to access the app.
