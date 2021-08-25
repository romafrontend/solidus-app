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
      }

      events-dataview {
          flex-grow: 1;
      }

      event-properties {
          flex-grow: 1;
      }
    `],
    template: `
      <div class="events_container">
        <events-dataview [initEventsDataview]="eventsList"></events-dataview>
        <event-properties></event-properties>
      </div>
    `
})
export class EventsContainerComponent {
    eventsList: IEvent[] = events;

    constructor() {}
}