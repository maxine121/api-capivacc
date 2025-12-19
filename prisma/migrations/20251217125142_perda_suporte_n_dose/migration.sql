/*
  Warnings:

  - You are about to drop the column `lote` on the `VacinacaoUsuario` table. All the data in the column will be lost.
  - You are about to drop the column `n_dose` on the `VacinacaoUsuario` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[usuarioId,vacinaId]` on the table `VacinacaoUsuario` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "VacinacaoUsuario_usuarioId_vacinaId_n_dose_key";

-- AlterTable
ALTER TABLE "VacinacaoUsuario" DROP COLUMN "lote",
DROP COLUMN "n_dose";

-- CreateIndex
CREATE UNIQUE INDEX "VacinacaoUsuario_usuarioId_vacinaId_key" ON "VacinacaoUsuario"("usuarioId", "vacinaId");
