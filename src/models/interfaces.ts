import { SortDirection } from '../common';

export enum ModelEntryStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    DELETED = 'DELETED'
}

export type ModelEntryStatuses = keyof ModelEntryStatus;
export const MODEL_ENTRY_STATUSES: ModelEntryStatuses[] = Object.keys(ModelEntryStatus) as ModelEntryStatuses[];

export interface ModelData {
    type: ModelDataType;
}

export enum ModelVersionStatus {
    DRAFT = 'DRAFT',
    ACTIVE = 'ACTIVE',
    ARCHIVED = 'ARCHIVED'
}

export enum ModelVersionType {
    MAJOR = 'MAJOR',
    MINOR = 'MINOR'
}

export enum Visibility {
    FORM_AND_RECEIPT = 'FORM_AND_RECEIPT',
    RECEIPT_ONLY = 'RECEIPT_ONLY',
    HIDDEN = 'HIDDEN'
}
export const VISIBILITIES: Visibility[] = Object.keys(Visibility) as Visibility[];

export interface Information extends ModelData {
    type: 'information';
    title: string;
    header: string;
    footer: string;
    jurisdiction: string;
    jurisdictionVisibility: Visibility;
    dataController: Controller;
    dataControllerVisibility: Visibility;
    scope: string;
    scopeVisibility: Visibility;
    shortNoticeLink: string;
    shortNoticeLinkVisibility: Visibility;
    privacyPolicyUrl: string;
    customPrivacyPolicyText: string;
}

export enum DefaultInfoTag {
    DEFAULT_INFO_USER = 'DEFAULT_INFO_USER',
    DEFAULT_INFO_OPERATOR = 'DEFAULT_INFO_OPERATOR',
    DEFAULT_INFO_FORM = 'DEFAULT_INFO_FORM',
}

export const DEFAULT_INFO_TAGS = Object.keys(DefaultInfoTag);

export interface Controller {
    company: string;
    info: string;
    address: string;
    email: string;
    phoneNumber: string;
}

export enum RetentionUnit {
    YEAR = 'YEAR',
    MONTH = 'MONTH',
    WEEK = 'WEEK'
}

export const RETENTION_UNITS = Object.keys(RetentionUnit);

export enum ProcessingPurpose {
    CONSENT_CORE_SERVICE = 'CONSENT_CORE_SERVICE',
    CONSENT_IMPROVED_SERVICE = 'CONSENT_IMPROVED_SERVICE',
    CONSENT_MARKETING = 'CONSENT_MARKETING',
    CONSENT_THIRD_PART_SHARING = 'CONSENT_THIRD_PART_SHARING',
    CONSENT_RESEARCH = 'CONSENT_RESEARCH'
}

export const PROCESSING_PURPOSES = Object.keys(ProcessingPurpose);

export enum ProcessingLegalBasis {
    LEGAL_BASIS_CONSENT = 'LEGAL_BASIS_CONSENT',
    LEGAL_BASIS_CONTRACT = 'LEGAL_BASIS_CONTRACT',
    LEGAL_BASIS_LEGITIMATE_INTEREST = 'LEGAL_BASIS_LEGITIMATE_INTEREST',
    LEGAL_BASIS_LEGAL_OBLIGATION = 'LEGAL_BASIS_LEGAL_OBLIGATION',
    LEGAL_BASIS_PUBLIC_INTEREST = 'LEGAL_BASIS_PUBLIC_INTEREST',
    LEGAL_BASIS_VITAL_INTEREST = 'LEGAL_BASIS_VITAL_INTEREST'
}

export const PROCESSING_LEGAL_BASES = Object.keys(ProcessingLegalBasis);

export interface RetentionInfo {
    label: string;
    value: number;
    unit: RetentionUnit;
    fullText: string;
}

