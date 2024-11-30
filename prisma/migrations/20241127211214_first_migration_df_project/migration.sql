-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "externalschema";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "integrationschema";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "serviceschema";

-- CreateTable
CREATE TABLE "externalschema"."ExternalWebhookReceiver" (
    "ExternalWebhookReceiverId" SERIAL NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,
    "DeletionDate" TIMESTAMP(3),
    "RequestId" TEXT NOT NULL,
    "EventDate" TIMESTAMP(3) NOT NULL,
    "EventName" TEXT NOT NULL,
    "Status" INTEGER NOT NULL,
    "Version" TEXT NOT NULL,
    "Payload" JSONB NOT NULL,

    CONSTRAINT "ExternalWebhookReceiver_pkey" PRIMARY KEY ("ExternalWebhookReceiverId")
);

-- CreateTable
CREATE TABLE "serviceschema"."OrderNote" (
    "OrderNoteId" SERIAL NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,
    "DeletionDate" TIMESTAMP(3),
    "Status" INTEGER NOT NULL,
    "ExternalWebhookReceiverId" INTEGER NOT NULL,
    "ProductId" INTEGER NOT NULL,
    "BuyerId" INTEGER NOT NULL,
    "ProducerName" TEXT,
    "PurchaseId" INTEGER NOT NULL,
    "SubscriptionId" INTEGER,

    CONSTRAINT "OrderNote_pkey" PRIMARY KEY ("OrderNoteId")
);

-- CreateTable
CREATE TABLE "serviceschema"."Product" (
    "ProductId" INTEGER NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,
    "DeletionDate" TIMESTAMP(3),
    "ProductLastOrderDate" TIMESTAMP(3),
    "ProductUcode" TEXT NOT NULL,
    "ProductName" TEXT NOT NULL,
    "ProductHasCoProduction" BOOLEAN NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("ProductId")
);

-- CreateTable
CREATE TABLE "serviceschema"."Affiliates" (
    "AffiliatesId" SERIAL NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,
    "DeletionDate" TIMESTAMP(3),
    "AffiliateLastOrderDate" TIMESTAMP(3),
    "AffiliateCode" TEXT,
    "AffiliateName" TEXT,
    "orderNoteId" INTEGER,

    CONSTRAINT "Affiliates_pkey" PRIMARY KEY ("AffiliatesId")
);

-- CreateTable
CREATE TABLE "serviceschema"."Buyer" (
    "BuyerId" SERIAL NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,
    "DeletionDate" TIMESTAMP(3),
    "BuyerEmail" TEXT NOT NULL,
    "BuyerDocument" TEXT,
    "BuyerName" TEXT,
    "BuyerPhone" TEXT,
    "BuyerAddressCountryIso" TEXT,
    "BuyerAddressCountry" TEXT,
    "BuyerAddressZipCode" TEXT,
    "BuyerAddressState" TEXT,
    "BuyerAddressCity" TEXT,
    "BuyerAddressNeighborhood" TEXT,
    "BuyerAddressStreet" TEXT,
    "BuyerAddressComplement" TEXT,
    "BuyerAddressNumber" TEXT,
    "BuyerLastOrderDate" TIMESTAMP(3),

    CONSTRAINT "Buyer_pkey" PRIMARY KEY ("BuyerId")
);

-- CreateTable
CREATE TABLE "serviceschema"."Commissions" (
    "CommissionsId" SERIAL NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,
    "DeletionDate" TIMESTAMP(3),
    "CommissionsSourceName" TEXT,
    "CommissionsValue" DECIMAL(65,30),
    "CommissionsCurrencyValue" TEXT,
    "CommissionsConvertedToCurrency" TEXT,
    "CommissionsConvertedValue" DECIMAL(65,30),
    "CommissionsCurrencyConvertionRate" DECIMAL(65,30),
    "purchaseId" INTEGER,

    CONSTRAINT "Commissions_pkey" PRIMARY KEY ("CommissionsId")
);

-- CreateTable
CREATE TABLE "serviceschema"."Purchase" (
    "PurchaseId" SERIAL NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,
    "DeletionDate" TIMESTAMP(3),
    "PurchaseOrderDate" TIMESTAMP(3) NOT NULL,
    "PurchaseApprovedDate" TIMESTAMP(3) NOT NULL,
    "PurchaseTransactionId" TEXT NOT NULL,
    "Status" INTEGER NOT NULL,
    "PurchaseFullPriceValue" DECIMAL(65,30) NOT NULL,
    "PurchaseFullPriceCurrency" TEXT NOT NULL,
    "PurchaseOriginalPriceValue" DECIMAL(65,30) NOT NULL,
    "PurchaseOriginalPriceCurrency" TEXT NOT NULL,
    "PurchasePriceValue" DECIMAL(65,30) NOT NULL,
    "PurchasePriceCurrency" TEXT NOT NULL,
    "PurchaseOfferCode" TEXT NOT NULL,
    "PurchaseRecurrencyNumber" INTEGER,
    "PurchaseSubscriptionAnticipationPurchase" BOOLEAN,
    "PurchaseCheckoutCountryName" TEXT NOT NULL,
    "PurchaseCheckoutCountryISO" TEXT NOT NULL,
    "PurchaseUtmCode" TEXT,
    "PurchaseIsOrderBump" BOOLEAN,
    "PurchaseOriginalTransactionId" TEXT,
    "NextChargeDate" TIMESTAMP(3),

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("PurchaseId")
);

