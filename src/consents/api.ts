import { RightConsents } from '../api';
import { Observable } from 'rxjs';
import { ConsentContext, ConsentTransaction } from './interfaces';
import { RCApiOptions } from '../http';

export function createTransactionJson(ctx: ConsentContext, lang: string, options?: RCApiOptions): Observable<ConsentTransaction> {
  return RightConsents.http<ConsentTransaction>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/consents`,
    body: ctx,
    resolveHeaders: true,
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': lang,
    },
    options
  });
}

export function getTransactionJson(txid: string, options?: RCApiOptions): Observable<ConsentTransaction> {
  return RightConsents.http<ConsentTransaction>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/consents/${txid}`,
    headers: {
      'Content-Type': 'application/json',
    },
    options
  });
}

export function getTransactionContext(txid: string): Observable<ConsentContext> {
  return RightConsents.http<ConsentContext>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/consents/${txid}/context`,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export function postSubmissionValuesJson(txid: string, values: {[key: string]: string[]}, options?: RCApiOptions): Observable<string> {
  return RightConsents.http<string>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/consents/${txid}/submit`,
    body: values,
    responseType: 'text',
    headers: {
      'Content-Type': 'application/json',
    },
    options
  });
}

export function getSubmitFormPreview(ctx: ConsentContext, lang: string, options?: RCApiOptions): Observable<string> {
  return RightConsents.http<string>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/consents/preview`,
    body: ctx,
    responseType: 'text',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'text/html',
      'Accept-Language': lang,
    },
    options
  });
}
