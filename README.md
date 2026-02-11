# fellor_backend

docker-compose down -v
docker-compose up -d
npx prisma generate --config prisma/prisma.config.ts
npx prisma migrate dev --name init --config prisma/prisma.config.ts