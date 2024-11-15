FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun install
RUN bunx prisma generate

CMD ["sh", "-c", "bunx prisma migrate deploy && bun dev"]
