import { Request, Response } from "express";
import { FigurinhaService } from "../services/figurinha.service";
import { FigurinhaSchema } from "../schemas/figurinha";

export class FigurinhaController {
  constructor(private service = new FigurinhaService()) {}

  create = async (req: Request, res: Response) => {
    const data = FigurinhaSchema.omit({ id: true }).parse(req.body);
    const figurinha = await this.service.create(data);
    return res.status(201).json(figurinha);
  };

  findAll = async (_req: Request, res: Response) => {
    const figurinhas = await this.service.findAll();
    return res.json(figurinhas);
  };

  findById = async (req: Request<{ id: string }>, res: Response) => {
    const figurinha = await this.service.findById(req.params.id);
    return res.json(figurinha);
  };

  findBySelecaoId = async (req: Request<{ selecao_id: string }>, res: Response) => {
    const figurinhas = await this.service.findBySelecaoId(req.params.selecao_id);
    return res.json(figurinhas);
  };

  update = async (req: Request<{ id: string }>, res: Response) => {
    const data = FigurinhaSchema.omit({ id: true }).partial().parse(req.body);
    const figurinha = await this.service.update(req.params.id, data);
    return res.json(figurinha);
  };

  delete = async (req: Request<{ id: string }>, res: Response) => {
    await this.service.delete(req.params.id);
    return res.status(204).send();
  };
}
