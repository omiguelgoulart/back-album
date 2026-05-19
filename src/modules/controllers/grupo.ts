import { Request, Response } from "express";
import { GrupoService } from "../services/grupo.service";
import { z } from "zod";

const nomeSchema = z.object({ nome: z.string() });

export class GrupoController {
  constructor(private service = new GrupoService()) {}

  create = async (req: Request, res: Response) => {
    const { nome } = nomeSchema.parse(req.body);
    const grupo = await this.service.create(nome);
    return res.status(201).json(grupo);
  };

  findAll = async (_req: Request, res: Response) => {
    const grupos = await this.service.findAll();
    return res.json(grupos);
  };

  findAllWithSelecoes = async (_req: Request, res: Response) => {
    const grupos = await this.service.findAllWithSelecoes();
    return res.json(grupos);
  };

  findById = async (req: Request<{ id: string }>, res: Response) => {
    const grupo = await this.service.findById(req.params.id);
    return res.json(grupo);
  };

  findSelecoes = async (req: Request<{ id: string }>, res: Response) => {
    const selecoes = await this.service.findSelecoes(req.params.id);
    return res.json(selecoes);
  };

  update = async (req: Request<{ id: string }>, res: Response) => {
    const { nome } = nomeSchema.parse(req.body);
    const grupo = await this.service.update(req.params.id, nome);
    return res.json(grupo);
  };

  delete = async (req: Request<{ id: string }>, res: Response) => {
    await this.service.delete(req.params.id);
    return res.status(204).send();
  };
}
