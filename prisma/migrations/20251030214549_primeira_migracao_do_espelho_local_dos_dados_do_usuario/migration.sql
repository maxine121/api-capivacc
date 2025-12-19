-- CreateEnum
CREATE TYPE "DoseStatus" AS ENUM ('UNICA', 'PRIMEIRA', 'SEGUNDA', 'TERCEIRA', 'REFORCO', 'OUTRA');

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vacinas_catalogo" (
    "id" SERIAL NOT NULL,
    "id_externo_conecta_recife" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "fabricante" TEXT NOT NULL,
    "descricao" TEXT,
    "doses_recomendadas" INTEGER NOT NULL DEFAULT 1,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vacinas_catalogo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vacinacoes_usuario" (
    "id" SERIAL NOT NULL,
    "id_externo_conecta_recife" TEXT NOT NULL,
    "data_aplicacao" TIMESTAMP(3) NOT NULL,
    "dose" "DoseStatus" NOT NULL,
    "lote" TEXT,
    "local_aplicacao" TEXT,
    "usuario_id" INTEGER NOT NULL,
    "vacina_id" INTEGER NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vacinacoes_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_cpf_key" ON "usuarios"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "vacinas_catalogo_id_externo_conecta_recife_key" ON "vacinas_catalogo"("id_externo_conecta_recife");

-- CreateIndex
CREATE UNIQUE INDEX "vacinacoes_usuario_id_externo_conecta_recife_key" ON "vacinacoes_usuario"("id_externo_conecta_recife");

-- AddForeignKey
ALTER TABLE "vacinacoes_usuario" ADD CONSTRAINT "vacinacoes_usuario_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vacinacoes_usuario" ADD CONSTRAINT "vacinacoes_usuario_vacina_id_fkey" FOREIGN KEY ("vacina_id") REFERENCES "vacinas_catalogo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
