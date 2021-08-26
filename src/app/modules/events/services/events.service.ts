import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IEvent} from '../../../shared/types/IEvent';
import {ISelectedStatistics} from '../../../shared/types/ISelectedStatistics';

@Injectable()
export class EventsService {
    private currentSelectedEvent: BehaviorSubject<IEvent> = new BehaviorSubject<IEvent>(null);
    private eventsHistoryStatistics: BehaviorSubject<ISelectedStatistics> = new BehaviorSubject<ISelectedStatistics>(null); 

    constructor() {}

    get currentSelectedEvent$(): Observable<IEvent> {
        return this.currentSelectedEvent.asObservable();
    }

    setCurrentSelectedEvent(_event) {
        this.currentSelectedEvent.next(_event);
    }

    getEventsHistoryStatisticsValue(): ISelectedStatistics {
      return this.eventsHistoryStatistics.value;
    }

    get eventsHistoryStatistics$(): Observable<ISelectedStatistics> {
        return this.eventsHistoryStatistics.asObservable();
    }

    setEventsHistoryStatistics(_statistics) {
        this.eventsHistoryStatistics.next(_statistics);
    }
}