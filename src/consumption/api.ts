import { Observable } from "rxjs";
import { RightConsents } from "../api";
import { RCApiOptions } from "../http";
import { StatsBag } from "../statistics";
import { ConsumptionFilter } from "./interfaces";

export function getConsumption(filter: ConsumptionFilter, options?: RCApiOptions): Observable<StatsBag> {
    return RightConsents.http<StatsBag>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/consumption`,
        params: filter,
        headers: {
        'Content-Type': 'application/json',
        },
        options
    });
}

export function exportConsumptionCsv(filter: ConsumptionFilter, options?: RCApiOptions): Observable<string> {
    return RightConsents.http<string>({
        method: 'GET',
        url: `${RightConsents.config.apiRoot}/consumption/export`,
        params: filter,
        headers: {
            Accept: 'text/csv'
        },
        responseType: 'text',
        options
    });
}
