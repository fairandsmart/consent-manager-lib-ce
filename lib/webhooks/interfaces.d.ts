export interface WebhookDto {
    id?: string;
    name: string;
    targetUrl: string;
    subscribedActions: SubscribedActions[];
    delivery?: WebhookDeliveryDto[];
}
export declare enum SubscribedActions {
    CONSENT_COMMIT = "CONSENT_COMMIT"
}
export interface WebhookDeliveryDto {
    id?: string;
    sourceId: string;
    webhookId: string;
    redelivery: boolean;
    createdAt: string;
    deliveredAt: string;
    duration: string;
    status: string;
    statusCode: number;
    action: SubscribedActions;
}
