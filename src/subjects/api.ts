import { Observable } from 'rxjs';
import { RightConsents } from '../api';
import { SubjectDto, SubjectFilter } from './interfaces';
import { RecordsMap } from '../records';
import { RCApiOptions } from '../http';
import { CollectionPage } from '../common';

export function listSubjects(name: string, options?: RCApiOptions): Observable<SubjectDto[]> {
    return RightConsents.http<SubjectDto[]>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/subjects`,
        params: { name },
        options
    });
}

export function getSubjects(filter: SubjectFilter, options?: RCApiOptions): Observable<CollectionPage<SubjectDto>> {
    return RightConsents.http<CollectionPage<SubjectDto>>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/subjects/paged`,
        params: filter ,
        options
    });
}

export function getSubject(name: string, options?: RCApiOptions): Observable<SubjectDto> {
    return RightConsents.http<SubjectDto>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/subjects/${name}`,
        options
    });
}

export function createSubject(subject: SubjectDto, options?: RCApiOptions): Observable<SubjectDto> {
    return RightConsents.http<SubjectDto>({
        method: 'POST',
        url: `${RightConsents.config.apiRoot}/subjects`,
        body: subject,
        options
    });
}

export function updateSubject(subject: SubjectDto, options?: RCApiOptions): Observable<SubjectDto> {
    return RightConsents.http<SubjectDto>({
        method: 'PUT',
        url: `${RightConsents.config.apiRoot}/subjects/${subject.id}`,
        body: subject,
        options
    });
}

export function listSubjectRecords(subject: string, options?: RCApiOptions): Observable<RecordsMap> {
    return RightConsents.http<RecordsMap>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/subjects/${subject}/records`,
        options
    });
}

export function getAliases(subject: string, options?: RCApiOptions): Observable<SubjectDto[]> {
    return RightConsents.http<SubjectDto[]>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/subjects/${subject}/aliases`,
        options
    });
}

export function setAlias(subject: string, supersede: string, options?: RCApiOptions): Observable<SubjectDto> {
    return RightConsents.http<SubjectDto>({
        method: 'PUT',
        url: `${RightConsents.config.apiRoot}/subjects/${subject}/aliases`,
        params: { supersede} ,
        options
    });
}

export function removeAlias(alias: string, options?: RCApiOptions): Observable<SubjectDto> {
    return RightConsents.http<SubjectDto>({
        method: 'DELETE',
        url: `${RightConsents.config.apiRoot}/subjects/${alias}/aliases`,
        options
    });
}
