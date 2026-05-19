import { prisma } from "../../lib/prisma";
import { Figurinha } from "../schemas/figurinha";

export class FigurinhaRepository {
  constructor(private readonly prismaClient = prisma) {}

  async create(data: Figurinha) {
    return await this.prismaClient.figurinha.create({
      data: {
        numero: data.numero,
        codigo: data.codigo,
        status: data.status,
        selecao_id: data.selecao_id,
      },
    });
  }

  async findAll() {
    return await this.prismaClient.figurinha.findMany();
  }

  async findById(id: string) {
    return await this.prismaClient.figurinha.findUnique({
      where: { id },
    });
  }

  async findBySelecaoId(selecao_id: string) {
    return await this.prismaClient.figurinha.findMany({
      where: { selecao_id },
    });
  }

  async update(id: string, data: Partial<Omit<Figurinha, "id">>) {
    return await this.prismaClient.figurinha.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return await this.prismaClient.figurinha.delete({
      where: { id },
    });
  }
}
