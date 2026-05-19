import { SelecaoRepository } from "../repositories/selecao";
import { Selecao } from "../schemas/selecao";

export class SelecaoService {
  constructor(private repository = new SelecaoRepository()) {}

  async create(data: Omit<Selecao, "id">) {
    return this.repository.create(data as Selecao);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id: string) {
    const selecao = await this.repository.findById(id);
    if (!selecao) throw new Error("Seleção não encontrada");
    return selecao;
  }

  async update(id: string, data: Partial<Omit<Selecao, "id">>) {
    await this.findById(id);
    return this.repository.update(id, data);
  }

  async delete(id: string) {
    await this.findById(id);
    return this.repository.delete(id);
  }
}
