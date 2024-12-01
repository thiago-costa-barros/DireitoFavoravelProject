"use server";

import { prisma } from "@/app/_lib/prisma";
import { ExternalWebhookReceiverStatus } from "../../utils/enum/publicEnum";
import { MapEnumExternalWebhookReceiverType } from "../../utils/enum/map/mapEnumExternalWebhookReceiverType";
import { parseDate } from "../../utils/parseDate";


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
  const eventName = payload.event;
  const status = ExternalWebhookReceiverStatus.Created;
  const type = MapEnumExternalWebhookReceiverType(webhookType);
  const version = payload.version;
  const payloadData = payload.data;

  try {
    const newExternalWebhookReceiver = await prisma.$transaction([
      prisma.$queryRaw`
      CALL externalschema.executeinsertexternalwebhookreceiver(
      ${requestId}::text,
      ${eventDate}::timestamp,
      ${eventName}::text,
      ${status}::int4,
      ${type}::int4,
      ${version}::text,
      ${payloadData}::jsonb
      )
      `
    ])

    console.log("New ExternalWebhookReceiver");
  } catch (error) {
    console.error(error);
    throw error;
  }
}
