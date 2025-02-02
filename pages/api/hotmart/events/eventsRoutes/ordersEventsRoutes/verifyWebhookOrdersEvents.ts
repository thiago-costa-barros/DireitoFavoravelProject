import { ExternalWebhookReceiverEventType } from "@/pages/api/utils/enum/publicEnum";
import { ExternalWebhookReceiver } from "@prisma/client";

export async function VerifyWebhookOrdersEvents(
    eventName: string | null,
    verifyNewExternalWebhookReceiver: ExternalWebhookReceiver | null
)
    : Promise<any> {
    const payloadData = verifyNewExternalWebhookReceiver?.payload as Record<string, any> | null;
    const transactionId = payloadData?.purchase?.transaction;
    const EnumEventType = ExternalWebhookReceiverEventType;

    console.log('Routing order event to processing TransactionId: ', transactionId)

    switch(eventName){
        case EnumEventType.PURCHASE_CANCELED.eventName:
        case EnumEventType.PURCHASE_COMPLETE.eventName:
        case EnumEventType.PURCHASE_BILLET_PRINTED.eventName:
        case EnumEventType.PURCHASE_APPROVED.eventName:
        case EnumEventType.PURCHASE_PROTEST.eventName:
        case EnumEventType.PURCHASE_REFUNDED.eventName:
        case EnumEventType.PURCHASE_CHARGEBACK.eventName:
        case EnumEventType.PURCHASE_EXPIRED.eventName:
        case EnumEventType.PURCHASE_DELAYED.eventName:
            console.log('Handling order event: ', eventName);
            break;
        default:
            console.log('This event is not mapped: ', eventName)
    
    }        

}