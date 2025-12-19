/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Vacina` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `VacinacaoBairro` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usuarioId,vacinaId,n_dose]` on the table `VacinacaoUsuario` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Vacina" ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "VacinacaoBairro" ALTER COLUMN "amountVaccines" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Vacina_nome_key" ON "Vacina"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "VacinacaoBairro_nome_key" ON "VacinacaoBairro"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "VacinacaoUsuario_usuarioId_vacinaId_n_dose_key" ON "VacinacaoUsuario"("usuarioId", "vacinaId", "n_dose");
