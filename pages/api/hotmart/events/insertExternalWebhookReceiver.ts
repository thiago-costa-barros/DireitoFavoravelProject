"use server";

import { prisma } from "@/app/_lib/prisma";
import { ExternalWebhookReceiverStatus } from "../../utils/enum/publicEnum";
import { MapEnumExternalWebhookReceiverType } from "../../utils/enum/map/mapEnumExternalWebhookReceiverType";
import { parseDate } from "../../utils/parseDate";
import { MapEnumExternalWebhookReceiverEventType } from "../../utils/enum/map/mapEnumExternalWebhookReceiverEventType";
import { externalschema_ExecuteInsertExternalWebhookReceiver } from "@prisma/client/sql";

type Json =  { [key: string]: Json };

interface Payload {
  id: string;
  creation_date: bigint; 
  event: string;
  version: string;
  data: Json; 
}

export async function InsertExternalWebhookReceiver(
  payload: Payload,
  webhookType: string
): Promise<void> {

  const requestId = payload.id;
  const eventDate = parseDate(payload.creation_date);
  const eventType = MapEnumExternalWebhookReceiverEventType(payload.event);
  const status = ExternalWebhookReceiverStatus.Created;
  const type = MapEnumExternalWebhookReceiverType(webhookType);
  const version = payload.version;
  const payloadData = payload.data;

  try {
    const newExternalWebhookReceiver = await prisma.$transaction([
      prisma.$queryRawTyped(externalschema_ExecuteInsertExternalWebhookReceiver(
        requestId,
        eventDate,
        eventType,
        status,
        type,
        version,
        payloadData
      ))
    ])

    console.log("New ExternalWebhookReceiver");
  } catch (error) {
    console.error(error);
    throw error;
  }
}
