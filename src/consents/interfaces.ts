import { ConsentOrigin, FormLayout, PeerContext } from '../models';

export enum Confirmation {
    NONE = 'NONE',
    FORM_CODE = 'FORM_CODE',
    EMAIL_CODE = 'EMAIL_CODE',
    SMS_CODE = 'SMS_CODE',
    SIGNATURE = 'SIGNATURE',
    AUDIO_RECORD = 'AUDIO_RECORD',
    VIDEO_RECORD = 'VIDEO_RECORD',
    DIGITAL_SIGNATURE = 'DIGITAL_SIGNATURE'
}

export const CONFIRMATION_TYPES: Confirmation[] = Object.keys(Confirmation) as Confirmation[];

export enum SubjectInfosKeys {
    EMAIL_KEY = 'emailAddress',
    PHONE_KEY = 'phoneNumber'
}

export enum ConfirmationConfigKeys {
    SENDER_EMAIL_KEY = 'senderEmail',
    SENDER_PHONE_KEY = 'senderPhone'
}

/**
 * The ConsentContext is used to generate a token. This token is used:
 * - To generate a form in a browser for the user to fill
 * - To collect the consent of a user through the API
 */
export interface ConsentContext {
    /** The identifier of the profile the processing will be linked to */
    subject: string;

    /** The identifier of the object the processing will be linked to */
    object?: string;

    /** If the form is not in iframe mode, the user will be redirected to this callback once the process is over */
    callback?: string;

    /** If the IFrame mode is set, set the allowed origin for the parent window domain */
    iframeOrigin?: string;

    /** The language of the form. All models must have a valid version of this language for the form to display properly */
    language: string;

    /** Specifies the consent origin (what was the collecting support). Either:
     * webform (the user used a form)
     * or operator (a competent authority filled the form)
     */
    origin?: ConsentOrigin;

    /** (optional) The ISO 8601 duration for the validity of the record.  */
    validity?: string;

    /** Specifies whether the consent can be updated afterwards. */
    updatable?: boolean;

    /** Silent Consent collect disable fetching existing values for the declared subject */
    silent?: boolean;

    /** Any relevant informations about the subject that will be persisted in the receipt */
    subjectInfos?: { [key: string]: string };

    /** Any other relevant informations about the context that will be persisted in the record */
    attributes?: { [key: string]: string };

    /** (readonly) A transaction identifier for that consent.  */
    transaction?: string;

    /** A transaction identifier for the leading transaction.  */
    leadingTransaction?: TransactionIdentifier;

    /** The identifier of the user who used the form */
    author?: string;

    /** The FormLayout Data to use ; if layout key is provided, layoutData will be ignored.*/
    layoutData?: FormLayout;

    /** The reference to the 'formlayout' model that will be used.*/
    layout?: string;

    /** The type of user confirmation needed, default is NONE */
    confirmation?: Confirmation;

    /** Additional information needed for user confirmation */
    confirmationConfig?: { [key: string]: string };

    /** The reference to the 'theme' that will apply */
    theme?: string;

    /** The reference to the 'email' model for notification (this overrides the layout notification model) */
    notification?: string;

    /** Whether to send an invitation email upon transaction creation */
    sendInvitation?: boolean;

    /** The specific contexts parameters for peer transactions */
    peerContexts?: PeerContext[];
}

export interface ConsentTransaction {
    id: string;
    subject: string;
    state: string;
    leader: string;
    followers: string[];
    context: ConsentContext;
    token: string;
    task: string;
    receipt: string;
    breed: string;
    cpp: string;
}

export interface TransactionIdentifier {
    location: string;
    id: string;
}