export interface Processing extends ModelData {
    type: 'processing';
    title: string;
    titleVisibility: Visibility;
    legalBases: ProcessingLegalBasis[];
    legalBasesVisibility: Visibility;
    data: string;
    dataVisibility: Visibility;
    retention: RetentionInfo;
    retentionVisibility: Visibility;
    usage: string;
    usageVisibility: Visibility;
    purposes: ProcessingPurpose[];
    purposesVisibility: Visibility;
    containsSensitiveData: boolean;
    containsMedicalData: boolean;
    dataSensitivityVisibility: Visibility;
    dataController: Controller;
    dataControllerVisibility: Visibility;
    thirdParties: { name: string, value: string }[];
    thirdPartiesVisibility: Visibility;
    refusable: boolean;
}

export enum PreferenceValueType {
    TOGGLE = 'TOGGLE',
    CHECKBOXES = 'CHECKBOXES',
    RADIO_BUTTONS = 'RADIO_BUTTONS',
    LIST_SINGLE = 'LIST_SINGLE',
    LIST_MULTI = 'LIST_MULTI',
    FREE_TEXT = 'FREE_TEXT'
}

export const PREFERENCE_VALUE_TYPES: PreferenceValueType[] = Object.keys(PreferenceValueType) as PreferenceValueType[];

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

export interface Objection extends ModelData {
    type: 'objection';
    title: string;
    description: string;
    objectByDefault: boolean;
}

export interface Splitter extends ModelData {
    type: 'splitter';
    title: string;
    description: string;
}

export interface Conditions extends ModelData {
    type: 'conditions';
    title: string;
    body: string;
    refusable?: boolean;
}

export enum LogoPosition {
    LEFT = 'LEFT',
    CENTER = 'CENTER',
    RIGHT = 'RIGHT'
}

export const LOGO_POSITIONS = Object.keys(LogoPosition);

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

export interface Notice extends ModelData {
    type: 'notice';
    description: string;
    associatedProcessing: string[];
}

export interface FormLayout extends ModelData {
    type: 'layout';
    info: string;
    blocs: FormLayoutBloc[];
    hiddenBlocs?: string[];
    defaultNotification?: string;
    orientation?: FormLayoutOrientation;
    blocDetailText?: string;
    acceptAllText?: string;
    submitText?: string;
    cancelText?: string;
    existingElementsVisible?: boolean;
    validityVisible?: boolean;
    includeIFrameResizer?: boolean;
    acceptAllVisible?: boolean;
    cancelVisible?: boolean;
    footerOnTop?: boolean;
}

export interface FormLayoutBloc {
    parent: FormLayoutElement;
    children?: FormLayoutElement[];
}

export interface FormLayoutElement {
    location?: string;
    key: string;
}

export enum FormLayoutOrientation {
    HORIZONTAL = 'HORIZONTAL',
    VERTICAL = 'VERTICAL'
}

export const CONSENT_FORM_ORIENTATIONS: FormLayoutOrientation[] = Object.keys(FormLayoutOrientation) as FormLayoutOrientation[];

export enum ConsentOrigin {
    WEBFORM = 'WEBFORM',
    OPERATOR = 'OPERATOR',
    USER = 'USER'
}

export const CONSENT_ORIGIN: ConsentOrigin[] = Object.keys(ConsentOrigin) as ConsentOrigin[];

export type ModelDataType = 'information' | 'processing' | 'conditions' | 'theme' | 'email' | 'preference' | 'layout' | 'notice' | 'objection' | 'splitter';

export enum PreviewType {
    FORM = 'FORM',
    RECEIPT = 'RECEIPT',
    EMAIL = 'EMAIL'
}

export const PREVIEW_TYPES = Object.keys(PreviewType);

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
    shared?: boolean[];
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
    shared?: boolean;
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
    data: { [language: string]: T };
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
    shared: boolean;
}

export interface ModelEntryDto extends ModelEntryDtoPartial {
    versions: ModelVersionDtoLight[];
}

export interface ModelEntryExportDto extends ModelEntryDtoPartial {
    versions: ModelVersionDto[];
}
