import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs';
import {IEvent} from '../../../shared/types/IEvent';
import {EventsService} from '../services/events.service';

@Component({
    selector: 'events-statistics',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
      .statistics_container {
          display: flex;
          flex-direction: column;
      }
    `],
    template: `
      <div class="statistics_container">
        <event-properties [initEventProperties]="currentSelectedEvent$ | async"></event-properties>
        <events-charts [initEventsCharts]="eventsHistoryStatistics$ | async"></events-charts>
      </div>
    `
})
export class EventsStatisticsComponent {
    currentSelectedEvent$: Observable<IEvent>;
    eventsHistoryStatistics$: Observable<any>;

    constructor(private eventsService: EventsService) {
        this.currentSelectedEvent$ = eventsService.currentSelectedEvent$;
        this.eventsHistoryStatistics$ = eventsService.eventsHistoryStatistics$;
    }
}