module.exports = function(NODE_ENV) {
  switch (NODE_ENV) {
    case 'TEST': return {
        host: 'localhost',
        user: 'strolle_app',
        password: 'walk',
        database: 'strolle_test'
      };

    default: return {
        host: 'localhost',
        user: 'strolle_app',
        password: 'walk',
        database: 'strolle_test' // TODO change this
      };
  }
};
