module.exports = function(NODE_ENV) {
  switch (NODE_ENV) {
    case 'TEST': return {
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'strolle_test'
      };
    case 'PROD': return {
        host: '35.231.72.92',
        user: 'root',
        password: '',
        database: 'strolle_db'
      };
    default: return {
        host: '35.231.72.92',
        user: 'root',
        password: '',
        database: 'strolle_db' // TODO change this
      };
  }
};
