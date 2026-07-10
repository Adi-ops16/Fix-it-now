/*
  Warnings:

  - You are about to drop the column `receipt_url` on the `payments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "receipt_url",
ALTER COLUMN "currency" SET DEFAULT 'usd',
ALTER COLUMN "stripe_intent_id" DROP NOT NULL;
