import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AgGridModule} from 'ag-grid-angular';
import {HighchartsChartModule} from 'highcharts-angular';

import {eventsRoutes} from './events.routing';

import {EventsService} from './services/events.service';

import {EventsContainerComponent} from './components/events-container.component';
import {EventsDataviewComponent} from './components/events-dataview.component';
import {EventsStatisticsComponent} from './components/events-statistics.component';
import {EventPropertiesComponent} from './components/event-properties.component';
import {EventsChartsComponent} from './components/events-charts.component';
import {EventsLineChartComponent} from './components/events-line-chart.component';
import {EventsColumnChartComponent} from './components/events-column-chart.component';

@NgModule({
    declarations: [EventsContainerComponent, EventsDataviewComponent, EventsStatisticsComponent, 
        EventPropertiesComponent, EventsChartsComponent, EventsLineChartComponent, EventsColumnChartComponent],
    imports: [CommonModule, RouterModule.forChild(eventsRoutes), AgGridModule.withComponents([]), HighchartsChartModule],
    providers: [EventsService]
})
export class EventsModule {}