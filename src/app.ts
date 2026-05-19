import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

import { grupoRouter } from "./modules/routes/grupo";
import { selecaoRouter } from "./modules/routes/selecao";
import { figurinhaRouter } from "./modules/routes/figurinha";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

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
