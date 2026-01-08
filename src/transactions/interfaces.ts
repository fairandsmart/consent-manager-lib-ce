import { SortDirection } from "../common";

export enum TransactionStates {
    CREATED = 'CREATED',
    COMMITTED = 'COMMITTED',
    CANCELLED = 'CANCELLED',
    TIMEOUT = 'TIMEOUT',
    SUBMITTED = 'SUBMITTED',
    ROLLBACK = 'ROLLBACK'
}

export interface TransactionDto {
    id: string;
    subject: string;
    state: string;
    creationtimestamp: string;
    expirationtimestamp: string;
    emailReceipt: EmailReceiptDto;
}
export interface EmailReceiptDto {
    status: boolean;
    createdAt: string;
    errorMessage: string;
}
export interface TransactionFilter {
    page?: number;
    size?: number;
    subject?: string;
    states?: TransactionStates[];
    creaafter?: number;
    creabefore?: number;
    expafter?: number;
    expbefore?: number;
    order?: string;
    direction?: SortDirection;
}