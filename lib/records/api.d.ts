import { Observable } from 'rxjs';
import { ExtractionFilter, ExtractionResultDto, RecordFilter, RecordsMap } from './interfaces';
import { RCApiOptions } from '../http';
import { CollectionPage } from '../common';
export declare function listRecords(filter: RecordFilter, options?: RCApiOptions): Observable<RecordsMap>;
export declare function extractRecords(filter: ExtractionFilter, options?: RCApiOptions): Observable<CollectionPage<ExtractionResultDto>>;
export declare function extractRecordsCsv(filter: ExtractionFilter, options?: RCApiOptions): Observable<string>;
