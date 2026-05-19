import { prisma } from "../../lib/prisma";
import { Selecao } from "../schemas/selecao";

export class SelecaoRepository {
  constructor(private readonly prismaClient = prisma) {}

  async create(data: Selecao) {
    return await this.prismaClient.selecao.create({
      data: {
        nome: data.nome,
        sigla: data.sigla,
        cor_bg: data.cor_bg,
        cor_fg: data.cor_fg,
        grupo_id: data.grupo_id,
      },
    });
  }

  async findAll() {
    return await this.prismaClient.selecao.findMany();
  }

  async findById(id: string) {
    return await this.prismaClient.selecao.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: Partial<Omit<Selecao, "id">>) {
    return await this.prismaClient.selecao.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return await this.prismaClient.selecao.delete({
      where: { id },
    });
  }
}
