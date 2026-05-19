import { FigurinhaRepository } from "../repositories/figurinha";
import { Figurinha } from "../schemas/figurinha";

export class FigurinhaService {
  constructor(private repository = new FigurinhaRepository()) {}

  async create(data: Omit<Figurinha, "id">) {
    return this.repository.create(data as Figurinha);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id: string) {
    const figurinha = await this.repository.findById(id);
    if (!figurinha) throw new Error("Figurinha não encontrada");
    return figurinha;
  }

  async findBySelecaoId(selecao_id: string) {
    return this.repository.findBySelecaoId(selecao_id);
  }

  async update(id: string, data: Partial<Omit<Figurinha, "id">>) {
    await this.findById(id);
    return this.repository.update(id, data);
  }

  async delete(id: string) {
    await this.findById(id);
    return this.repository.delete(id);
  }
}
