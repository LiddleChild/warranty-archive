FROM node:20-alpine
WORKDIR /app

# pnpm
RUN npm i -g pnpm

# dependencies
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages/client/package*.json ./packages/client/
COPY packages/server/package*.json ./packages/server/
COPY packages/shared/package*.json ./packages/shared/
RUN pnpm i

COPY packages/ ./packages/
RUN pnpm run build

# env var
ENV DB_HOST=192.168.1.99
ENV DB_PORT=6543

ENV BACKEND_HOST=192.168.1.99
ENV BACKEND_PORT=6544
ENV NEXT_PUBLIC_BACKEND_PORT=6544

EXPOSE 6544
EXPOSE 3000

CMD ["pnpm", "start"]