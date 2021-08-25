import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IEvent} from '../../../shared/types/IEvent';

@Injectable()
export class EventsService {
    private selectedEvent: BehaviorSubject<IEvent> = new BehaviorSubject<IEvent>(null);

    constructor() {}

    get selectedEvent$(): Observable<IEvent> {
        return this.selectedEvent.asObservable();
    }

    setSelectedEvent(_event) {
        this.selectedEvent.next(_event);
    }
}