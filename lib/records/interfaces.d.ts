import { SortDirection } from '../common';
export declare enum RecordStates {
    PENDING = "PENDING",
    COMMITTED = "COMMITTED",
    DELETED = "DELETED"
}
export declare enum RecordStatus {
    VALID = "VALID",
    OBSOLETE = "OBSOLETE",
    EXPIRED = "EXPIRED",
    IRRELEVANT = "IRRELEVANT",
    UNKNOWN = "UNKNOWN"
}
export declare enum RecordStatusExplanation {
    LATEST_VALID = "LATEST_VALID",
    OBSOLETE = "OBSOLETE",
    EXPIRED = "EXPIRED",
    INFO_SERIAL_ARCHIVED = "INFO_SERIAL_ARCHIVED",
    BODY_SERIAL_ARCHIVED = "BODY_SERIAL_ARCHIVED",
    STILL_PENDING = "STILL_PENDING",
    ENTRY_DELETED = "ENTRY_DELETED"
}
export declare const RECORD_IDENTIFIER_DEFAULT: string;
export declare const RECORD_IDENTIFIER_SEPARATOR: string;
export interface RecordFilter {
    page?: number;
    size?: number;
    subject?: string;
    object?: string;
    states?: RecordStates[];
    infos?: string[];
    elements?: string[];
    origin?: string;
    after?: number;
    before?: number;
    value?: string;
    order?: string;
    direction?: SortDirection;
}
export interface EntryRecord {
    id: string;
    key: string;
    subject: string;
    object?: string;
    recordIdentifier: string;
    type: string;
    name: string;
    identifier: string;
    value?: string;
    recordCreation?: number;
    recordExpiration?: number;
    comment?: string;
    origin?: string;
    status?: RecordStatus;
    active: boolean;
    versionIndex: number;
}
export interface OperatorLogElement {
    type: string;
    key: string;
    identifier: string;
    value: string;
}
export declare enum ExtractionConfigOperator {
    AND = "AND",
    OR = "OR"
}
export interface ExtractionConfigCondition {
    key: string;
    value: string;
    regexpValue: boolean;
}
export interface ExtractionFilter {
    page: number;
    size: number;
    operator: ExtractionConfigOperator;
    conditions: ExtractionConfigCondition[];
}
export interface ExtractionResultRecord {
    recordKey: string;
    recordSerial: string;
    recordValue: string;
    recordObject: string;
}
export interface ExtractionResultDto {
    subjectId: string;
    subjectName: string;
    subjectEmail: string;
    records: ExtractionResultRecord[];
}
export interface RecordDto {
    serial: string;
    infoKey?: string;
    bodyKey: string;
    subject: string;
    creationTimestamp: number;
    expirationTimestamp: number;
    type: string;
    value: string;
    status: RecordStatus;
    statusExplanation: RecordStatusExplanation;
    origin: string;
    comment: string;
    transaction: string;
    notificationReports: NotificationReport[];
}
export interface RecordsMap {
    [key: string]: RecordDto[];
}
export declare enum NotificationReportStatus {
    SENT = "SENT",
    DELIVERED = "DELIVERED",
    OPENED = "OPENED",
    INVALID_RECIPIENT = "INVALID_RECIPIENT",
    MAILBOX_FULL = "MAILBOX_FULL",
    ERROR = "ERROR",
    PENDING = "PENDING",
    NONE = "NONE"
}
export declare enum NotificationReportType {
    SMS = "SMS",
    EMAIL = "EMAIL",
    FCM = "FCM",
    XMPP = "XMPP",
    NONE = "NONE"
}
export interface NotificationReport {
    transaction: string;
    creationTimestamp: number;
    status: NotificationReportStatus;
    type: NotificationReportType;
    explanation: string;
}
