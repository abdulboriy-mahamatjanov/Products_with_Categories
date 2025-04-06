/*
  Warnings:

  - Changed the type of `deviceInfo` on the `Sessions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Sessions" DROP COLUMN "deviceInfo",
ADD COLUMN     "deviceInfo" JSONB NOT NULL;
