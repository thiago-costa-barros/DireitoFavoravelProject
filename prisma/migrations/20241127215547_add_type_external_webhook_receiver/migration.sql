/*
  Warnings:

  - Added the required column `Type` to the `ExternalWebhookReceiver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "externalschema"."ExternalWebhookReceiver" ADD COLUMN     "Type" INTEGER NOT NULL;
