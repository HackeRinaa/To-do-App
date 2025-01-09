FROM node:18-alpine

ARG PACKAGE_FILE=*.tgz

WORKDIR /package

ADD $PACKAGE_FILE /

ENV NODE_ENV=production

RUN npm install

CMD npm run start

EXPOSE 5000