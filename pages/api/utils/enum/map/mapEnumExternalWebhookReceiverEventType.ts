import { ExternalWebhookReceiverEventType } from "../publicEnum";

export function MapEnumExternalWebhookReceiverEventType(eventName: string | undefined): number | undefined {
    if (eventName?.includes(ExternalWebhookReceiverEventType.PURCHASE_CANCELED.eventName)) {
        return ExternalWebhookReceiverEventType.PURCHASE_CANCELED.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventType.PURCHASE_COMPLETE.eventName)) {
        return ExternalWebhookReceiverEventType.PURCHASE_COMPLETE.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventType.PURCHASE_BILLET_PRINTED.eventName)) {
        return ExternalWebhookReceiverEventType.PURCHASE_BILLET_PRINTED.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventType.PURCHASE_APPROVED.eventName)) {
        return ExternalWebhookReceiverEventType.PURCHASE_APPROVED.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventType.PURCHASE_PROTEST.eventName)) {
        return ExternalWebhookReceiverEventType.PURCHASE_PROTEST.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventType.PURCHASE_REFUNDED.eventName)) {
        return ExternalWebhookReceiverEventType.PURCHASE_REFUNDED.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventType.PURCHASE_CHARGEBACK.eventName)) {
        return ExternalWebhookReceiverEventType.PURCHASE_CHARGEBACK.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventType.PURCHASE_EXPIRED.eventName)) {
        return ExternalWebhookReceiverEventType.PURCHASE_EXPIRED.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventType.PURCHASE_DELAYED.eventName)) {
        return ExternalWebhookReceiverEventType.PURCHASE_DELAYED.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventType.PURCHASE_OUT_OF_SHOPPING_CART.eventName)) {
        return ExternalWebhookReceiverEventType.PURCHASE_OUT_OF_SHOPPING_CART.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventType.SWITCH_PLAN.eventName)) {
        return ExternalWebhookReceiverEventType.SWITCH_PLAN.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventType.SUBSCRIPTION_CANCELLATION.eventName)) {
        return ExternalWebhookReceiverEventType.SUBSCRIPTION_CANCELLATION.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventType.UPDATE_SUBSCRIPTION_CHARGE_DATE.eventName)) {
        return ExternalWebhookReceiverEventType.UPDATE_SUBSCRIPTION_CHARGE_DATE.eventValue;
    } 
    else {
        return undefined;
    }
};