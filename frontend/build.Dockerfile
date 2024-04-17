FROM node:lts-alpine as builder

RUN apk --no-cache add curl

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
COPY public public
COPY next-env.d.ts next-env.d.ts
COPY next.config.js next.config.js
COPY src src

# Génère le dossier node_modules
RUN npm i

ARG NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=${NEXT_PUBLIC_BACKEND_URL}

# Génère le dossier .next
RUN npm run build 

FROM node:lts-alpine

WORKDIR /app

# Copier les dossiers à partir de l'image précédente
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/public /app/public
COPY --from=builder /app/.next /app/.next

RUN npm i --production

CMD npm start