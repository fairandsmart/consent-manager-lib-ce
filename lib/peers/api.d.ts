import { RCApiOptions } from '../http';
import { Observable } from 'rxjs';
import { CreatePeerDto, Peer } from './interfaces';
export declare function listPeers(options?: RCApiOptions): Observable<Peer[]>;
export declare function createPeer(peerDto: CreatePeerDto, options?: RCApiOptions): Observable<Peer>;
export declare function getPeer(id: string, options?: RCApiOptions): Observable<void>;
export declare function updatePeer(id: string, peer: Peer, options?: RCApiOptions): Observable<Peer>;
export declare function deletePeer(id: string, options?: RCApiOptions): Observable<void>;
