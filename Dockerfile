# ========================================================
# builder
# ========================================================
FROM node:20-alpine as builder
WORKDIR /app

# pnpm
RUN npm i -g pnpm

# dependencies
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages/client/package*.json ./packages/client/
COPY packages/server/package*.json ./packages/server/
RUN pnpm i

COPY packages/ ./packages/
RUN pnpm run build

# ========================================================
# runner
# ========================================================
FROM node:20-alpine as runner
WORKDIR /app

COPY --from=builder /app/packages/client/dist ./packages/client/dist
COPY --from=builder /app/packages/server/dist ./packages/server/dist
COPY --from=builder /app/packages/server/node_modules ./packages/server/node_modules
COPY --from=builder /app/node_modules ./node_modules

# env var
ENV DB_HOST=192.168.1.99
ENV DB_PORT=6543

ENV BACKEND_PORT=6544

EXPOSE 6544

CMD ["node", "packages/server/dist/app.js"]