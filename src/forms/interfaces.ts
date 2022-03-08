import { ConsentContext } from '../consents';

export interface ConsentCollectorConfig {
    /** The full URL endpoint where to find the service that will grant the consent token */
    tokenBrokerEndpoint: string;

    /** The context of the consent to collect */
    consentContext: ConsentContext;
    lang: string;

    mode: 'iframe' | 'embed' | 'window';
    embedElementId?: string;
    iframeParentElementId?: string;
}

export type ConsentCollectorCallback = () => void;
