/*
  Warnings:

  - You are about to drop the `vacinacoes_usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vacinas_catalogo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."vacinacoes_usuario" DROP CONSTRAINT "vacinacoes_usuario_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."vacinacoes_usuario" DROP CONSTRAINT "vacinacoes_usuario_vacina_id_fkey";

-- DropTable
DROP TABLE "public"."vacinacoes_usuario";

-- DropTable
DROP TABLE "public"."vacinas_catalogo";

-- CreateTable
CREATE TABLE "Vacina" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "fabricante" TEXT NOT NULL,
    "descricao" TEXT,
    "dosesRecomendadas" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vacina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VacinacaoUsuario" (
    "id" SERIAL NOT NULL,
    "dataAplicacao" TIMESTAMP(3) NOT NULL,
    "dose" "DoseStatus" NOT NULL,
    "lote" TEXT,
    "localAplicacao" TEXT,
    "usuarioId" INTEGER NOT NULL,
    "vacinaId" INTEGER NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VacinacaoUsuario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VacinacaoUsuario" ADD CONSTRAINT "VacinacaoUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VacinacaoUsuario" ADD CONSTRAINT "VacinacaoUsuario_vacinaId_fkey" FOREIGN KEY ("vacinaId") REFERENCES "Vacina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
