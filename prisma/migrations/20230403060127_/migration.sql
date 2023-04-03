/*
  Warnings:

  - A unique constraint covering the columns `[userName,password]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_userName_password_key" ON "User"("userName", "password");
