/*
  Warnings:

  - The primary key for the `technician_profiles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `technician_profiles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_technician_id_fkey";

-- DropIndex
DROP INDEX "technician_profiles_user_id_key";

-- AlterTable
ALTER TABLE "technician_profiles" DROP CONSTRAINT "technician_profiles_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "technician_profiles_pkey" PRIMARY KEY ("user_id");

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_technician_id_fkey" FOREIGN KEY ("technician_id") REFERENCES "technician_profiles"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
