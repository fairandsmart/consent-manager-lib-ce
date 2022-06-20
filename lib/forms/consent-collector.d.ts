import { ConsentCollectorCallback, ConsentCollectorConfig } from './interfaces';
import { ConsentContext } from '../consents';
export declare class ConsentCollector {
    private config;
    constructor(config: ConsentCollectorConfig);
    getContext(): ConsentContext;
    overrideSubject(newSubject: string): void;
    collect(callback?: ConsentCollectorCallback): Promise<void>;
    private getTokenFromBroker;
    private openInNewWindow;
    private openInIframe;
    private replaceElement;
}
