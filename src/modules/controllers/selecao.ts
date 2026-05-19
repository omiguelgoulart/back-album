import { Request, Response } from "express";
import { SelecaoService } from "../services/selecao.service";
import { SelecaoSchema } from "../schemas/selecao";

export class SelecaoController {
  constructor(private service = new SelecaoService()) {}

  create = async (req: Request, res: Response) => {
    const data = SelecaoSchema.omit({ id: true }).parse(req.body);
    const selecao = await this.service.create(data);
    return res.status(201).json(selecao);
  };

  findAll = async (_req: Request, res: Response) => {
    const selecoes = await this.service.findAll();
    return res.json(selecoes);
  };

  findById = async (req: Request<{ id: string }>, res: Response) => {
    const selecao = await this.service.findById(req.params.id);
    return res.json(selecao);
  };

  update = async (req: Request<{ id: string }>, res: Response) => {
    const data = SelecaoSchema.omit({ id: true }).partial().parse(req.body);
    const selecao = await this.service.update(req.params.id, data);
    return res.json(selecao);
  };

  delete = async (req: Request<{ id: string }>, res: Response) => {
    await this.service.delete(req.params.id);
    return res.status(204).send();
  };
}
