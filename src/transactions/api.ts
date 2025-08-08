import { Observable } from "rxjs";
import { ConsentContext } from "../consents/interfaces";
import { RightConsents } from "../api";
import { TransactionDto, TransactionFilter } from "./interfaces";
import { CollectionPage } from "../common";
import { RCApiOptions } from "../http";


export function listTransactions(filter: TransactionFilter, options?: RCApiOptions): Observable<CollectionPage<TransactionDto>> {
  return RightConsents.http<CollectionPage<TransactionDto>>({
    method: 'POST',
    url: `${RightConsents.config.apiRoot}/transactions`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: filter,
    options
  })
}

export function getTransactionContext(txid: string, options?: RCApiOptions): Observable<ConsentContext> {
  return RightConsents.http<ConsentContext>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/transactions/${txid}/context`,
    headers: {
      'Content-Type': 'application/json',
    },
    options
  })
}