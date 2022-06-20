import { RCApiOptions } from '../http';
import { Observable } from 'rxjs';
import { Peer } from './interfaces';
import { RightConsents } from '../api';

export function listPeers(options?: RCApiOptions): Observable<Peer[]> {
    return RightConsents.http<Peer[]>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/peers`,
        options
    });
}

export function createPeer(peer: Peer, options?: RCApiOptions): Observable<Peer> {
    return RightConsents.http<Peer>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/peers`,
        body: peer,
        options
    });
}

export function getPeer(id: string, options?: RCApiOptions): Observable<void> {
    return RightConsents.http<void>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/peers/${id}`,
        options
    });
}

export function updatePeer(id: string, peer: Peer, options?: RCApiOptions): Observable<Peer> {
    return RightConsents.http<Peer>({
        method: 'PUT',
        url: `${RightConsents.config.apiRoot}/peers/${id}`,
        body: peer,
        options
    });
}

export function deletePeer(id: string, options?: RCApiOptions): Observable<void> {
    return RightConsents.http<void>({
        method: 'DELETE',
        url: `${RightConsents.config.apiRoot}/peers/${id}`,
        options
    });
}
