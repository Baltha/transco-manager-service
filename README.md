API
===

## /failures
### GET
#### Description
Return all failed transcoding

#### Return 200 
```json
{
  "@todo"
}
```

Env
===

Variable | Default | Description
-------- | ------- | -----------
MONGO_URL | mongodb://localhost/transco-manager | 
RABBITMQ_URL | | RabbitMQ url (format like `amqp://host` )
RABBITMQ_FILE_EXCHANGE | transmission-service | Exchange used for retreiving files to process
REDIS_HOST | | Redis host used to save retry state of rabbitmq messages processing
REDIS_PORT | 6379 | Redis port