FROM node:7.2.0

ENV SERVER_PORT 8080
ENV SERVER_HOST 0.0.0.0
ENV RABBITMQ_FILE_EXCHANGE transmission-service
ENV REDIS_PORT=6379
ENV MONGO_URL mongodb://localhost/transco-manager

RUN echo "deb http://www.deb-multimedia.org jessie main non-free" >> /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y --force-yes deb-multimedia-keyring  && \
    apt-get install -y --force-yes ffmpeg && \
    apt-get clean

VOLUME [ "/home/node/transco-manager-service/data" ]

ADD "src" "/home/node/transco-manager-service/src"
ADD [ \
  "package.json", \
  "server.js", \
  "/home/node/transco-manager-service/" \
]

RUN chown -R node. /home/node/transco-manager-service

USER node
WORKDIR /home/node/transco-manager-service

RUN touch .env && \
    npm i 

EXPOSE 8080
CMD [ "node", "server.js" ]