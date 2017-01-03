const Message    = require('../models/index.js').Message;
const LOG_PREFIX = 'FailureController';

module.exports = {
  LOG_PREFIX: LOG_PREFIX,
  
  getAll: (req, res, next) => {
    Message
      .find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.apiError(this.LOG_PREFIX, 'error', err));
  }
};