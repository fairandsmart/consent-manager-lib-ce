export interface CreatePeerDto {
    name: string;
    url: string;
    apiKey: string;
    withCounterPart: boolean;
}

export interface Peer {
    id: string;
    name: string;
    url: string;
    apiKey: string;
}
