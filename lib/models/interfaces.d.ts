import { SortDirection } from '../common';
export declare enum ModelEntryStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    DELETED = "DELETED"
}
export declare type ModelEntryStatuses = keyof ModelEntryStatus;
export declare const MODEL_ENTRY_STATUSES: ModelEntryStatuses[];
export interface ModelData {
    type: ModelDataType;
}
export declare enum ModelVersionStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    ARCHIVED = "ARCHIVED"
}
export declare enum ModelVersionType {
    MAJOR = "MAJOR",
    MINOR = "MINOR"
}
export interface Information extends ModelData {
    type: 'information';
    title: string;
    header: string;
    footer: string;
    jurisdiction: string;
    jurisdictionVisible: boolean;
    dataController: Controller;
    dataControllerVisible: boolean;
    scope: string;
    scopeVisible: boolean;
    shortNoticeLink: string;
    shortNoticeLinkVisible: boolean;
    privacyPolicyUrl: string;
    customPrivacyPolicyText: string;
}
export declare enum DefaultInfoTag {
    DEFAULT_INFO_USER = "DEFAULT_INFO_USER",
    DEFAULT_INFO_OPERATOR = "DEFAULT_INFO_OPERATOR",
    DEFAULT_INFO_FORM = "DEFAULT_INFO_FORM"
}
export declare const DEFAULT_INFO_TAGS: string[];
export interface Controller {
    company: string;
    info: string;
    address: string;
    email: string;
    phoneNumber: string;
}
export declare enum RetentionUnit {
    YEAR = "YEAR",
    MONTH = "MONTH",
    WEEK = "WEEK"
}
export declare const RETENTION_UNITS: string[];
export declare enum ProcessingPurpose {
    CONSENT_CORE_SERVICE = "CONSENT_CORE_SERVICE",
    CONSENT_IMPROVED_SERVICE = "CONSENT_IMPROVED_SERVICE",
    CONSENT_MARKETING = "CONSENT_MARKETING",
    CONSENT_THIRD_PART_SHARING = "CONSENT_THIRD_PART_SHARING",
    CONSENT_RESEARCH = "CONSENT_RESEARCH"
}
export declare const PROCESSING_PURPOSES: string[];
export declare enum ProcessingLegalBasis {
    LEGAL_BASIS_CONSENT = "LEGAL_BASIS_CONSENT",
    LEGAL_BASIS_CONTRACT = "LEGAL_BASIS_CONTRACT",
    LEGAL_BASIS_LEGITIMATE_INTEREST = "LEGAL_BASIS_LEGITIMATE_INTEREST",
    LEGAL_BASIS_LEGAL_OBLIGATION = "LEGAL_BASIS_LEGAL_OBLIGATION",
    LEGAL_BASIS_PUBLIC_INTEREST = "LEGAL_BASIS_PUBLIC_INTEREST",
    LEGAL_BASIS_VITAL_INTEREST = "LEGAL_BASIS_VITAL_INTEREST"
}
export declare const PROCESSING_LEGAL_BASES: string[];
export interface RetentionInfo {
    label: string;
    value: number;
    unit: RetentionUnit;
    fullText: string;
}
export interface Processing extends ModelData {
    type: 'processing';
    title: string;
    legalBasis: ProcessingLegalBasis;
    data: string;
    retention: RetentionInfo;
    usage: string;
    purposes: ProcessingPurpose[];
    containsSensitiveData: boolean;
    containsMedicalData: boolean;
    dataController: Controller;
    dataControllerVisible: boolean;
    thirdParties: {
        name: string;
        value: string;
    }[];
    refusable: boolean;
}
export declare enum PreferenceValueType {
    TOGGLE = "TOGGLE",
    CHECKBOXES = "CHECKBOXES",
    RADIO_BUTTONS = "RADIO_BUTTONS",
    LIST_SINGLE = "LIST_SINGLE",
    LIST_MULTI = "LIST_MULTI",
    FREE_TEXT = "FREE_TEXT"
}
export declare const PREFERENCE_VALUE_TYPES: PreferenceValueType[];
export interface Preference extends ModelData {
    type: 'preference';
    label: string;
    description: string;
    options: string[];
    valueType: PreferenceValueType;
    includeDefault: boolean;
    defaultValues: string[];
    optional: boolean;
}
export interface Conditions extends ModelData {
    type: 'conditions';
    title: string;
    body: string;
    refusable?: boolean;
}
export declare enum LogoPosition {
    LEFT = "LEFT",
    CENTER = "CENTER",
    RIGHT = "RIGHT"
}
export declare const LOGO_POSITIONS: string[];
export interface Theme extends ModelData {
    type: 'theme';
    name: string;
    icon: string;
    css: string;
    logoPath?: string;
    logoAltText?: string;
    logoPosition?: LogoPosition;
}
export interface Email extends ModelData {
    type: 'email';
    sender: string;
    subject: string;
    title: string;
    body: string;
    buttonLabel: string;
    footer: string;
    signature: string;
}
export interface FormLayout extends ModelData {
    type: 'layout';
    info: string;
    elements: string[];
    orientation?: FormLayoutOrientation;
    existingElementsVisible?: boolean;
    validityVisible?: boolean;
    includeIFrameResizer?: boolean;
    acceptAllVisible?: boolean;
    acceptAllText?: string;
    submitText?: string;
    cancelText?: string;
    cancelVisible?: boolean;
    footerOnTop?: boolean;
}
export declare enum FormLayoutOrientation {
    HORIZONTAL = "HORIZONTAL",
    VERTICAL = "VERTICAL"
}
export declare const CONSENT_FORM_ORIENTATIONS: FormLayoutOrientation[];
export declare enum ConsentOrigin {
    WEBFORM = "WEBFORM",
    OPERATOR = "OPERATOR",
    USER = "USER"
}
export declare const CONSENT_ORIGIN: ConsentOrigin[];
export declare type ModelDataType = 'information' | 'processing' | 'conditions' | 'theme' | 'email' | 'preference' | 'layout';
export declare enum PreviewType {
    FORM = "FORM",
    RECEIPT = "RECEIPT",
    EMAIL = "EMAIL"
}
export declare const PREVIEW_TYPES: string[];
export interface ModelFilter {
    types?: ModelDataType[];
    keys?: string[];
    keyword?: string;
    statuses?: ModelEntryStatus[];
    languages?: string[];
    page?: number;
    size?: number;
    order?: string;
    direction?: SortDirection;
    tags?: string[];
}
export interface PreviewDto {
    language: string;
    orientation: FormLayoutOrientation;
    data?: ModelData;
    previewType?: PreviewType;
}
export interface CreateModelDto {
    key: string;
    name: string;
    description: string;
    type: ModelDataType;
}
export interface UpdateModelDto {
    name: string;
    description: string;
}
export interface ModelVersionDtoLight<T extends ModelData = ModelData> {
    id?: string;
    serial?: string;
    parent?: string;
    child?: string;
    author?: string;
    defaultLanguage?: string;
    availableLanguages?: string[];
    status?: ModelVersionStatus;
    type?: ModelVersionType;
    creationDate?: number;
    modificationDate?: number;
    identifier?: string;
}
export interface ModelVersionDto<T extends ModelData = ModelData> extends ModelVersionDtoLight {
    data: {
        [language: string]: T;
    };
}
export interface ModelEntryDtoPartial {
    id: string;
    key: string;
    name: string;
    description: string;
    type: ModelDataType;
    creationDate: number;
    modificationDate: number;
    status: ModelEntryStatus;
    defaultLanguage: string;
    availableLanguages: string[];
    tags?: string[];
}
export interface ModelEntryDto extends ModelEntryDtoPartial {
    versions: ModelVersionDtoLight[];
}
export interface ModelEntryExportDto extends ModelEntryDtoPartial {
    versions: ModelVersionDto[];
}
