FROM node:latest

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY ./public ./public
COPY ./src ./src

ENTRYPOINT ["npm","start"]
