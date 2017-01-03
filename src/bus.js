const RABBITMQ_URL      = process.env.RABBITMQ_URL;
const LOG_PREFIX        = 'RabbitMQBus';
const winston           = require('winston');
const bus               = require('servicebus');

function create(params) {
  return bus.bus(Object.assign({
    url: RABBITMQ_URL,
    log: function(...args) {
      winston.info(LOG_PREFIX, args);
    },
    assertQueuesOnFirstSend: true
  }, params));
}

bus.default = create();
bus.create = create;

module.exports = bus;
