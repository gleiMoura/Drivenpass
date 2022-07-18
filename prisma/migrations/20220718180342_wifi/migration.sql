/*
  Warnings:

  - Added the required column `userId` to the `wifi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wifi" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "wifi" ADD CONSTRAINT "wifi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
