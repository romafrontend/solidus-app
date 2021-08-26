import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {IEvent} from '../../../shared/types/IEvent';

@Component({
    selector: 'event-properties',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
        table, th, td {
            border:1px solid black;
        }

        td {
            padding: 4px 8px;
            width: 30%;
        }

        .properties_container {
            display: flex;
            flex-direction: column;
            padding: 10px;
            height: 140px;
        }
    `],
    template: `
      <div class="properties_container">
        <h3>Current selected event properties</h3>
        <table style="width:100%">
            <tr>
                <th *ngFor="let h of tableData['header']">{{h}}</th>
            </tr>
            <tr>
                <td *ngFor="let b of tableData['body']">{{b}}</td>
            </tr>
        </table>
      </div>
    `
})
export class EventPropertiesComponent {
    @Input() set initEventProperties(_event: IEvent) {
      if(_event) {
          const {timestamp, price, status} = _event;
          this.tableData['header'] = ['timestamp', 'price', 'status'];
          this.tableData['body'] = [timestamp, price, status];
      }
    }

    tableData = {
        header: [],
        body: []
    };
}