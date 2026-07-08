-- CreateEnum
CREATE TYPE "Weekdays" AS ENUM ('SATURDAY', 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('REQUESTED', 'ACCEPTED', 'DECLINED', 'PAID', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- AlterEnum
ALTER TYPE "UserStatus" ADD VALUE 'DEACTIVATED';

-- AlterTable
ALTER TABLE "technician_profiles" ADD COLUMN     "is_available" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "technician_availability" (
    "id" SERIAL NOT NULL,
    "technician_id" TEXT NOT NULL,
    "weekday" "Weekdays" NOT NULL,
    "start_time" TEXT,
    "end_time" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "technician_availability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookings" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "technician_id" TEXT NOT NULL,
    "service_id" INTEGER NOT NULL,
    "work_date" TIMESTAMP(3) NOT NULL,
    "work_startTime" TIMESTAMP(3) NOT NULL,
    "work_endTime" TIMESTAMP(3) NOT NULL,
    "estimated_time" INTEGER NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL,
    "booking_status" "BookingStatus" NOT NULL DEFAULT 'REQUESTED',
    "cancellation_reason" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "technician_availability_technician_id_weekday_key" ON "technician_availability"("technician_id", "weekday");

-- CreateIndex
CREATE INDEX "bookings_technician_id_work_date_idx" ON "bookings"("technician_id", "work_date");

-- CreateIndex
CREATE INDEX "bookings_customer_id_idx" ON "bookings"("customer_id");

-- AddForeignKey
ALTER TABLE "technician_availability" ADD CONSTRAINT "technician_availability_technician_id_fkey" FOREIGN KEY ("technician_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_technician_id_fkey" FOREIGN KEY ("technician_id") REFERENCES "technician_profiles"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
