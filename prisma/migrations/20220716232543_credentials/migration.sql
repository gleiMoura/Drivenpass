-- CreateTable
CREATE TABLE "Credentials" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Credentials_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Credentials" ADD CONSTRAINT "Credentials_userName_fkey" FOREIGN KEY ("userName") REFERENCES "Users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
