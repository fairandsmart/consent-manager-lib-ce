import { Observable } from 'rxjs';
import { RightConsents } from '../api';
import { WebhookDto } from './interfaces';
import { RCApiOptions } from '../http';

export function listWebhooks(options?: RCApiOptions): Observable<WebhookDto> {
    return RightConsents.http<WebhookDto>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/webhooks`,
        options
    });
}

export function createWebhook(webhook: WebhookDto, options?: RCApiOptions): Observable<WebhookDto> {
    return RightConsents.http<WebhookDto>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/webhooks`,
        body: webhook,
        resolveHeaders: true,
        headers: {
            'Content-Type': 'application/json'
        },
        options
    });
}

export function getWebhook(webhookid: string, options?: RCApiOptions): Observable<WebhookDto> {
    return RightConsents.http<WebhookDto>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/webhooks/${webhookid}`,
        options
    });
}

export function updateWebhook(webhookid: string, webhook: WebhookDto, options?: RCApiOptions): Observable<WebhookDto> {
    return RightConsents.http<WebhookDto>({
        method: 'PUT',
        url: `${RightConsents.config.apiRoot}/webhooks/${webhookid}`,
        body: webhook,
        options
    });
}

export function deleteWebhook(webhookid: string, options?: RCApiOptions): Observable<WebhookDto> {
    return RightConsents.http<WebhookDto>({
        method: 'DELETE',
        url: `${RightConsents.config.apiRoot}/webhooks/${webhookid}`,
        options
    });
}
