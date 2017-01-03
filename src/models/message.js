const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const MessageSchema = new Schema({
  data: Schema.Types.Mixed
});

module.exports = mongoose.model('Message', MessageSchema);