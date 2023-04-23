FROM node:16.16.0-alpine3.16 AS build
RUN apk add --no-cache curl \
  && curl -sL https://unpkg.com/@pnpm/self-installer | node

WORKDIR /usr/src/app

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile
COPY . .

RUN pnpm build

FROM nginx:1.22.0-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build usr/src/app/build/ /usr/share/nginx/html

EXPOSE 8080
