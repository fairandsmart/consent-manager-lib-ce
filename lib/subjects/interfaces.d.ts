export interface SubjectDto {
    id: string;
    name: string;
    emailAddress: string;
    creationTimestamp: number;
    defaultLanguage: string;
    supersededBy: string;
    superseded: string[];
}
