import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

import { grupoRouter } from "./modules/routes/grupo";
import { selecaoRouter } from "./modules/routes/selecao";
import { figurinhaRouter } from "./modules/routes/figurinha";
import { pinMiddleware } from "./middlewares/pin.middleware";
import { prisma } from "./lib/prisma";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      /\.vercel\.app$/,
    ],
    allowedHeaders: ["Content-Type", "Authorization", "x-pin"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.get("/stats", pinMiddleware, async (_req, res) => {
  const [total, tenho, repetida, falta] = await Promise.all([
    prisma.figurinha.count(),
    prisma.figurinha.count({ where: { status: "TENHO" } }),
    prisma.figurinha.count({ where: { status: "REPETIDA" } }),
    prisma.figurinha.count({ where: { status: "FALTA" } }),
  ]);
  res.json({ total, tenho, repetida, falta });
});

app.use("/grupos", grupoRouter);
app.use("/selecoes", selecaoRouter);
app.use("/figurinhas", figurinhaRouter);

app.get("/", (_req, res) => {
  res.json({ message: "API Album Copa rodando!" });
});

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ errors: err.issues });
  }
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }
  return res.status(500).json({ error: "Erro interno do servidor" });
});

export { app };
