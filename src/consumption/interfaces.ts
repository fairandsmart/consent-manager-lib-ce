export interface ConsumptionFilter {
    createAfter: string;
    createBefore: string;
    scale?: ConsumptionScale;
    startDay?: number;
}


export enum ConsumptionScale {
    YEARS = 'YEARS',
    MONTHS = 'MONTHS',
    WEEKS = 'WEEKS',
    DAYS = 'DAYS'
}