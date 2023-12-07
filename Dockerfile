# =========================================================
# BUILDER
# =========================================================
FROM node:20-alpine as builder
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

# =========================================================
# RUNNER
# =========================================================
FROM node:20-alpine as runner
WORKDIR /app

# root
COPY --from=builder app/package.json ./

# client
COPY --from=builder app/packages/client/next.config.js ./
COPY --from=builder app/packages/client/.next ./
COPY --from=builder app/packages/client/public ./
COPY --from=builder app/packages/client/package.json ./

# server
COPY --from=builder app/packages/server/dist ./
COPY --from=builder app/packages/server/package.json ./

# env var
ENV DB_HOST=192.168.1.99
ENV DB_PORT=6543

ENV BACKEND_PORT=6544
ENV NEXT_PUBLIC_BACKEND_PORT=6544

EXPOSE 6544
EXPOSE 3000

CMD [ "pnpm", "start" ]