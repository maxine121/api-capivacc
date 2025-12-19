/*
  Warnings:

  - You are about to drop the column `dose` on the `VacinacaoUsuario` table. All the data in the column will be lost.
  - Added the required column `n_dose` to the `VacinacaoUsuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VacinacaoUsuario" DROP COLUMN "dose",
ADD COLUMN     "n_dose" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "public"."DoseStatus";

-- CreateTable
CREATE TABLE "Pacote" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pacote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PacoteToVacina" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PacoteToVacina_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PacoteToUsuario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PacoteToUsuario_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pacote_nome_key" ON "Pacote"("nome");

-- CreateIndex
CREATE INDEX "_PacoteToVacina_B_index" ON "_PacoteToVacina"("B");

-- CreateIndex
CREATE INDEX "_PacoteToUsuario_B_index" ON "_PacoteToUsuario"("B");

-- AddForeignKey
ALTER TABLE "_PacoteToVacina" ADD CONSTRAINT "_PacoteToVacina_A_fkey" FOREIGN KEY ("A") REFERENCES "Pacote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PacoteToVacina" ADD CONSTRAINT "_PacoteToVacina_B_fkey" FOREIGN KEY ("B") REFERENCES "Vacina"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PacoteToUsuario" ADD CONSTRAINT "_PacoteToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Pacote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PacoteToUsuario" ADD CONSTRAINT "_PacoteToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
