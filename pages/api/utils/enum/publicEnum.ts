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

  export const ExternalWebhookReceiverEventType = {
    PURCHASE_CANCELED :{
      eventName: "PURCHASE_CANCELED",
      eventValue: 0
    },
    PURCHASE_COMPLETE: {
      eventName: "PURCHASE_COMPLETE",
      eventValue: 1
    },
    PURCHASE_BILLET_PRINTED: {
      eventName: "PURCHASE_BILLET_PRINTED",
      eventValue: 2
    },
    PURCHASE_APPROVED: {
      eventName: "PURCHASE_APPROVED",
      eventValue: 3
    },
    PURCHASE_PROTEST: {
      eventName: "PURCHASE_PROTEST",
      eventValue: 4
    },
    PURCHASE_REFUNDED: {
      eventName: "PURCHASE_REFUNDED",
      eventValue: 5
    },
    PURCHASE_CHARGEBACK: {
      eventName: "PURCHASE_CHARGEBACK",
      eventValue: 6
    }, 
    PURCHASE_EXPIRED: {
      eventName: "PURCHASE_EXPIRED",
      eventValue: 7
    },
    PURCHASE_DELAYED: {
      eventName: "PURCHASE_DELAYED",
      eventValue: 8
    },
    PURCHASE_OUT_OF_SHOPPING_CART: {
      eventName: "PURCHASE_OUT_OF_SHOPPING_CART",
      eventValue: 9
    }, 
    SWITCH_PLAN: {
      eventName: "SWITCH_PLAN",
      eventValue: 10
    },
    SUBSCRIPTION_CANCELLATION: {
      eventName: "SUBSCRIPTION_CANCELLATION",
      eventValue: 11
    },
    UPDATE_SUBSCRIPTION_CHARGE_DATE: {
      eventName: "UPDATE_SUBSCRIPTION_CHARGE_DATE",
      eventValue: 12
    }
  } as const;
  type ExternalWebhookReceiverEventType = typeof ExternalWebhookReceiverEventType[keyof typeof ExternalWebhookReceiverEventType];

  /*================================================================================================================================================================= */