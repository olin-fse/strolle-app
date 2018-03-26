module.exports = function(NODE_ENV) {
  switch (NODE_ENV) {
    case 'TEST': return {
        host: 'localhost',
        user: 'strolle_app',
        password: 'walk',
        database: 'strolle_test'
      };
    case 'PROD': return {
        host: '35.231.72.92',
        user: 'root',
        password: '',
        database: 'strolle_db'
      };
    default: return {
        host: 'localhost',
        user: 'strolle_app',
        password: 'walk',
        database: 'strolle_test' // TODO change this
      };
  }
};
