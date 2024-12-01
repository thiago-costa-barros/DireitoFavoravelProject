export const ExternalWebhookReceiverType = {
  WebhookTest: {
      typeMessage: "webhooktest/any_platform",
      typeValue: 0
  },
  Hotmart: {
      typeMessage: "Jodd HTTP",
      typeValue: 1
  },
  Default: {
      typeMessage: "Default",
      typeValue: 2
  }
} as const;
type ExternalWebhookReceiverType = typeof ExternalWebhookReceiverType[keyof typeof ExternalWebhookReceiverType];
 
/*================================================================================================================================================================= */

  export enum ExternalWebhookReceiverStatus {
    Created = 0,
    Processed = 1,
  }

  /*================================================================================================================================================================= */

