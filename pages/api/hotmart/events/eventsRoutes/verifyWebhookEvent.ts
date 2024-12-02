import { ExternalWebhookReceiverEventName } from "@/pages/api/utils/enum/publicEnum"

export async function VerifyWebhookEvent(data: Record<string, unknown> | null): Promise<any> {
    const eventName = data?.eventName
    const EnumEventName = ExternalWebhookReceiverEventName
    console.log('Routing event: ', eventName)

    switch(eventName){
        case eventName == EnumEventName.PURCHASE_OUT_OF_SHOPPING_CART.eventName:
            console.log('Handling event: ', eventName);
        break;
        case eventName == EnumEventName.SWITCH_PLAN.eventName:
            console.log('Handling event: ', eventName);
        break;
        case eventName == EnumEventName.SUBSCRIPTION_CANCELLATION.eventName:
            console.log('Handling event: ', eventName);
        break;
        case eventName == EnumEventName.UPDATE_SUBSCRIPTION_CHARGE_DATE.eventName:
            console.log('Handling event: ', eventName);
        break;
        default:
            console.log('Handling event: ', eventName)
    }
}