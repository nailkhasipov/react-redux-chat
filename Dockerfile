FROM ubuntu:16.04

RUN apt-get -yqq update
RUN apt-get -yqq install nodejs npm

WORKDIR /app
ADD . /app

RUN npm install

EXPOSE 9000
CMD ["node", "app.js"]