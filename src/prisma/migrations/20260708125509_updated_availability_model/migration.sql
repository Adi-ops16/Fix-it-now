-- DropForeignKey
ALTER TABLE "technician_availability" DROP CONSTRAINT "technician_availability_technician_id_fkey";

-- AddForeignKey
ALTER TABLE "technician_availability" ADD CONSTRAINT "technician_availability_technician_id_fkey" FOREIGN KEY ("technician_id") REFERENCES "technician_profiles"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
