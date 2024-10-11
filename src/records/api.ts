import { Observable } from 'rxjs';
import { RightConsents } from '../api';
import { ExtractionFilter, ExtractionResultDto, RecordFilter, RecordsMap, RecordDto} from './interfaces';
import { RCApiOptions } from '../http';
import { CollectionPage } from '../common';

export function listRecords(filter: RecordFilter, options?: RCApiOptions): Observable<RecordsMap> {
    return RightConsents.http<RecordsMap>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/records`,
        params: filter,
        options
    });
}

export function extractRecords(filter: ExtractionFilter, options?: RCApiOptions):
    Observable<CollectionPage<ExtractionResultDto>> {
    return RightConsents.http<CollectionPage<ExtractionResultDto>>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/records/extraction`,
        body: filter,
        options
    });
}

export function extractRecordsCsv(filter: ExtractionFilter, options?: RCApiOptions): Observable<string> {
    return RightConsents.http<string>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/records/extraction`,
        body: filter,
        headers: {
            Accept: 'text/csv'
        },
        responseType: 'text',
        options
    });
}

export function exportRecords(filter: RecordFilter, options?: RCApiOptions):
    Observable<CollectionPage<RecordDto>> {
    return RightConsents.http<CollectionPage<RecordDto>>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/records/export`,
        body: filter,
        options
    });
}

export function exportRecordsCsv(filter: ExtractionFilter, options?: RCApiOptions): Observable<string> {
    return RightConsents.http<string>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/records/export`,
        body: filter,
        headers: {
            Accept: 'text/csv'
        },
        responseType: 'text',
        options
    });
}

