import { ExternalWebhookReceiverType } from "../publicEnum";

export function MapEnumExternalWebhookReceiverType(type: string | undefined): number {
    if (type?.includes(ExternalWebhookReceiverType.WebhookTest.typeMessage)) {
        return ExternalWebhookReceiverType.WebhookTest.typeValue; 
    } else if (type?.includes(ExternalWebhookReceiverType.Hotmart.typeMessage)) {
        return ExternalWebhookReceiverType.Hotmart.typeValue; 
    } else {
        return ExternalWebhookReceiverType.Default.typeValue; 
    }
}