-- CreateTable
CREATE TABLE "serviceschema"."PaymentInfos" (
    "PaymentInfosId" SERIAL NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,
    "DeletionDate" TIMESTAMP(3),
    "PaymentInfosBarcode" TEXT,
    "PaymentInfosBilletUrl" TEXT,
    "PaymentInfosPixCode" TEXT,
    "PaymentInfosPixQRCode" TEXT,
    "PaymentInfosPixExpirationDate" TIMESTAMP(3),
    "PaymentInfosType" TEXT,
    "PaymentInfosRefusalReason" TEXT,
    "PaymentInfosInstallmentNumbers" INTEGER,
    "purchaseId" INTEGER,

    CONSTRAINT "PaymentInfos_pkey" PRIMARY KEY ("PaymentInfosId")
);

-- CreateTable
CREATE TABLE "serviceschema"."Subscription" (
    "SubscriptionId" SERIAL NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,
    "DeletionDate" TIMESTAMP(3),
    "SubscriptionPlanId" INTEGER,
    "SubscriptionName" TEXT,
    "SubscriberCode" TEXT,
    "SubscriberStatus" TEXT,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("SubscriptionId")
);

-- CreateTable
CREATE TABLE "integrationschema"."ErrorLog" (
    "ErrorLogId" SERIAL NOT NULL,
    "CreationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" TIMESTAMP(3) NOT NULL,
    "DeletionDate" TIMESTAMP(3),
    "ExternalWebhookReceiverId" INTEGER NOT NULL,
    "ErrorLogDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Message" TEXT NOT NULL,
    "Level" TEXT NOT NULL,
    "ErrorLogPayload" JSONB NOT NULL,

    CONSTRAINT "ErrorLog_pkey" PRIMARY KEY ("ErrorLogId")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExternalWebhookReceiver_RequestId_key" ON "externalschema"."ExternalWebhookReceiver"("RequestId");

-- CreateIndex
CREATE UNIQUE INDEX "Affiliates_AffiliateCode_key" ON "serviceschema"."Affiliates"("AffiliateCode");

-- CreateIndex
CREATE UNIQUE INDEX "Buyer_BuyerEmail_key" ON "serviceschema"."Buyer"("BuyerEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_PurchaseTransactionId_key" ON "serviceschema"."Purchase"("PurchaseTransactionId");

-- AddForeignKey
ALTER TABLE "serviceschema"."OrderNote" ADD CONSTRAINT "OrderNote_ExternalWebhookReceiverId_fkey" FOREIGN KEY ("ExternalWebhookReceiverId") REFERENCES "externalschema"."ExternalWebhookReceiver"("ExternalWebhookReceiverId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serviceschema"."OrderNote" ADD CONSTRAINT "OrderNote_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "serviceschema"."Product"("ProductId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serviceschema"."OrderNote" ADD CONSTRAINT "OrderNote_BuyerId_fkey" FOREIGN KEY ("BuyerId") REFERENCES "serviceschema"."Buyer"("BuyerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serviceschema"."OrderNote" ADD CONSTRAINT "OrderNote_PurchaseId_fkey" FOREIGN KEY ("PurchaseId") REFERENCES "serviceschema"."Purchase"("PurchaseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serviceschema"."OrderNote" ADD CONSTRAINT "OrderNote_SubscriptionId_fkey" FOREIGN KEY ("SubscriptionId") REFERENCES "serviceschema"."Subscription"("SubscriptionId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serviceschema"."Affiliates" ADD CONSTRAINT "Affiliates_orderNoteId_fkey" FOREIGN KEY ("orderNoteId") REFERENCES "serviceschema"."OrderNote"("OrderNoteId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serviceschema"."Commissions" ADD CONSTRAINT "Commissions_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "serviceschema"."Purchase"("PurchaseId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serviceschema"."PaymentInfos" ADD CONSTRAINT "PaymentInfos_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "serviceschema"."Purchase"("PurchaseId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integrationschema"."ErrorLog" ADD CONSTRAINT "ErrorLog_ExternalWebhookReceiverId_fkey" FOREIGN KEY ("ExternalWebhookReceiverId") REFERENCES "externalschema"."ExternalWebhookReceiver"("ExternalWebhookReceiverId") ON DELETE RESTRICT ON UPDATE CASCADE;
