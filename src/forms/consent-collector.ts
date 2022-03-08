import { ConsentCollectorCallback, ConsentCollectorConfig } from './interfaces';
import { RightConsents } from '../api';
import { iframeResizer } from 'iframe-resizer';

export class ConsentCollector {
    constructor(private config: ConsentCollectorConfig) {}

    overrideSubject(newSubject: string) {
        this.config.consentContext.subject = newSubject;
        this.config.consentContext.author = newSubject;
    }

    collect(callback?: ConsentCollectorCallback): Promise<void> {
        return new Promise((resolve, reject) => {
            this.getTokenFromBroker()
                .toPromise()
                .then((response) => {
                    if (!response?.token) {
                        throw new Error('Could not retrieve token');
                    }
                    switch (this.config.mode) {
                        case 'embed':
                            return this.replaceElement(response.location);
                        case 'iframe':
                            return this.openInIframe(response.location);
                        case 'window':
                        default:
                            return this.openInNewWindow(response.location);
                    }
                })
                .then(() => {
                    if (callback) {
                        callback();
                    }
                    resolve();
                })
                .catch((err) => reject(err));
        });
    }

    private getTokenFromBroker() {
        return RightConsents.http<{ token: string, location: string }>({
            method: 'POST',
            url: this.config.tokenBrokerEndpoint,
            body: this.config.consentContext,
            options: {
                noAuth: true
            },
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    private openInNewWindow(location: string): Promise<void> | void {
        return new Promise<void>((resolve) => {
            const newWindow = window.open(location, 'com_fs_window_consentCollect', 'menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=900px,height=600px');
            if (!newWindow) {
                throw new Error('Could not open window');
            }
            const interval = setInterval(() => {
                if (newWindow.closed) {
                    resolve();
                    clearInterval(interval);
                }
            }, 1500);
        });
    }

    private openInIframe(location: string, callback?: ConsentCollectorCallback): Promise<void> | void {
        return new Promise((resolve) => {
            let parentEl;
            if (this.config.iframeParentElementId) {
                parentEl = document.getElementById(this.config.iframeParentElementId);
            }
            if (!parentEl) {
                parentEl = document.body;
            }
            const el = document.createElement('iframe');
            el.style.position = 'absolute';
            el.style.width = '100%';
            el.style.height = '100%';
            el.setAttribute('src', location);
            parentEl.appendChild(el);
            iframeResizer({
                log: false,
                checkOrigin: false,
                closedCallback: (iframeId) => {
                    resolve();
                },
            }, el);
        });
    }

    private replaceElement(token: string, callback?: ConsentCollectorCallback): Promise<void> | void {
        return new Promise((resolve) => resolve());
    }
}
