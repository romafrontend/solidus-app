import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {ISelectedStatistics} from '../../../shared/types/ISelectedStatistics';

@Component({
    selector: 'events-charts', 
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
      .events_charts_container {
          display: flex;
          flex-direction: row;
      }

      events-line-chart, events-column-chart {
        width: 48%;
      }
    `],
    template: `
      <div class="events_charts_container">
          <events-column-chart [initEventsColumnChart]="eventsHistoryStatistics"></events-column-chart>
          <events-line-chart [initEventsLineChart]="eventsHistoryStatistics"></events-line-chart>
      </div>
    `
})
export class EventsChartsComponent {
    @Input() set initEventsCharts(_statistics: ISelectedStatistics) {
      this.eventsHistoryStatistics = _statistics;
    }

    eventsHistoryStatistics: ISelectedStatistics;
}