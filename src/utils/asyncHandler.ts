import { Request, Response, NextFunction, RequestHandler } from "express";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncHandler = (req: Request<any>, res: Response) => Promise<unknown>;

export const asyncHandler = (fn: AsyncHandler): RequestHandler =>
    (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res)).catch(next);
    };