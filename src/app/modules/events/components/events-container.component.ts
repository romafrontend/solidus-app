import {Component, ChangeDetectionStrategy} from '@angular/core';
import events from '../../../../assets/json/events.json';
import {IEvent} from '../../../shared/types/IEvent';

@Component({
    selector: 'events-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
      .events_container {
          display: flex;
          flex-direction: row;
          position: absolute;
          top: 0px;
          bottom: 0px;
          left: 0px;
          right: 0px;
          overflow-y: auto;
      }

      events-dataview {
          width: 468px;
          min-height: 50%;
      }

      events-statistics {
          width: calc(100% - 468px);
      }

      @media only screen and (max-width: 900px) {
        .events_container {
          flex-direction: column;
        }

        events-statistics {
          width: 100%;
      }
      }
    `],
    template: `
      <div class="events_container">
        <events-dataview [initEventsDataview]="eventsList"></events-dataview>
        <events-statistics></events-statistics>
      </div>
    `
})
export class EventsContainerComponent {
    eventsList: IEvent[] = events;
}