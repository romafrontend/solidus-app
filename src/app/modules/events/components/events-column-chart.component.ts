import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ISelectedStatistics} from '../../../shared/types/ISelectedStatistics';

@Component({
    selector: 'events-column-chart', 
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
    
    `],
    template: `
        <highcharts-chart
            [Highcharts] = "highcharts" 
            [options] = "chartOptions" 
            style = "width: 100%; height: 100%; display: block;">
        </highcharts-chart>
    `
})
export class EventsColumnChartComponent {
    @Input() set initEventsColumnChart(_statistics: ISelectedStatistics) {
      if(_statistics) {
        console.log(_statistics); 
      }
    }

    highcharts = Highcharts;
    chartOptions = {   
      chart: {
          type: 'column'
      },
      title: 'line chart',
      subtitle: '',
      xAxis: {
          categories: ['previous', 'current', 'next']
      },
      yAxis: {
          title: {
              text: 'timestamps'
          }
      },
      tooltip: {
          valueSiffix: ''
      },
      series: [
          {
              name: 'previous',
              data: [7.0, 6.9, 9.5]
          },
          {
              name: 'current',
              data: [-0.2, 0.8, 5.7]
          },
          {
              name: 'next',
              data: [-0.9, 0.6, 3.5]
          }
      ] 
    }
}