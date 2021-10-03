/*
  Warnings:

  - You are about to drop the column `datanascimento` on the `participante` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `participante` DROP COLUMN `datanascimento`,
    ADD COLUMN `data_nascimento` VARCHAR(191);
