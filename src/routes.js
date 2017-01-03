const apiConstraints     = require('./middlewares/apiConstraints.js');
const failureCtrl        = require('./controllers/failure.js');

module.exports = (app) => {
  app.get('/failures', failureCtrl.getAll);
};
