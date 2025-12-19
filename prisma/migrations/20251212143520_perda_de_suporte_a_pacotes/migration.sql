/*
  Warnings:

  - You are about to drop the `Pacote` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PacoteToUsuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PacoteToVacina` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PacoteToUsuario" DROP CONSTRAINT "_PacoteToUsuario_A_fkey";

-- DropForeignKey
ALTER TABLE "_PacoteToUsuario" DROP CONSTRAINT "_PacoteToUsuario_B_fkey";

-- DropForeignKey
ALTER TABLE "_PacoteToVacina" DROP CONSTRAINT "_PacoteToVacina_A_fkey";

-- DropForeignKey
ALTER TABLE "_PacoteToVacina" DROP CONSTRAINT "_PacoteToVacina_B_fkey";

-- DropTable
DROP TABLE "Pacote";

-- DropTable
DROP TABLE "_PacoteToUsuario";

-- DropTable
DROP TABLE "_PacoteToVacina";
