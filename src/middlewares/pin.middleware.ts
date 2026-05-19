import { Request, Response, NextFunction } from "express";

export function pinMiddleware(req: Request, res: Response, next: NextFunction) {
  const pin = req.headers["x-pin"];
  const secret = process.env.PIN;

  if (!secret) throw new Error("PIN não configurado no .env");

  if (!pin || pin !== secret) {
    return res.status(401).json({ error: "PIN inválido" });
  }

  next();
}
