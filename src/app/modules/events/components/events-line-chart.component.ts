import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ISelectedStatistics} from '../../../shared/types/ISelectedStatistics';

@Component({
    selector: 'events-line-chart', 
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
export class EventsLineChartComponent {
    @Input() set initEventsLineChart(_statistics) {
        this.isChartReady = false;
        if(_statistics) {
            const {previous, current, next} = _statistics;
            let series = []; 
            if(previous) {
               let prev = {
                   name: 'previous',
                   data: [previous['price']]
               }
               series.push(prev);
            }
            if(current) {
                let curr = {
                    name: 'current',
                    data: [current['price']]
                }
                series.push(curr);
             }
            if(next) {
                let nxt = {
                    name: 'next',
                    data: [next['price']]
                }
                series.push(nxt);
             }

            //  this.chartOptions['series'] = series;
            //  console.log(this.chartOptions['series'])
            //  this.isChartReady = true;
        }
    }

    isChartReady = false;
    highcharts = Highcharts;
    chartOptions = {   
      chart: {
          type: 'spline'
      },
      title: 'line chart',
      subtitle: '',
      xAxis: {
          categories: ['previous', 'current', 'next']
      },
      yAxis: {
          title: {
              text: 'price'
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