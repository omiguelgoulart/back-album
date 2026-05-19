import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

function normalizePostgresConnectionString(connectionString: string): string {
  try {
    const databaseUrl = new URL(connectionString);
    const sslMode = databaseUrl.searchParams.get("sslmode");

    if (sslMode === "prefer" || sslMode === "require" || sslMode === "verify-ca") {
      databaseUrl.searchParams.set("sslmode", "verify-full");
    }

    return databaseUrl.toString();
  } catch {
    return connectionString;
  }
}

const globalForPrisma = globalThis as {
  prisma?: PrismaClient;
};

const rawConnectionString = process.env.DATABASE_URL;

if (!rawConnectionString) {
  throw new Error("DATABASE_URL não configurada");
}

const connectionString = normalizePostgresConnectionString(rawConnectionString);

const adapter = new PrismaPg({
  connectionString,
});

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}