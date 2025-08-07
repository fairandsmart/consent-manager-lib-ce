import { Observable } from "rxjs";
import { ConsentContext } from "../consents/interfaces";
import { RightConsents } from "../api";
import { TransactionDto, TransactionFilter } from "./interfaces";
import { CollectionPage } from "../common";


export function listTransactions(filter: TransactionFilter): Observable<CollectionPage<TransactionDto>> {
  return RightConsents.http<CollectionPage<TransactionDto>>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/transactions`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: filter
  })
}

export function getTransactionContext(txid: string): Observable<ConsentContext> {
  return RightConsents.http<ConsentContext>({
    method: 'GET',
    url: `${RightConsents.config.apiRoot}/transactions/${txid}/context`,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}