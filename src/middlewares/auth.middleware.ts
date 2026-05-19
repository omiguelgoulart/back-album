import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Token não fornecido" });
    }

    const parts = authHeader.split(" ");
    const token = parts[1];

    if (!token) {
        return res.status(401).json({ error: "Token inválido" });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT_SECRET não configurado");

    try {
        const payload = verify(token, secret) as { userId: string };
        req.userId = payload.userId;
        next();
    } catch {
        return res.status(401).json({ error: "Token inválido ou expirado" });
    }
}
