import { prisma } from "../../lib/prisma";

export class GrupoRepository {
  constructor( private readonly prismaClient = prisma ) {}

  async create(nome: string) {
    return await this.prismaClient.grupo.create({
      data: {
        nome,
      },
    });
  }

  async findAll() {
    return await this.prismaClient.grupo.findMany();
  }

  async findAllWithSelecoes() {
    return await this.prismaClient.grupo.findMany({
      include: {
        selecoes: {
          include: { figurinhas: true },
        },
      },
      orderBy: { nome: "asc" },
    });
  }

  async findById(id: string) {
    return await this.prismaClient.grupo.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, nome: string) {
    return await this.prismaClient.grupo.update({
      where: {
        id,
      },
      data: {
        nome,
      },
    });
  }

  async delete(id: string) {
    return await this.prismaClient.grupo.delete({
      where: {
        id,
      },
    });
  }

  async findSelecoesByGrupoId(grupoId: string) {
    return await this.prismaClient.selecao.findMany({
      where: {
        grupo_id: grupoId,
      },
    });
  }

}