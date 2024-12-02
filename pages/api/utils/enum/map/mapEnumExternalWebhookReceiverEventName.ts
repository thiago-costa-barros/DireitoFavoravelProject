import { ExternalWebhookReceiverEventName } from "../publicEnum";

export function MapEnumExternalWebhookReceiverEventName(eventName: string | undefined): number | undefined {
    if (eventName?.includes(ExternalWebhookReceiverEventName.PURCHASE_CANCELED.eventName)) {
        return ExternalWebhookReceiverEventName.PURCHASE_CANCELED.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventName.PURCHASE_COMPLETE.eventName)) {
        return ExternalWebhookReceiverEventName.PURCHASE_COMPLETE.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventName.PURCHASE_BILLET_PRINTED.eventName)) {
        return ExternalWebhookReceiverEventName.PURCHASE_BILLET_PRINTED.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventName.PURCHASE_APPROVED.eventName)) {
        return ExternalWebhookReceiverEventName.PURCHASE_APPROVED.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventName.PURCHASE_PROTEST.eventName)) {
        return ExternalWebhookReceiverEventName.PURCHASE_PROTEST.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventName.PURCHASE_REFUNDED.eventName)) {
        return ExternalWebhookReceiverEventName.PURCHASE_REFUNDED.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventName.PURCHASE_CHARGEBACK.eventName)) {
        return ExternalWebhookReceiverEventName.PURCHASE_CHARGEBACK.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventName.PURCHASE_EXPIRED.eventName)) {
        return ExternalWebhookReceiverEventName.PURCHASE_EXPIRED.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventName.PURCHASE_DELAYED.eventName)) {
        return ExternalWebhookReceiverEventName.PURCHASE_DELAYED.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventName.PURCHASE_OUT_OF_SHOPPING_CART.eventName)) {
        return ExternalWebhookReceiverEventName.PURCHASE_OUT_OF_SHOPPING_CART.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventName.SWITCH_PLAN.eventName)) {
        return ExternalWebhookReceiverEventName.SWITCH_PLAN.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventName.SUBSCRIPTION_CANCELLATION.eventName)) {
        return ExternalWebhookReceiverEventName.SUBSCRIPTION_CANCELLATION.eventValue;
    } else if (eventName?.includes(ExternalWebhookReceiverEventName.UPDATE_SUBSCRIPTION_CHARGE_DATE.eventName)) {
        return ExternalWebhookReceiverEventName.UPDATE_SUBSCRIPTION_CHARGE_DATE.eventValue;
    } 
    else {
        return undefined;
    }
};