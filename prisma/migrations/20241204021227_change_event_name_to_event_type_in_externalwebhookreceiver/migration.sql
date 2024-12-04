/*
  Warnings:

  - You are about to drop the column `EventName` on the `ExternalWebhookReceiver` table. All the data in the column will be lost.
  - Added the required column `EventType` to the `ExternalWebhookReceiver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "externalschema"."ExternalWebhookReceiver" DROP COLUMN "EventName",
ADD COLUMN     "EventType" INTEGER NOT NULL;
