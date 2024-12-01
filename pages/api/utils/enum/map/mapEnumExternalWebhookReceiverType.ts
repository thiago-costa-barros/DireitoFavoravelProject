import { ExternalWebhookReceiverType } from "../publicEnum";

export function MapEnumExternalWebhookReceiverType(type: string | undefined): number {
    if (type?.includes(ExternalWebhookReceiverType.Insomnia.typeMessage)) {
        return ExternalWebhookReceiverType.Insomnia.typeValue; 
    } else if (type?.includes(ExternalWebhookReceiverType.Hotmart.typeMessage)) {
        return ExternalWebhookReceiverType.Hotmart.typeValue; 
    } else {
        return ExternalWebhookReceiverType.Default.typeValue; 
    }
}
