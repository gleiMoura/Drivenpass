-- CreateTable
CREATE TABLE "cards" (
    "id" SERIAL NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "holderName" TEXT NOT NULL,
    "secureCode" TEXT NOT NULL,
    "expireDate" TIMESTAMP(3) NOT NULL,
    "isVirtual" BOOLEAN NOT NULL DEFAULT false,
    "type" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cards_holderName_key" ON "cards"("holderName");

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
