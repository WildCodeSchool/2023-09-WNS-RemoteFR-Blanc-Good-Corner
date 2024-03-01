FROM node:lts-alpine

WORKDIR /app

COPY package.json package.json
COPY tsconfig.json tsconfig.json

RUN npm i

COPY src src
COPY migrations migrations

CMD npm run dev