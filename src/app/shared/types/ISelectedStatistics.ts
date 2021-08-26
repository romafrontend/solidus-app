import {IEvent} from './IEvent';

export interface ISelectedStatistics {
    previous: IEvent;
    current: IEvent;
    next: IEvent;
}