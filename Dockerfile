FROM node:20-alpine as builder
WORKDIR /app

RUN npm i -g pnpm

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages/client/package*.json ./packages/client/
COPY packages/server/package*.json ./packages/server/
COPY packages/shared/package*.json ./packages/shared/
RUN pnpm i

COPY packages/ ./packages/
RUN pnpm run build

CMD [ "pnpm", "start" ]