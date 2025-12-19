/*
  Warnings:

  - Added the required column `adminId` to the `Vacina` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `VacinacaoUsuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vacina" ADD COLUMN     "adminId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "VacinacaoUsuario" ADD COLUMN     "adminId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Vacina" ADD CONSTRAINT "Vacina_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VacinacaoUsuario" ADD CONSTRAINT "VacinacaoUsuario_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
