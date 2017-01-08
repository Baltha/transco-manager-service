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

Configuration
=============

Use the config/presets.json to define transcoding presets

Env
===

Variable | Default | Description
-------- | ------- | -----------
MONGO_URL | mongodb://localhost/transco-manager | 
RABBITMQ_URL | | RabbitMQ url (format like `amqp://host` )
RABBITMQ_FILE_EXCHANGE | transmission-service | Exchange used for retreiving files to process
REDIS_HOST | | Redis host used to save retry state of rabbitmq messages processing
REDIS_PORT | 6379 | Redis port
STORAGE_PATH | /mnt/data | Storage directory, this is a primary shot, in the futur we'll use something more dynamic. The target is to use more than one storage.
EXTENSIONS_ALLOWED | avi,mkv,mp4,mov,mpg,mpeg | Files extensions that are allowed to probe then transcode
TRANSCO_HOST_DEFAULT | | Default transcoder, it's the lowest priority transcoder, if any other transcoders can make the transcoding they'll prevail.
TRANSCO_HOST_* | | You can use whatever you like for *. It will add transcoders hosts to our stack