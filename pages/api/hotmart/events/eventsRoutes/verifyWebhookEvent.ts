import { ExternalWebhookReceiverEventType } from "@/pages/api/utils/enum/publicEnum"
import { ExternalWebhookReceiver } from '@prisma/client';
import { VerifyWebhookOrdersEvents } from "./ordersEventsRoutes/verifyWebhookOrdersEvents";

export async function VerifyWebhookEvent(
     eventName: string | null,
     verifyNewExternalWebhookReceiver: ExternalWebhookReceiver | null
)
     : Promise<any> {
     const EnumEventType = ExternalWebhookReceiverEventType
     console.log('Routing event: ', eventName)

     switch (eventName) {
          case EnumEventType.PURCHASE_OUT_OF_SHOPPING_CART.eventName:
          case EnumEventType.SWITCH_PLAN.eventName:
          case EnumEventType.SUBSCRIPTION_CANCELLATION.eventName:
          case EnumEventType.UPDATE_SUBSCRIPTION_CHARGE_DATE.eventName:
               console.log('Handling event: ', eventName);
               break;
          default:
               console.log('Handling event: ', eventName)
               const verifyWebhookOrdersEvents = await VerifyWebhookOrdersEvents(eventName, verifyNewExternalWebhookReceiver)
     }
}