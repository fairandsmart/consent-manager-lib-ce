import { Observable } from 'rxjs';
import { ClientConfigDto, SupportInfoDto } from './interfaces';
import { RightConsents } from '../api';
import { RCApiOptions } from '../http';

export function getInstance(options?: RCApiOptions): Observable<SupportInfoDto> {
    return RightConsents.http<SupportInfoDto>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/system`,
        options
    });
}

export function getSupportInfo(options?: RCApiOptions): Observable<SupportInfoDto> {
    return RightConsents.http<SupportInfoDto>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/system/support/infos`,
        options
    });
}

export function getClientConfig(options?: RCApiOptions): Observable<ClientConfigDto> {
    return RightConsents.http<ClientConfigDto>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/system/config`,
        options
    });
}
