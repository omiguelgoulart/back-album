import { GrupoRepository } from "../repositories/grupo";

export class GrupoService {
  constructor(private repository = new GrupoRepository()) {}

  async create(nome: string) {
    return this.repository.create(nome);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id: string) {
    const grupo = await this.repository.findById(id);
    if (!grupo) throw new Error("Grupo não encontrado");
    return grupo;
  }

  async findSelecoes(id: string) {
    await this.findById(id);
    return this.repository.findSelecoesByGrupoId(id);
  }

  async update(id: string, nome: string) {
    await this.findById(id);
    return this.repository.update(id, nome);
  }

  async delete(id: string) {
    await this.findById(id);
    return this.repository.delete(id);
  }
}
