"use server";

import dotenv from 'dotenv';
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "@/app/_lib/prisma";
import { InsertExternalWebhookReceiver } from './events/insertExternalWebhookReceiver';
import { verifyToken } from '../utils/tokenVerification';
import { error } from 'console';
import { VerifyWebhookEvent } from './events/eventsRoutes/verifyWebhookEvent';
import { ExternalWebhookReceiver } from '@prisma/client';

dotenv.config();

export default async function HotmartWebhookReceiverHandler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  console.log('Starting handler');
  //console.log('Method: ',req.method); // Log de debug
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  console.log('Method POST received: '); // Log de debug
  //console.log(req.headers) // Log de debug
  res.status(200).json({
    message: 'Webhook processed successfully',
  });

  if (!verifyToken(req)) {
    console.log('Invalid tokens, access denied: ', error); // Log de debug
    res.status(403).json({
      message: 'Forbidden',
    });
    return;
  }
  const webhookType: string = req.headers["user-agent"] || "DEFAULT";
  const payload = req.body;
  if (!payload || typeof payload !== 'object' || !payload.id) {
    console.error('Invalid payload: ', payload);
    res.status(400).json({
      error: 'Invalid payload.',
    });
    return;
  }
  console.log("Webhook received id: ", payload.id);

  try {
    if (!prisma) {
      throw new Error('Prisma Client not instantiated correctly');
    }

    if (!prisma.externalWebhookReceiver) {
      throw new Error('Model ExternalWebhookReceiver not found in Prisma Client');
    }
    console.log('Prisma Client instantiated correctly')
    
    try {
      console.log('Checking if there is a ReceiverId in our database: ', payload.id);
      const existingExternalWebhookReceiverId = await prisma.externalWebhookReceiver.findUnique({
        where: {
          requestId: payload.id,
          deletionDate: null,
        },
      });
      //console.log('Query result:', existingExternalWebhookReceiverId); //Debuglog 

      if (!existingExternalWebhookReceiverId) {
        const newExternalWebhookReceiver = await InsertExternalWebhookReceiver(payload, webhookType);

        const verifyNewExternalWebhookReceiver: ExternalWebhookReceiver | null = await prisma.externalWebhookReceiver.findUnique({
          where: {
            requestId: payload.id,
            deletionDate: null,
          },
        })
        console.log('Webhook processed successfully. Checking routes events for ExternalWebhookReceiverId: ', verifyNewExternalWebhookReceiver?.id);
        //type verifyNewExternalWebhookReceiver = typeof verifyNewExternalWebhookReceiver[keyof typeof verifyNewExternalWebhookReceiver];
        const eventName: string = payload.event
        const verifyWebhookEvent = await VerifyWebhookEvent(eventName, verifyNewExternalWebhookReceiver)
        
      } else {
        console.log(
          "ExternalWebhookHotmartReceiver already exists for this RequestId: ",
          existingExternalWebhookReceiverId.requestId
        );
      }
    } catch (error) {
      console.error('Error query consult:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error processing webhook:', error);
    throw error;
  }
}
