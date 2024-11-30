import { ExternalWebhookReceiverType } from "../publicEnum";


export function MapEnumExternalWebhookReceiverType(type: string | undefined): ExternalWebhookReceiverType{
    if(type?.toLocaleLowerCase().includes('insomnia')) {
        return ExternalWebhookReceiverType.Insomnia;
    }
    else if(type?.toLocaleLowerCase().includes('hotmart')) {
        return ExternalWebhookReceiverType.Hotmart;
    }
    else {
        return ExternalWebhookReceiverType.Default
    }
}