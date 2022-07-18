/*
  Warnings:

  - Added the required column `password` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "password" TEXT NOT NULL;
