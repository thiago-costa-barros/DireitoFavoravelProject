import { ExternalWebhookReceiverEventType } from "@/pages/api/utils/enum/publicEnum"

export async function VerifyWebhookEvent(eventName: string | null): Promise<any> {
    const EnumEventType = ExternalWebhookReceiverEventType
    console.log('Routing event: ', eventName)

    switch(eventName){
        case eventName = EnumEventType.PURCHASE_OUT_OF_SHOPPING_CART.eventName:
            console.log('Handling event: ', eventName);
        break;
        case eventName = EnumEventType.SWITCH_PLAN.eventName:
            console.log('Handling event: ', eventName);
        break;
        case eventName = EnumEventType.SUBSCRIPTION_CANCELLATION.eventName:
            console.log('Handling event: ', eventName);
        break;
        case eventName = EnumEventType.UPDATE_SUBSCRIPTION_CHARGE_DATE.eventName:
            console.log('Handling event: ', eventName);
        break;
        default:
            console.log('Handling event: ', eventName)
    }
}