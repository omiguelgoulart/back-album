-- CreateEnum
CREATE TYPE "Status" AS ENUM ('TENHO', 'REPETIDA', 'FALTA');

-- CreateTable
CREATE TABLE "Grupo" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Grupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Selecao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,
    "cor_bg" TEXT NOT NULL,
    "cor_fg" TEXT NOT NULL,
    "grupo_id" TEXT NOT NULL,

    CONSTRAINT "Selecao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Figurinha" (
    "id" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "codigo" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'FALTA',
    "selecao_id" TEXT NOT NULL,

    CONSTRAINT "Figurinha_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_nome_key" ON "Grupo"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Selecao_sigla_key" ON "Selecao"("sigla");

-- CreateIndex
CREATE UNIQUE INDEX "Figurinha_selecao_id_numero_key" ON "Figurinha"("selecao_id", "numero");

-- AddForeignKey
ALTER TABLE "Selecao" ADD CONSTRAINT "Selecao_grupo_id_fkey" FOREIGN KEY ("grupo_id") REFERENCES "Grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Figurinha" ADD CONSTRAINT "Figurinha_selecao_id_fkey" FOREIGN KEY ("selecao_id") REFERENCES "Selecao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
