import { Observable } from 'rxjs';
import { ConsentContext, ConsentTransaction } from './interfaces';
import { RCApiOptions } from '../http';
export declare function createTransactionJson(ctx: ConsentContext, lang: string, options?: RCApiOptions): Observable<ConsentTransaction>;
export declare function getTransactionJson(txid: string, options?: RCApiOptions): Observable<ConsentTransaction>;
export declare function postSubmissionValuesJson(txid: string, values: {
    [key: string]: string[];
}, options?: RCApiOptions): Observable<string>;
export declare function getSubmitFormPreview(ctx: ConsentContext, lang: string, options?: RCApiOptions): Observable<string>;
