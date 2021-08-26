import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { _ } from 'ag-grid-community';
import {EventsService} from '../services/events.service';

@Component({
    selector: 'events-dataview',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
      .grid_container {
          width: 100%;
          height: 100%;
      }
    `],
    template: `
      <ag-grid-angular class="ag-theme-alpine grid_container" 
                       [gridOptions]="gridOptions"
                       [rowData]="rowData" 
                       [columnDefs]="columnDefs"></ag-grid-angular>
    `
})
export class EventsDataviewComponent {
  @Input() set initEventsDataview(_data) {
    this.initDataView(_data);
  }

  gridOptions: any;
  gridApi: any;
  columnDefs = [];
  rowData = [];
  defaultSelectedRowIndex = 0;

  constructor(private eventsService: EventsService) {}

  initDataView(_data) {
      this.gridOptions = {
          rowSelection: 'single',
          onGridReady: event => {
            this.gridApi = event.api;
            const rowNode = event.api.getRowNode(this.defaultSelectedRowIndex);
            rowNode.setSelected(true);
          },
          onRowSelected: event => {
            if(event.node.selected) {
                this.displaySelectedProperties(event.rowIndex);  
            }
          },
          navigateToNextCell: (params) => {
            const suggestedNextCell = params.nextCellPosition;
          
            const KEY_UP = 38;
            const KEY_DOWN = 40;
          
            const noUpOrDownKeyPressed = params.key !== KEY_DOWN && params.key !== KEY_UP;
            if (noUpOrDownKeyPressed) {
              return suggestedNextCell;
            }
          
            this.gridApi.forEachNode(function (node) {
              if (node.rowIndex === suggestedNextCell.rowIndex) {
                node.setSelected(true);
              }
            });
          
            return suggestedNextCell;
          }
      }

      this.columnDefs = [
          {field: 'timestamp', sortable: true, filter: false, width: 150},
          {field: 'price', sortable: true, filter: false, width: 150},
          {field: 'status', sortable: true, filter: true, width: 150}
      ];

      this.rowData = _data;
  }

  displaySelectedProperties(_index) {
    let updatedEventsHistoryStatistics = {
      previous: this.rowData[_index - 1],
      current: this.rowData[_index],
      next: this.rowData[_index + 1]
    }

    this.eventsService.setEventsHistoryStatistics(updatedEventsHistoryStatistics);
    this.eventsService.setCurrentSelectedEvent(this.rowData[_index]);
  }
}