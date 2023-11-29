FROM node:lts-alpine

WORKDIR /app

COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY public public
COPY next-env.d.ts next-env.d.ts
COPY next.config.js next.config.js

RUN npm i

COPY src src

CMD npm start