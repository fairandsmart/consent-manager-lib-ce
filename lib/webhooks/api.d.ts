import { Observable } from 'rxjs';
import { WebhookDto } from './interfaces';
import { RCApiOptions } from '../http';
export declare function listWebhooks(options?: RCApiOptions): Observable<WebhookDto[]>;
export declare function createWebhook(webhook: WebhookDto, options?: RCApiOptions): Observable<WebhookDto>;
export declare function getWebhook(webhookid: string, options?: RCApiOptions): Observable<WebhookDto>;
export declare function updateWebhook(webhookid: string, webhook: WebhookDto, options?: RCApiOptions): Observable<WebhookDto>;
export declare function deleteWebhook(webhookid: string, options?: RCApiOptions): Observable<WebhookDto>;
