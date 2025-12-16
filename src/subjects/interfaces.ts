export interface SubjectDto {
    id: string;
    name: string;
    emailAddress: string;
    creationTimestamp: number;
    defaultLanguage: string;
    supersededBy: string;
    superseded: string[];
}

export interface SubjectFilter {
    name?: string;
    emailAddress?: string;
    page?: number;
    size?: number;
    order?: string;
    direction?: SortDirection;
}