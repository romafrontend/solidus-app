export interface IEvent {
    price: string;
    snapshot: ISnapshot,
    status: string;
    timestamp: number;
}

export interface ISnapshot {
    ASK: string[],
    BID: string[]
}