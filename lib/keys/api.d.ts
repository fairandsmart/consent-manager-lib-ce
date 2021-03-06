import { Observable } from 'rxjs';
import { Key } from './interfaces';
import { RCApiOptions } from '../http';
export declare function listKeys(options?: RCApiOptions): Observable<Key[]>;
export declare function createKey(key: Key, options?: RCApiOptions): Observable<Key>;
export declare function deleteKey(id: string, options?: RCApiOptions): Observable<void>;
