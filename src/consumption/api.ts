import { Observable } from "rxjs";
import { RightConsents } from "../api";
import { RCApiOptions } from "../http";
import { StatsBag } from "../statistics";

export function getConsumption(after: number, before: number, options?: RCApiOptions): Observable<StatsBag> {
    return RightConsents.http<StatsBag>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/consumption`,
        params: {
            after: after,
            before: before
        },
        headers: {
        'Content-Type': 'application/json',
        },
        options
    });
}

export function exportConsumptionCsv(after: number, before: number, options?: RCApiOptions): Observable<string> {
    return RightConsents.http<string>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/consumption/export`,
        params: {
            after: after,
            before: before
        },
        headers: {
            Accept: 'text/csv'
        },
        responseType: 'text',
        options
    });
}
