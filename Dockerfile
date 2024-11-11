
FROM oven/bun:latest

RUN bun install
RUN bun install -d prisma
RUN bunx prisma generate

WORKDIR /app
COPY . .

CMD ["bun", "run", "dev"]
